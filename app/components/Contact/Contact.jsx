import styles from './Contact.module.scss';

const CONTACT_LINKS = [
  {
    icon: '✉️',
    label: 'tanyakaushi9@gmail.com',
    sub: 'Preferred contact',
    href: 'mailto:tanyakaushi9@gmail.com',
  },
  {
    icon: '💼',
    label: 'linkedin.com/in/tanya-gangegedara',
    sub: 'Connect professionally',
    href: 'https://www.linkedin.com/in/tanya-gangegedara-64b253204/',
  },
  {
    icon: '✍️',
    label: 'medium.com/@tanyakaushi',
    sub: 'Read my articles',
    href: 'https://medium.com/@tanyakaushi',
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="section-header rv">
        <span className="section-tag">// CONTACT</span>
        <h2 className="section-title">Let&apos;s Connect</h2>
      </div>

      <div className={`${styles.wrap} rv`}>
        {/* ── HERO TEXT ── */}
        <div className={styles.hero}>
          <p className={styles.tagline}>Open to opportunities</p>
          <h3 className={styles.heading}>
            Got a role or project?
            <br />
            <span>Let&apos;s talk.</span>
          </h3>
          <p className={styles.sub}>
            I&apos;m open to full-time roles, remote/hybrid/onsite opportunities. I&apos;m based in Sri Lanka and
            available for remote work globally. Reach out through any of the
            channels below.
            <br/>
            I typically respond within 24 hours.
          </p>
          <a href="mailto:tanyakaushi9@gmail.com" className={styles.ctaBtn}>
            Send Me an Email ↗
          </a>
        </div>

        {/* ── CONTACT LINK CARDS ── */}
        <div className={styles.cards}>
          {CONTACT_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className={styles.card}
            >
              <span className={styles.cardIcon}>{l.icon}</span>
              <div className={styles.cardInfo}>
                <span className={styles.cardLabel}>{l.label}</span>
                <span className={styles.cardSub}>{l.sub}</span>
              </div>
              <span className={styles.cardArrow}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
