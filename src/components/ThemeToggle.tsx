import { useEffect, useState } from 'react';
import { Moon, Sun } from './Icons';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr === 'light' || attr === 'dark') return attr;
  }
  return 'light';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* ignore storage failures (private mode, etc.) */
    }
  }, [theme]);

  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:-translate-y-px hover:border-border-strong hover:text-text"
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
