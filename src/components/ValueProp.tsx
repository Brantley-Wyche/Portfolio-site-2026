import { Container } from './Container';
import { FieldLabel, PaperCard } from './Editorial';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const principles = [
  {
    title: 'Make complexity legible',
    body: 'Turn dense requirements and system constraints into interfaces, diagrams, and implementation guidance people can act on.',
  },
  {
    title: 'Build for the long term',
    body: 'Favor accessible patterns, reusable systems, and architecture that stays understandable as products and teams grow.',
  },
  {
    title: 'Bring teams with me',
    body: 'Document decisions, share practical standards, and collaborate across disciplines so good solutions can travel.',
  },
] as const;

export function ValueProp() {
  return (
    <section id="approach" className="section-shell">
      <Container>
        <SectionHeading
          eyebrow="How I work"
          title="Good frontend work is a team sport."
          lead="I care about the interface people use and the systems teams rely on to keep improving it. These principles guide both."
        />

        <ol className="mt-12 grid grid-cols-3 gap-5 max-[880px]:grid-cols-1">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} as="li" delay={index * 80}>
              <PaperCard className="h-full p-7 transition duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
                <div className="flex items-center justify-between gap-4">
                  <FieldLabel>Principle {String(index + 1).padStart(2, '0')}</FieldLabel>
                  <span aria-hidden className="h-2.5 w-2.5 rounded-full border border-accent bg-accent-soft" />
                </div>
                <div className="ink-rule my-5" />
                <h3 className="text-[clamp(1.35rem,1.15rem+0.6vw,1.75rem)] font-bold">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[0.975rem] text-muted">{principle.body}</p>
              </PaperCard>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
