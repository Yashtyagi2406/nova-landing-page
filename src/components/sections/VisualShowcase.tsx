import MaskedHeading from '../ui/MaskedHeading';
import { Badge } from '../ui/Badge';
import { Sparkles, Film, Eye } from 'lucide-react';

export function VisualShowcase() {
  return (
    <section
      id="craft"
      className="relative overflow-hidden border-y border-line/80 dark:border-white/10 bg-slate-950 text-white py-24 lg:py-36 selection:bg-amber selection:text-ink"
    >
      {/* Background ambient lighting effects */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full opacity-30 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(76, 95, 224, 0.45) 0%, rgba(232, 163, 61, 0.25) 50%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 h-[300px] w-[400px] rounded-full opacity-20 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(232, 163, 61, 0.4) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <Badge tone="amber" className="bg-amber/15 text-amber border-amber/30">
            <Sparkles className="h-3.5 w-3.5 mr-1.5 inline-block" />
            Visual Craft & Dynamic Typography
          </Badge>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Obsessive engineering, down to the pixel
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Dynamic masked typography with hardware-accelerated shaders, scroll parallax, and directional clip wipes.
          </p>
        </div>

        {/* Display Grid */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {/* Card 1: Static Image Texture Mask */}
          <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 sm:p-12 lg:p-16 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                IMAGE_TEXTURE_MASK
              </span>
              <span className="text-xs font-mono text-slate-400">CSS background-clip: text</span>
            </div>

            <div className="py-6 sm:py-10 text-center flex flex-col items-center justify-center overflow-hidden">
              <MaskedHeading
                text="Designed in the details"
                src="/hero.jpg"
                fillScale={1.1}
                parallax={20}
                trigger="hover"
                as="h2"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl cursor-default"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <p>Hover to scale texture • Multi-layer iridescent chrome raster</p>
              <div className="flex items-center gap-2 text-slate-300">
                <Eye className="h-4 w-4 text-amber" />
                <span>Scroll parallax enabled</span>
              </div>
            </div>
          </div>

          {/* Card 2: Video Motion Mask with Wipe Reveal */}
          <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-8 sm:p-12 lg:p-16 backdrop-blur-2xl transition-all duration-500 hover:border-white/20 shadow-2xl">
            <div className="flex items-center justify-between gap-4 mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-light animate-pulse" />
                VIDEO_MOTION_MASK
              </span>
              <span className="text-xs font-mono text-slate-400">SVG clipPath + foreignObject</span>
            </div>

            <div className="py-6 sm:py-10 text-center flex flex-col items-center justify-center overflow-hidden">
              <MaskedHeading
                text="Shot on location"
                mediaType="video"
                src="/reel.mp4"
                poster="/reel-poster.jpg"
                fillScale={1.3}
                parallax={34}
                reveal="wipe"
                trigger="view"
                as="h3"
                className="w-full text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
              />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <p>Continuous hardware-decoded loop • Directional wipe reveal on scroll</p>
              <div className="flex items-center gap-2 text-slate-300">
                <Film className="h-4 w-4 text-indigo-light" />
                <span>Autoplay muted • 60fps raster</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisualShowcase;
