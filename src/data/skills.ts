export type SkillLevel = 'core' | 'working' | 'familiar';

interface Skill {
  name: string;
  level: SkillLevel;
}

interface SkillGroup {
  title: string;
  skills: readonly Skill[];
}

export const skillLevels = [
  { id: 'core', label: 'Deep experience' },
  { id: 'working', label: 'Working knowledge' },
  { id: 'familiar', label: 'Familiar' },
] as const satisfies readonly { id: SkillLevel; label: string }[];

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Frontend foundations',
    skills: [
      { name: 'TypeScript', level: 'core' },
      { name: 'JavaScript', level: 'core' },
      { name: 'HTML5', level: 'core' },
      { name: 'CSS3', level: 'core' },
      { name: 'Angular', level: 'core' },
      { name: 'RxJS', level: 'core' },
      { name: 'React', level: 'familiar' },
      { name: 'Vue.js', level: 'familiar' },
    ],
  },
  {
    title: 'Interface craft',
    skills: [
      { name: 'SCSS / SASS', level: 'core' },
      { name: 'Design Systems', level: 'core' },
      { name: 'Accessibility (WCAG)', level: 'core' },
      { name: 'Responsive Design', level: 'core' },
    ],
  },
  {
    title: 'Delivery & quality',
    skills: [
      { name: 'Git', level: 'core' },
      { name: 'GitLab CI/CD', level: 'core' },
      { name: 'Jasmine / Karma', level: 'core' },
      { name: 'Webpack', level: 'working' },
      { name: 'Node.js', level: 'working' },
      { name: 'Vite', level: 'familiar' },
    ],
  },
];
