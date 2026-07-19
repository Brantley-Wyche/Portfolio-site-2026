import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';
type Size = 'md' | 'sm';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const base =
  'group inline-flex items-center justify-center rounded-full font-semibold transition';

const sizes: Record<Size, string> = {
  md: 'gap-2 px-[1.4rem] py-[0.8rem] text-[0.975rem] hover:-translate-y-0.5',
  sm: 'gap-1.5 px-4 py-2 text-[0.9rem] hover:-translate-y-px',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-br from-accent to-accent-strong text-accent-contrast shadow-[0_6px_20px_-4px_color-mix(in_srgb,var(--accent)_35%,transparent)] hover:shadow-[0_10px_30px_-6px_color-mix(in_srgb,var(--accent)_55%,transparent)]',
  secondary:
    'border border-border-strong bg-surface text-text hover:border-accent hover:text-accent',
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
