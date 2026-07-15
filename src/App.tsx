import { useState } from 'react';
import { SmoothScroll } from './components/layout/SmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';
import { BackgroundScene } from './components/3d/BackgroundScene';
import { BootSequence } from './components/sections/BootSequence';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { AIBrain } from './components/sections/AIBrain';
import { Contact, Footer } from './components/sections/Contact';

function App() {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <SmoothScroll>
      <CustomCursor />
      
      {/* Background is always mounted but we might want it to reveal nicely */}
      <BackgroundScene />

      <BootSequence onComplete={() => setBootComplete(true)} />

      {/* Main Content - Only visible after boot */}
      <main
        className={`relative z-10 transition-opacity duration-1000 ${
          bootComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Achievements />
        <AIBrain />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default App;
