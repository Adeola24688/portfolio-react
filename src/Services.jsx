import './Services.css'
import useScrollReveal from './hooks/useScrollReveal'

const Services = () => {
  const { registerNode: titleNode, isVisible: titleVisible } = useScrollReveal()
  const { registerNode: gridNode, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 })

  const items = [
    { id: 1, number: '01', title: 'Frontend Development', desc: 'Create responsive, accessible interfaces with React and TypeScript, from reusable components to the details users notice.'},
    { id: 2, number: '02', title: 'Backend & API Development', desc: 'Build Python-powered APIs and integrate AWS services to connect application features with reliable data.'},
    { id: 3, number: '03', title: 'Database Management', desc: 'Structure and work with PostgreSQL data so application information stays organized and easy to use.'},
    { id: 4, number: '04', title: 'Full-Stack Development', desc: 'Bring frontend, backend, data, and cloud services together in a complete web application.'},
    { id: 5, number: '05', title: 'Project Planning', desc: 'Shape an early idea into a practical plan, break down the work, and keep progress moving toward release.'},
    { id: 6, number: '06', title: 'Website Maintenance', desc: 'Keep existing websites working well with updates, bug fixes, performance improvements, and ongoing care.'}
  ]

  return (
    <section className="services" id="services">
      <h1
        ref={titleNode}
        className={`services-title scroll-reveal ${titleVisible ? 'revealed' : ''}`}
      >
        My <span className="highlight">Services</span>
      </h1>

      <div
        ref={gridNode}
        className={`services-grid stagger-children ${gridVisible ? 'revealed' : ''}`}
      >
        {items.map((s) => (
          <article key={s.id} className="service-card scroll-reveal-child">
            <div className="service-number">{s.number}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
          </article>
        ))}
      </div>
      <p className="services-note">Additional services available on request.</p>
    </section>
  )
}

export default Services
