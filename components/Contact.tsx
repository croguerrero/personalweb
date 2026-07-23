import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileDown, Radio, ArrowUpRight } from 'lucide-react';

const channels = [
    {
        label: 'Email',
        value: 'christianmarcelog@gmail.com',
        href: 'mailto:christianmarcelog@gmail.com',
        icon: Mail,
    },
    {
        label: 'LinkedIn',
        value: '/in/marcelo-guerrero',
        href: 'https://www.linkedin.com/in/marcelo-guerrero-760413125',
        icon: Linkedin,
    },
    {
        label: 'GitHub',
        value: '/croguerrero',
        href: 'https://github.com/croguerrero',
        icon: Github,
    },
];

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-[#0a0f1c] relative overflow-hidden">
            {/* ambient glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Availability badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        AVAILABLE FOR OPPORTUNITIES
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="text-sky-400">./</span> Let&apos;s build something reliable
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-10">
                        Open to DevOps, Platform &amp; DevSecOps roles — and to securing AI agents and LLM pipelines.
                        Reach out and let&apos;s talk.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <a
                            href="mailto:christianmarcelog@gmail.com"
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded shadow-lg shadow-sky-500/20 transition-all transform hover:-translate-y-0.5"
                        >
                            <Mail size={18} /> Get in touch
                        </a>
                        <a
                            href="/CV-Christian-Guerrero.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-700 hover:border-sky-400 text-slate-200 hover:text-sky-400 font-medium rounded bg-slate-900/50 backdrop-blur-sm transition-all"
                        >
                            <FileDown size={18} /> Download CV
                        </a>
                    </div>

                    {/* Channels */}
                    <div className="grid sm:grid-cols-3 gap-4">
                        {channels.map((c) => {
                            const Icon = c.icon;
                            return (
                                <a
                                    key={c.label}
                                    href={c.href}
                                    target={c.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-all text-left"
                                >
                                    <div className="p-2.5 bg-slate-800 rounded-lg text-slate-300 group-hover:text-sky-400 transition-colors">
                                        <Icon size={20} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-xs font-mono text-slate-500">{c.label}</div>
                                        <div className="text-sm text-slate-300 truncate">{c.value}</div>
                                    </div>
                                    <ArrowUpRight size={16} className="text-slate-600 group-hover:text-sky-400 transition-colors flex-shrink-0" />
                                </a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
