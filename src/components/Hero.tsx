import { site } from '../data/site';
import { stats } from '../data/stats';
import { ArrowRight, Download } from './Icons';
import { Button } from './Button';
import { CodeCard } from './CodeCard';

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[clamp(3.5rem,2.5rem+6vw,6.5rem)] pb-20"
    >
      <div className="pointer-events-none absolute inset-0 [background:var(--hero-glow)]" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1080px] px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Text column */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2 text-[0.85rem] font-medium text-muted shadow-[var(--shadow-sm)]">
              <span
                aria-hidden
                className="h-2 w-2 rounded-full bg-[#2ec16b] shadow-[0_0_0_4px_rgba(46,193,107,0.18)]"
              />
              Open to frontend &amp; full-stack roles in NYC/NJ
            </span>

            <h1 className="mt-6 text-[clamp(2.25rem,1.5rem+2.8vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
              I build accessible interfaces for{' '}
              <span className="text-accent">complex web apps</span>.
            </h1>

            <p className="mt-5 max-w-[46ch] text-[clamp(1.05rem,1rem+0.3vw,1.2rem)] text-muted">
              Five years building enterprise web apps that are fast, accessible, and easy to
              maintain.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 max-[640px]:w-full">
              {/* Points at #work while Projects holds placeholders — retarget to
                  #projects once real projects are in. */}
              <Button href="#work" variant="primary" className="max-[640px]:flex-1">
                View my work
                <ArrowRight size={18} className="transition group-hover:translate-x-[3px]" />
              </Button>
              <Button
                href={site.resumeUrl}
                download
                variant="secondary"
                className="max-[640px]:flex-1"
              >
                <Download size={18} />
                Download résumé
              </Button>
            </div>
          </div>

          {/* Code card column */}
          <div className="lg:col-span-5">
            <CodeCard />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8 max-[640px]:grid-cols-1">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-[clamp(1.8rem,1.4rem+1.5vw,2.5rem)] font-extrabold tracking-[-0.03em] text-text">
                {stat.value}
              </dt>
              <dd className="mt-2 text-[0.9rem] leading-[1.45] text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
