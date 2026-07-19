import { projects } from '../data/projects';
import { Container } from './Container';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];
  const supportingProjects = projects.filter((project) => project.id !== featuredProject.id);

  return (
    <section id="projects" className="section-shell bg-bg-subtle">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Selected work."
          lead="A home for the projects that show how I turn complex requirements into clear, durable frontend experiences."
        />

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(20rem,0.75fr)] lg:gap-6">
          <Reveal as="article" className="min-w-0" delay={60}>
            <ProjectCard project={featuredProject} />
          </Reveal>

          <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {supportingProjects.map((project, index) => (
              <Reveal as="article" key={project.id} className="min-w-0" delay={120 + index * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
