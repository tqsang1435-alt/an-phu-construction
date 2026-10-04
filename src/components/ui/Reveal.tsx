"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
  style?: React.CSSProperties;
  action?: string;
  method?: string;
}

export function Reveal({ children, delay = 0, className = "", as: Component = "div", style, ...rest }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<Element>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <Component 
      ref={ref} 
      className={`reveal ${delayClass} ${className} ${isVisible ? "is-visible" : ""}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  );
}
