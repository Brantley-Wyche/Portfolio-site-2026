import { site } from '../data/site';
import { stats } from '../data/stats';
import { Container } from '../components/layout/Container';
import { ArrowRight } from '../components/ui/Icons';

export function Hero() {
  return (
    <section id="top" className="hero">
      <Container>
        <div className="hero-sheet">
          <div className="hero-margin">
            <p className="hero-role">{site.role}</p>
            <p className="hero-location">{site.location}</p>
          </div>
          <div className="hero-body">
            <div className="hero-intro">
              <h1>{site.name}</h1>
              <p className="hero-description">{site.shortBio}</p>
            </div>
            <div className="hero-paths">
              <a className="hero-projects" href="#projects">View projects <ArrowRight size={24} /></a>
            </div>
            <dl className="hero-evidence" aria-label="Career highlights">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.value}</dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
