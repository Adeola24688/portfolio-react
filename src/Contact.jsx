import { useState } from 'react'
import './Contact.css'
import mail_icon from './assets/mail_icon.svg'
import call_icon from './assets/call_icon.svg'
import location_icon from './assets/location_icon.svg'
import useScrollReveal from './hooks/useScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [result, setResult] = useState('')

  const titleReveal = useScrollReveal()
  const leftReveal = useScrollReveal({ rootMargin: '0px 0px -30px 0px' })
  const formReveal = useScrollReveal({ rootMargin: '0px 0px -30px 0px' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)
    formData.append('access_key', 'b0f3b0a1-2366-4e46-ab50-88099678c83b')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()
    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
      setFormData({ name: '', email: '', message: '' })
    } else {
      setResult('Error')
    }
  }

  return (
    <section className="contact" id="contact">
      <h1
        ref={titleReveal.ref}
        className={`contact-title scroll-reveal ${titleReveal.isVisible ? 'revealed' : ''}`}
      >
        Get in <span className="highlight">touch</span>
      </h1>

      <div className="contact-container">
        <div
          ref={leftReveal.ref}
          className={`contact-left scroll-reveal-left ${leftReveal.isVisible ? 'revealed' : ''}`}
        >
          <h2>Let's <span className="gradient-text">talk</span></h2>
          <p>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <img src={mail_icon} alt="email" />
              <p>abdullahishefiu99@gmail.com</p>
            </div>
            <div className="info-item">
              <img src={call_icon} alt="phone" />
              <p>08145892973</p>
            </div>
            <div className="info-item">
              <img src={location_icon} alt="location" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <form
          ref={formReveal.ref}
          className={`contact-form scroll-reveal-right ${formReveal.isVisible ? 'revealed' : ''}`}
          onSubmit={onSubmit}
        >
          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Write your message here</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
            ></textarea>
          </div>

          {result && <div className="form-message">{result}</div>}

          <button type="submit" className="submit-btn">
            Submit now
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
