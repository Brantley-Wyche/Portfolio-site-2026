import { skillGroups, skills, type SkillLevel } from '../data/skills';
import { Container } from './Container';
import { FieldLabel, PaperCard } from './Editorial';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const levelLabels: Record<SkillLevel, string> = {
  core: 'Deep experience',
  working: 'Working knowledge',
  familiar: 'Familiar',
};

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="Toolkit"
          title="Broad frontend skills, applied with intention."
          lead="My strongest work connects interface craft, application architecture, accessibility, and dependable delivery."
        />

        <div className="mt-12 grid grid-cols-3 gap-5 max-[940px]:grid-cols-1">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 80}>
              <PaperCard className="h-full overflow-hidden">
                <div className="border-b border-border bg-surface/70 p-6">
                  <FieldLabel>Capability {String(index + 1).padStart(2, '0')}</FieldLabel>
                  <h3 className="mt-2 text-[1.35rem] font-bold">{group.title}</h3>
                  <p className="mt-3 text-[0.9rem] text-muted">{group.note}</p>
                </div>

                <ul className="divide-y divide-border/75 px-6">
                  {group.skillNames.map((name) => {
                    const skill = skills.find((item) => item.name === name);
                    if (!skill) return null;

                    return (
                      <li key={skill.name} className="flex items-center justify-between gap-4 py-3">
                        <span className="text-[0.9rem] font-semibold text-text">{skill.name}</span>
                        <span
                          className={`text-right font-mono text-[0.61rem] font-semibold uppercase tracking-[0.08em] ${
                            skill.level === 'core' ? 'text-accent' : 'text-faint'
                          }`}
                        >
                          {levelLabels[skill.level]}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </PaperCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
