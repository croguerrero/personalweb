import { ArrowUpRight, Award } from 'lucide-react';
import { CERTIFICATIONS, EDUCATION, LANGUAGES } from '../constants';

export function Certifications() {
  return (
    <section id="certifications" className="section credentials-section" aria-labelledby="credentials-title">
      <div className="shell">
        <div className="section-head">
          <h2 id="credentials-title">Credentials</h2>
        </div>
        <div className="credentials-grid">
          {CERTIFICATIONS.map((cert) => (
            <article className="credential-card" key={cert.name}>
              <div className="credential-logo">
                {cert.logo ? <img src={cert.logo} alt="" width="46" height="46" loading="lazy" /> : <Award aria-hidden="true" />}
              </div>
              <p className="eyebrow">{cert.issuer} · {cert.year}</p>
              <h3>{cert.name}</h3>
              {cert.url && (
                <a className="text-link" href={cert.url} target="_blank" rel="noopener noreferrer">
                  Verify on Credly <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
          <article className="credential-card">
            <div className="credential-logo">
              <img src="/utn-logo.png" alt="" width="46" height="46" loading="lazy" />
            </div>
            <p className="eyebrow">Education · {EDUCATION.period}</p>
            <h3>{EDUCATION.institution}</h3>
            <p>{EDUCATION.specialization} · {EDUCATION.location}</p>
          </article>
          <article className="credential-card language-card" id="languages">
            <h3>Languages</h3>
            <dl>
              {LANGUAGES.map(({ language, proficiency, level }) => (
                <div key={language}>
                  <dt>{language}</dt>
                  <dd>{proficiency}{level === proficiency ? '' : ` · ${level}`}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
