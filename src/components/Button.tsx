import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'sm';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const base =
  'group inline-flex items-center justify-center rounded-[11px] border font-semibold transition duration-200';

const sizes: Record<Size, string> = {
  md: 'gap-2 px-6 py-3.5 text-[0.975rem] hover:-translate-y-0.5',
  sm: 'gap-1.5 px-4 py-2.5 text-[0.9rem] hover:-translate-y-px',
};

const variants: Record<Variant, string> = {
  primary:
    'border-accent bg-accent text-accent-contrast shadow-[var(--shadow-sm)] hover:border-accent-strong hover:bg-accent-strong hover:shadow-[var(--shadow-md)]',
  secondary:
    'border-border-strong bg-surface text-text shadow-[var(--shadow-sm)] hover:border-accent hover:text-accent',
};

/** Shared pill CTA. Renders an anchor; pass `href`, `download`, `target`, etc. */
export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  return (
    <a
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </a>
  );
}
