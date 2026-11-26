import { ArrowUp } from 'lucide-react';
import { PROFILE } from '../constants';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <p>© {new Date().getFullYear()} {PROFILE.fullName}</p>
        <a className="text-link" href="#about">Back to top <ArrowUp size={16} aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
