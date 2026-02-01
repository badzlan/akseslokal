import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once && hasAnimated) return;
        
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, once, hasAnimated]);

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
    
    const animations = {
      'fade-up': {
        initial: { opacity: 0, transform: 'translateY(40px)' },
        visible: { opacity: 1, transform: 'translateY(0)' },
      },
      'fade-down': {
        initial: { opacity: 0, transform: 'translateY(-40px)' },
        visible: { opacity: 1, transform: 'translateY(0)' },
      },
      'fade-left': {
        initial: { opacity: 0, transform: 'translateX(40px)' },
        visible: { opacity: 1, transform: 'translateX(0)' },
      },
      'fade-right': {
        initial: { opacity: 0, transform: 'translateX(-40px)' },
        visible: { opacity: 1, transform: 'translateX(0)' },
      },
      'zoom-in': {
        initial: { opacity: 0, transform: 'scale(0.9)' },
        visible: { opacity: 1, transform: 'scale(1)' },
      },
      'zoom-out': {
        initial: { opacity: 0, transform: 'scale(1.1)' },
        visible: { opacity: 1, transform: 'scale(1)' },
      },
    };

    const { initial, visible } = animations[animation];
    
    return {
      transition: baseTransition,
      transitionDelay: `${delay}ms`,
      ...(isVisible ? visible : initial),
    };
  };

  return (
    <div
      ref={ref}
      className={cn('will-change-transform', className)}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
