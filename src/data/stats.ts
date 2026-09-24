// -----------------------------------------------------------------------------
// Headline stats shown in the hero. Edit these freely as they change.
// -----------------------------------------------------------------------------

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: '5+', label: 'Years building production frontends' },
  { value: '8 teams', label: 'Coordinated through an Angular migration' },
  { value: '$1M+', label: 'Annual savings from an internal tool' },
];
