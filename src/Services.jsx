import './Services.css'
import useScrollReveal from './hooks/useScrollReveal'

const Services = () => {
  const titleReveal = useScrollReveal()
  const gridReveal = useScrollReveal({ threshold: 0.1 })

  const items = [
    { id: 1, number: '01', title: 'Frontend Development', desc: 'Responsive interfaces built with HTML, CSS, JavaScript, TypeScript, React, Next JS, and Angular.'},
    { id: 2, number: '02', title: 'Backend Development', desc: 'Server-side features, RESTful APIs, and logic built with PHP and ASP.NET Core (C#).'},
    { id: 3, number: '03', title: 'Database Management', desc: 'Database design, queries, and integration using MySQL and PostgreSQL.'},
    { id: 4, number: '04', title: 'Full-Stack Websites', desc: 'Complete web applications that connect modern frontend experiences to backend systems.'},
    { id: 5, number: '05', title: 'Portfolio Websites', desc: 'Clean personal and business websites designed to present work, skills, and services clearly.'},
    { id: 6, number: '06', title: 'Website Maintenance', desc: 'Updates, bug fixes, performance improvements, and ongoing support for existing websites.'}
  ]

  return (
    <section className="services" id="services">
      <h1
        ref={titleReveal.ref}
        className={`services-title scroll-reveal ${titleReveal.isVisible ? 'revealed' : ''}`}
      >
        My <span className="highlight">Services</span>
      </h1>

      <div
        ref={gridReveal.ref}
        className={`services-grid stagger-children ${gridReveal.isVisible ? 'revealed' : ''}`}
      >
        {items.map((s) => (
          <article key={s.id} className="service-card scroll-reveal-child">
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
