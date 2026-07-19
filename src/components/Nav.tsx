import { useEffect, useRef, useState } from 'react';
import { site } from '../data/site';
import { Button } from './Button';
import { Close, Menu } from './Icons';

const links = [
  { href: '#projects', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#now', label: 'Now' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    firstMobileLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    const onResize = () => {
      if (window.innerWidth > 720) setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || menuOpen
          ? 'border-border bg-bg/95 shadow-[0_5px_20px_rgba(58,47,29,0.05)] backdrop-blur-md'
          : 'border-transparent bg-bg/88 backdrop-blur-sm'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[72px] w-full max-w-[1180px] items-center justify-between gap-6 px-6 lg:px-8"
      >
        <a
          href="#top"
          aria-label={`${site.name} — home`}
          className="group inline-flex items-center gap-3.5 text-text"
        >
          <span
            aria-hidden
            className="relative inline-flex h-10 w-10 rotate-[-2deg] items-center justify-center border border-text bg-surface font-mono text-[0.77rem] font-bold tracking-[-0.04em] shadow-[3px_3px_0_var(--accent)] transition-transform duration-200 group-hover:rotate-0"
          >
            BW
          </span>
          <span className="font-display text-[1rem] font-bold tracking-[-0.025em] max-[430px]:hidden">
            {site.name}
          </span>
        </a>

        <ul className="flex items-center gap-1 max-[720px]:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative inline-block px-3.5 py-2 text-[0.875rem] font-semibold text-muted transition-colors after:absolute after:inset-x-3.5 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-text hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button href="#contact" size="sm" className="max-[720px]:hidden">
            Get in touch
          </Button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="hidden h-11 w-11 items-center justify-center rounded-[10px] border border-border-strong bg-surface text-text shadow-[var(--shadow-sm)] transition-colors hover:border-accent hover:text-accent max-[720px]:inline-flex"
          >
            {menuOpen ? <Close size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-bg px-6 pb-6 pt-3 min-[721px]:hidden"
        >
          <ul className="flex flex-col divide-y divide-border">
            {links.map((link, index) => (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-3.5 font-display text-[1.05rem] font-semibold text-text transition-colors hover:text-accent"
                >
                  {link.label}
                  <span aria-hidden className="font-mono text-sm text-accent">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Button href="#contact" className="mt-5 w-full" onClick={closeMenu}>
            Get in touch
          </Button>
        </nav>
      )}
    </header>
  );
}
