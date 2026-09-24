import type { Project } from '../../data/projects';
import { ArrowUpRight, Github } from '../../components/ui/Icons';
import { FieldLabel, PaperCard, Tape } from '../../components/ui/Editorial';
import { ProjectBlueprint } from './ProjectBlueprint';

function ProjectLink({ href, title, type }: { href: string; title: string; type: 'source' | 'live' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="text-link" aria-label={type === 'source' ? `Code for ${title}` : `Visit ${title} — live site`}>
      {type === 'source' ? <Github size={16} /> : <ArrowUpRight size={16} />}
      {type === 'source' ? 'Code' : 'Visit'}
    </a>
  );
}

export function ProjectCard({ project, tapeSide }: { project: Project; tapeSide: 'left' | 'right' }) {
  const hasDetails = Boolean(project.description || project.role || project.tags?.length || project.repoUrl || project.liveUrl);

  return (
    <PaperCard className="project-card">
      <Tape side={tapeSide} />
      <ProjectBlueprint kind={project.visualKind} />
      <div className="project-body">
        {!hasDetails && <p className="field-label">In progress</p>}
        {hasDetails && project.featured && <p className="field-label">Featured project</p>}
        <h3>{project.title}</h3>
        {project.description && <p className="project-description">{project.description}</p>}
        {(project.repoUrl || project.liveUrl) && (
          <div className="project-links">
            {project.repoUrl && <ProjectLink href={project.repoUrl} title={project.title} type="source" />}
            {project.liveUrl && <ProjectLink href={project.liveUrl} title={project.title} type="live" />}
          </div>
        )}
        {Boolean(project.role || project.tags?.length) && (
          <div className="project-details">
            {project.role && <div><FieldLabel>Role</FieldLabel><p>{project.role}</p></div>}
            {Boolean(project.tags?.length) && <div><FieldLabel>Built with</FieldLabel><ul className="project-tags">{project.tags?.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>}
          </div>
        )}
      </div>
    </PaperCard>
  );
}
