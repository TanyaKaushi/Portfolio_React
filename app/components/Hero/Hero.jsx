"use client";
import styles from "./Hero.module.scss";

const INFO_CARDS = [
  { label: "LOCATION", value: "Mawanella, LK", sub: "Remote-ready" },
  { label: "STATUS", value: "● Available", sub: "Open to offers", green: true },
  { label: "EXPERIENCE", value: "3+ Years", sub: "Production apps" },
  { label: "ARTICLES", value: "9 Published", sub: "on Medium" },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* ── LEFT ── */}
      <div className={styles.left}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Open to opportunities · Remote &amp; On-site
        </div>

        <h1 className={styles.heading}>
          Tanya
          <br />
          Gangegedara
          <em>Software Engineer</em>
        </h1>

        <p className={styles.desc}>
          <strong>Software Engineer</strong> with 3+ years of full-stack
          experience, frontend at heart. I design and build{" "}
          <strong>performant, accessible UIs</strong> with React, Next.js &amp;
          — and bring <strong>backend depth</strong> with Node.js, MongoDB &amp;
          cloud infrastructure to take features from{" "}
          <strong>design to deployment</strong>.
        </p>

         <div className={styles.actions}>
          <a href="#projects" className={`${styles.btnPrimary} btn-primary`}>
            View Projects
          </a>
          <a
            href="mailto:tanyakaushi9@gmail.com"
            className={`${styles.btnOutline} btn-outline`}
          >
            Get In Touch
          </a>
          
          <a
            href="/assets/Tanya_Gangegedara.pdf"
            download
            className={`${styles.btnOutline} btn-outline`}
          >
            Download CV ↓
          </a>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className={styles.right}>
        <div className={styles.avatarRing}>
          <div className={styles.avatarInner}>TG</div>
        </div>

        <div className={styles.infoGrid}>
          {INFO_CARDS.map((c) => (
            <div key={c.label} className={styles.infoCard}>
              <p className={styles.infoLabel}>{c.label}</p>
              <p
                className={styles.infoValue}
                style={c.green ? { color: "var(--grn, #4ade80)" } : {}}
              >
                {c.value}
              </p>
              <p className={styles.infoSub}>{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
