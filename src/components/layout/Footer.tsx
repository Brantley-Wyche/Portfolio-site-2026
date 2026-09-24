import { site } from '../../data/site';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-content">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="footer-links">
          <a href="#top" className="text-link">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </Container>
    </footer>
  );
}
