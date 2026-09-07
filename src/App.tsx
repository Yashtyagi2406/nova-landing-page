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
import { GhostFibers } from './components/ui/GhostFibers';

function AppContent() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [bgEffect, setBgEffect] = useState<'ghostfibers' | 'iridescence'>('ghostfibers');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative min-h-screen text-ink transition-colors duration-300 dark:text-paper selection:bg-indigo selection:text-white">
      {/* Whole-Website Background: Dynamic WebGL Effect */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {bgEffect === 'ghostfibers' ? (
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
        ) : (
          <Iridescence
            color={isDark ? [0.30, 0.34, 0.78] : [0.92, 0.94, 1.0]}
            mouseReact={true}
            amplitude={0.09}
            speed={0.65}
          />
        )}
        {/* Ambient translucent veil keeping background restrained and editorial */}
        <div
          className={`absolute inset-0 transition-colors duration-300 ${
            bgEffect === 'ghostfibers'
              ? isDark
                ? 'bg-ink/35'
                : 'bg-paper/55'
              : isDark
              ? 'bg-[#0B0D13]/70 backdrop-blur-[0.5px]'
              : 'bg-paper/60'
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

        {/* Live Effect Comparison Pill */}
        <div className="fixed bottom-5 left-5 z-50 flex items-center gap-1 rounded-full border border-line/80 dark:border-white/15 bg-white/95 dark:bg-[#11141F]/90 backdrop-blur-xl p-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)] text-xs font-medium">
          <span className="pl-2.5 pr-1 text-slate-500 dark:text-slate-400 select-none">Effect:</span>
          <button
            type="button"
            onClick={() => setBgEffect('ghostfibers')}
            className={`rounded-full px-3 py-1 transition-all ${
              bgEffect === 'ghostfibers'
                ? 'bg-indigo text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            GhostFibers
          </button>
          <button
            type="button"
            onClick={() => setBgEffect('iridescence')}
            className={`rounded-full px-3 py-1 transition-all ${
              bgEffect === 'iridescence'
                ? 'bg-indigo text-white shadow-xs font-semibold'
                : 'text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10'
            }`}
          >
            Iridescence
          </button>
        </div>
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

