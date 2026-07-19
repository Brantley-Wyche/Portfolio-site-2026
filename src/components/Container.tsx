import type { ReactNode } from 'react';

/** Centered page gutter used by every section. */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-6 sm:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}
