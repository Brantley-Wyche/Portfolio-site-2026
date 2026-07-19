import { site } from '../data/site';
import { ArrowUpRight, Download, Github, Linkedin, Mail } from './Icons';
import { Button } from './Button';
import { Container } from './Container';
import { FieldLabel, GraphPaper, NoteCard, Tape } from './Editorial';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <Container>
        <Reveal>
          <GraphPaper className="grid grid-cols-[minmax(0,1fr)_minmax(23rem,0.52fr)] items-center gap-10 p-[clamp(1.75rem,1rem+4vw,4.5rem)] max-[800px]:grid-cols-1">
            <div>
              <FieldLabel>Start a conversation</FieldLabel>
              <h2 className="balance-text mt-4 max-w-[12ch] text-[clamp(2.4rem,1.55rem+3.5vw,5rem)] font-extrabold">
                Let’s make complex things clearer.
              </h2>
              <p className="mt-5 max-w-[54ch] text-[1.05rem] text-muted">
                I’m open to frontend engineering opportunities in the NYC and New Jersey area.
                If your team values thoughtful interfaces and durable systems, I’d like to hear from you.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 max-[520px]:flex-col">
                <Button href={`mailto:${site.email}`} variant="primary">
                  <Mail size={18} />
                  Send an email
                </Button>
                <Button href={site.resumeUrl} download variant="secondary">
                  <Download size={18} />
                  Download résumé
                </Button>
              </div>

              {(site.linkedin || site.github) && (
                <div className="mt-7 flex flex-wrap gap-5">
                  {site.linkedin && (
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-accent"
                    >
                      <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
                    </a>
                  )}
                  {site.github && (
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition hover:text-accent"
                    >
                      <Github size={17} /> GitHub <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="relative max-[800px]:max-w-sm">
              <NoteCard className="rotate-[2deg] p-6 max-[800px]:rotate-0">
                <Tape side="right" />
                <p className="font-mono text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  Direct line
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block whitespace-nowrap font-semibold text-text underline decoration-accent/50 decoration-2 hover:text-accent"
                >
                  {site.email}
                </a>
                <div className="my-6 h-px bg-black/15" />
                <p className="handwritten text-[1.7rem] leading-tight text-text">Available for the right next challenge.</p>
              </NoteCard>
            </div>
          </GraphPaper>
        </Reveal>
      </Container>
    </section>
  );
}
