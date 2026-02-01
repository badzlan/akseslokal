import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingShape {
  id: number;
  size: number;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  color: string;
  blur: number;
}

interface ParallaxBackgroundProps {
  className?: string;
  variant?: 'default' | 'subtle' | 'vibrant';
  shapesCount?: number;
}

const ParallaxBackground = ({
  className,
  variant = 'default',
  shapesCount = 5,
}: ParallaxBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shapes, setShapes] = useState<FloatingShape[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const colors = {
      default: ['hsl(var(--primary) / 0.1)', 'hsl(var(--accent) / 0.08)'],
      subtle: ['hsl(var(--muted) / 0.3)', 'hsl(var(--border) / 0.2)'],
      vibrant: ['hsl(var(--primary) / 0.15)', 'hsl(var(--success) / 0.1)', 'hsl(var(--accent) / 0.12)'],
    };

    const selectedColors = colors[variant];
    
    const newShapes: FloatingShape[] = Array.from({ length: shapesCount }, (_, i) => ({
      id: i,
      size: Math.random() * 200 + 100,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
      blur: Math.random() * 40 + 40,
    }));
    
    setShapes(newShapes);
  }, [variant, shapesCount]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}
    >
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute rounded-full will-change-transform"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            backgroundColor: shape.color,
            filter: `blur(${shape.blur}px)`,
            transform: `translate(-50%, -50%) translateY(${scrollY * shape.speedY}px) translateX(${scrollY * shape.speedX}px)`,
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxBackground;
