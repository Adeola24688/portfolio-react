import './Portfolio.css'
import mywork_data from './assets/mywork_data'
import useScrollReveal from './hooks/useScrollReveal'

const Portfolio = () => {
  const titleReveal = useScrollReveal()
  const gridReveal = useScrollReveal({ threshold: 0.08 })

  return (
    <section className="portfolio" id="portfolio">
      <h1
        ref={titleReveal.ref}
        className={`portfolio-title scroll-reveal ${titleReveal.isVisible ? 'revealed' : ''}`}
      >
        My latest <span className="highlight">work</span>
      </h1>

      <div
        ref={gridReveal.ref}
        className={`portfolio-grid stagger-children ${gridReveal.isVisible ? 'revealed' : ''}`}
      >
        {mywork_data.map((work, index) => (
          <div key={index} className="portfolio-card scroll-reveal-child">
            <div className="portfolio-img-wrapper">
              <img src={work.w_img} alt={work.w_name} className="portfolio-img" />
              <div className="portfolio-overlay">
                {work.w_url && (
                  <a
                    href={work.w_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-link"
                    aria-label={`View ${work.w_name} live`}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            <div className="portfolio-info">
              <h3 className="portfolio-name">{work.w_name}</h3>
              {work.w_desc && (
                <p className="portfolio-desc">{work.w_desc}</p>
              )}
              {work.w_tags && (
                <div className="portfolio-tags">
                  {work.w_tags.map((tag, i) => (
                    <span key={i} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
