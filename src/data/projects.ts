// -----------------------------------------------------------------------------
// Featured projects. Placeholder content — swap in real projects when ready.
// `featured: true` gives a card the wider, highlighted treatment.
// -----------------------------------------------------------------------------

export interface Project {
  title: string;
  blurb: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Project One',
    blurb:
      'Placeholder — describe a flagship project here. What problem did it solve, who was it for, and what was your role? Lead with impact, then the interesting technical decisions.',
    tags: ['React', 'TypeScript', 'Vite'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    title: 'Project Two',
    blurb:
      'Placeholder — a focused build that shows range. One or two sentences on what it does and a result you are proud of.',
    tags: ['React', 'CSS', 'Accessibility'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Three',
    blurb:
      'Placeholder — something that demonstrates craft: an animation, a design-system component, a tricky state problem solved cleanly.',
    tags: ['TypeScript', 'Design System'],
    liveUrl: '#',
    repoUrl: '#',
  },
];
