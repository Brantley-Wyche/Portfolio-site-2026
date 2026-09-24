<!-- installing-frontend-workflow:start -->
## Frontend workflow

Apply this workflow automatically whenever work changes React components, routes, styles, UI behavior, accessibility, responsive behavior, or frontend performance. Do not run it for backend-only, documentation-only, or non-UI test changes.

Scale it to the change, and move up a tier if the work grows:

- **Trivial** (copy text, a single token or class, or an obvious one-line fix with no layout or behavior change): make the change, then run step 5's repository verification.
- **Refinement** (changes inside an existing surface or component): run steps 2 through 5, using Impeccable only for step 4 remediation.
- **New surface or system change** (a new page, flow, or component family, or changes to the design system, tokens, or visual identity): run every step.

1. Use the `impeccable` skill (`$impeccable` in Codex, `/impeccable` in Claude Code) as the product, UX, and visual-design authority. Preserve the project's established product requirements, design system, components, and visual identity for narrow refinements. Follow Impeccable's discovery and shaping workflow before creating a new surface or replacing the visual system.
2. Use the `vercel-react-best-practices` skill (`$vercel-react-best-practices` in Codex, `/vercel-react-best-practices` in Claude Code) while writing or refactoring React code. Prioritize waterfalls, bundle size, server behavior, data fetching, and rendering before low-impact micro-optimizations. Inspect the actual framework, versions, adapters, and deployment target; apply framework-specific APIs only when supported.
3. Once implementation is stable, use the `web-design-guidelines` skill (`$web-design-guidelines` in Codex, `/web-design-guidelines` in Claude Code) as an independent audit of the changed UI files, and perform a focused React Best Practices review of the same change. Treat findings as review input rather than automatic edits.
4. Classify findings by severity and applicability. Reject findings that conflict with explicit product requirements, accessibility or correctness, the established design system, or verified framework constraints. Feed valid findings through the appropriate Impeccable remediation workflow, such as polish, harden, adapt, clarify, or optimize.
5. Run repository-defined verification and browser QA at desktop and mobile sizes when the result is visual or interactive. Re-run the two targeted audits once on the final changed files; do not create an open-ended polish loop.

Resolve conflicts in this order: explicit user and product requirements; accessibility, correctness, security, and data integrity; established product and design documentation; verified framework behavior and measured performance; general checklist guidance; aesthetic preference.
<!-- installing-frontend-workflow:end -->
