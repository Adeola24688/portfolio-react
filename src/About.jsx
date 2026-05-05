import './About.css'
import about_img from './assets/profile_photo.jpeg'

const About = () => {
  const skills = [
    { name: 'HTML & CSS', percentage: 95 },
    { name: 'React JS', percentage: 100 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Next JS', percentage: 85 }
  ]

  return (
    <section className="about" id="about">
      <h1 className="about-title">About <span className="highlight">me</span></h1>

      <div className="about-content">
        <img src={about_img} alt="about" className="about-img" />

        <div className="about-text">
          <p>
            I am a frontend developer from Nigeria with 2 years of professional experience in building responsive and user-friendly web applications. Throughout my journey, I have had the opportunity to work on diverse projects that strengthened my skills and passion for frontend development.
          </p>
          <p>
            My expertise in React and modern web technologies is reflected in my dedication to creating beautiful and functional user interfaces. I bring enthusiasm and attention to detail to every project I work on.
          </p>

          <div className="skills">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-fill" 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
