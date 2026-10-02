import './About.css'
import useScrollReveal from './hooks/useScrollReveal'

const About = () => {
  const titleReveal = useScrollReveal()
  const contentReveal = useScrollReveal({ rootMargin: '0px 0px -30px 0px' })
  const stackReveal = useScrollReveal({ threshold: 0.2 })

  const techStack = [
    { label: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', accent: '#ff5c4d' },
    { label: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', accent: '#4da3ff' },
    { label: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', accent: '#facc15' },
    { label: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', accent: '#4a9cff' },
    { label: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', accent: '#ff3d5a' },
    { label: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', accent: '#67d0ff' },
    { label: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', accent: '#e2e8f0' },
    { label: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', accent: '#38bdf8' },
    { label: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', accent: '#4ade80' },
    { label: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', accent: '#e5e7eb' },
    { label: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', accent: '#4ade80' },
    { label: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', accent: '#f97316' }
  ]

  return (
    <section className="about" id="about">
      <h1
        ref={titleReveal.ref}
        className={`about-title scroll-reveal ${titleReveal.isVisible ? 'revealed' : ''}`}
      >
        About <span className="highlight">Me</span>
      </h1>

      <div className="about-layout">
        <div
          ref={contentReveal.ref}
          className={`about-copy scroll-reveal ${contentReveal.isVisible ? 'revealed' : ''}`}
        >
          <h2>Passionate developer building the future of the web.</h2>

          <p>
            I&apos;m Shefiu Abdullahi, a full-stack developer based in Lagos, Nigeria, with a deep
            love for creating elegant, efficient, and user-centric digital solutions. With a
            background in both engineering and design, I bridge the gap between complex
            functionality and intuitive user experiences.
          </p>

          <p>
            My approach is centered around clean code, performance optimization, and accessibility.
            I believe every pixel has a purpose and every line of code should contribute to a
            seamless user experience.
          </p>

          <div
            ref={stackReveal.ref}
            className={`tech-stack scroll-reveal ${stackReveal.isVisible ? 'revealed' : ''}`}
          >
            {techStack.map((item, index) => (
              <div key={index} className="tech-pill">
                <span className="tech-check">✓</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="cta-row">
            <button type="button" className="primary-btn" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Get In Touch</button>
          </div>
        </div>

        <aside className="profile-card">
          <div className="card-inner">
            <div className="profile-intro">
              <div className="profile-avatar"><span>SA</span></div>
              <div>
                <h3>Shefiu Abdullahi</h3>
                <p>Full-Stack Developer</p>
              </div>
            </div>

          <div className="profile-meta">
            <div>
              <span>Location</span>
              <strong>Lagos, Nigeria</strong>
            </div>
            <div>
              <span>Experience</span>
              <strong>2+ Years</strong>
            </div>
            <div>
              <span>Freelance</span>
              <strong>Available</strong>
            </div>
          </div>

            <blockquote>
              “Transforming ideas into digital reality through code and design.”
            </blockquote>
          </div>
        </aside>
      </div>

      <div className="about-stack-section" id="skills">
        <h2 className="about-stack-title">
          My <span className="highlight">Stack</span>
        </h2>
        <p className="about-stack-subtitle">
          The technologies and tools I use to bring digital ideas to life. I&apos;m always
          expanding my toolkit to stay ahead of the curve.
        </p>

        <div className="about-stack-grid">
          {techStack.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="about-stack-card"
              style={{ '--card-accent': item.accent }}
            >
              <img src={item.logo} alt={`${item.label} logo`} className="about-stack-logo" />
              <div className="about-stack-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
