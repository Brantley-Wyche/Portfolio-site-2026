import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const pillars = [
  {
    title: 'Design systems',
    body: 'I build reusable, well-documented component libraries that keep products consistent and let teams move faster — including a migration off Bootstrap/Material to a proprietary in-house system.',
  },
  {
    title: 'Performance & accessibility',
    body: 'I sweat the details that users feel: fast loads, smooth interactions, semantic markup, and interfaces that work for everyone, on any device.',
  },
  {
    title: 'Architecture at scale',
    body: 'I lead large refactors and framework migrations across multiple teams, writing the standards and guides that keep a sprawling codebase coherent.',
  },
];

export function ValueProp() {
  return (
    <section id="about" className="border-y border-border bg-bg-subtle py-24 max-[720px]:py-16">
      <Container>
        <SectionHeading
          eyebrow="What I do"
          title="Frontend that holds up under real-world complexity."
          lead="Most of my work lives inside large, long-lived applications where clarity and maintainability matter as much as polish. That's the kind of frontend I do best."
        />

        <div className="mt-12 grid grid-cols-3 gap-6 max-[880px]:grid-cols-1">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.title}
              delay={i * 80}
              className="rounded-[14px] border border-border bg-surface p-8 shadow-[var(--shadow-sm)]"
            >
              <span aria-hidden className="block font-mono text-[0.85rem] font-medium text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[1.25rem] font-bold">{pillar.title}</h3>
              <p className="mt-3 text-[0.975rem] text-muted">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
