import { stats } from '../data/stats';
import { ArrowRight } from './Icons';
import { Button } from './Button';
import { FieldLabel } from './Editorial';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-[clamp(3.75rem,8vw,7.25rem)] lg:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-7rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-accent-soft blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-6 lg:px-8">
        <div className="mx-auto max-w-[980px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span aria-hidden className="h-px w-8 bg-accent" />
            <FieldLabel>Frontend software engineer</FieldLabel>
            <span aria-hidden className="h-px w-8 bg-accent" />
          </div>

          <h1 className="balance-text mx-auto mt-6 max-w-[12ch] text-[clamp(3.25rem,8vw,7.25rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-text">
            Complex frontend. <span className="text-accent">Clear thinking.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-[65ch] text-[clamp(1.03rem,1rem+0.35vw,1.2rem)] leading-[1.72] text-muted">
            I’m Brantley, an experienced frontend engineer building accessible systems for
            complex products. I bring architecture, design systems, and thoughtful UI
            engineering together to make software clearer for users and the teams behind it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 max-[520px]:flex-col">
            <Button href="#projects" className="max-[520px]:w-full">
              View my work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              className="max-[520px]:w-full"
            >
              Get in touch
            </Button>
          </div>
        </div>

        <dl className="mt-[clamp(4rem,7vw,6rem)] grid gap-px overflow-hidden rounded-[14px] border border-border bg-border text-left sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-surface px-6 py-6 transition-colors hover:bg-bg-subtle sm:px-7"
            >
              <dt className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-none tracking-[-0.05em] text-text">
                {index === 1 ? `${stat.value} teams` : stat.value}
              </dt>
              <dd className="mt-2.5 max-w-[30ch] text-[0.82rem] leading-[1.5] text-muted">
                {index === 1 ? 'Aligned through a major framework migration' : stat.label}
              </dd>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
              />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
