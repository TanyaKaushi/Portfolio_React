import Image from "next/image";
import styles from "./Projects.module.scss";

const images = {
  project1: "/assets/P1.png",
  project2: "/assets/P2.png",
  project3: "/assets/p3.png",
  project4: "/assets/P4.png",
};

const PROJECTS = [
  {
    img: images.project4,
    imgAlt: "Project 1 image",
    status: "● LIVE",
    statusColor: "#4ade80",
    name: "WORLD NEWS - News Application",
    desc: " A modern news application delivering real-time updates,detailed reports, and expert analysis across a wide range of topics through an intuitive interface.",
    tags: ["React.js", "Javascript", "News API"],
    link: "https://world-news-woad.vercel.app/",
    linkLabel: "Visit ↗",
  },
  {
    img: images.project2,
    imgAlt: "Project 2 image",
    status: "● LIVE",
    statusColor: "#4ade80",
    name: "TRIPCO - Travel Agent Application",
    desc: "An advanced web application designed to provide extensive information on distinctive travel destinations, comprehensive tour details, and a wide array of accommodation options.",
    tags: ["React.js", "Javascript"],
    link: "https://tripco-travel.vercel.app/",
    linkLabel: "Visit ↗",
  },
  {
    img: images.project1,
    imgAlt: "Project 3 image",
    status: "● LIVE",
    statusColor: "#4ade80",
    name: "NIKE - E-commerce Application",
    desc: "The user interface (UI) for the e-commerce application's website was developed with a focus on sleek and modern design, aimed at enhancing usability and captivating users.",
    tags: ["React.js", "Next.js", "Javascript"],
    link: "https://frontend-next-js-ecommerce.vercel.app/",
    linkLabel: "Visit ↗",
  },
  {
    img: images.project3,
    imgAlt: "Project 4 image",
    statusColor: "#4ade80",
    name: "THE BLOG - Blog Application",
    desc: " Created a complete blog application with basic CRUD (Create, Read, Update, Delete) functions and a strong filtering system, demonstrating skills in full-stack web development.",
    tags: ["React.js", "Redux", "Javascript", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/TanyaKaushi/MERN_Blog_Application",
    linkLabel: "Visit ↗",
  },
];

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <section id="projects" className={styles.section}>
        <div className="section-header rv">
          <span className="section-tag">// PROJECTS</span>
          <h2 className="section-title">Featured Work</h2>
        </div>

        <div className={`${styles.grid} rv`}>
          {PROJECTS.map((p) => (
            <div key={p.name} className={styles.card}>
              {/* ── PROJECT IMAGE ── */}
              <div className={styles.thumbWrap}>
                <Image
                  src={p.img}
                  alt={p.imgAlt}
                  width={560}
                  height={315}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                  className={styles.thumbImg}
                />
                {/* dark overlay for readability */}
                <div className={styles.thumbOverlay} />
                {/* status badge floated over image */}
                <span
                  className={styles.statusBadge}
                  style={{ color: p.statusColor }}
                >
                  {p.status}
                </span>
              </div>

              {/* ── CARD BODY ── */}
              <div className={styles.body}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.desc}>{p.desc}</p>

                <div className={styles.footer}>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.link}
                    >
                      {p.linkLabel}
                    </a>
                  ) : (
                    <span className={styles.linkPlain}>{p.linkLabel}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
