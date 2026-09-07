import GhostFibers from '../ui/GhostFibers';
import { Badge } from '../ui/Badge';
import { Sparkles, Activity } from 'lucide-react';

export function FiberShowcase() {
  return (
    <section id="fiber-network" className="relative overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge tone="indigo">
            <Sparkles className="h-3.5 w-3.5 mr-1.5 inline-block" />
            Neural Fiber Simulation
          </Badge>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink dark:text-paper sm:text-4xl">
            Real-time WebGL2 Shader Architecture
          </h2>
          <p className="mt-3 text-base text-muted">
            Fluid recursive wave distortion and luminous glowing fiber cores rendered at 60fps on your GPU.
          </p>
        </div>

        {/* The Exact User Snippet: 100% width, 600px height, relative */}
        <div
          className="relative w-full rounded-3xl overflow-hidden border border-line/80 dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(20,22,28,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]"
          style={{ width: '100%', height: '600px', position: 'relative' }}
        >
          <GhostFibers
            lineColor="#140E35"
            glowColor="#3437A0"
            speed={0.2}
            scale={2}
            rotation={0}
            rotationSpeed={0.25}
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
            glowIntensity={1.6}
            brightness={2}
            blueBoost={1.25}
            vignette={0.8}
            grain={0.05}
            dpr={1}
          />
          <div className="pointer-events-none absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto flex items-center gap-3 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl px-4 py-2.5 text-xs text-slate-300">
            <Activity className="h-4 w-4 text-indigo-light" />
            <span>WebGL 2.0 • 60 FPS • Multi-layer recursive wave simulation</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FiberShowcase;
