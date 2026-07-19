import { site } from '../data/site';
import { Github, Linkedin, Mail } from './Icons';
import { Container } from './Container';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-wrap items-center justify-between gap-4 max-[560px]:justify-center max-[560px]:text-center">
        <p className="text-[0.875rem] text-faint">
          © {year} {site.name}. Built with React &amp; TypeScript.
        </p>

        <div className="order-3 flex gap-2">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-bg-subtle hover:text-accent"
          >
            <Mail size={18} />
          </a>
          {site.linkedin && (
            <a
              href={site.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-bg-subtle hover:text-accent"
            >
              <Linkedin size={18} />
            </a>
          )}
          {site.github && (
            <a
              href={site.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition hover:bg-bg-subtle hover:text-accent"
            >
              <Github size={18} />
            </a>
          )}
        </div>

        <a
          href="#top"
          className="text-[0.875rem] font-medium text-muted transition hover:text-accent"
        >
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
