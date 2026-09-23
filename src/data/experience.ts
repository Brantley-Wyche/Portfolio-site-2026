export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  highlights: string[];
}

export const experience: Role[] = [
  {
    title: 'Software Engineer',
    company: 'M&T Bank',
    location: 'Buffalo, NY',
    period: 'Jul 2022 — Present',
    current: true,
    highlights: [
      'Build and maintain the Angular account-management platform used across bank branches.',
      'Led the Angular 16 → 21 migration, coordinating delivery across 8 development teams.',
      'Modernized the frontend with standalone components, signals, and an in-house design system.',
      'Strengthen CI/CD and testing; write implementation guides and mentor junior engineers.',
    ],
  },
  {
    title: 'Technology Intern',
    company: 'M&T Bank',
    location: 'Buffalo, NY',
    period: 'Jun 2021 — Aug 2021',
    highlights: [
      'Co-developed an internal document viewer that eliminated external licensing fees, saving more than $1M annually.',
    ],
  },
];

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
}

export const education: Education = {
  degree: 'B.S. in Web & Mobile Computing',
  school: 'Rochester Institute of Technology',
  location: 'Rochester, NY',
  period: '2017 — 2022',
};
