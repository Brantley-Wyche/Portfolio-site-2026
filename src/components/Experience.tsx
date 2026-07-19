import { education, experience } from '../data/experience';
import { Container } from './Container';
import { FieldLabel, GraphPaper, PaperCard, Tape } from './Editorial';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const evidence = [
  { value: '16 → 21', label: 'Angular migration' },
  { value: '8 teams', label: 'Coordinated delivery' },
  { value: '$1M+', label: 'Annual licensing savings' },
] as const;

export function Experience() {
  return (
    <section id="experience" className="section-shell bg-bg-subtle/55">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Building clearer systems at enterprise scale."
          lead="From an intern shipping a high-value internal tool to an engineer coordinating a multi-team framework migration, my work has grown alongside the systems I help modernize."
        />

        <Reveal className="mt-12">
          <GraphPaper className="grid grid-cols-3 max-[680px]:grid-cols-1">
            {evidence.map((item, index) => (
              <div
                key={item.label}
                className={`p-6 max-[680px]:flex max-[680px]:items-baseline max-[680px]:justify-between max-[680px]:gap-4 ${
                  index > 0
                    ? 'border-l border-accent/20 max-[680px]:border-l-0 max-[680px]:border-t'
                    : ''
                }`}
              >
                <strong className="font-display text-[clamp(1.8rem,1.25rem+2vw,3rem)] leading-none tracking-[-0.04em] text-accent">
                  {item.value}
                </strong>
                <p className="mt-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted max-[680px]:mt-0 max-[680px]:text-right">
                  {item.label}
                </p>
              </div>
            ))}
          </GraphPaper>
        </Reveal>

        <ol className="relative mt-14 border-l border-border-strong/80 pl-9 max-[620px]:ml-2 max-[620px]:pl-6">
          {experience.map((role, index) => (
            <Reveal
              key={`${role.company}-${role.period}`}
              as="li"
              delay={index * 100}
              className="relative pb-12 last:pb-0"
            >
              <span
                aria-hidden
                className={`absolute -left-[2.7rem] top-8 h-4 w-4 rounded-full border-2 max-[620px]:-left-[2rem] ${
                  role.current
                    ? 'border-accent bg-surface shadow-[0_0_0_5px_var(--accent-soft)]'
                    : 'border-border-strong bg-bg'
                }`}
              />

              <PaperCard className="p-[clamp(1.4rem,1rem+2vw,2.4rem)]">
                <Tape side={role.current ? 'right' : 'left'} className={role.current ? '' : 'w-20'} />
                <div className="flex flex-wrap items-start justify-between gap-x-8 gap-y-3">
                  <div>
                    <FieldLabel>{role.company}</FieldLabel>
                    <h3 className="mt-2 text-[clamp(1.4rem,1.15rem+0.8vw,2rem)] font-bold">
                      {role.title}
                    </h3>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-[0.78rem] font-semibold text-text">{role.period}</p>
                    <p className="mt-1 text-[0.8rem] text-faint">{role.location}</p>
                  </div>
                </div>

                <div className="ink-rule my-6" />

                <ul className="grid gap-3 md:grid-cols-2 md:gap-x-8">
                  {role.highlights.map((point) => (
                    <li
                      key={point}
                      className="relative pl-5 text-[0.95rem] text-muted before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rotate-45 before:bg-accent before:content-['']"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </PaperCard>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12">
          <PaperCard className="flex items-center justify-between gap-6 p-6 max-[620px]:items-start">
            <div className="flex gap-4">
              <span
                aria-hidden
                className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft font-mono text-sm font-bold text-accent"
              >
                RIT
              </span>
              <div>
                <FieldLabel>Education</FieldLabel>
                <h3 className="mt-2 text-[1.15rem] font-bold">{education.degree}</h3>
                <p className="mt-1 text-[0.875rem] text-muted">
                  {education.school} · {education.location}
                </p>
              </div>
            </div>
            <span className="whitespace-nowrap font-mono text-[0.78rem] font-semibold text-faint max-[620px]:hidden">
              {education.period}
            </span>
          </PaperCard>
        </Reveal>
      </Container>
    </section>
  );
}
