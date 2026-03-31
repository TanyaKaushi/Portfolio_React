import styles from "./About.module.scss";

const VALUES = [
  {
    n: "01",
    title: "Performance-First",
    desc: 'Core Web Vitals, image optimisation and bundle size — not just "making it work".',
  },
  {
    n: "02",
    title: "Design-to-Code",
    desc: "From Figma to production — Own the full design and frontend delivery end-to-end.",
  },
  {
    n: "03",
    title: "Full-Stack Capable",
    desc: "From Frontend to Backend — I can own a feature end-to-end.",
  },
  {
    n: "04",
    title: "Knowledge Sharer",
    desc: "9 articles on Medium covering React, Next.js, Redux, CI/CD & more.",
  },
];

const CONTACTS = [
  { icon: "✉️", text: "tanyakaushi9@gmail.com" },
  { icon: "📍", text: "Mawanella, Sri Lanka" },
  { icon: "📞", text: "+71 789 0525" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="section-header rv">
        <span className="section-tag">// ABOUT</span>
        <h2 className="section-title">Who I Am</h2>
      </div>

      <div className={styles.grid}>
        {/* ── LEFT TEXT ── */}
        <div className="rv-left">
          <p className={styles.text}>
            I&apos;m a <strong>Software Engineer</strong> based in Mawanella,
            Sri Lanka, specialising in frontend engineering with a full-stack
            foundation. I build fast, accessible, and beautiful web experiences
            that scale.
          </p>
          <p className={styles.text}>
            Currently at <strong>MoofLife (San Francisco, Remote)</strong>, I
            maintain a production social platform serving thousands of daily
            users — across React, Next.js, Redux, Socket.IO &amp; Node.js.
            Before that, I modernised Angular frontends at{" "}
            <strong>99X Technology</strong> for Tracified, a blockchain supply
            chain platform.
          </p>
          <p className={styles.text}>
            I hold a{" "}
            <strong>
              B.Sc. (Hons) in IT specialising in Software Engineering
            </strong>{" "}
            from SLIIT, and I actively share knowledge through writing on
            Medium.
          </p>

          <div className={styles.contacts}>
            {CONTACTS.map((c) => (
              <div key={c.text} className={styles.contactRow}>
                <span className={styles.contactIcon}>{c.icon}</span>
                <span>{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT VALUES ── */}
        <div className={`${styles.values} rv-right`}>
          {VALUES.map((v) => (
            <div key={v.n} className={styles.valueCard}>
              <span className={styles.valueNum}>{v.n}</span>
              <div>
                <strong className={styles.valueTitle}>{v.title}</strong>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
