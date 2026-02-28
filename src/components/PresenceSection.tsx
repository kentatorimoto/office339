"use client";

import { useEffect, useRef, useState } from "react";

export default function PresenceSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="min-h-[80vh] flex items-center px-6 md:px-12 max-w-7xl mx-auto"
    >
      <p
        className={`text-sm md:text-base text-gray-400 tracking-wide leading-relaxed transition-all duration-[600ms] ease-out motion-reduce:transition-none ${
          visible
            ? "opacity-100 translate-y-0 delay-150"
            : "opacity-0 translate-y-2 motion-reduce:opacity-100 motion-reduce:translate-y-0"
        }`}
      >
        We work through places.
      </p>
    </section>
  );
}
