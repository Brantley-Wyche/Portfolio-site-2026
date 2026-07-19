export type SkillLevel = 'core' | 'working' | 'familiar';

export interface Skill {
  name: string;
  level: SkillLevel;
  category: string;
}

export const skills: Skill[] = [
  { name: 'TypeScript', level: 'core', category: 'Languages' },
  { name: 'JavaScript', level: 'core', category: 'Languages' },
  { name: 'HTML5', level: 'core', category: 'Languages' },
  { name: 'CSS3', level: 'core', category: 'Languages' },
  { name: 'Angular', level: 'core', category: 'Frameworks' },
  { name: 'RxJS', level: 'core', category: 'Frameworks' },
  { name: 'React', level: 'familiar', category: 'Frameworks' },
  { name: 'Vue.js', level: 'familiar', category: 'Frameworks' },
  { name: 'SCSS / SASS', level: 'core', category: 'Styling & UI' },
  { name: 'Design Systems', level: 'core', category: 'Styling & UI' },
  { name: 'Accessibility (WCAG)', level: 'core', category: 'Styling & UI' },
  { name: 'Responsive Design', level: 'core', category: 'Styling & UI' },
  { name: 'Git', level: 'core', category: 'Tooling' },
  { name: 'GitLab CI/CD', level: 'core', category: 'Tooling' },
  { name: 'Vite', level: 'familiar', category: 'Tooling' },
  { name: 'Webpack', level: 'working', category: 'Tooling' },
  { name: 'Node.js', level: 'working', category: 'Tooling' },
  { name: 'Jasmine / Karma', level: 'core', category: 'Testing' },
];

export interface SkillGroup {
  title: string;
  note: string;
  skillNames: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend foundations',
    note: 'The languages and frameworks behind maintainable application interfaces.',
    skillNames: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Angular', 'RxJS', 'React', 'Vue.js'],
  },
  {
    title: 'Interface craft',
    note: 'Systems and practices that make products consistent, responsive, and accessible.',
    skillNames: ['SCSS / SASS', 'Design Systems', 'Accessibility (WCAG)', 'Responsive Design'],
  },
  {
    title: 'Delivery & quality',
    note: 'Tools used to test, build, version, and reliably ship frontend work.',
    skillNames: ['Git', 'GitLab CI/CD', 'Jasmine / Karma', 'Webpack', 'Node.js', 'Vite'],
  },
];
