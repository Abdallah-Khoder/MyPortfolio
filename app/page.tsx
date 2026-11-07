const projects = [
  {
    number: "01",
    name: "SkillProof",
    type: "Team project · Full-stack platform",
    description: "A platform that helps developers present project evidence and allows recruiters to evaluate practical skills through structured rubrics.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    href: "https://github.com/AbdullahBe11/techtalks-skillproof"
  },
  {
    number: "02",
    name: "E-commerce Store",
    type: "Full-stack application",
    description: "An e-commerce application with a React frontend and Django REST API, including token-based authentication.",
    stack: ["React", "Django", "DRF", "SQLite"],
    href: "https://github.com/Abdallah-Khoder/CodeAlpha_E-commerceStore"
  },
  {
    number: "03",
    name: "Vibely",
    type: "Solo project · Full-stack application",
    description: "A project built independently, connecting a React interface to a Django REST Framework backend.",
    stack: ["React", "Django", "DRF", "SQLite", "Pillow"],
    href: "https://github.com/Abdallah-Khoder"
  },
  {
    number: "04",
    name: "Contact Manager",
    type: "Java desktop application",
    description: "A contact management application structured with MVC and the Observer design pattern.",
    stack: ["Java", "OOP", "MVC", "Observer Pattern"],
    href: "https://github.com/Abdallah-Khoder/ContactManager"
  }
];

const skillGroups = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"] },
  { title: "Backend", items: ["Python", "Django", "Django REST Framework", "PHP", "Java", "REST APIs"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Prisma"] },
  { title: "Tools & Concepts", items: ["Git", "GitHub", "Jira", "Authentication", "RBAC", "OOP", "MVC"] }
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="brand" href="#home">Abdallah<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero wrap" id="home">
        <p className="eyebrow">COMPUTER SCIENCE STUDENT · WEB DEVELOPER</p>
        <h1>Hi, I&apos;m Abdallah.<br /><span>I build web applications.</span></h1>
        <p className="hero-text">I&apos;m a Computer Science student interested in full-stack web development. I enjoy learning, solving problems, and turning ideas into practical applications.</p>
        <div className="hero-actions">
          <a className="button" href="#work">View my projects</a>
          <a className="text-link" href="mailto:abdallahkhodor746@gmail.com">Get in touch</a>
        </div>
      </section>

      <section className="section wrap" id="about">
        <div className="section-heading"><span>01</span><h2>About me</h2></div>
        <div className="about-content">
          <p>I&apos;m currently in the final semester of my Computer Science studies at ISSAE-CNAM Liban. I enjoy turning ideas into working web applications, learning new technologies, and understanding how frontend and backend systems fit together.</p>
          <p>I&apos;ve worked on projects using React, Django, Django REST Framework, Next.js, and relational databases — both independently and as part of a team.</p>
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="wrap">
          <div className="section-heading"><span>02</span><h2>Projects</h2></div>
          <p className="section-intro">A few projects I&apos;ve worked on during my learning journey.</p>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <p className="project-type">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View project on GitHub ↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap" id="skills">
        <div className="section-heading"><span>03</span><h2>Technologies & tools</h2></div>
        <p className="section-intro">Technologies I&apos;ve used across coursework and projects.</p>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap">
          <div className="section-heading"><span>04</span><h2>Contact</h2></div>
          <p className="contact-intro">Have a question or an opportunity? Feel free to reach out.</p>
          <div className="contact-details">
            <a href="mailto:abdallahkhodor746@gmail.com">abdallahkhodor746@gmail.com</a>
            <a href="tel:+96176335732">+961 76 335 732</a>
          </div>
          <div className="contact-bottom">
            <a href="https://www.linkedin.com/in/abdallah-khodor-928924303/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/Abdallah-Khoder" target="_blank" rel="noreferrer">GitHub ↗</a>
            <span>© 2026 Abdallah Khodor</span>
          </div>
        </div>
      </section>
    </main>
  );
}
