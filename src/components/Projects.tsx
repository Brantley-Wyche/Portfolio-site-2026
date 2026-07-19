import { projects } from '../data/projects';
import { ArrowUpRight, Folder, Github } from './Icons';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="border-y border-border bg-bg-subtle py-24 max-[720px]:py-16">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          lead="A few things I've built. Each one is a chance to show how I think about structure, interaction, and detail."
        />

        <div className="mt-12 grid grid-cols-2 gap-6 max-[760px]:grid-cols-1">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              as="article"
              delay={i * 70}
              className={`flex flex-col overflow-hidden rounded-[20px] border border-border bg-surface shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-md)] ${
                project.featured ? 'col-span-full' : ''
              }`}
            >
              <div
                aria-hidden
                className={`relative grid place-items-center overflow-hidden border-b border-border [background:linear-gradient(135deg,var(--accent-soft),transparent_60%),var(--bg-subtle)] ${
                  project.featured ? 'aspect-[21/6] max-[760px]:aspect-[16/8]' : 'aspect-[16/7]'
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,var(--border-strong)_1px,transparent_0)] [background-size:22px_22px] [mask-image:radial-gradient(70%_70%_at_50%_50%,#000,transparent)]" />
                <span className="relative flex flex-col items-center gap-2 text-faint">
                  <Folder size={28} className="text-accent" />
                  <span className="font-mono text-[0.9rem] tracking-[0.02em]">
                    {project.title}
                  </span>
                </span>
              </div>

              <div className="flex flex-col gap-3 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[1.2rem] font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        aria-label={`${project.title} — source code`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-border text-muted transition hover:border-accent hover:bg-accent-soft hover:text-accent"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        aria-label={`${project.title} — live site`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-border text-muted transition hover:border-accent hover:bg-accent-soft hover:text-accent"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-[0.975rem] text-muted">{project.blurb}</p>

                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-bg-subtle px-[0.6rem] py-[0.3rem] font-mono text-[0.78rem] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
