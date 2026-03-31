'use client';
import { useEffect } from 'react';

/**
 * Adds the class 'on' to every element matching selector
 * when it enters the viewport.
 */
export default function useScrollReveal(selector = '.rv, .rv-left, .rv-right') {
  useEffect(() => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('on');
        });
      },
      { threshold: 0.07 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [selector]);
}
