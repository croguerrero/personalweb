import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '#about')}
            className="text-xl font-bold font-mono text-white tracking-tighter"
        >
            &lt;CG /&gt;
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
            {links.map(link => (
                <a 
                    key={link.label} 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-slate-300 hover:text-devops-accent transition-colors"
                >
                    {link.label}
                </a>
            ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
            >
                <div className="flex flex-col p-6 gap-4">
                    {links.map(link => (
                        <a 
                            key={link.label} 
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-slate-300 hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};