import type { ReactNode } from 'react';

/** Centered, max-width page gutter used by every section. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1080px] px-6 ${className}`.trim()}>
      {children}
    </div>
  );
}
