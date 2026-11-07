const projects = [
  {
    number: "01",
    name: "SkillProof",
    type: "Full-stack platform · Team project",
    description: "A platform designed to help developers present verified project evidence and help recruiters evaluate practical skills through structured rubrics.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    href: "https://github.com/AbdullahBe11/techtalks-skillproof",
    link: "View source"
  },
  {
    number: "02",
    name: "E-commerce Store",
    type: "Full-stack application",
    description: "An e-commerce application with a React frontend and Django REST API, including token-based authentication and product workflows.",
    stack: ["React", "Django", "DRF", "SQLite"],
    href: "https://github.com/Abdallah-Khoder/CodeAlpha_E-commerceStore",
    link: "View source"
  },
  {
    number: "03",
    name: "Vibely",
    type: "Full-stack application · Solo project",
    description: "A full-stack application built independently, connecting a React interface to a Django REST Framework backend.",
    stack: ["React", "Django", "DRF", "SQLite", "Pillow"],
    href: "https://github.com/Abdallah-Khoder",
    link: "GitHub profile"
  },
  {
    number: "04",
    name: "Contact Manager",
    type: "Java desktop application",
    description: "A contact management application structured with MVC, using the Observer design pattern and supporting contact groups.",
    stack: ["Java", "OOP", "MVC", "Observer Pattern"],
    href: "https://github.com/Abdallah-Khoder/ContactManager",
    link: "View source"
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
        <a className="brand" href="#home">AK<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a><a href="#work">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:khoderabdallah57@gmail.com">Let&apos;s talk <span>↗</span></a>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
          <h1>Building useful<br />things for the <em>web.</em></h1>
          <p className="hero-text">I&apos;m Abdallah Khodor, a Computer Science student and full-stack web developer focused on building practical, user-centered applications.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↘</span></a>
            <a className="text-link" href="https://github.com/Abdallah-Khoder" target="_blank" rel="noreferrer">GitHub profile ↗</a>
          </div>
        </div>
        <div className="hero-aside">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="monogram">A<span>K</span></div>
          <p className="aside-note">Curious by nature.<br />Developer by practice.</p>
          <span className="hero-index">LEBANON · 2026</span>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>01 — 04</span></div>
      </section>

      <section className="section wrap about" id="about">
        <div className="section-label"><span>01</span> / ABOUT</div>
        <div className="about-content">
          <h2>Developer with a<br /><em>builder&apos;s mindset.</em></h2>
          <p>I&apos;m currently in the final semester of my Computer Science studies at ISSAE-CNAM Liban. I enjoy turning ideas into working web applications, learning new technologies, and understanding how frontend and backend systems fit together.</p>
          <p>My experience includes building projects with React, Django, Django REST Framework, Next.js, and relational databases — both independently and as part of a team.</p>
          <div className="about-meta"><span>BASED IN</span><strong>Lebanon</strong><span>FOCUS</span><strong>Full-stack web development</strong></div>
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="wrap">
          <div className="section-label"><span>02</span> / SELECTED WORK</div>
          <div className="section-heading"><h2>Things I&apos;ve <em>built.</em></h2><p>A selection of projects that reflect what I&apos;ve been learning and building.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <span className="project-number">{project.number}</span>
                <div className="project-main">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.link} <span>↗</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wrap skills-section" id="skills">
        <div className="section-label"><span>03</span> / TOOLKIT</div>
        <div className="section-heading"><h2>My technical <em>toolkit.</em></h2><p>Technologies I&apos;ve used across coursework and projects.</p></div>
        <div className="skill-grid">
          {skillGroups.map((group) => <div className="skill-group" key={group.title}><h3>{group.title}</h3><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap contact-inner">
          <div className="section-label"><span>04</span> / GET IN TOUCH</div>
          <p className="contact-kicker">HAVE A PROJECT OR AN OPPORTUNITY?</p>
          <h2>Let&apos;s make<br /><em>something matter.</em></h2>
          <a className="contact-email" href="mailto:khoderabdallah57@gmail.com">khoderabdallah57@gmail.com ↗</a>
          <div className="contact-bottom"><a href="https://www.linkedin.com/in/abdallah-khodor-928924303/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Abdallah-Khoder" target="_blank" rel="noreferrer">GitHub ↗</a><span>© 2026 ABDALLAH KHODOR</span></div>
        </div>
      </section>
    </main>
  );
}
