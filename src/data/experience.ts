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
      'Build and maintain a large Angular account-management platform used by employees across branch locations.',
      'Led the application migration from Angular 16 to 21, coordinating the deployment timeline across 8 development teams, management, and Product Owners.',
      'Modernized the frontend with standalone components, an in-house design system, and signal-based state management.',
      'Authored deprecation guides and implementation standards to support consistent adoption of modern patterns.',
      'Hardened CI/CD pipelines, upgraded Node.js base images, and maintained Jasmine/Karma tests.',
      'Mentor junior engineers and contribute to a community of practice around evolving frontend standards.',
    ],
  },
  {
    title: 'Technology Intern',
    company: 'M&T Bank',
    location: 'Buffalo, NY',
    period: 'Jun 2021 — Aug 2021',
    highlights: [
      'Co-developed an internal document viewer that delivered more than $1M in annual savings by eliminating external licensing fees.',
      'Worked within an Agile team to gather requirements and ship core functionality to bank quality and operational standards.',
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
