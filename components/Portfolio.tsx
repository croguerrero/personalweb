import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FolderGit2, Radio } from 'lucide-react';

export const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-24 bg-[#0f172a] relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono mb-4">
                        <Radio size={12} className="text-green-500 animate-pulse" />
                        Deployment Active
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        <span className="text-green-500">./</span> Portfolio & Projects
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Infrastructure as Code, CI/CD pipelines, and cloud-native solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-green-500/30 transition-all shadow-lg group relative overflow-hidden"
                        >
                            {/* Status Light */}
                            <div className="absolute top-4 right-4 flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>

                            <div className="flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-slate-800 rounded-lg text-green-500 group-hover:bg-slate-800/80 transition-colors">
                                        <FolderGit2 size={20} />
                                    </div>
                                    <span className="text-green-500 text-xs font-mono tracking-wider">{project.category}</span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-green-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-2.5 py-1 text-[10px] font-mono font-medium bg-slate-950 text-slate-400 rounded border border-slate-800 group-hover:border-slate-700 group-hover:text-slate-200 transition-colors cursor-default">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
