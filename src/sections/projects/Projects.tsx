import { projects } from '../../data/projects';
import { Container } from '../../components/layout/Container';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const orderedProjects = featuredProject
    ? [featuredProject, ...projects.filter((project) => project.id !== featuredProject.id)]
    : [];
  const allInProgress = projects.every((project) => !project.description && !project.role && !project.tags?.length && !project.liveUrl && !project.repoUrl);

  return (
    <section id="projects" className="section-shell">
      <Container>
        <SectionHeading title="Selected work" lead={allInProgress ? 'Projects in progress. Case studies will follow as the work is ready.' : undefined} />
        {orderedProjects.length > 0 && <div className="project-grid">
          {orderedProjects.map((project, index) => (
            <article key={project.id} className="min-w-0">
              <ProjectCard project={project} tapeSide={index % 2 === 1 ? 'right' : 'left'} />
            </article>
          ))}
        </div>}
      </Container>
    </section>
  );
}
