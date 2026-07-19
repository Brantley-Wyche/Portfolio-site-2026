import type { HTMLAttributes, ReactNode } from 'react';

function classes(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function PaperCard({ children, className, ...props }: SurfaceProps) {
  return (
    <div className={classes('paper-card', className)} {...props}>
      {children}
    </div>
  );
}

export function GraphPaper({ children, className, ...props }: SurfaceProps) {
  return (
    <div className={classes('graph-paper', className)} {...props}>
      {children}
    </div>
  );
}

export function NoteCard({ children, className, ...props }: SurfaceProps) {
  return (
    <div className={classes('note-card', className)} {...props}>
      {children}
    </div>
  );
}

export function NightCard({ children, className, ...props }: SurfaceProps) {
  return (
    <div className={classes('night-card', className)} {...props}>
      {children}
    </div>
  );
}

export function Tape({ className = '', side = 'right' }: { className?: string; side?: 'left' | 'right' }) {
  return (
    <span
      aria-hidden
      className={classes(
        'tape top-[-0.65rem]',
        side === 'right' ? 'right-6 rotate-[5deg]' : 'left-6 rotate-[-5deg]',
        className,
      )}
    />
  );
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-muted">
      {children}
    </span>
  );
}
