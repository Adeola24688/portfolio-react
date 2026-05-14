import './Services.css'

const Services = () => {
  const items = [
    { id: 1, number: '01', title: 'Frontend Development', desc: 'Responsive interfaces built with HTML, CSS, JavaScript, React, and Next JS.'},
    { id: 2, number: '02', title: 'Backend Development', desc: 'Server-side features, form handling, and application logic built with PHP.'},
    { id: 3, number: '03', title: 'MySQL Databases', desc: 'Database design, queries, and data management for dynamic web applications.'},
    { id: 4, number: '04', title: 'Full-Stack Websites', desc: 'Complete web applications that connect modern frontend experiences to backend systems.'},
    { id: 5, number: '05', title: 'Portfolio Websites', desc: 'Clean personal and business websites designed to present work, skills, and services clearly.'},
    { id: 6, number: '06', title: 'Website Maintenance', desc: 'Updates, bug fixes, performance improvements, and ongoing support for existing websites.'}
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
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
