import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';
import { PipelineProgress } from './components/PipelineProgress';
import { Portfolio } from './components/Portfolio';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-devops-accent selection:text-slate-900">
      <Navbar />
      <PipelineProgress />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Certifications />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default App;