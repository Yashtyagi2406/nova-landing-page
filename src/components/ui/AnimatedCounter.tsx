import { useEffect, useState } from 'react';
import { useOnScreen } from '../../hooks/useOnScreen';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  durationMs?: number;
}

export function AnimatedCounter({ value, suffix = '', durationMs = 1400 }: AnimatedCounterProps) {
  const { ref, isVisible } = useOnScreen<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, value, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {isDecimal ? display.toFixed(1) : Math.round(display).toLocaleString()}
      {suffix}
    </span>
  );
}
