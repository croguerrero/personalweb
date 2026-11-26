import { useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PROFILE } from '../constants';

const links = [
  { label: 'Projects', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#certifications' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="shell header-inner">
        <a className="brand" href="#about" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">CG</span>
          <span>{PROFILE.name}</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={toggleRef}
          aria-controls="site-navigation"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav id="site-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
