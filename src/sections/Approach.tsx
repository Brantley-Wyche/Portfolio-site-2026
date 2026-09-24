import { principles } from '../data/approach';
import { Container } from '../components/layout/Container';
import { NoteCard } from '../components/ui/Editorial';
import { SectionHeading } from '../components/ui/SectionHeading';

export function Approach() {
  return (
    <section id="approach" className="section-shell">
      <Container>
        <SectionHeading title="How I work" />
        <ul className="principles">
          {principles.map((principle) => (
            <li key={principle.title}>
              <NoteCard className="principle-note">
                <h3 className="handwritten note-heading">{principle.title}</h3>
                <p>{principle.body}</p>
              </NoteCard>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
