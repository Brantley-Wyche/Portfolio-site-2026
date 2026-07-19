// -----------------------------------------------------------------------------
// Single source of truth for personal / contact info.
// Update these values and they propagate across the whole site.
// -----------------------------------------------------------------------------

export const site = {
  name: 'Brantley Wyche',
  role: 'Frontend Software Engineer',
  // Not currently rendered anywhere; kept as data (the address also appears
  // hardcoded in index.html's JSON-LD).
  location: 'West Orange, NJ',
  email: 'brantleywyche24@gmail.com',
  resumeUrl: '/Brantley-Wyche-Resume.pdf',

  // TODO: drop in your real profile URLs (leave blank to hide the link).
  github: '',
  linkedin: '',
} as const;

export type Site = typeof site;
