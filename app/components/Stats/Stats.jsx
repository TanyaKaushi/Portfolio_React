import styles from './Stats.module.scss';

const STATS = [
  { num: '3+',    label: 'YEARS EXP.' },
  { num: '2',     label: 'COMPANIES' },
  { num: '15+',   label: 'TECHNOLOGIES' },
  { num: '9',     label: 'ARTICLES WRITTEN' },
  { num: '1000s', label: 'DAILY USERS SERVED' },
];

export default function Stats() {
  return (
    <div className={`${styles.stats} rv`}>
      {STATS.map((s) => (
        <div key={s.label} className={styles.stat}>
          <span className={styles.num}>{s.num}</span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
