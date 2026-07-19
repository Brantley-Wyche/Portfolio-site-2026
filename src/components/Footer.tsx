import { site } from '../data/site';
import { Github, Linkedin, Mail } from './Icons';
import { Container } from './Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-strong/70 bg-bg-subtle/65 py-8">
      <Container className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 max-[700px]:grid-cols-1 max-[700px]:justify-items-center max-[700px]:text-center">
        <div>
          <p className="font-display text-[1.05rem] font-bold text-text">{site.name}</p>
          <p className="mt-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.11em] text-faint">
            Frontend software engineer
          </p>
        </div>

        <p className="text-center text-[0.78rem] text-faint">
          © {year} · Built with React &amp; TypeScript
        </p>

        <div className="flex items-center justify-end gap-1 justify-self-end max-[700px]:justify-self-center">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email Brantley Wyche"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition hover:bg-surface hover:text-accent"
          >
            <Mail size={17} />
          </a>
          {site.linkedin && (
            <a
              href={site.linkedin}
              aria-label="LinkedIn profile"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition hover:bg-surface hover:text-accent"
            >
              <Linkedin size={17} />
            </a>
          )}
          {site.github && (
            <a
              href={site.github}
              aria-label="GitHub profile"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition hover:bg-surface hover:text-accent"
            >
              <Github size={17} />
            </a>
          )}
          <a
            href="#top"
            className="ml-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-muted transition hover:text-accent"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
