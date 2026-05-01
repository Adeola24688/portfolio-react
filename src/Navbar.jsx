import React, { useState } from 'react'
import './Navbar.css'
import menu_open from './assets/menu_open.svg'
import menu_close from './assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMenuClick = (item) => {
    setMenu(item)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="logo">Abdullahi</div>
      
      <img 
        src={mobileMenuOpen ? menu_close : menu_open} 
        alt="menu" 
        className="menu-icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <li onClick={() => handleMenuClick('home')}>
          <a href="#home" className={menu === 'home' ? 'active' : ''}>Home</a>
        </li>
        <li onClick={() => handleMenuClick('about')}>
          <a href="#about" className={menu === 'about' ? 'active' : ''}>About Me</a>
        </li>
        <li onClick={() => handleMenuClick('services')}>
          <a href="#services" className={menu === 'services' ? 'active' : ''}>Services</a>
        </li>
        <li onClick={() => handleMenuClick('portfolio')}>
          <a href="#portfolio" className={menu === 'portfolio' ? 'active' : ''}>Portfolio</a>
        </li>
        <li onClick={() => handleMenuClick('contact')}>
          <a href="#contact" className={menu === 'contact' ? 'active' : ''}>Contact</a>
        </li>
      </ul>

      <button className="nav-connect">Connect With Me</button>
    </nav>
  )
}

export default Navbar
