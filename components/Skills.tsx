import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Workflow, Lock, Radio } from 'lucide-react';

const icons = [Cloud, Server, Code2, Workflow, Lock];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono mb-4">
            <Radio size={12} className="text-green-500 animate-pulse" />
            Monitoring Active
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            <span className="text-devops-accent">./</span> Technical Stack
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Orchestration, automation, and cloud-native technologies currently in rotation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-devops-accent/30 transition-all shadow-lg group relative overflow-hidden"
              >
                {/* Status Light */}
                <div className="absolute top-4 right-4 flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                </div>

                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-slate-800 rounded-lg text-slate-300 group-hover:text-devops-accent group-hover:bg-slate-800/80 transition-colors">
                        <Icon size={24} />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-100">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                        key={skill} 
                        className="px-2.5 py-1 text-xs font-medium bg-slate-950 text-slate-400 rounded border border-slate-800 group-hover:border-slate-700 group-hover:text-slate-200 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};