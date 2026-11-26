import { useEffect, useRef, useState } from 'react';
import { RotateCcw, SquareTerminal } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../constants';

const motionPreference = '(prefers-reduced-motion: reduce)';
const start = { step: 0, written: 0, run: 0 };

export function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia(motionPreference).matches);
  const [{ step, written, run }, setProgress] = useState(start);
  const done = reduced || step >= TERMINAL_COMMANDS.length;

  useEffect(() => {
    const media = window.matchMedia(motionPreference);
    function onChange(event: MediaQueryListEvent) {
      setReduced(event.matches);
    }
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!terminalRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(terminalRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || done) return;
    const length = TERMINAL_COMMANDS[step].output.length;
    const lineDone = written >= length;
    const delay = lineDone ? 420 : written === 0 ? 410 : 24;
    const timeout = window.setTimeout(() => {
      setProgress(lineDone
        ? { step: step + 1, written: 0, run }
        : { step, written: Math.min(written + 3, length), run });
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [started, done, step, written, run]);

  useEffect(() => {
    if (!started || reduced || !outputRef.current) return;
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [started, reduced, step, written, run]);

  return (
    <div className="deploy-terminal" ref={terminalRef} role="region" aria-label="Simulated terminal deployment">
      <div className="terminal-bar">
        <span className="terminal-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="terminal-title"><SquareTerminal size={15} aria-hidden="true" /> Deployment demo</span>
        {!reduced && (
          <button
            className="terminal-replay"
            type="button"
            aria-label="Replay deployment demo"
            title="Replay deployment demo"
            onClick={() => {
              setStarted(true);
              setProgress({ ...start, run: run + 1 });
            }}
          >
            <RotateCcw size={16} aria-hidden="true" />
          </button>
        )}
      </div>
      <div className="terminal-output" ref={outputRef} tabIndex={0} aria-label="Terminal output">
        {TERMINAL_COMMANDS.slice(0, done ? undefined : step + 1).map(({ command, output }, index) => (
          <div className="terminal-entry" key={command}>
            <div className="terminal-command"><span aria-hidden="true">$</span> <code>{command}</code></div>
            {done || index < step || written >= output.length
              ? <pre>{output}</pre>
              : <pre aria-hidden="true">{output.slice(0, written)}<span className="terminal-cursor" /></pre>}
          </div>
        ))}
        {done && <p className="terminal-ready" role="status">✓ System ready</p>}
      </div>
    </div>
  );
}
