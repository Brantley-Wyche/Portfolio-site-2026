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
