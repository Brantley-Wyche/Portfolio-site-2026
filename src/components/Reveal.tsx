import type { ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger delay in ms for nice sequencing. */
  delay?: number;
  id?: string;
}

/** Wraps content in a fade-and-rise reveal that triggers when scrolled into view. */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, id }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
