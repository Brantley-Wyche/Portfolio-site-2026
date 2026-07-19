import type { ProjectVisualKind } from '../data/projects';

function ArchitectureDrawing() {
  return (
    <svg viewBox="0 0 640 300" className="h-full w-full" aria-hidden="true">
      <g className="blueprint-line">
        <rect x="78" y="54" width="200" height="130" rx="8" />
        <path d="M78 82h200M98 68h5m10 0h5m10 0h5" />
        <rect x="112" y="109" width="60" height="48" rx="4" />
        <path d="M187 112h64m-64 19h48m-48 19h58" />
        <rect x="390" y="78" width="164" height="82" rx="8" />
        <path d="M410 102h58m-58 18h120m-120 18h92" />
        <rect x="410" y="208" width="122" height="44" rx="22" />
        <path d="M278 119h112m-56 0v111h76M278 156h50" strokeDasharray="7 7" />
        <circle cx="334" cy="119" r="5" fill="currentColor" stroke="none" />
        <circle cx="334" cy="230" r="5" fill="currentColor" stroke="none" />
        <path d="m382 112 8 7-8 7M402 223l8 7-8 7" />
      </g>
      <g fill="currentColor" className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        <text x="78" y="42">Interface</text>
        <text x="390" y="66">System</text>
        <text x="410" y="197">Outcome</text>
      </g>
      <path d="M61 238c45-18 96-20 144-8" className="blueprint-line" strokeDasharray="3 7" />
      <path d="m196 221 12 8-13 6" className="blueprint-line" />
    </svg>
  );
}

function InterfaceDrawing() {
  return (
    <svg viewBox="0 0 420 220" className="h-full w-full" aria-hidden="true">
      <g className="blueprint-line">
        <rect x="57" y="36" width="306" height="148" rx="9" />
        <path d="M57 66h306M76 51h4m10 0h4m10 0h4" />
        <rect x="80" y="88" width="84" height="72" rx="5" />
        <path d="M187 91h144m-144 25h110m-110 23h69" />
        <rect x="187" y="153" width="72" height="15" rx="7.5" />
        <path d="M338 85v67" strokeDasharray="4 6" />
      </g>
    </svg>
  );
}

function WorkflowDrawing() {
  return (
    <svg viewBox="0 0 420 220" className="h-full w-full" aria-hidden="true">
      <g className="blueprint-line">
        <rect x="42" y="81" width="80" height="58" rx="8" />
        <rect x="170" y="45" width="80" height="58" rx="8" />
        <rect x="170" y="133" width="80" height="42" rx="8" />
        <rect x="298" y="81" width="80" height="58" rx="8" />
        <path d="M122 110h24c15 0 24-11 24-25v-5M122 110h24c15 0 24 11 24 25v8M250 74h24c15 0 24 11 24 25v11M250 154h24c15 0 24-11 24-25v-19" />
        <path d="m162 75 8 5 7-6m-15 74 8-5 7 6m113-44 8 5-8 5" />
        <circle cx="82" cy="110" r="10" />
        <path d="m78 110 3 3 6-7M193 70h34m-34 11h22m-22 73h34m93-50h36m-36 12h24" />
      </g>
    </svg>
  );
}

export function ProjectBlueprint({ kind, featured = false }: { kind: ProjectVisualKind; featured?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`graph-paper relative w-full overflow-hidden text-accent ${
        featured ? 'min-h-[20rem] flex-1 max-[720px]:min-h-[15rem]' : 'min-h-[11rem]'
      }`}
    >
      <span className="absolute left-4 top-4 z-[1] font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-accent">
        Fig. {kind === 'architecture' ? '01 / System map' : kind === 'interface' ? '02 / Interface' : '03 / Flow'}
      </span>
      <div className="absolute inset-0 grid place-items-center p-3 opacity-90 transition duration-500 group-hover:scale-[1.015] group-hover:opacity-100">
        {kind === 'architecture' && <ArchitectureDrawing />}
        {kind === 'interface' && <InterfaceDrawing />}
        {kind === 'workflow' && <WorkflowDrawing />}
      </div>
      <span className="absolute bottom-3 right-4 font-mono text-[0.58rem] uppercase tracking-[0.15em] text-faint">
        Selected work
      </span>
    </div>
  );
}
