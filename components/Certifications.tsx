import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
    return (
        <section id="certifications" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-10 text-center">
                    <span className="text-yellow-500">./</span> Certifications
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-800 rounded-lg p-6 border border-slate-700 flex flex-col items-center text-center relative overflow-hidden group"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 border border-slate-700 overflow-hidden p-2">
                                {cert.logo ? (
                                    <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                                ) : (
                                    <Award size={32} className="text-yellow-500" />
                                )}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                            <p className="text-slate-400 mb-1">{cert.issuer}</p>
                            <span className="inline-flex items-center gap-1 text-sm text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                                <CheckCircle2 size={12} />
                                {cert.year}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-xl font-bold text-white mb-6">Education</h3>
                    <div className="max-w-2xl mx-auto bg-slate-800 px-8 py-6 rounded-lg border border-slate-700 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden p-1 mb-4">
                            <img
                                src="/utn-logo.png"
                                alt="UTN"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div>
                            <h4 className="text-white font-semibold">Universidad Tecnica del Norte</h4>
                            <p className="text-slate-400">Specialist Network and Electronic Engineering</p>
                            <p className="text-slate-500 text-sm mt-2">Ibarra, Ecuador • 2004 - 2010</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};