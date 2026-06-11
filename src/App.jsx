import './App.css'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import BackToTop from './BackToTop'
import hero_img from './assets/profile_photo.jpeg'

const App = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <img src={hero_img} alt="profile" className="hero-img" />
          <h1 className="hero-title">
            <span className="hero-name-line">I'm <span className="gradient-text">Shefiu Abdullahi</span>,</span>
            <span className="hero-role-line">full-stack web developer based in Nigeria.</span>
          </h1>
          <p className="hero-description">
            I build responsive web applications with Angular, React, Next JS, TypeScript, PHP, ASP.NET Core (C#), and PostgreSQL/MySQL. I enjoy turning clean interfaces into functional, database-powered experiences that are easy to use.
          </p>
          <div className="hero-buttons">
            <button type="button" className="btn btn-primary" onClick={scrollToContact}>Connect with me</button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>My resume</button>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
