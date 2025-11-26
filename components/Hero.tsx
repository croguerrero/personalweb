import React from 'react';
import { Terminal } from './Terminal';
import { motion } from 'framer-motion';
import { Cloud, Server, ShieldCheck, Activity, Network } from 'lucide-react';

export const Hero: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 pb-10 overflow-hidden bg-[#0a0f1c]">

            {/* Background Abstract Shapes - Cloud Infrastructure Nodes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <motion.div
                    animate={{ y: [0, -30, 0], opacity: [0.05, 0.1, 0.05] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[10%] text-devops-accent"
                >
                    <Cloud size={140} />
                </motion.div>
                <motion.div
                    animate={{ y: [0, 40, 0], opacity: [0.03, 0.08, 0.03] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] right-[10%] text-devops-success"
                >
                    <Server size={120} />
                </motion.div>
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.03, 0.06, 0.03] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[40%] right-[30%] text-slate-400"
                >
                    <Network size={180} />
                </motion.div>

                {/* Connection Lines Grid */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
                <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <line x1="10" y1="10" x2="90" y2="90" stroke="white" strokeWidth="0.2" />
                    <line x1="90" y1="10" x2="10" y2="90" stroke="white" strokeWidth="0.2" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.2" />
                </svg>
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text Info */}
                <div className="space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-green-500/30 text-green-400 text-xs font-mono mb-6 shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                            <Activity size={12} className="animate-pulse" />
                            <span>SYSTEM STATUS: OPERATIONAL</span>
                        </div>

                        <div className="flex items-center gap-6 mb-4">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-green-400 rounded-full blur-md opacity-50 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500"></div>
                                <img
                                    src="/perfil.jpeg"
                                    alt="Christian Guerrero"
                                    className="relative w-full h-full object-cover rounded-full border-2 border-slate-700 shadow-xl group-hover:border-sky-400 transition-colors duration-300"
                                />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                                Christian <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
                                    Guerrero
                                </span>
                            </h1>
                        </div>

                        <div className="flex items-center gap-3 text-slate-300 text-lg md:text-xl font-light">
                            <ShieldCheck size={20} className="text-devops-accent" />
                            <span className="h-5 w-[1px] bg-slate-700"></span>
                            <span>DevSecOps Engineer</span>
                            <span className="h-5 w-[1px] bg-slate-700"></span>
                            <span>Cloud Engineer</span>
                        </div>

                        <p className="text-slate-400 leading-relaxed max-w-lg mt-6 text-base md:text-lg">
                            Orchestrating scalable infrastructure on <span className="text-slate-200 font-medium">GCP & AWS</span>.
                            Specialized in Kubernetes, CI/CD automation, and IaC with a security-first mindset.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a
                            href="#experience"
                            onClick={(e) => handleNavClick(e, '#experience')}
                            className="px-8 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded shadow-lg shadow-sky-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                        >
                            Deploy Infrastructure
                        </a>
                        <a
                            href="#skills"
                            onClick={(e) => handleNavClick(e, '#skills')}
                            className="px-8 py-3.5 border border-slate-700 hover:border-sky-400 text-slate-300 hover:text-sky-400 font-medium rounded transition-all bg-slate-900/50 backdrop-blur-sm cursor-pointer"
                        >
                            View Logs
                        </a>
                    </motion.div>
                </div>

                {/* Right: Terminal Visual */}
                <div className="relative z-10">
                    <Terminal />
                    {/* Decorative Glow */}
                    <div className="absolute -inset-4 bg-sky-500/10 blur-2xl rounded-full -z-10"></div>
                </div>

            </div>
        </section>
    );
};