import { site } from '../data/site';
import { Container } from '../components/layout/Container';
import { GraphPaper, NoteCard, Tape } from '../components/ui/Editorial';
import { ArrowUpRight, Download, Github, Linkedin } from '../components/ui/Icons';

export function Contact() {
  const [mailbox, domain] = site.email.split('@');
  return (
    <section id="contact" className="section-shell">
      <Container>
        <GraphPaper className="contact-card">
          <div className="min-w-0">
            <h2>Let’s talk.</h2>
            <p className="contact-description">{site.availability}</p>
            <div className="contact-actions">
              <a className="contact-email-link" href={`mailto:${site.email}`}>
                <span className="field-label">Send an email</span>
                <span className="contact-email-address">
                  <span className="contact-email-text">{mailbox}</span><wbr />
                  <span className="contact-email-tail">
                    <span className="contact-email-text">@{domain}</span>
                    <ArrowUpRight size={24} />
                  </span>
                </span>
              </a>
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
