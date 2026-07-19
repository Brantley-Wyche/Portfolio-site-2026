import type { ReactNode } from 'react';

/** Small monospace section label with a leading accent rule. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 font-mono text-[0.8125rem] font-medium tracking-[0.04em] text-accent">
      <span className="h-px w-7 bg-accent opacity-60" aria-hidden />
      {children}
    </p>
  );
}
