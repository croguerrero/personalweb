import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GitCommit, ArrowDown, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-24 relative bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <div className="p-3 bg-slate-900 rounded-xl mb-4 border border-slate-800">
                        <GitCommit className="text-devops-accent" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Deployment History
                    </h2>
                    <p className="text-slate-400">A timeline of delivered projects and infrastructure scaling.</p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Pipeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-slate-700 to-slate-800 transform -translate-x-1/2 md:translate-x-0"></div>

                    <div className="space-y-12">
                        {EXPERIENCE.map((job, idx) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-sky-500 z-10 transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                                    {idx === 0 ? (
                                        <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                                    ) : (
                                        <CheckCircle2 size={16} className="text-sky-500" />
                                    )}
                                </div>

                                {/* Content Card */}
                                <div className="w-full md:w-[calc(50%-2rem)] pl-20 md:pl-0">
                                    <div className="bg-[#111827] rounded-xl p-6 border border-slate-800 hover:border-sky-500/30 transition-all shadow-xl group">
                                        <div className="flex flex-col gap-1 mb-4">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                                                    {job.role}
                                                </h3>
                                                {idx === 0 && (
                                                    <span className="bg-green-500/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500/20 uppercase tracking-wide">
                                                        Active
                                                    </span>
                                                )}
                                            </div>
                                            <div className="text-slate-300 font-medium text-base">{job.company}</div>
                                            <div className="text-slate-500 text-xs font-mono mt-1 flex items-center gap-2">
                                                <Calendar size={12} />
                                                {job.period}
                                            </div>
                                        </div>

                                        <ul className="space-y-2 mb-4 text-slate-400 list-none text-sm">
                                            {job.description.slice(0, 4).map((desc, i) => (
                                                <li key={i} className="flex gap-2 items-start">
                                                    <span className="mt-1.5 w-1 h-1 bg-slate-600 rounded-full shrink-0 group-hover:bg-sky-500 transition-colors"></span>
                                                    <span className="leading-relaxed">{desc}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                                            {job.tech.slice(0, 5).map(t => (
                                                <span key={t} className="text-[10px] font-mono font-medium text-sky-300 bg-sky-900/20 px-2 py-1 rounded border border-sky-500/10">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space for alignment */}
                                <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};