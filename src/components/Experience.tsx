import { education, experience } from '../data/experience';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="work" className="py-24 max-[720px]:py-16">
      <Container>
        <SectionHeading
          eyebrow="Where I've worked"
          title="Work history"
          lead="Four years of shipping and scaling frontend at an enterprise bank — from intern to engineer leading cross-team initiatives."
        />

        <ol className="relative mt-12">
          {experience.map((role, i) => {
            const isLast = i === experience.length - 1;
            return (
              <Reveal
                key={`${role.company}-${role.period}`}
                as="li"
                delay={i * 80}
                className="relative grid grid-cols-[24px_1fr] gap-6 pb-12 last:pb-0 max-[600px]:grid-cols-[18px_1fr] max-[600px]:gap-4"
              >
                <div className="relative flex justify-center">
                  {!isLast && (
                    <span className="absolute top-[6px] bottom-0 w-0.5 bg-border-strong" aria-hidden />
                  )}
                  <span
                    aria-hidden
                    className={`relative z-[1] mt-1 h-[14px] w-[14px] rounded-full border-2 ${
                      role.current
                        ? 'border-accent bg-accent shadow-[0_0_0_4px_var(--accent-soft)]'
                        : 'border-border-strong bg-surface'
                    }`}
                  />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[1.2rem] font-bold">
                      {role.title}
                      <span className="font-semibold text-accent"> · {role.company}</span>
                    </h3>
                    {role.current && (
                      <span className="rounded-full bg-accent-soft px-[0.55rem] py-[0.2rem] font-mono text-[0.72rem] font-medium text-accent">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-[0.875rem] text-faint">
                    {role.location} <span aria-hidden>·</span> {role.period}
                  </p>

                  <ul className="mt-4 flex flex-col gap-3">
                    {role.highlights.map((point) => (
                      <li
                        key={point}
                        className="relative pl-6 text-[0.975rem] text-muted before:absolute before:left-0.5 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:opacity-70 before:content-['']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mt-8 flex items-center justify-between gap-4 rounded-[14px] border border-border bg-surface p-6 shadow-[var(--shadow-sm)] max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-2">
          <div>
            <h3 className="text-[1.2rem] font-bold">{education.degree}</h3>
            <p className="mt-2 text-[0.875rem] text-faint">
              {education.school} <span aria-hidden>·</span> {education.location}
            </p>
          </div>
          <span className="whitespace-nowrap font-mono text-[0.85rem] text-faint">
            {education.period}
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
