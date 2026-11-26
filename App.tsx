import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { PipelineProgress } from './components/PipelineProgress';
import './styles.css';

export default function App() {
  return (
    <div className="portfolio-page">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <PipelineProgress />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Portfolio />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
