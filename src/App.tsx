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
import { Iridescence } from './components/ui/Iridescence';

function AppContent() {
  const [demoOpen, setDemoOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative min-h-screen text-ink transition-colors duration-300 dark:text-paper selection:bg-indigo selection:text-white">
      {/* Whole-Website Background: Fixed WebGL Iridescence */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <Iridescence
          color={isDark ? [0.38, 0.42, 0.95] : [0.92, 0.94, 1.0]}
          mouseReact={true}
          amplitude={0.12}
          speed={0.8}
        />
        {/* Subtle translucent veil ensuring text readability while letting fluid caustics shine through */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            isDark ? 'bg-ink/55' : 'bg-paper/60'
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

