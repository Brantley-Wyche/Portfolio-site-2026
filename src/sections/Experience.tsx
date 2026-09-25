import { education, experience } from '../data/experience';
import { Container } from '../components/layout/Container';
import { PaperCard } from '../components/ui/Editorial';
import { SectionHeading } from '../components/ui/SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="section-shell section-tinted">
      <Container>
        <SectionHeading title="Experience" />
        <ol className="experience-list">
          {experience.map((role) => (
            <li key={`${role.company}-${role.period}`}>
              <PaperCard className="experience-card">
                <div className="experience-meta">
                  <p className="field-label">{role.company}</p>
                  <p className="experience-period">{role.period}</p>
                  <p className="text-sm text-faint">{role.location}</p>
                </div>
                <div className="min-w-0">
                  <h3 className="role-title">{role.title}</h3>
                  <ul className="experience-highlights">
                    {role.highlights.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              </PaperCard>
            </li>
          ))}
        </ol>
        <PaperCard className="education">
          <p className="field-label">Education</p>
          <div>
            <h3>{education.degree}</h3>
            <p>{education.school} · {education.location}</p>
          </div>
        </PaperCard>
      </Container>
    </section>
  );
}
