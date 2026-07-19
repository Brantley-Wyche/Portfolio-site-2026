import { site } from '../data/site';
import { Container } from './Container';
import { FieldLabel, GraphPaper, NoteCard, PaperCard, Tape } from './Editorial';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const details = [
  { label: 'Based in', value: site.location },
  { label: 'Open to', value: 'NYC / NJ frontend engineering roles' },
  { label: 'Currently', value: 'Building new portfolio projects' },
] as const;

export function Beyond() {
  return (
    <section id="now" className="section-shell bg-bg-subtle/55">
      <Container>
        <SectionHeading
          eyebrow="Beyond the résumé"
          title="A little more context."
          lead="The work matters, but so does the way it gets made. I’m looking for teams that care about thoughtful interfaces and clear technical decisions."
        />

        <div className="mt-12 grid grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] gap-6 max-[820px]:grid-cols-1">
          <Reveal>
            <GraphPaper className="h-full p-[clamp(1.5rem,1rem+2vw,2.5rem)]">
              <FieldLabel>Field notes</FieldLabel>
              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                {details.map((detail) => (
                  <div key={detail.label} className="border-l-2 border-accent pl-4">
                    <dt className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-faint">
                      {detail.label}
                    </dt>
                    <dd className="mt-2 text-[0.95rem] font-semibold text-text">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </GraphPaper>
          </Reveal>

          <Reveal delay={100} className="relative pt-3 max-[820px]:max-w-xl">
            <NoteCard className="rotate-[1deg] p-7 max-[820px]:rotate-0">
              <Tape side="left" />
              <p className="handwritten text-[clamp(1.65rem,1.25rem+1.5vw,2.35rem)] leading-[1.05] text-text">
                Thoughtful interfaces. Clear systems. Practical collaboration.
              </p>
            </NoteCard>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <PaperCard className="px-6 py-4 text-center font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
            Frontend craft · systems thinking · collaborative delivery
          </PaperCard>
        </Reveal>
      </Container>
    </section>
  );
}
