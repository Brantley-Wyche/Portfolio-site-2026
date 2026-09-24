---
name: Brantley Wyche Portfolio
description: A professional engineer's notebook in warm paper and teal.
colors:
  primary: "#087166"
  primary-strong: "#075b53"
  primary-soft: "#e5efe8"
  background: "#f7f3ea"
  background-subtle: "#f1eadf"
  surface: "#fffdf8"
  graph: "#fbfaf4"
  ink: "#101820"
  muted: "#45525a"
  faint: "#526168"
  border: "#ddd5c7"
  border-strong: "#b8ae9f"
  note: "#f3dda0"
  note-border: "#dcc57d"
  tape: "#4b9887"
  tape-shadow: "rgb(35 73 65 / 10%)"
  on-primary: "#ffffff"
typography:
  display:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "clamp(3rem, 10cqi + 0.5rem, 6rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 3.8vw, 2.8rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.06em"
  handwritten:
    fontFamily: "Caveat, Segoe Print, cursive"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.3
  identity:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "0.8rem"
    fontWeight: 500
  brand-mark:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 500
  diagram-annotation:
    fontFamily: "JetBrains Mono, ui-monospace, Consolas, monospace"
    # SVG user units in the 640-unit drawing; renders about 10–11px at current card widths.
    fontSize: "22px"
    fontWeight: 500
    letterSpacing: "0.12em"
  supporting:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
  text-link:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
  button:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
  introduction:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.05rem"
  education-title:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "1.25rem"
    fontWeight: 600
  toolkit-title:
    fontFamily: "Caveat, Segoe Print, cursive"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.3
  contact-address:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.2
  principle-title:
    fontFamily: "Caveat, Segoe Print, cursive"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.3
  project-title:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "1.45rem"
    fontWeight: 600
  role-title:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "1.5rem"
    fontWeight: 600
  evidence:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "2rem"
    fontWeight: 600
  evidence-wide:
    fontFamily: "Literata, Georgia, Times New Roman, serif"
    fontSize: "2.25rem"
    fontWeight: 600
rounded:
  focus: "4px"
  menu: "8px"
  note: "3px"
  control: "9px"
  paper: "12px"
spacing:
  small: "0.75rem"
  medium: "1rem"
  card-gap: "1.25rem"
  large: "1.5rem"
  extra-large: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1.1rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
  paper-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.paper}"
  note-card:
    backgroundColor: "{colors.note}"
    rounded: "{rounded.note}"
---

# Design System: Brantley Wyche Portfolio

## Overview

**Creative North Star: "The Engineer’s Notebook"**

A professional engineer’s notebook: warm paper, dark ink, restrained teal, and a few taped notes. The material details give the portfolio a recognizable identity while the typography and spacing keep career evidence easy to scan.

**Key Characteristics:**

- Warm paper and subtle graph lines
- Clear, compact typographic hierarchy
- Selective tape and soft paper shadows
- Visible content with restrained motion

## Colors

Teal supplies emphasis and interaction; warm neutrals carry the page. Dark ink is the main text color, muted slate is body copy, and faint slate is supporting information. The yellow note and translucent green tape belong to the paper metaphor.

Primary button text uses on-primary; normal text and small teal links must maintain at least 4.5:1 contrast. Borders and graph lines are structural or decorative, never the only label for an action.

## Typography

Literata gives headings and evidence values a printed-book character. IBM Plex Sans carries readable prose and controls, with its natural spacing and 1.65 body line height. JetBrains Mono is reserved for short field labels and identity metadata. Caveat gives the approach and toolkit note headings and the contact location note a consistent handwritten voice; important body copy remains in IBM Plex Sans. Toolkit entries use 500 weight and dark ink for clear separation from their smaller proficiency labels. Literata uses automatic optical sizing across its 7–72 range; load only its 600 weight, the 400, 500, and 600 weights used by IBM Plex Sans, and JetBrains Mono 500.

Body copy uses the body role. Supporting dates and evidence labels are 0.875rem; field labels use the label role. Headings balance lines and may wrap long words rather than overflow. Use -0.03em tracking for the large name and -0.02em for headings; keep body text at normal tracking. Fonts load with swap and system fallbacks.

Contact uses a shared 1.5rem graph row for spacing and leading: its heading spans two rows, while each description, label, and email line spans one. The address has a 0.25rem optical baseline offset so the ink sits on the ruling. Card padding starts text on grid intersections, including the narrower one-cell mobile gutter. The graph scales with enlarged text.

The diagram-annotation role is confined to decorative text inside the project SVG sketches, which are hidden from assistive technology and scale with the drawing. Its size is set in SVG user units so it renders near 11px at current card widths; a CSS pixel size would shrink with the drawing to an unreadable 5px. It carries no project information or controls. It is not a size option for readable UI labels, which retain the label role above.

