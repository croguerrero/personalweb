import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Box, Rocket, ShieldCheck, Check, Loader2 } from 'lucide-react';

const stages = [
  { id: 'about', label: 'SOURCE', icon: GitBranch },
  { id: 'experience', label: 'BUILD', icon: Box },
  { id: 'skills', label: 'TEST', icon: ShieldCheck },
  { id: 'certifications', label: 'AUDIT', icon: ShieldCheck },
  { id: 'portfolio', label: 'DEPLOY', icon: Rocket },
];

export const PipelineProgress: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStage(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -50% 0px', // Trigger when section is near middle/top
        threshold: 0.2,
      }
    );

    stages.forEach((stage) => {
      const element = document.getElementById(stage.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Calculate index to know which stages are "passed"
  const activeIndex = stages.findIndex((s) => s.id === activeStage);

  return (
    <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-1 pointer-events-none">
      {/* Pipeline Header */}
      <div className="absolute -top-12 right-0 flex items-center gap-2 mb-4 bg-slate-900/80 backdrop-blur px-3 py-1 rounded border border-slate-700/50">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">PIPELINE RUNNING</span>
      </div>

      <div className="relative flex flex-col items-end">
        {stages.map((stage, idx) => {
          const isActive = idx === activeIndex;
          const isCompleted = idx < activeIndex;
          const Icon = stage.icon;

          return (
            <div key={stage.id} className="relative flex items-center gap-4 h-24">

              {/* Connector Line */}
              {idx !== stages.length - 1 && (
                <div className="absolute right-[19px] top-[50px] h-[50px] w-[2px] bg-slate-800 -z-10">
                  <motion.div
                    className="w-full bg-green-500"
                    initial={{ height: "0%" }}
                    animate={{ height: isCompleted ? "100%" : "0%" }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}

              {/* Label (Only visible on hover or active) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  x: isActive ? 0 : 20,
                  scale: isActive ? 1 : 0.9
                }}
                className={`text-xs font-mono font-bold tracking-widest ${isActive ? 'text-sky-400' : isCompleted ? 'text-green-500' : 'text-slate-600'
                  }`}
              >
                {stage.label}
              </motion.div>

              {/* Node Circle */}
              <div
                className={`
                  relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-500
                  ${isActive
                    ? 'bg-slate-900 border-sky-500 shadow-[0_0_15px_rgba(14,165,233,0.4)]'
                    : isCompleted
                      ? 'bg-green-500/10 border-green-500'
                      : 'bg-slate-900 border-slate-700'
                  }
                `}
              >
                {isCompleted ? (
                  <Check size={16} className="text-green-500" />
                ) : isActive ? (
                  idx === stages.length - 1 ? (
                    <Check size={16} className="text-sky-500" />
                  ) : (
                    <Loader2 size={18} className="text-sky-400 animate-spin" />
                  )
                ) : (
                  <Icon size={16} className="text-slate-600" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};