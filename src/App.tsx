import { DisciplineProvider } from './context/DisciplineContext';
import { Header } from './components/shared/Header';
import { Hero } from './components/shared/Hero';
import { About } from './components/shared/About';
import { Projects } from './components/shared/Projects';
import { DesignShowcase } from './components/shared/DesignShowcase';
import { Lab } from './components/shared/Lab';
import { Skills } from './components/shared/Skills';
import { Timeline } from './components/shared/Timeline';
import { Contact } from './components/shared/Contact';
import { Footer } from './components/shared/Footer';

function App() {
  return (
    <DisciplineProvider>
      <div className="min-h-screen bg-brand-obsidian text-neutral-300 relative flex flex-col justify-between">

        {/* Navigation Glass Header */}
        <Header />

        {/* Core Page Layout Flow */}
        <main className="flex-grow">
          {/* Hero Section containing dynamic widgets */}
          <Hero />

          {/* About Me Section outlining core philosophy and disciplines */}
          <About />

          {/* Featured Engineering and Web Projects */}
          <Projects />

          {/* Dedicated UI/UX Design Case Studies */}
          <DesignShowcase />

          {/* The Lab - detailed interactions dashboard */}
          <Lab />

          {/* Interactive Skill Matrix Console */}
          <Skills />

          {/* Professional Work History & Log */}
          <Timeline />

          {/* Integration & Form Database Console */}
          <Contact />
        </main>

        {/* Minimal Footer */}
        <Footer />

      </div>
    </DisciplineProvider>
  );
}

export default App;
