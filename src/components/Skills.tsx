import { useMemo, useState } from 'react';
import { levelFilters, skills, type LevelFilter, type SkillLevel } from '../data/skills';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

const badge: Record<SkillLevel, { label: string; className: string }> = {
  core: { label: 'Core', className: 'border-accent/30 bg-accent-soft text-accent' },
  working: { label: 'Working', className: 'border-border bg-bg-subtle text-muted' },
  familiar: { label: 'Familiar', className: 'border-border text-faint' },
};

export function Skills() {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<LevelFilter>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return skills.filter((skill) => {
      const matchesQuery = !q || skill.name.toLowerCase().includes(q);
      const matchesLevel = level === 'all' || skill.level === level;
      return matchesQuery && matchesLevel;
    });
  }, [query, level]);

  return (
    <section id="skills" className="py-24 max-[720px]:py-16">
      <Container>
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Toolkit</Eyebrow>
            <h2 className="mt-3 text-[clamp(1.75rem,1.2rem+2vw,2.5rem)] font-bold">
              Skills &amp; technologies
            </h2>
            <p className="mt-4 max-w-[46ch] text-[1.0625rem] text-muted">
              Search or filter by depth: &ldquo;Core&rdquo; is my daily toolkit,
              &ldquo;Working&rdquo; sees regular use, and &ldquo;Familiar&rdquo; is what
              I&apos;ve built with and can ramp back up quickly.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <label htmlFor="skill-search" className="sr-only">
              Search skills
            </label>
            <input
              id="skill-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills…"
              className="w-full rounded-lg border border-border bg-surface px-4 py-2 pr-9 text-sm text-text placeholder:text-faint transition-colors focus:border-accent focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-faint transition-colors hover:text-text"
              >
                ✕
              </button>
            )}
          </div>
        </Reveal>

        {/* Level filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter skills by level">
          {levelFilters.map((f) => {
            const active = level === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setLevel(f.id)}
                className={`rounded-lg border px-4 py-2 font-mono text-xs font-medium transition-colors ${
                  active
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border text-muted hover:border-border-strong hover:text-text'
                }`}
              >
                {f.label}
              </button>
            );
          })}
          <span aria-live="polite" className="ml-auto font-mono text-xs text-faint">
            {filtered.length} {filtered.length === 1 ? 'skill' : 'skills'}
          </span>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {filtered.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-between gap-2 rounded-lg border border-border bg-surface px-4 py-3 shadow-[var(--shadow-sm)]"
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-medium text-text">
                    {skill.name}
                  </span>
                  <span className="block truncate text-[0.7rem] text-faint">
                    {skill.category}
                  </span>
                </span>
                <span
                  className={`shrink-0 rounded-md border px-1.5 py-0.5 font-mono text-[0.62rem] font-medium uppercase tracking-wider ${badge[skill.level].className}`}
                >
                  {badge[skill.level].label}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-6 rounded-lg border border-dashed border-border py-12 text-center font-mono text-sm text-faint">
            No skills match &ldquo;{query}&rdquo;. Try another search.
          </div>
        )}
      </Container>
    </section>
  );
}
