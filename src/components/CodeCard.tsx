import { useId, useRef, useState, type KeyboardEvent } from 'react';

type Tab = 'brantley.ts' | 'values.json';

// Small helpers so the syntax colors stay readable in both themes (they map to
// CSS variables defined per-theme in index.css).
const Kw = ({ children }: { children: string }) => (
  <span className="text-[var(--code-keyword)]">{children}</span>
);
const Id = ({ children }: { children: string }) => (
  <span className="text-[var(--code-ident)]">{children}</span>
);
const Str = ({ children }: { children: string }) => (
  <span className="text-[var(--code-string)]">{children}</span>
);
const Cm = ({ children }: { children: string }) => (
  <span className="text-[var(--code-comment)]">{children}</span>
);

const tabs: Tab[] = ['brantley.ts', 'values.json'];

export function CodeCard() {
  const [active, setActive] = useState<Tab>('brantley.ts');
  const baseId = useId();
  const tabRefs = useRef<Partial<Record<Tab, HTMLButtonElement | null>>>({});

  // Roving tabindex requires arrow-key navigation between tabs (WAI-ARIA APG).
  const onTabKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const idx = tabs.indexOf(active);
    let next: number | null = null;
    if (e.key === 'ArrowRight') next = (idx + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') next = (idx - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    if (next === null) return;
    e.preventDefault();
    const tab = tabs[next];
    setActive(tab);
    tabRefs.current[tab]?.focus();
  };

  return (
    <div className="overflow-hidden rounded-[14px] border border-border bg-[var(--code-surface)] shadow-[var(--shadow-lg)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border bg-[var(--code-chrome)] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]/70" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]/70" aria-hidden />
        <span className="h-3 w-3 rounded-full bg-[#28c840]/70" aria-hidden />
        <span className="ml-2 font-mono text-xs text-faint select-none">
          brantley-wyche · portfolio
        </span>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Code snippets"
        className="flex border-b border-border bg-[var(--code-chrome)] font-mono text-xs"
      >
        {tabs.map((tab) => {
          const selected = active === tab;
          return (
            <button
              key={tab}
              role="tab"
              id={`${baseId}-tab-${tab}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              ref={(el) => {
                tabRefs.current[tab] = el;
              }}
              onClick={() => setActive(tab)}
              onKeyDown={onTabKeyDown}
              className={`border-r border-border px-4 py-2 transition-colors ${
                selected
                  ? 'border-t-2 border-t-[var(--code-keyword)] bg-[var(--code-surface)] text-[var(--code-keyword)]'
                  : 'text-faint hover:text-muted'
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Code body */}
      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="min-h-[300px] overflow-x-auto p-5 font-mono text-[0.78rem] leading-relaxed text-[var(--code-text)] md:text-[0.82rem]"
      >
        {active === 'brantley.ts' ? (
          <pre className="whitespace-pre">
            <Cm>{'// brantley.ts'}</Cm>
            {'\n'}
            <Kw>const</Kw> <Id>developer</Id> {'= {'}
            {'\n  name: '}
            <Str>"Brantley Wyche"</Str>,
            {'\n  role: '}
            <Str>"Frontend Software Engineer"</Str>,
            {'\n  focus: ['}
            {'\n    '}
            <Str>"User Interfaces"</Str>,
            {'\n    '}
            <Str>"Design Systems"</Str>,
            {'\n    '}
            <Str>"Web Performance"</Str>,
            {'\n  ],'}
            {'\n  stack: ['}
            <Str>"TypeScript"</Str>, <Str>"React"</Str>, <Str>"Angular"</Str>,{' '}
            <Str>"RxJS"</Str>
            {'],'}
            {'\n  philosophy: '}
            <Str>"Clean, accessible code"</Str>,
            {'\n};'}
          </pre>
        ) : (
          <pre className="whitespace-pre">
            {'{'}
            {'\n  '}
            <Id>"architecture"</Id>: <Str>"Component-driven UI"</Str>,
            {'\n  '}
            <Id>"migrations"</Id>: <Str>"Angular v16 → v21, 8 teams"</Str>,
            {'\n  '}
            <Id>"state"</Id>: <Str>"Signal-based & reactive"</Str>,
            {'\n  '}
            <Id>"testing"</Id>: <Str>"Jasmine / Karma coverage"</Str>,
            {'\n  '}
            <Id>"ci_cd"</Id>: <Str>"Hardened CI/CD pipelines"</Str>,
            {'\n  '}
            <Id>"mentorship"</Id>: <Str>"Guiding juniors & leading standards"</Str>
            {'\n}'}
          </pre>
        )}
      </div>
    </div>
  );
}
