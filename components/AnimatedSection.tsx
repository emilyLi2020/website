'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} opacity-0 translate-y-8`;
        case 'fade-in':
          return `${baseClass} opacity-0`;
        case 'slide-left':
          return `${baseClass} opacity-0 -translate-x-8`;
        case 'slide-right':
          return `${baseClass} opacity-0 translate-x-8`;
        default:
          return `${baseClass} opacity-0`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0`;
  };

  return (
    <div ref={sectionRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
}


