import { useEffect, useRef, useState } from 'react';
import { site } from '../../data/site';
import { ButtonLink } from '../ui/ButtonLink';
import { Close, Download, Menu } from '../ui/Icons';
import { Container } from './Container';

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#approach', label: 'Approach' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

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
            {links.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
          </ul>
          <div className="nav-actions">
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
              className="menu-toggle"
            >
              {menuOpen ? <Close size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <nav id="mobile-menu" aria-label="Mobile" className="mobile-nav">
            <ul>
              {links.map((link, index) => (
                <li key={link.href}>
                  <a
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
