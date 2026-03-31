'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.scss';

const NAV_LINKS = ['about','education', 'skills', 'experience', 'projects', 'blogs', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState('');

  // ── Navbar shadow on scroll ────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Highlight active nav link based on scroll position ────────────────────
  useEffect(() => {
    const sections = NAV_LINKS.map((id) => document.getElementById(id)).filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  // ── Scroll to section — briefly force-reset .rv classes so they re-animate ─
  const scrollTo = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    // 1. Collect all reveal elements inside this section
    const revealEls = target.querySelectorAll('.rv, .rv-left, .rv-right');

    // 2. Strip .on so CSS resets opacity/transform
    revealEls.forEach((el) => el.classList.remove('on'));

    // 3. Scroll smoothly
    target.scrollIntoView({ behavior: 'smooth' });

    // 4. Re-add .on after scroll settles (~700 ms) — the
    //    IntersectionObserver will also fire, but this is the safe fallback
    setTimeout(() => {
      revealEls.forEach((el) => el.classList.add('on'));
    }, 750);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        Tanya<span>.</span>
      </div>

      <ul className={styles.links}>
        {NAV_LINKS.map((id) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={`${styles.link} ${active === id ? styles.linkActive : ''}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <button className={styles.cta} onClick={() => scrollTo('contact')}>
        Hire Me
      </button>
    </nav>
  );
}
