import type { HTMLAttributes, ReactNode } from 'react';

type SurfaceProps = HTMLAttributes<HTMLDivElement>;

export function PaperCard({ className = '', ...props }: SurfaceProps) {
  return <div className={`paper-card ${className}`.trim()} {...props} />;
}

export function GraphPaper({ className = '', ...props }: SurfaceProps) {
  return <div className={`graph-paper ${className}`.trim()} {...props} />;
}

export function NoteCard({ className = '', ...props }: SurfaceProps) {
  return <div className={`note-card ${className}`.trim()} {...props} />;
}

export function Tape({ side = 'right', className = '' }: { side?: 'left' | 'right'; className?: string }) {
  return <span aria-hidden="true" className={`tape tape--${side} ${className}`.trim()} />;
}

export function FieldLabel({ children }: { children: ReactNode }) {
  return <span className="field-label">{children}</span>;
}

/** A handwritten annotation. Hidden from assistive technology because it repeats nearby content. */
export function MarginNote({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span aria-hidden="true" className={`margin-note ${className}`.trim()}>
      {children}
      <svg className="margin-note-arrow" viewBox="0 0 40 20">
        <path d="M2 12c8-5 20-6.5 34-2" />
        <path d="m29.5 4.5 7 5.6-7.5 4.2" />
      </svg>
    </span>
  );
}
