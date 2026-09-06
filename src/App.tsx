import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTopButton } from './components/layout/BackToTopButton';
import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { Features } from './components/sections/Features';
import { VisualShowcase } from './components/sections/VisualShowcase';
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

function App() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-ink dark:text-paper">
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
            <VisualShowcase />
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
    </ThemeProvider>
  );
}

export default App;
