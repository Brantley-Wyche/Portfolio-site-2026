import { site } from '../data/site';
import { ArrowUpRight, Download, Github, Linkedin, Mail } from './Icons';
import { Button } from './Button';
import { Container } from './Container';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <section id="contact" className="py-24 max-[720px]:py-16">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[20px] border border-border bg-surface p-[clamp(2rem,1rem+6vw,4.5rem)] text-center shadow-[var(--shadow-md)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background:radial-gradient(70%_120%_at_50%_0%,var(--accent-soft),transparent_60%)]"
          />

          <Eyebrow>Get in touch</Eyebrow>

          <h2 className="relative mt-3 text-[clamp(1.9rem,1.3rem+2.6vw,3rem)] font-bold tracking-[-0.03em]">
            Let&apos;s build something great.
          </h2>

          <p className="relative mx-auto mt-4 max-w-[50ch] text-[1.0625rem] text-muted">
            I&apos;m open to frontend and full-stack roles where craft and user experience matter.
            Have a team or a project in mind? I&apos;d love to hear about it.
          </p>

          <div className="relative mt-8 flex flex-wrap justify-center gap-3 max-[520px]:flex-col">
            <Button href={`mailto:${site.email}`} variant="primary">
              <Mail size={18} />
              {site.email}
            </Button>
            <Button href={site.resumeUrl} download variant="secondary">
              <Download size={18} />
              Download résumé
            </Button>
          </div>

          {(site.linkedin || site.github) && (
            <div className="relative mt-8 flex flex-wrap justify-center gap-6">
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-[0.925rem] font-medium text-muted transition hover:text-accent"
                >
                  <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
                </a>
              )}
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-[0.925rem] font-medium text-muted transition hover:text-accent"
                >
                  <Github size={18} /> GitHub <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
