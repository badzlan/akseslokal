import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  speed?: number;
  overlay?: boolean;
  overlayOpacity?: number;
}

const ParallaxSection = ({
  children,
  className,
  backgroundImage,
  backgroundColor,
  speed = 0.3,
  overlay = false,
  overlayOpacity = 0.5,
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = windowHeight - rect.top;
      
      setOffset(scrolled * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <section
      ref={sectionRef}
      className={cn('relative overflow-hidden', className)}
      style={{ backgroundColor }}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offset}px) scale(1.2)`,
          }}
        />
      )}
      
      {overlay && backgroundImage && (
        <div
          className="absolute inset-0 bg-foreground"
          style={{ opacity: overlayOpacity }}
        />
      )}
      
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default ParallaxSection;
