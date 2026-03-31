'use client';
import { useEffect, useRef } from 'react';
import styles from './Skills.module.scss';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    colorClass: 'acc',
    skills: [
      { name: 'React.js', pct: 92 },
      { name: 'Next.js',  pct: 88 },
      { name: 'Angular',  pct: 70 },
      { name: 'TypeScript', pct: 75 },
      { name: 'JavaScript', pct: 90 },
      { name: 'Redux', pct: 82 },
    ],
  },
  {
    title: 'Styling',
    colorClass: 'pink',
    skills: [
      { name: 'CSS / HTML',   pct: 95 },
      { name: 'Tailwind CSS', pct: 75 },
      { name: 'Bootstrap',    pct: 95 },
    ],
  },
  {
    title: 'Backend & Database',
    colorClass: 'teal',
    skills: [
      { name: 'Node.js',                pct: 85 },
      { name: 'Express.js',             pct: 80 },
      { name: 'MongoDB',                pct: 85 },
      { name: 'REST API Integration',   pct: 88 },
      { name: 'Socket.IO / WebSockets', pct: 78 },
    ],
  },
  {
    title: 'Tools & Workflow',
    colorClass: 'amb',
    skills: [
      { name: 'GitHub',        pct: 90 },
      { name: 'Figma',         pct: 95 },
      { name: 'Agile / Scrum', pct: 85 },
    ],
  },
];

export default function Skills() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('[data-fill]').forEach((bar, i) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.fill;
            }, i * 70);
          });
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      <section id="skills" className={styles.section}>
        <div className="section-header rv">
          <span className="section-tag">// SKILLS</span>
          <h2 className="section-title">Technologies &amp; Proficiency</h2>
        </div>

        <div className={styles.grid} ref={wrapRef}>
          {SKILL_GROUPS.map((group, gi) => (
            <div
              key={group.title}
              className={`${gi % 2 === 0 ? 'rv-left' : 'rv-right'}`}
            >
              <h4 className={styles.groupTitle}>{group.title}</h4>

              {group.skills.map((skill) => (
                <div key={skill.name} className={styles.barItem}>
                  <div className={styles.barHead}>
                    <span className={styles.barName}>{skill.name}</span>
                    <span className={styles.barPct}>{skill.pct}%</span>
                  </div>
                  <div className={styles.track}>
                    <div
                      className={`${styles.fill} ${styles[`fill_${group.colorClass}`]}`}
                      data-fill={`${skill.pct}%`}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
