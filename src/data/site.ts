// -----------------------------------------------------------------------------
// Single source of truth for personal / contact info.
// Update these values and they propagate across the whole site.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Brantley Wyche',
  role: 'Frontend Software Engineer',
  location: 'West Orange, NJ',
  email: 'brantleywyche24@gmail.com',
  resumeUrl: '/Brantley-Wyche-Resume.pdf',

  // TODO: drop in your real profile URLs (leave blank to hide the link).
  github: '',
  linkedin: '',

  shortBio:
    'Frontend engineer building accessible interfaces, maintainable systems, and thoughtful experiences for complex products.',
} as const;

export type Site = typeof site;
