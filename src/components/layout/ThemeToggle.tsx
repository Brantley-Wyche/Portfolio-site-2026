import { useEffect, useState } from 'react';
import { Contrast } from '../ui/Icons';

type Theme = 'light' | 'dark';
const darkQuery = '(prefers-color-scheme: dark)';

/** A saved choice wins; otherwise the system setting decides. index.html applies the saved choice before first paint. */
function readTheme(): Theme {
  const chosen = document.documentElement.dataset.theme;
  if (chosen === 'light' || chosen === 'dark') return chosen;
  return window.matchMedia(darkQuery).matches ? 'dark' : 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    // Follow system changes until the visitor picks a theme.
    const query = window.matchMedia(darkQuery);
    const onChange = () => setTheme(readTheme());
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    // Match the browser chrome to the page, reading the resolved color rather than repeating it here.
    const color = getComputedStyle(document.body).backgroundColor;
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.setAttribute('content', color));
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); }
    catch { /* Storage can be blocked; the choice still applies to this visit. */ }
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === 'dark'}
      aria-label="Blueprint theme"
      title="Blueprint theme"
      className="icon-button"
    >
      <Contrast size={20} />
    </button>
  );
}
