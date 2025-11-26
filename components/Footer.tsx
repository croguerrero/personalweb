import React from 'react';
import { Github, Linkedin, Mail, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0b0f19] py-12 border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">&lt;CG /&gt;</h3>
                        <p className="text-slate-500 text-sm">
                            DevSecOps & Cloud Engineer
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {/* Replaced generic links with non-navigating elements to prevent 'Blocked' frame errors in preview */}
                        <a href="https://www.linkedin.com/in/marcelo-guerrero-760413125" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all cursor-pointer border border-slate-800">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/croguerrero" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all cursor-pointer border border-slate-800">
                            <Github size={20} />
                        </a>
                        <a href="mailto:christianmarcelog@gmail.com" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all cursor-pointer border border-slate-800">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-mono">
                    <p>&copy; {new Date().getFullYear()} Christian Marcelo Guerrero. All systems normal.</p>
                    <div className="flex items-center gap-2">
                        <span>Build ID: v2.4.0</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                        <span className="flex items-center gap-1">
                            Powered by React <Coffee size={10} />
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};