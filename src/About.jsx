import './About.css'
import about_img from './assets/profile_photo.jpeg'

const About = () => {
  const skills = [
    { name: 'HTML & CSS', desc: 'Responsive layouts, clean styling, and polished page structure.' },
    { name: 'React JS', desc: 'Reusable components and interactive user interfaces.' },
    { name: 'JavaScript', desc: 'Dynamic features, browser logic, and smooth user experiences.' },
    { name: 'Next JS', desc: 'Modern React websites with routing and production-ready structure.' },
    { name: 'PHP', desc: 'Backend logic, form handling, and server-side website features.' },
    { name: 'MySQL Database', desc: 'Database design, queries, and data-driven application features.' }
  ]

  return (
    <section className="about" id="about">
      <h1 className="about-title">About <span className="highlight">me</span></h1>

      <div className="about-content">
        <img src={about_img} alt="about" className="about-img" />

        <div className="about-text">
          <p>
            I am a full-stack web developer from Nigeria with 2 years of professional experience building responsive, user-friendly web applications. Throughout my journey, I have worked on diverse projects that strengthened my skills across frontend interfaces, backend logic, and database-driven features.
          </p>
          <p>
            My expertise includes React, Next JS, JavaScript, PHP, and MySQL, giving me the ability to create polished user interfaces and connect them to reliable server-side functionality. I bring enthusiasm and attention to detail to every project I work on.
          </p>
        </div>
      </div>

      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-number">{String(index + 1).padStart(2, '0')}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-desc">{skill.desc}</p>
          </div>
        ))}
      </div>

      <div className="about-stats">
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
