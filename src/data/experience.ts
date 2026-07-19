// -----------------------------------------------------------------------------
// Work history, adapted from resume. Phrased to read frontend-forward.
// -----------------------------------------------------------------------------

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
      'Build and maintain a large Angular-based internal account-management platform used by employees across every branch location.',
      'Led the enterprise-wide migration of the application from Angular v16 to v21, coordinating across 8 development teams and owning the deployment timeline with management and Product Owners.',
      'Drove technical-debt reduction by migrating to a standalone-component architecture, replacing Bootstrap/Material with a proprietary in-house design system, and adopting signal-based state management.',
      'Authored architecture and design artifacts — deprecation guides and implementation standards — to ensure consistent, secure adoption of modern patterns org-wide.',
      'Hardened CI/CD pipelines and upgraded Node.js base images to improve build resiliency and enforce security-conscious deployments.',
      'Wrote and maintained Jasmine/Karma unit tests for new and legacy functionality, strengthening regression coverage and reliability.',
      'Mentored junior engineers on frontend best practices and contributed to a community of practice around evolving framework standards.',
    ],
  },
  {
    title: 'Technology Intern',
    company: 'M&T Bank',
    location: 'Buffalo, NY',
    period: 'Jun 2021 — Aug 2021',
    highlights: [
      'Co-developed a proprietary internal document viewer that delivered over $1M in annual savings by eliminating external licensing fees.',
      'Collaborated within an Agile team to gather requirements and ship core functionality meeting bank-level quality and operational standards.',
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
