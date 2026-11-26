import { useEffect, useState } from 'react';
import { Box, Check, GitBranch, Rocket, ScanSearch, ShieldCheck } from 'lucide-react';

const stages = [
  { id: 'about', label: 'Source', section: 'About', icon: GitBranch },
  { id: 'portfolio', label: 'Build', section: 'Projects', icon: Box },
  { id: 'experience', label: 'Test', section: 'Experience', icon: ShieldCheck },
  { id: 'skills', label: 'Audit', section: 'Skills and credentials', icon: ScanSearch },
  { id: 'contact', label: 'Deploy', section: 'Contact', icon: Rocket },
];

export function PipelineProgress() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = [...stages].reverse().map(({ id }) => document.getElementById(id));
    let frame = 0;

    function update() {
      frame = 0;
      const readingLine = window.innerHeight * 0.36;
      const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight;
      const reverseIndex = sections.findIndex((section) => section && section.getBoundingClientRect().top <= readingLine);
      setActive(atBottom ? stages.length - 1 : reverseIndex < 0 ? 0 : sections.length - 1 - reverseIndex);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <nav className="pipeline" aria-label="Portfolio pipeline">
      <p className="pipeline-heading">Pipeline <span>{active + 1}/{stages.length}</span></p>
      <ol className="pipeline-stages">
        {stages.map(({ id, label, section, icon: Icon }, index) => {
          const CurrentIcon = index < active ? Check : Icon;
          return (
            <li key={id} className={index < active ? 'pipeline-complete' : undefined}>
              <a
                href={`#${id}`}
                aria-current={index === active ? 'step' : undefined}
                aria-label={`${label} · ${section}`}
              >
                <span className="pipeline-node"><CurrentIcon size={16} aria-hidden="true" /></span>
                <span className="pipeline-label">{label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
