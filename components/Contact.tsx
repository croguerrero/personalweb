import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

import { PROFILE } from '../constants';

export function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="shell contact-layout">
        <div>
          <h2 id="contact-title">Get in touch</h2>
          <p>Open to Platform Engineering, DevSecOps and AI security opportunities.</p>
          <a className="button button-primary" href={`mailto:${PROFILE.email}`}><Mail size={17} aria-hidden="true" /> Email me</a>
        </div>
        <ul className="contact-links">
          <li><a href={`mailto:${PROFILE.email}`}><Mail size={19} aria-hidden="true" /><span>{PROFILE.email}</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
          <li><a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={19} aria-hidden="true" /><span>LinkedIn</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
          <li><a href={PROFILE.github} target="_blank" rel="noopener noreferrer"><Github size={19} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={17} aria-hidden="true" /></a></li>
        </ul>
      </div>
    </section>
  );
}
