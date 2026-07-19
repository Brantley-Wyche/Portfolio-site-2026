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
      <h2 className="balance-text mt-3 text-[clamp(2.35rem,1.55rem+3vw,4.75rem)] font-extrabold">{title}</h2>
      <p className="mt-5 max-w-[58ch] text-[clamp(1rem,0.96rem+0.22vw,1.15rem)] text-muted">{lead}</p>
    </Reveal>
  );
}
