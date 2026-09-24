import { useEffect, useRef, useState } from 'react';
import { site } from '../../data/site';
import { ButtonLink } from '../ui/ButtonLink';
import { Close, Download, Menu } from '../ui/Icons';
import { Container } from './Container';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
];
const linkHrefs = links.map((link) => link.href);

/** The last linked section whose top has passed the reading line. Unlinked sections keep the one before them. */
function useCurrentSection(hrefs: readonly string[]) {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const sections = hrefs.flatMap((href) => {
      const element = document.getElementById(href.slice(1));
      return element ? [{ href, element }] : [];
    });
    let frame = 0;
    const update = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.35;
      let next: string | null = null;
      for (const { href, element } of sections) {
        if (element.getBoundingClientRect().top <= readingLine) next = href;
      }
      // The last section can be too short to reach the reading line.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setCurrent(atBottom ? (sections.at(-1)?.href ?? next) : next);
    };
    const schedule = () => { frame ||= requestAnimationFrame(update); };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [hrefs]);

  return current;
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const currentSection = useCurrentSection(linkHrefs);

  useEffect(() => {
    if (!menuOpen) return;
    firstMobileLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    const onResize = () => {
      // Read the actual CSS mode, including container size and enlarged text.
      if (menuButtonRef.current && getComputedStyle(menuButtonRef.current).display === 'none') {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <Container>
        <nav aria-label="Primary" className="primary-nav">
          <a href="#top" aria-label={`${site.name} — home`} className="brand">
            <span aria-hidden="true" className="brand-mark">BW</span>
            <span className="brand-name">{site.name}</span>
          </a>
          <ul className="desktop-links">
            {links.map((link) => {
              const current = currentSection === link.href;
              return (
                <li key={link.href}>
                  <a href={link.href} aria-current={current ? 'location' : undefined}>
                    <span className="nav-label">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="nav-actions">
            <ThemeToggle />
            <ButtonLink href={site.resumeUrl} size="sm" download>
              Résumé <Download size={16} />
            </ButtonLink>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="icon-button menu-toggle"
            >
              {menuOpen ? <Close size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <nav id="mobile-menu" aria-label="Mobile" className="mobile-nav">
            <ul>
              {links.map((link, index) => {
                const current = currentSection === link.href;
                return (
                  <li key={link.href}>
                    <a
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      href={link.href}
                      aria-current={current ? 'location' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="nav-label">{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
