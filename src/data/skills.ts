// -----------------------------------------------------------------------------
// Flat skill list powering the searchable / filterable Skills section.
//
// level:
//   'core'     — daily toolkit, deep experience
//   'working'  — regular use in real projects, not (yet) daily depth
//   'familiar' — built with it before, can ramp back up quickly
//
// category is used for the small label on each card. Retune levels freely —
// this is the single source of truth for the Skills section.
// (e.g. promote React familiar → working → core as upskilling progresses.)
// -----------------------------------------------------------------------------

export type SkillLevel = 'core' | 'working' | 'familiar';

export interface Skill {
  name: string;
  level: SkillLevel;
  category: string;
}

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', level: 'core', category: 'Languages' },
  { name: 'JavaScript', level: 'core', category: 'Languages' },
  { name: 'HTML5', level: 'core', category: 'Languages' },
  { name: 'CSS3', level: 'core', category: 'Languages' },

  // Frameworks & libraries
  { name: 'Angular', level: 'core', category: 'Frameworks' },
  { name: 'RxJS', level: 'core', category: 'Frameworks' },
  { name: 'React', level: 'familiar', category: 'Frameworks' },
  { name: 'Vue.js', level: 'familiar', category: 'Frameworks' },

  // Styling & UI
  { name: 'SCSS / SASS', level: 'core', category: 'Styling & UI' },
  { name: 'Design Systems', level: 'core', category: 'Styling & UI' },
  { name: 'Accessibility (WCAG)', level: 'core', category: 'Styling & UI' },
  { name: 'Responsive Design', level: 'core', category: 'Styling & UI' },

  // Tooling & workflow
  { name: 'Git', level: 'core', category: 'Tooling' },
  { name: 'GitLab CI/CD', level: 'core', category: 'Tooling' },
  { name: 'Vite', level: 'familiar', category: 'Tooling' },
  { name: 'Webpack', level: 'working', category: 'Tooling' },
  { name: 'Node.js', level: 'working', category: 'Tooling' },

  // Testing & quality
  { name: 'Jasmine / Karma', level: 'core', category: 'Testing' },
];

export type LevelFilter = 'all' | SkillLevel;

export const levelFilters: { id: LevelFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'core', label: 'Core' },
  { id: 'working', label: 'Working' },
  { id: 'familiar', label: 'Familiar' },
];
