export function SectionHeading({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="section-heading">
      <div className="min-w-0">
        <h2>{title}</h2>
        {lead && <p className="section-lead">{lead}</p>}
      </div>
    </div>
  );
}
