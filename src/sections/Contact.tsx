import { useEffect, useState } from 'react';
import { site } from '../data/site';
import { Container } from '../components/layout/Container';
import { GraphPaper, MarginNote, NoteCard, Tape } from '../components/ui/Editorial';
import { ArrowUpRight, Check, Copy, Download, Github, Linkedin } from '../components/ui/Icons';

type CopyStatus = 'idle' | 'copied' | 'failed';

const hints: Record<CopyStatus, string> = {
  idle: 'best way to reach me',
  copied: 'copied!',
  failed: 'select it to copy',
};
const announcements: Record<CopyStatus, string> = {
  idle: '',
  copied: 'Email address copied.',
  failed: 'Couldn’t copy. Select the email address to copy it.',
};

/** The mailto link plus a copy button, for visitors whose browser has no mail app set up. */
function EmailEntry() {
  const [mailbox, domain] = site.email.split('@');
  const [status, setStatus] = useState<CopyStatus>('idle');

  useEffect(() => {
    if (status === 'idle') return;
    const timer = window.setTimeout(() => setStatus('idle'), 2400);
    return () => window.clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
  };

  return (
    <>
      <div className="contact-email">
        <a className="contact-email-link" href={`mailto:${site.email}`}>
          <span className="contact-email-text">{mailbox}</span><wbr />
          <span className="contact-email-tail">
            <span className="contact-email-text">@{domain}</span>
          </span>
        </a>
        <button type="button" className="copy-button" onClick={copy} aria-label="Copy email address">
          {status === 'copied' ? <Check size={16} /> : <Copy size={16} />}
          Copy
        </button>
      </div>
      <MarginNote className="contact-hint">{hints[status]}</MarginNote>
      <span role="status" className="sr-only">{announcements[status]}</span>
    </>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <Container>
        <GraphPaper className="contact-card">
          <div className="min-w-0">
            <h2>Let’s talk.</h2>
            <p className="contact-description">{site.availability}</p>
            <div className="contact-actions">
              <EmailEntry />
              <a className="text-link contact-resume" href={site.resumeUrl} download>
                Download résumé <Download size={18} />
              </a>
            </div>
            {(site.linkedin || site.github) && (
              <div className="social-links">
                {site.linkedin && <a href={site.linkedin} target="_blank" rel="noreferrer noopener" className="text-link"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>}
                {site.github && <a href={site.github} target="_blank" rel="noreferrer noopener" className="text-link"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>}
              </div>
            )}
          </div>
          <NoteCard id="now" className="contact-note">
            <Tape side="right" />
            <p className="handwritten">Based in<br />{site.location}.</p>
          </NoteCard>
        </GraphPaper>
      </Container>
    </section>
  );
}
