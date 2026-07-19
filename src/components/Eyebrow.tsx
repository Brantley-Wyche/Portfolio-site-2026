import type { ReactNode } from 'react';

/** Small editorial section label. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-[0.76rem] font-semibold uppercase tracking-[0.13em] text-accent">
      {children}
    </p>
  );
}
