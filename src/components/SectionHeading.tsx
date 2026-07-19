import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { Eyebrow } from './Eyebrow';

/** Eyebrow + title + lead intro shared by every content section. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: ReactNode;
  title: ReactNode;
  lead: ReactNode;
}) {
  return (
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] font-bold">{title}</h2>
      <p className="mt-4 max-w-[56ch] text-[1.0625rem] text-muted">{lead}</p>
    </Reveal>
  );
}
