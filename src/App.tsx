import { useEffect } from 'react';
import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { Experience } from './sections/Experience';
import { Projects } from './sections/projects/Projects';
import { Approach } from './sections/Approach';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';

export default function App() {
  useEffect(() => {
    // The browser can resolve an incoming fragment before React mounts its target.
    const fragment = window.location.hash.slice(1);
    if (!fragment) return;
    let id: string;
    try { id = decodeURIComponent(fragment); }
    catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'instant' });
    // Repeat the fragment navigation now that the target exists, so :target styles apply.
    window.location.replace(window.location.hash);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Approach />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
