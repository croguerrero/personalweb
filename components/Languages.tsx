import React from 'react';
import { LANGUAGES } from '../constants';
import { motion } from 'framer-motion';
import { Languages as LangIcon, Radio } from 'lucide-react';

export const Languages: React.FC = () => {
    return (
        <section id="languages" className="py-24 bg-[#0f172a]">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono mb-4">
                        <Radio size={12} className="text-green-500 animate-pulse" />
                        Communication Active
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                        <span className="text-green-500">./</span> Languages
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {LANGUAGES.map((lang, idx) => (
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

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-slate-800 rounded-lg text-slate-300 group-hover:text-green-500 group-hover:bg-slate-800/80 transition-colors">
                                    <LangIcon size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-slate-100 mb-1">{lang.language}</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="text-slate-400 text-sm">{lang.proficiency}</span>
                                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-green-900/20 text-green-400 rounded border border-green-500/20">
                                            {lang.level}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
