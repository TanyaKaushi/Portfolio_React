'use client';
import { useEffect } from 'react';

export default function ScrollRevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv, .rv-left, .rv-right');
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            // Element entering viewport — play animation
            e.target.classList.add('on');
          } else {
            // Element leaving viewport — reset so it replays next time
            e.target.classList.remove('on');
          }
        });
      },
      {
        threshold: 0.07,
        // rootMargin gives a small buffer so reset happens
        // slightly before the element is fully out of view
        rootMargin: '0px 0px -40px 0px',
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
