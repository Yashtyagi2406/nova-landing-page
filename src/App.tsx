import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTopButton } from './components/layout/BackToTopButton';
import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { Features } from './components/sections/Features';
import { ProductAbout } from './components/sections/ProductAbout';
import { HowItWorks } from './components/sections/HowItWorks';
import { Statistics } from './components/sections/Statistics';
import { Solutions } from './components/sections/Solutions';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { DemoModal } from './components/ui/DemoModal';
import { ScrollReveal } from './components/ui/ScrollReveal';
import { GhostFibers } from './components/ui/GhostFibers';

function AppContent() {
  const [demoOpen, setDemoOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative min-h-screen text-ink transition-colors duration-300 dark:text-paper selection:bg-indigo selection:text-white">
      {/* Whole-Website Background: WebGL GhostFibers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <GhostFibers
          lineColor={isDark ? '#140E35' : '#312E81'}
          glowColor={isDark ? '#3437A0' : '#4C5FE0'}
          speed={0.18}
          scale={2.2}
          rotation={0}
          rotationSpeed={0.2}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.8}
          brightness={2}
          blueBoost={1.25}
          vignette={0.75}
          grain={0.05}
          dpr={1}
          lightMode={!isDark}
        />
        {/* Subtle translucent veil ensuring text readability while letting fibers shine through */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isDark ? 'bg-ink/35' : 'bg-paper/55'
          }`}
        />
      </div>

      {/* Foreground Website Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero onWatchDemo={() => setDemoOpen(true)} />
          <ScrollReveal>
            <TrustedBy />
          </ScrollReveal>
          <ScrollReveal>
            <Features />
          </ScrollReveal>
          <ScrollReveal>
            <ProductAbout />
          </ScrollReveal>
          <ScrollReveal>
            <HowItWorks />
          </ScrollReveal>
          <ScrollReveal>
            <Statistics />
          </ScrollReveal>
          <ScrollReveal>
            <Solutions />
          </ScrollReveal>
          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>
          <ScrollReveal>
            <Pricing />
          </ScrollReveal>
          <ScrollReveal>
            <FAQ />
          </ScrollReveal>
          <ScrollReveal>
            <FinalCTA />
          </ScrollReveal>
        </main>
        <Footer />
        <BackToTopButton />
        <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

