import { FieldLabel, GraphPaper, NoteCard, PaperCard, Tape } from './Editorial';

function ArchitectureSketch() {
  return (
    <svg
      role="img"
      aria-labelledby="hero-sketch-title hero-sketch-description"
      viewBox="0 0 430 235"
      className="mt-2 h-auto w-full"
    >
      <title id="hero-sketch-title">Frontend system architecture sketch</title>
      <desc id="hero-sketch-description">
        A product interface connects to a component system and an accessible foundation.
      </desc>

      <g className="blueprint-line">
        <rect x="25" y="26" width="126" height="61" rx="5" />
        <path d="M43 45h55M43 57h88M43 69h70" />
        <rect x="278" y="26" width="126" height="61" rx="5" />
        <path d="M296 45h78M296 57h91M296 69h52" />
        <rect x="151" y="148" width="127" height="61" rx="5" />
        <circle cx="174" cy="171" r="8" />
        <path d="M190 166h67M190 177h48M169 193h87" />
        <path d="M151 57h127M214 57v91M341 87v31h-127M88 87v31h126" />
        <path d="m207 139 7 9 7-9M269 111l9 7-9 7M159 111l-8 7 8 7" />
      </g>

      <g className="fill-text font-mono text-[10px] font-semibold uppercase tracking-[0.11em]">
        <text x="25" y="17">Product interface</text>
        <text x="278" y="17">Design system</text>
        <text x="151" y="226">Accessible foundation</text>
      </g>
    </svg>
  );
}

export function HeroCollage() {
  return (
    <div
      aria-label="A working board of frontend architecture notes"
      className="grid gap-4 sm:grid-cols-2 lg:relative lg:min-h-[540px] lg:grid-cols-none"
    >
      <GraphPaper className="p-5 sm:col-span-2 lg:absolute lg:left-0 lg:top-5 lg:w-[86%] lg:rotate-[-1.5deg] lg:p-6">
        <Tape side="left" className="left-[38%]" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <FieldLabel>System map / 01</FieldLabel>
            <p className="mt-1 font-display text-[1.1rem] font-bold tracking-[-0.03em] text-text">
              Clarity is an architecture decision.
            </p>
          </div>
          <span aria-hidden className="font-mono text-[0.66rem] text-faint">
            BW—2026
          </span>
        </div>
        <ArchitectureSketch />
      </GraphPaper>

      <NoteCard className="p-5 sm:rotate-[-1deg] lg:absolute lg:bottom-5 lg:left-[-1.2rem] lg:z-20 lg:w-[53%] lg:rotate-[-3deg] lg:p-6">
        <span aria-hidden className="handwritten absolute right-4 top-2 text-lg text-accent">
          keep it legible →
        </span>
        <FieldLabel>Migration note</FieldLabel>
        <p className="mt-4 font-display text-[1.12rem] font-bold leading-[1.15] tracking-[-0.03em] text-text">
          Move the system forward without leaving the team behind.
        </p>
        <ul className="mt-4 space-y-2 font-mono text-[0.68rem] font-medium uppercase tracking-[0.055em] text-muted">
          <li className="flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            Shared patterns
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            Accessible defaults
          </li>
          <li className="flex items-center gap-2">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
            Durable decisions
          </li>
        </ul>
      </NoteCard>

      <div className="grid gap-4 max-sm:grid-cols-1 sm:content-end lg:absolute lg:bottom-0 lg:right-0 lg:z-30 lg:w-[45%]">
        <PaperCard className="rotate-[1deg] p-4 lg:rotate-[2deg]">
          <FieldLabel>Based in</FieldLabel>
          <p className="mt-1.5 font-display text-[1rem] font-bold tracking-[-0.025em] text-text">
            West Orange, NJ
          </p>
          <p className="mt-1 text-[0.76rem] leading-[1.45] text-muted">NYC / NJ opportunities</p>
        </PaperCard>

        <PaperCard className="border-l-[3px] border-l-accent p-4">
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-soft)]"
            />
            <FieldLabel>Currently</FieldLabel>
          </div>
          <p className="mt-2 font-display text-[1rem] font-bold leading-[1.2] tracking-[-0.025em] text-text">
            Building new portfolio projects
          </p>
        </PaperCard>
      </div>
    </div>
  );
}