## Layout

One container aligns the header and all sections: maximum 70rem with 16–32px side gutters. Sections use 2.75–4rem vertical padding; the hero uses 2.5rem above and below. Shared headings separate from content by 1.75rem.

Container queries respond to available space and rem-based text scale: the hero introduction and career evidence split at 40rem; navigation and experience split at 48rem; principles and toolkit become three columns at 51rem; the hero gains a narrow notebook margin and contact splits at 56rem. Below these widths, content stacks. Project cards use an auto-fitting grid with a shrinkable 17rem minimum.

On viewports below 40rem, nested cards use 20px padding to retain reading space. Below 30rem, the header retains its monogram, résumé, and menu button. Education shows the degree, school, and location without dates.

## Elevation & Depth

Paper cards use subtle ambient shadows. The yellow contact note is slightly more lifted. Approach notes behave like sticky notes: the adhesive top lies flat, and a narrow shadow and faint shading show only the bottom edge lifting. Graph paper uses fine teal lines on a light surface. Tape marks things pinned into the notebook, only the project figures and the contact location note, so it keeps its meaning. Only the first and last approach notes rotate, by half a degree, when their container supports three columns.

Shadows describe material. They do not imply that passive cards can be clicked. Exact shadow values are maintained in the sidecar and CSS.

## Shapes

Paper cards have gently curved corners, controls and graph surfaces slightly tighter curves, and notes almost square corners. The small BW stamp has a crisp border and offset teal shadow. Decorative diagrams are inline SVG and hidden from assistive technology.

## Components

- **Hero:** an asymmetric notebook opening page with no top border. The name leads; role and location are vertically centered in a ruled margin on wide screens. Career highlights form a quiet ledger alongside the introduction. A single View projects link leads to Selected work from the bottom navigation row; the résumé stays in the header. On smaller screens the margin becomes a row, the link follows the introduction, and the evidence comes last, retaining left alignment. Evidence values and labels share a row from an 18rem container; below that they stack to accommodate enlarged text.
- **Experience:** plain white paper cards without tape; the evidence carries the section.
- **Education:** a distinct white paper panel with a clear degree heading. Its label and degree align with the career-card columns on wide screens and stack below 48rem. No dates or duplicate résumé action.
- **ButtonLink:** native anchors, primary and secondary variants, 48px minimum height; small header variant 44px. Darker teal on primary hover/active, tinted paper on secondary hover. Focus uses a 3px teal outline with 4px offset.
- **Navigation:** paper header, normal anchor links, always-visible résumé. The mobile disclosure focuses Experience on opening, closes on Escape with focus restored, and closes when a link is followed or the desktop layout becomes active.
- **Paper / graph / note:** shared material primitives. Tape is decorative and cannot intercept pointer input. Project illustrations preserve aspect ratio; the full cards stay passive.
- **Project cards:** taped figures; tape alternates left and right by position. Optional descriptions, roles, tags, and external links render only when supplied. Link names include their visible Code or Visit labels. Empty collections retain the Work destination.
- **Approach and toolkit note headings:** both use the shared handwritten heading and bottom rule. Yellow notes use their warmer border color; white notes use the paper border. Body copy remains in IBM Plex Sans.
- **Toolkit:** three white notes with handwritten category headings and an ink rule below each heading. Proficiency labels appear once per subgroup, above medium-weight skill lists. When the notes sit side by side, all three share the tallest note's height using flexible grid tracks; stacked notes fit their own content. Content can grow without fixed heights or clipping.
- **Contact:** graph paper with a prominent dark-ink email entry and a supporting résumé text link. The underline follows the actual text on each wrapped line; an inline arrow follows the address with a 0.4em gap. A zero underline offset keeps the rule on the graph baseline. These native anchors use ink and rules rather than filled button surfaces. The email can break before the domain or within a long word, while its actual text and mailto address remain intact. A smaller taped yellow note carries only the handwritten location, without an extra label. The footer keeps only Back to top beside the copyright.
- **Motion:** one 400ms entrance on the hero introduction; 160ms button color transitions. Content elsewhere is visible immediately. Reduced motion disables these transitions and smooth scrolling.

## Do's and Don'ts

- Do preserve the notebook, graph-paper, and tape identity.
- Do keep useful body copy at 1rem and supporting labels at least 0.75rem.
- Do let content reflow at narrow widths and enlarged text sizes.
- Do keep focus visible and standalone controls at least 44px in both dimensions.

- Don’t add hover movement to passive cards, statistics, or illustrations.
- Don’t hide sections behind scroll-reveal observers.
- Don’t shrink or truncate important content to force it into a fixed layout.
- Don’t replace intentionally unfinished projects with invented case studies.
- Don’t tape every card. Tape on everything stops meaning anything, and sticky notes stick on their own.
