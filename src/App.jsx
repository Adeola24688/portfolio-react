import React from 'react'
import './App.css'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'
import hero_img from './assets/profile_photo.jpeg'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <img src={hero_img} alt="profile" className="hero-img" />
          <h1 className="hero-title">
            I'm <span className="gradient-text">Shefiu Abdullahi</span>, frontend developer based in Nigeria.
          </h1>
          <p className="hero-description">
            I am a frontend developer from Nigeria with 2 years of experience in building responsive and user-friendly web applications. I specialize in React and have a passion for creating beautiful and functional user interfaces.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Connect with me</button>
            <button className="btn btn-secondary">My resume</button>
          </div>
        </div>
      </section>
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
