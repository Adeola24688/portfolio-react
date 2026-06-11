import './About.css'
import about_img from './assets/profile_photo.jpeg'
import useScrollReveal from './hooks/useScrollReveal'

const About = () => {
  const titleReveal = useScrollReveal()
  const contentReveal = useScrollReveal({ rootMargin: '0px 0px -30px 0px' })
  const skillsReveal = useScrollReveal({ threshold: 0.1 })
  const statsReveal = useScrollReveal()

  const skills = [
    { name: 'HTML & CSS', desc: 'Responsive layouts, clean styling, and polished page structure.' },
    { name: 'React JS', desc: 'Reusable components and interactive user interfaces.' },
    { name: 'JavaScript & TypeScript', desc: 'Dynamic logic, type-safe development, and modern features for robust applications.' },
    { name: 'Next JS', desc: 'Modern React websites with routing and production-ready structure.' },
    { name: 'PHP', desc: 'Backend logic, form handling, and server-side website features.' },
    { name: 'MySQL Database', desc: 'Database design, queries, and data-driven application features.' },
    { name: 'Angular', desc: 'Component-based frontend application structures and routing with TypeScript.' },
    { name: 'ASP.NET Core', desc: 'Developing secure, high-performance RESTful APIs using C#.' },
    { name: 'PostgreSQL', desc: 'Relational database design, integration, and data management.' }
  ]

  return (
    <section className="about" id="about">
      <h1
        ref={titleReveal.ref}
        className={`about-title scroll-reveal ${titleReveal.isVisible ? 'revealed' : ''}`}
      >
        About <span className="highlight">me</span>
      </h1>

      <div
        ref={contentReveal.ref}
        className={`about-content scroll-reveal ${contentReveal.isVisible ? 'revealed' : ''}`}
      >
        <img src={about_img} alt="about" className="about-img" />

        <div className="about-text">
          <p>
            I am a full-stack web developer from Nigeria with 2 years of professional experience building responsive, user-friendly web applications. Throughout my journey, I have worked on diverse projects that strengthened my skills across frontend interfaces, backend logic, and database-driven features.
          </p>
          <p>
            My expertise includes Angular, React, Next JS, TypeScript, PHP, ASP.NET Core (C#), and PostgreSQL/MySQL, giving me the ability to create polished user interfaces and connect them to robust backend systems. I bring enthusiasm and attention to detail to every project I work on.
          </p>
        </div>
      </div>

      <div
        ref={skillsReveal.ref}
        className={`skills stagger-children ${skillsReveal.isVisible ? 'revealed' : ''}`}
      >
        {skills.map((skill, index) => (
          <div key={index} className="skill-item scroll-reveal-child">
            <div className="skill-number">{String(index + 1).padStart(2, '0')}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-desc">{skill.desc}</p>
          </div>
        ))}
      </div>

      <div
        ref={statsReveal.ref}
        className={`about-stats scroll-reveal-scale ${statsReveal.isVisible ? 'revealed' : ''}`}
      >
        <div className="stat">
          <h3>2+</h3>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <h3>25+</h3>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="divider"></div>
        <div className="stat">
          <h3>10+</h3>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </section>
  )
}

export default About
