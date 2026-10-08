const projects = [
  {
    title: "Student Vehicle Monitoring System",
    description: "A proposed system for monitoring student vehicle time-in and time-out.",
    tech: "Next.js • CSS • JavaScript"
  },
  {
    title: "Learning Portal",
    description: "A simple educational website concept for students and teachers.",
    tech: "HTML • CSS • JavaScript"
  },
  {
    title: "Cybersecurity Reviewer",
    description: "A student-friendly reviewer for basic ethical hacking and cybersecurity topics.",
    tech: "Web Design • UI"
  }
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">JR<span>.</span></a>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navButton" href="#contact">Get in touch</a>
      </nav>

      <section id="home" className="hero section">
        <div className="heroText">
          <p className="eyebrow">PROGRAMMER • STUDENT • BUILDER</p>
          <h1>I build digital<br />tools that <span>move</span><br />ideas forward.</h1>
          <p className="lead">
            Hi, I'm <b>Jhade Rick N. Rios</b>, a college student interested in
            software development, education technology, and cybersecurity.
          </p>
          <div className="actions">
            <a className="primary" href="#projects">Explore my work ↗</a>
            <a className="secondary" href="#contact">Contact me</a>
          </div>
        </div>
        <div className="heroCard">
          <div className="avatar">JR</div>
          <h2>Jhade Rick N. Rios</h2>
          <p>Student Programmer</p>
          <div className="tagRow">
            <span>Next.js</span><span>JavaScript</span><span>CSS</span>
          </div>
          <div className="miniInfo">
            <span>📍 Nueva Vizcaya, Philippines</span>
            <span>🎓 College Student</span>
          </div>
        </div>
      </section>

      <section id="education" className="section light">
        <p className="eyebrow">EDUCATION</p>
        <h2 className="sectionTitle">College</h2>
        <div className="educationCard">
          <div className="eduIcon">🎓</div>
          <div>
            <h3>Nueva Vizcaya State University</h3>
            <p>College Student • Information Technology / Computing</p>
            <p className="muted">Focused on programming, software development, databases, networking, and cybersecurity.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="eyebrow">PROJECTS</p>
        <h2 className="sectionTitle">Things I've worked on</h2>
        <div className="grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="projectNumber">0{projects.indexOf(project) + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section light about">
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2 className="sectionTitle">Learning by building.</h2>
        </div>
        <p>
          I'm a college student who enjoys creating simple and useful digital
          projects. I am currently improving my skills in frontend development,
          programming, databases, networking, and cybersecurity.
        </p>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">CONTACT</p>
        <h2 className="sectionTitle">Let's build something.</h2>
        <p className="lead">Have a project, school activity, or idea? Send me a message.</p>
        <div className="contactBox">
          <a href="mailto:jhaderickrios993@gmail.com">jhaderickrios993@gmail.com</a>
          <span>•</span>
          <span>Philippines</span>
        </div>
      </section>

      <footer>
        <span>© 2026 Jhade Rick N. Rios</span>
        <span>Built with Next.js + CSS</span>
      </footer>
    </main>
  );
}
