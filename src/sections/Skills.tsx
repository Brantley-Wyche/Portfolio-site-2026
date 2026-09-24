import { skillGroups, skillLevels } from '../data/skills';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { PaperCard } from '../components/ui/Editorial';

export function Skills() {
  return (
    <section id="skills" className="section-shell section-tinted">
      <Container>
        <SectionHeading title="Toolkit" />
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <PaperCard className="skill-group" key={group.title}>
              <h3 className="handwritten note-heading">{group.title}</h3>
              {skillLevels.map(({ id, label }) => {
                const items = group.skills.filter((skill) => skill.level === id);
                if (!items.length) return null;
                return (
                  <div className="skill-level" key={id}>
                    <p className="field-label">{label}</p>
                    <ul>{items.map((skill) => <li key={skill.name}>{skill.name}</li>)}</ul>
                  </div>
                );
              })}
            </PaperCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
