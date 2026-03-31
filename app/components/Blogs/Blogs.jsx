import styles from './Blogs.module.scss';

const BLOGS = [
  {
    cat: 'BACKEND',
    catColor: { color: '#4ade80', bg: 'rgba(74,222,128,.1)', border: 'rgba(74,222,128,.2)' },
    date: 'Nov 8, 2025',
    title: 'Kickstarting My Backend Journey with MERN',
    desc: 'Starting with a simple CRUD app to understand how data flows through MongoDB, Express, Node.js and React — from database to UI.',
    url: 'https://medium.com/@tanyakaushi/kickstarting-my-backend-journey-with-mern-6a99e356beb5',
  },
  {
    cat: 'REACT',
    catColor: { color: '#b8a9ff', bg: 'rgba(124,106,255,.1)', border: 'rgba(124,106,255,.25)' },
    date: 'Jul 16, 2025',
    title: 'No More Mess: TanStack Query Keeps It Simple!',
    desc: 'After using Redux, I tried TanStack Query and it changed how I think about server state. A practical comparison for React developers.',
    url: 'https://medium.com/@tanyakaushi/no-more-mess-tanstack-query-keeps-it-simple-006adb78ca30',
  },
  {
    cat: 'DEVOPS',
    catColor: { color: '#fbbf24', bg: 'rgba(251,191,36,.1)', border: 'rgba(251,191,36,.25)' },
    date: 'Mar 5, 2025',
    title: 'Understanding the CI/CD Pipeline',
    desc: 'Even as a frontend developer, understanding CI/CD pipelines unlocked a new level of clarity in how modern software gets built and deployed.',
    url: 'https://medium.com/@tanyakaushi/understanding-the-ci-cd-pipeline-enhancing-development-and-deployment-7012068d5cbf',
  },
  {
    cat: 'WEB',
    catColor: { color: '#f87171', bg: 'rgba(248,113,113,.1)', border: 'rgba(248,113,113,.25)' },
    date: 'Dec 25, 2024',
    title: 'CORS: Handling Cross-Origin Requests',
    desc: 'Got asked about CORS in an interview and got stuck. So I went deep — this is the clear explanation I wish I had before that question.',
    url: 'https://medium.com/@tanyakaushi/cors-handling-cross-origin-requests-in-web-applications-a2f4a0468aa0',
  },
  {
    cat: 'NEXT.JS',
    catColor: { color: '#b8a9ff', bg: 'rgba(124,106,255,.1)', border: 'rgba(124,106,255,.25)' },
    date: 'Aug 26, 2024',
    title: 'Next.js: Essential Basics for Beginners',
    desc: 'I started exploring Next.js during a code migration at work. Here are the fundamentals every beginner needs to get productive fast.',
    url: 'https://medium.com/@tanyakaushi/next-js-essential-basics-for-beginners-1a2cd1eb2025',
  },
  {
    cat: 'REACT',
    catColor: { color: '#b8a9ff', bg: 'rgba(124,106,255,.1)', border: 'rgba(124,106,255,.25)' },
    date: 'May 28, 2024',
    title: 'Props Make it Easy: Using Props in React Components',
    desc: 'A simple, practical guide to using Props in React — one of the most fundamental and powerful features of the library, explained clearly.',
    url: 'https://medium.com/@tanyakaushi/props-make-it-easy-a-simple-guide-to-using-props-in-react-components-ae317a458f36',
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className={styles.section}>
      <div className="section-header rv">
        <span className="section-tag">// BLOGS</span>
        <h2 className="section-title">My Blog Posts</h2>
      </div>

      <div className={`${styles.grid} rv`}>
        {BLOGS.map((b) => (
          <a
            key={b.url}
            href={b.url}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <span
              className={styles.cat}
              style={{
                color: b.catColor.color,
                background: b.catColor.bg,
                border: `1px solid ${b.catColor.border}`,
              }}
            >
              {b.cat}
            </span>

            <h3 className={styles.title}>{b.title}</h3>
            <p className={styles.desc}>{b.desc}</p>

            <div className={styles.footer}>
              <span className={styles.date}>{b.date}</span>
              <span className={styles.arrow}>Read ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
