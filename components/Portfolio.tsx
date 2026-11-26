import { ArrowRight, ArrowUpRight, ChevronDown, Network } from 'lucide-react';
import { PROFILE, PROJECTS } from '../constants';
import cover from '../assets/agent-security-lab.jpg';

const [featured, ...projects] = PROJECTS;

export function Portfolio() {
  return (
    <section id="portfolio" className="section project-section" aria-labelledby="projects-title">
      <div className="shell">
        <div className="section-head">
          <h2 id="projects-title">Selected projects</h2>
          <p>Experiments in AI security and hands-on work across cloud infrastructure, delivery and reliability.</p>
        </div>

        <article className="featured-project">
          <div className="featured-image">
            <img src={cover} alt="" width="1120" height="630" loading="lazy" decoding="async" />
          </div>
          <div className="featured-content">
            <p className="project-meta"><span>{featured.category}</span><span>{featured.year}</span></p>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>
            <ul className="tags" aria-label="Technologies">
              {featured.tech.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        </article>

        <div className="project-grid">
          {projects.slice(0, 2).map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-meta"><span>{project.category}</span><span>{project.year}</span></p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tags" aria-label="Technologies">
                {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <details className="project-archive">
          <summary>More engineering projects <ChevronDown size={19} aria-hidden="true" /></summary>
          <div className="archive-grid">
            {projects.slice(2).map((project) => (
              <article className="project-card" key={project.title}>
                <p className="project-meta"><span>{project.category}</span><span>{project.year}</span></p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label="Technologies">
                  {project.tech.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </details>

        <a className="architecture-link" href="/architecture.html">
          <Network size={24} aria-hidden="true" />
          <span><strong>How this site is deployed</strong><span>Explore the S3 and CloudFront architecture.</span></span>
          <ArrowRight size={22} className="architecture-arrow" aria-hidden="true" />
        </a>
        <a className="text-link project-github" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
          Find me on GitHub <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
