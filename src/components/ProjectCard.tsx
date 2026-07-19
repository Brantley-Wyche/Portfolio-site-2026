import type { Project } from '../data/projects';
import { ArrowUpRight, Github } from './Icons';
import { FieldLabel, PaperCard, Tape } from './Editorial';
import { ProjectBlueprint } from './ProjectBlueprint';

function ProjectLink({
  href,
  label,
  type,
}: {
  href: string;
  label: string;
  type: 'source' | 'live';
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-muted transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      aria-label={`${label} - ${type === 'source' ? 'source code' : 'live site'}`}
    >
      {type === 'source' ? <Github size={14} /> : <ArrowUpRight size={14} />}
      {type === 'source' ? 'Code' : 'Visit'}
    </a>
  );
}

function EmptyField({ label, width }: { label: string; width: string }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <span
        aria-hidden="true"
        className={`mt-2 block h-px bg-border-strong opacity-70 ${width}`}
      />
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const hasDetails = Boolean(project.description || project.role || project.tags?.length);

  return (
    <PaperCard
      className={`group flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[var(--shadow-md)] ${
        project.featured ? 'p-5 sm:p-6' : 'p-4 sm:p-5'
      }`}
    >
      <Tape side={project.featured ? 'left' : 'right'} className={project.featured ? 'w-24' : 'w-16'} />
      <ProjectBlueprint kind={project.visualKind} featured={project.featured} />

      <div className={`flex flex-1 flex-col ${project.featured ? 'pt-7' : 'pt-5'}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.featured && (
              <p className="mb-2 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-accent">
                Featured project
              </p>
            )}
            <h3 className={project.featured ? 'text-[clamp(1.8rem,3vw,2.65rem)] font-extrabold' : 'text-[1.45rem] font-bold'}>
              {project.title}
            </h3>
          </div>

          {(project.repoUrl || project.liveUrl) && (
            <div className="flex shrink-0 flex-wrap justify-end gap-2">
              {project.repoUrl && <ProjectLink href={project.repoUrl} label={project.title} type="source" />}
              {project.liveUrl && <ProjectLink href={project.liveUrl} label={project.title} type="live" />}
            </div>
          )}
        </div>

        {hasDetails ? (
          <div className="mt-4 flex flex-1 flex-col">
            {project.description && (
              <p className={`${project.featured ? 'max-w-[58ch] text-[1.02rem]' : 'text-[0.94rem]'} text-muted`}>
                {project.description}
              </p>
            )}

            {(project.role || project.tags?.length) && (
              <div className={`mt-auto grid gap-4 pt-6 ${project.featured ? 'sm:grid-cols-[0.7fr_1.3fr]' : ''}`}>
                {project.role && (
                  <div>
                    <FieldLabel>Role</FieldLabel>
                    <p className="mt-1.5 text-sm font-semibold text-text">{project.role}</p>
                  </div>
                )}
                {project.tags && project.tags.length > 0 && (
                  <div>
                    <FieldLabel>Built with</FieldLabel>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[0.68rem] font-semibold text-accent-strong">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div aria-hidden="true" className={`mt-5 grid gap-5 ${project.featured ? 'sm:grid-cols-3' : 'grid-cols-2'}`}>
            <EmptyField label="Role" width="w-3/4" />
            <EmptyField label="Focus" width="w-full" />
            <EmptyField label="Stack" width="w-2/3" />
          </div>
        )}
      </div>
    </PaperCard>
  );
}
