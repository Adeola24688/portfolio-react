import React from 'react'
import './Services.css'

const Services = () => {
  const items = [
    { id: 1, number: '01', title: 'Web design', desc: 'Web development is the process of building, programming...'},
    { id: 2, number: '02', title: 'Graphics design', desc: 'Web development is the process of building, programming...'},
    { id: 3, number: '03', title: 'Social media', desc: 'Web development is the process of building, programming...'},
    { id: 4, number: '04', title: 'App design', desc: 'Web development is the process of building, programming...'},
    { id: 5, number: '05', title: 'Digital marketing', desc: 'Web development is the process of building, programming...'},
    { id: 6, number: '06', title: 'Content writing', desc: 'Web development is the process of building, programming...'}
  ]

  return (
    <section className="services" id="services">
      <h1 className="services-title">My <span className="highlight">Services</span></h1>

      <div className="services-grid">
        {items.map((s) => (
          <article key={s.id} className="service-card">
            <div className="service-number">{s.number}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <a className="read-more" href="#">Read More <span className="arrow">→</span></a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
