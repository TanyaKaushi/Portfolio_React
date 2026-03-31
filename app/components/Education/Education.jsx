import styles from './Education.module.scss';

const EDU_TAGS = [
  'Software Engineering',
  'Web Development',
  'Data Structures & Algorithms',
  'Agile Methods',
  'Database Systems',
];

export default function Education() {
  return (
    <div className={styles.wrapper}>
      <section id="education" className={styles.section}>
        <div className="section-header rv">
          <span className="section-tag">// EDUCATION</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className={`${styles.card} rv`}>
          <div className={styles.badge}>🎓</div>

          <div className={styles.info}>
            <h3 className={styles.degree}>
              B.Sc. (Hons) in Information Technology, specializing in Software Engineering
            </h3>
            <p className={styles.uni}>
              SLIIT — Sri Lanka Institute of Information Technology
            </p>
            <span className={styles.year}>2019 – 2022</span>

            <div className="tags" style={{ marginTop: '14px' }}>
              {EDU_TAGS.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
