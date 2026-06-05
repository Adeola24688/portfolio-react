import { useState } from 'react'
import './Footer.css'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribed with email:', email)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3 className="footer-logo">Abdullahi</h3>
          <p className="footer-description">
            I am a full-stack web developer from Nigeria with 2 years of experience building responsive applications using Angular, React, Next JS, TypeScript, PHP, ASP.NET Core (C#), and PostgreSQL/MySQL.
          </p>
        </div>

        <div className="footer-right">
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p className="copyright">© 2026 Shefiu Abdullahi. All rights reserved.</p>
        <div className="footer-links">
          <a href="#terms">Term of Services</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="https://github.com/Adeola24688" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>Connect with me</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
