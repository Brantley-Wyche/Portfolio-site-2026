// -----------------------------------------------------------------------------
// Selected work
//
// The cards intentionally support an empty portfolio state. Add the optional
// fields as each project is ready and the same component will reveal the richer
// case-study treatment without requiring a layout rewrite.
// -----------------------------------------------------------------------------

export type ProjectVisualKind = 'architecture' | 'interface' | 'workflow';

export interface Project {
  id: string;
  title: string;
  description?: string;
  role?: string;
  tags?: string[];
  visualKind: ProjectVisualKind;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Project 1',
    visualKind: 'architecture',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Project 2',
    visualKind: 'interface',
  },
  {
    id: 'project-3',
    title: 'Project 3',
    visualKind: 'workflow',
  },
];
