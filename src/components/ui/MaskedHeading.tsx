import { useEffect, useRef, useState, useId } from 'react';
import type { ElementType } from 'react';
import { cn } from '../../lib/utils';

export interface MaskedHeadingProps {
  text: string;
  src: string;
  mediaType?: 'image' | 'video';
  poster?: string;
  fillScale?: number;
  parallax?: number;
  reveal?: 'wipe' | 'fade' | 'none';
  trigger?: 'view' | 'hover' | 'scroll';
  as?: ElementType;
  className?: string;
}

export function MaskedHeading({
  text,
  src,
  mediaType = 'image',
  poster,
  fillScale = 1,
  parallax = 0,
  reveal = 'none',
  trigger = 'view',
  as: Component = 'h2',
  className,
}: MaskedHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(reveal === 'none');
  const [isHovered, setIsHovered] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const uniqueId = useId().replace(/:/g, '');
  const clipId = `masked-heading-clip-${uniqueId}`;

  // View-based trigger via IntersectionObserver
  useEffect(() => {
    if (trigger !== 'view' && reveal === 'none') {
      setIsRevealed(true);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (trigger === 'view') {
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [trigger, reveal]);

  // Parallax on scroll
  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress between entering bottom and leaving top of viewport (-1 to 1)
      const progress = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
      setParallaxOffset(Math.max(-1, Math.min(1, progress)) * parallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [parallax]);

  // Reveal styles
  const getRevealStyle = () => {
    if (reveal === 'wipe') {
      return {
        clipPath: isRevealed ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
        transition: 'clip-path 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
      };
    }
    if (reveal === 'fade') {
      return {
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      };
    }
    return {};
  };

  const scale = isHovered && trigger === 'hover' ? fillScale * 1.08 : fillScale;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={getRevealStyle()}
      className={cn('relative inline-block max-w-full overflow-hidden', className)}
    >
      {mediaType === 'image' ? (
        <Component
          className={cn(
            'bg-cover bg-center bg-clip-text text-transparent font-display font-black tracking-tight select-none',
            'transition-transform duration-500 ease-out'
          )}
          style={{
            backgroundImage: `url(${src})`,
            transform: `scale(${scale}) translateY(${parallaxOffset}px)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {text}
        </Component>
      ) : (
        <div className="relative inline-block w-full">
          {/* Accessible hidden text placeholder for layout calculation & SEO */}
          <Component
            className="font-display font-black tracking-tight opacity-0 select-none pointer-events-none"
            aria-hidden="true"
          >
            {text}
          </Component>

          {/* Cross-browser SVG Masked Video */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none select-none"
            viewBox="0 0 1000 180"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <clipPath id={clipId}>
                <text
                  x="50%"
                  y="52%"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                  fontWeight="900"
                  letterSpacing="-0.03em"
                  fontSize={
                    text.length > 24
                      ? '68px'
                      : text.length > 18
                      ? '84px'
                      : text.length > 12
                      ? '104px'
                      : '124px'
                  }
                >
                  {text}
                </text>
              </clipPath>
            </defs>

            {/* Static poster fallback for instant render & Safari compatibility */}
            {(poster || src) && (
              <image
                href={poster || src}
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                clipPath={`url(#${clipId})`}
              />
            )}

            {/* Video layer inside clipPath */}
            <foreignObject
              x="0"
              y="0"
              width="100%"
              height="100%"
              clipPath={`url(#${clipId})`}
            >
              <video
                src={src}
                poster={poster}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: `scale(${scale}) translateY(${parallaxOffset}px)`,
                  transition: 'transform 0.5s ease-out',
                }}
              />
            </foreignObject>
          </svg>

          {/* Screen reader text */}
          <span className="sr-only">{text}</span>
        </div>
      )}
    </div>
  );
}

export default MaskedHeading;
