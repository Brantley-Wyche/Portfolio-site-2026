import type { ReactNode } from 'react';

export function SectionHeading({ title, lead, action }: { title: string; lead?: string; action?: ReactNode }) {
  return (
    <div className="section-heading">
      <div className="min-w-0">
        <h2>{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
