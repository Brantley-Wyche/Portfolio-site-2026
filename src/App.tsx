import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ValueProp } from './components/ValueProp';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Beyond } from './components/Beyond';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-border focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-text focus:shadow-[var(--shadow-md)]"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Projects />
        <ValueProp />
        <Experience />
        <Skills />
        <Beyond />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
