import type { AnchorHTMLAttributes } from 'react';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm';
}

/** Navigation and download actions styled as buttons. */
export function ButtonLink({ variant = 'primary', size = 'md', className = '', ...props }: ButtonLinkProps) {
  return <a className={`button-link button-link--${variant} button-link--${size} ${className}`.trim()} {...props} />;
}
