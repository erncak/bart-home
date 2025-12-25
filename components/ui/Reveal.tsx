import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: 'fade-up' | 'blur-in' | 'slide-in';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  variant = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) {
      if (variant === 'blur-in') return 'opacity-0 blur-lg scale-95';
      if (variant === 'slide-in') return 'opacity-0 -translate-x-12';
      return 'opacity-0 translate-y-12';
    }
    return 'opacity-100 translate-y-0 blur-0 scale-100 translate-x-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({ text, className = '', delay = 0 }) => {
  return (
    <Reveal delay={delay} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block mr-2" style={{ transitionDelay: `${delay + i * 30}ms` }}>
          {word}
        </span>
      ))}
    </Reveal>
  );
};