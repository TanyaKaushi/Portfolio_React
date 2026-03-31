import styles from "./Experience.module.scss";

const EXPERIENCE = [
  {
    date: "June 2023 — Present",
    type: "FULL-TIME · REMOTE",
    role: "Software Engineer",
    company: "MoofLife",
    companyUrl: "https://www.mooflife.com/",
    location: "San Francisco, CA",
    color: "acc",
    points: [
      "Developed & maintained a production-grade social platform serving thousands of daily active users.",
      "Built responsive, high-performance UIs with React.js, Next.js, Redux & JavaScript.",
      "Applied modern frontend best practices to write clean, maintainable,and scalable code.",
      "Integrated RESTful APIs with efficient state management to improve data handling and application performance.",
      "Collaborated closely with UX/UI designers and backend engineers to deliver high quality and engaging user experiences.",
      "Implemented mobile-first and responsive designs, ensuring cross browser and cross-device compatibility.",
      "Improved application performance, SEO, and user engagement using Next.js features and image optimization.",
      "Developed real-time frontend features using Socket.IO and WebSockets to support interactive user experiences.",
      "Worked with backend technologies including Node.js, Express.js, and MongoDB to support API development, data handling, and frontend backend integration.",
      "Debugged and resolved frontend issues using systematic problem solving and root-cause analysis.",
      "Worked independently while effectively managing multiple tasks in an Agile Scrum environment",
    ],
    chips: [
      "React.js",
      "Next.js",
      "Redux",
      "Socket.IO",
      "Node.js",
      "MongoDB",
      "AWS",
      "CI/CD",
      "Agile/Scrum",
      "SEO Optimization",
      "Performance Tuning",
    ],
  },
  {
    date: "Feb 2022 — May 2023",
    type: "TRAINEE · ON-SITE",
    role: "Trainee Software Engineer",
    company: "99X Technology",
    location: "Colombo, Sri Lanka",
    color: "teal",
    points: [
      "Frontend development for Tracified — a blockchain-powered enterprise supply chain traceability platform.",
      "Built new features with Angular & TypeScript, modernizing legacy web applications.",
      "Fixed critical bugs and optimized code for performance, functionality, and user experience.",
      "Collaborated in Agile sprints with designers, backend devs, and product managers.",
      "Contributed to frontend development for Tracified, a blockchain-powered enterprise traceability platform for supply chain management.",
      "Developed new features using Angular and TypeScript based on UI/UX designs and client requirements, modernizing legacy web applications.",
      "Fixed critical bugs and optimized code to ensure smooth functionality, improved performance, and enhanced user experience.",
      "Collaborated in Agile development environment, adapting to evolving project requirements and participating in sprint meetings.",
      "Worked closely with cross-functional teams including designers, backend developers, and product managers to deliver high-quality features on schedule.",
    ],
    chips: ["Angular", "TypeScript", "UI/UX", "Agile/Scrum", "Blockchain UX"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="section-header rv">
        <span className="section-tag">// EXPERIENCE</span>
        <h2 className="section-title">Career Timeline</h2>
      </div>

      <div className={`${styles.timeline} rv`}>
        {EXPERIENCE.map((exp) => (
          <div key={exp.date} className={styles.item}>
            <div
              className={styles.dot}
              data-color={exp.color}
              style={{
                background: exp.color === "acc" ? "#7c6aff" : "#2dd4bf",
                boxShadow:
                  exp.color === "acc"
                    ? "0 0 0 3px rgba(124,106,255,.25)"
                    : "0 0 0 3px rgba(45,212,191,.2)",
                animation:
                  exp.color === "acc" ? "pulse-ring 2s infinite" : "none",
              }}
            />

            <div className={styles.card}>
              <div className={styles.meta}>
                <span
                  className={styles.date}
                  style={
                    exp.color === "acc"
                      ? {
                          color: "#b8a9ff",
                          background: "rgba(124,106,255,.1)",
                          border: "1px solid rgba(124,106,255,.25)",
                        }
                      : {
                          color: "#2dd4bf",
                          background: "rgba(45,212,191,.08)",
                          border: "1px solid rgba(45,212,191,.2)",
                        }
                  }
                >
                  {exp.date}
                </span>
                <span className={styles.type}>{exp.type}</span>
              </div>

              <h3 className={styles.role}>{exp.role}</h3>
              <p
                className={styles.company}
                style={{ color: exp.color === "acc" ? "#b8a9ff" : "#2dd4bf" }}
              >
                {exp.company}
                {exp.companyUrl && (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.companyLink}
                  >
                    ↗ {exp.companyUrl.replace("https://www.", "")}
                  </a>
                )}
                &nbsp;·&nbsp;{exp.location}
              </p>

              <ul className={styles.points}>
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div className={styles.chips}>
                {exp.chips.map((c) => (
                  <span
                    key={c}
                    className={styles.chip}
                    style={
                      exp.color === "acc"
                        ? {
                            color: "#b8a9ff",
                            background: "rgba(124,106,255,.08)",
                            border: "1px solid rgba(124,106,255,.2)",
                          }
                        : {
                            color: "#2dd4bf",
                            background: "rgba(45,212,191,.07)",
                            border: "1px solid rgba(45,212,191,.2)",
                          }
                    }
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
