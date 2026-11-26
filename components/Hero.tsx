import { ArrowDown, Download, MapPin } from 'lucide-react';

import { FOCUS_AREAS, PROFILE } from '../constants';
import { Terminal } from './Terminal';

export function Hero() {
  return (
    <section className="hero" id="about" aria-labelledby="hero-title">
      <div className="shell">
        <div className="hero-layout">
          <div className="hero-content">
            <p className="eyebrow"><MapPin size={14} aria-hidden="true" /> {PROFILE.location}</p>
            <h1 id="hero-title">Christian <span>Guerrero</span></h1>
            <p className="hero-role">{PROFILE.role}</p>
            <p className="hero-description">{PROFILE.introduction}</p>
            <div className="actions">
              <a className="button button-primary" href="#portfolio">Explore projects <ArrowDown size={17} aria-hidden="true" /></a>
              <a className="button button-secondary" href="/CV-Christian-Guerrero.pdf" download>
                <Download size={17} aria-hidden="true" /> Download CV
              </a>
            </div>
          </div>
          <div className="hero-visuals">
            <figure className="portrait">
              <div className="portrait-mat">
                <img src="/perfil.jpeg" alt="Portrait of Christian Guerrero" width="960" height="1088" fetchPriority="high" />
              </div>
            </figure>
            <Terminal />
          </div>
        </div>
        <dl className="focus-strip">
          {FOCUS_AREAS.map(([area, tools]) => (
            <div key={area}><dt>{area}</dt><dd>{tools}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}
