"use client";

import { useEffect, useState } from "react";

const projects = [
  { number: "01", name: "SkillProof", type: "Team project · Full-stack platform", description: "A platform that helps developers present project evidence and allows recruiters to evaluate practical skills through structured rubrics.", stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"], href: "https://github.com/AbdullahBe11/techtalks-skillproof" },
  { number: "02", name: "E-commerce Store", type: "Full-stack application", description: "An e-commerce application with a React frontend and Django REST API, including token-based authentication.", stack: ["React", "Django", "DRF", "SQLite"], href: "https://github.com/Abdallah-Khoder/CodeAlpha_E-commerceStore" },
  { number: "03", name: "Vibely", type: "Solo project · Full-stack application", description: "A project built independently, connecting a React interface to a Django REST Framework backend.", stack: ["React", "Django", "DRF", "SQLite", "Pillow"], href: "https://github.com/Abdallah-Khoder" },
  { number: "04", name: "Contact Manager", type: "Java desktop application", description: "A contact management application structured with MVC and the Observer design pattern.", stack: ["Java", "OOP", "MVC", "Observer Pattern"], href: "https://github.com/Abdallah-Khoder/ContactManager" }
];
const skillGroups = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js"] },
  { title: "Backend", items: ["Python", "Django", "Django REST Framework", "PHP", "Java", "REST APIs"] },
  { title: "Databases", items: ["PostgreSQL", "MySQL", "SQLite", "Prisma"] },
  { title: "Tools & Concepts", items: ["Git", "GitHub", "Jira", "Authentication", "RBAC", "OOP", "MVC"] }
];
const navItems = [{ label: "Home", id: "home" }, { label: "About", id: "about" }, { label: "Projects", id: "work" }, { label: "Skills", id: "skills" }, { label: "Contact", id: "contact" }];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter((s): s is HTMLElement => s !== null);
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.3, 0.5] });
    sections.forEach((s) => sectionObserver.observe(s));
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
    return () => { sectionObserver.disconnect(); revealObserver.disconnect(); };
  }, []);

  return (
    <main>
      <nav className="nav"><div className="nav-inner wrap">
        <a className="brand" href="#home">Abdallah<span>.</span></a>
        <div className="nav-links">{navItems.map((item) => <a key={item.id} href={"#" + item.id} className={activeSection === item.id ? "active" : ""} aria-current={activeSection === item.id ? "location" : undefined}>{item.label}</a>)}</div>
      </div></nav>
      <section className="hero wrap" id="home">
        <p className="eyebrow">COMPUTER SCIENCE STUDENT · WEB DEVELOPER</p>
        <h1>Hi, I&apos;m Abdallah.<br /><span>I build web applications.</span></h1>
        <p className="hero-text">I&apos;m a Computer Science student interested in full-stack web development. I enjoy learning, solving problems, and turning ideas into practical applications.</p>
        <div className="hero-actions"><a className="button" href="#work">View my projects</a><a className="text-link" href="mailto:abdallahkhodor746@gmail.com">Get in touch</a></div>
      </section>
      <section className="section wrap" id="about"><div className="reveal">
        <div className="section-heading"><span>01</span><h2>About me</h2></div>
        <div className="about-content"><p>I&apos;m currently in the final semester of my Computer Science studies at ISSAE-CNAM Liban. I enjoy turning ideas into working web applications, learning new technologies, and understanding how frontend and backend systems fit together.</p><p>I&apos;ve worked on projects using React, Django, Django REST Framework, Next.js, and relational databases — both independently and as part of a team.</p></div>
      </div></section>
      <section className="section projects-section" id="work"><div className="wrap">
        <div className="reveal"><div className="section-heading"><span>02</span><h2>Projects</h2></div><p className="section-intro">A few projects I&apos;ve worked on during my learning journey.</p></div>
        <div className="project-grid">{projects.map((p, i) => <article className="project-card reveal" style={{ transitionDelay: (i * 90) + "ms" }} key={p.number}>
          <p className="project-type">{p.type}</p><h3>{p.name}</h3><p className="project-description">{p.description}</p>
          <div className="tags">{p.stack.map((item) => <span key={item}>{item}</span>)}</div><a className="project-link" href={p.href} target="_blank" rel="noreferrer">View project on GitHub ↗</a>
        </article>)}</div>
      </div></section>
      <section className="section wrap" id="skills"><div className="reveal">
        <div className="section-heading"><span>03</span><h2>Technologies & tools</h2></div><p className="section-intro">Technologies I&apos;ve used across coursework and projects.</p>
      </div><div className="skill-grid">{skillGroups.map((g, i) => <div className="skill-group reveal" style={{ transitionDelay: (i * 70) + "ms" }} key={g.title}>
        <h3>{g.title}</h3><div className="skill-items">{g.items.map((item) => <span key={item}>{item}</span>)}</div>
      </div>)}</div></section>
      <section className="contact-section" id="contact"><div className="wrap reveal">
        <div className="section-heading"><span>04</span><h2>Contact</h2></div><p className="contact-intro">Have a question or an opportunity? Feel free to reach out.</p>
        <div className="contact-details"><a href="mailto:abdallahkhodor746@gmail.com">abdallahkhodor746@gmail.com</a><a href="tel:+96176335732">+961 76 335 732</a></div>
        <div className="contact-bottom"><a href="https://www.linkedin.com/in/abdallah-khodor-928924303/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Abdallah-Khoder" target="_blank" rel="noreferrer">GitHub ↗</a><span>© 2026 Abdallah Khodor</span></div>
      </div></section>
    </main>
  );
}
