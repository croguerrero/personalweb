import { ChevronDown } from 'lucide-react';
import { EXPERIENCE } from '../constants';

export function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="shell">
        <div className="section-head">
          <h2 id="experience-title">Experience</h2>
          <p>Platform engineering, security automation and reliability across enterprise cloud and public-sector infrastructure.</p>
        </div>
        <div className="experience-list">
          {EXPERIENCE.map((job, index) => (
            <details key={job.id} className="experience-item" open={index === 0 ? true : undefined}>
              <summary>
                <span className="experience-period">{job.period}</span>
                <span className="experience-summary">
                  <strong>{job.role}</strong>
                  <span>{job.company}</span>
                </span>
                <ChevronDown size={20} aria-hidden="true" />
              </summary>
              <div className="experience-content">
                <p className="experience-location">{job.account ?? job.location}</p>
                <ul className="experience-description">
                  {job.description.map((description) => <li key={description}>{description}</li>)}
                </ul>
                <ul className="tags" aria-label="Technologies">
                  {job.tech.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
