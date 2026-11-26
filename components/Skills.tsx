import { Activity, Boxes, Cloud, Code2, GitBranch, LockKeyhole, Network } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const icons = [Cloud, Boxes, Code2, GitBranch, LockKeyhole, Activity, Network];

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="shell">
        <div className="section-head">
          <h2 id="skills-title">Technical skills</h2>
        </div>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = icons[index];
            return (
              <article className="skill-card" key={category.name}>
                <Icon size={23} aria-hidden="true" />
                <h3>{category.name}</h3>
                <ul className="tags" aria-label="Technologies and practices">
                  {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
