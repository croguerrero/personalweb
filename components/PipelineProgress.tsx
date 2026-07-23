import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GitBranch, Box, Rocket, ShieldCheck, ScanSearch, Check } from 'lucide-react';

const stages = [
  { id: 'about', label: 'SOURCE', icon: GitBranch },
  { id: 'experience', label: 'BUILD', icon: Box },
  { id: 'skills', label: 'TEST', icon: ShieldCheck },
  { id: 'certifications', label: 'AUDIT', icon: ScanSearch },
  { id: 'portfolio', label: 'DEPLOY', icon: Rocket },
];

const ROW_H = 104; // px height of each stage row

export const PipelineProgress: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('about');
  const reduce = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStage(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: 0.2 }
    );

    stages.forEach((stage) => {
      const element = document.getElementById(stage.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = stages.findIndex((s) => s.id === activeStage);
  const isFinished = activeIndex === stages.length - 1;

  return (
    <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col pointer-events-none">
      {/* Header chip */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute -top-14 right-0 flex items-center gap-2 bg-slate-900/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      >
        <span className="relative flex h-2 w-2">
          {!reduce && (
            <span className={`absolute inline-flex h-full w-full rounded-full ${isFinished ? 'bg-emerald-400' : 'bg-sky-400'} opacity-70 animate-ping`} />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isFinished ? 'bg-emerald-400' : 'bg-sky-400'}`} />
        </span>
        <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-300">
          {isFinished ? 'DEPLOYED' : 'PIPELINE'}
        </span>
        <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 tabular-nums">
          {String(activeIndex + 1).padStart(2, '0')}<span className="text-slate-700">/</span>{String(stages.length).padStart(2, '0')}
        </span>
      </motion.div>

      <div className="relative flex flex-col items-end">
        {/* Ambient energy beam behind the rail */}
        <div
          className="absolute right-[15px] top-2 bottom-2 w-[30px] -z-20 blur-2xl opacity-60"
          style={{
            background:
              'linear-gradient(to bottom, rgba(56,189,248,0.35), rgba(34,211,153,0.25), rgba(56,189,248,0.05))',
          }}
        />

        {stages.map((stage, idx) => {
          const isActive = idx === activeIndex;
          const isCompleted = idx < activeIndex;
          const Icon = stage.icon;
          const connectorLit = idx < activeIndex;      // segment fully flowing
          const connectorActive = idx === activeIndex && idx !== stages.length - 1; // processing next

          return (
            <div key={stage.id} className="relative flex items-center gap-4" style={{ height: ROW_H }}>

              {/* ---- Connector / pipe to next node ---- */}
              {idx !== stages.length - 1 && (
                <div className="absolute right-[19px] top-1/2 h-[104px] w-[3px] -z-10 rounded-full overflow-hidden bg-slate-800/80">
                  {/* flowing fill for completed segments */}
                  {connectorLit && (
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to bottom, #34d399, #22d3ee, #38bdf8, #34d399)',
                        backgroundSize: '100% 300%',
                      }}
                      initial={{ backgroundPositionY: '0%' }}
                      animate={reduce ? {} : { backgroundPositionY: ['0%', '300%'] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
                    />
                  )}

                  {/* data packets streaming down a completed pipe */}
                  {connectorLit && !reduce && [0, 1].map((p) => (
                    <motion.span
                      key={p}
                      className="absolute left-1/2 -translate-x-1/2 w-[3px] h-4 rounded-full bg-white/90 blur-[1px]"
                      initial={{ top: '-20%', opacity: 0 }}
                      animate={{ top: ['-20%', '120%'], opacity: [0, 1, 1, 0] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', delay: p * 0.7 }}
                    />
                  ))}

                  {/* active segment: single probe travelling toward the next stage */}
                  {connectorActive && !reduce && (
                    <motion.span
                      className="absolute left-1/2 -translate-x-1/2 w-[3px] h-5 rounded-full bg-sky-300 shadow-[0_0_10px_2px_rgba(56,189,248,0.9)]"
                      initial={{ top: '-25%', opacity: 0 }}
                      animate={{ top: ['-25%', '120%'], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeIn' }}
                    />
                  )}
                </div>
              )}

              {/* ---- Label ---- */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isActive ? 1 : isCompleted ? 0.55 : 0.3,
                  x: isActive ? 0 : 12,
                }}
                transition={{ duration: 0.4 }}
                className="flex items-center"
              >
                {isActive && (
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/70 backdrop-blur-md border border-sky-400/30 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-200">
                      {stage.label}
                    </span>
                  </span>
                )}
                {!isActive && (
                  <span className={`text-xs font-mono font-bold tracking-[0.2em] ${isCompleted ? 'text-emerald-400/80' : 'text-slate-600'}`}>
                    {stage.label}
                  </span>
                )}
              </motion.div>

              {/* ---- Node ---- */}
              <div className="relative z-10 flex items-center justify-center w-10 h-10">
                {/* expanding halos (active) */}
                {isActive && !reduce && [0, 1].map((i) => (
                  <motion.span
                    key={i}
                    className={`absolute inset-0 rounded-full border ${isFinished ? 'border-emerald-400/50' : 'border-sky-400/50'}`}
                    initial={{ scale: 0.7, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut', delay: i * 1.2 }}
                  />
                ))}

                {/* rotating conic energy ring (active) */}
                {isActive && (
                  <motion.div
                    className="absolute -inset-[3px] rounded-full"
                    style={{
                      background: isFinished
                        ? 'conic-gradient(from 0deg, transparent 0deg, #34d399 120deg, #6ee7b7 200deg, transparent 340deg)'
                        : 'conic-gradient(from 0deg, transparent 0deg, #38bdf8 110deg, #22d3ee 190deg, transparent 320deg)',
                    }}
                    animate={reduce ? {} : { rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                )}

                {/* static ring for completed */}
                {isCompleted && (
                  <div className="absolute -inset-[2px] rounded-full bg-emerald-500/20 blur-[2px]" />
                )}

                {/* node core */}
                <div
                  className={`
                    relative z-10 w-10 h-10 rounded-full flex items-center justify-center border transition-colors duration-500
                    ${isActive
                      ? isFinished
                        ? 'bg-slate-950 border-emerald-400/60 shadow-[0_0_22px_rgba(52,211,153,0.55)]'
                        : 'bg-slate-950 border-sky-400/60 shadow-[0_0_22px_rgba(56,189,248,0.55)]'
                      : isCompleted
                        ? 'bg-emerald-500/10 border-emerald-500/70'
                        : 'bg-slate-900 border-slate-700'
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check size={16} className="text-emerald-400" strokeWidth={3} />
                  ) : isActive ? (
                    <motion.span
                      animate={reduce ? {} : { scale: [1, 1.12, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Icon size={17} className={isFinished ? 'text-emerald-300' : 'text-sky-300'} strokeWidth={2.4} />
                    </motion.span>
                  ) : (
                    <Icon size={15} className="text-slate-600" />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
