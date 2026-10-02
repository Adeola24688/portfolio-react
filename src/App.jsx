import './App.css'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import BackToTop from './BackToTop'

const App = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Navbar />
      <section className="hero" id="home">
        <div className="hero-content hero-content--text-only">
          <p className="eyebrow">AVAILABLE FOR NEW OPPORTUNITIES</p>
          <h1 className="hero-title">
            <span className="hero-name-line">Hi, I&apos;m <span className="gradient-text">Shefiu Abdullahi</span></span>
            <span className="hero-role-line">Crafting digital experiences with precision.</span>
          </h1>
          <p className="hero-description">
            I&apos;m a Full-Stack Developer specializing in building exceptional digital experiences.
            Currently, I&apos;m focused on building accessible, human-centered products that blend
            performance with stunning aesthetics.
          </p>
          <div className="hero-buttons">
            <button type="button" className="btn btn-primary" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>View My Work</button>
            <button type="button" className="btn btn-secondary" onClick={scrollToContact}>Let&apos;s Talk</button>
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
