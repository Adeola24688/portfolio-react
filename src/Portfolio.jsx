import React from 'react'
import './Portfolio.css'
import mywork_data from './assets/mywork_data'
import arrow_icon from './assets/arrow_icon.svg'

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="portfolio-title">My latest <span className="highlight">work</span></h1>

      <div className="portfolio-grid">
        {mywork_data.map((work, index) => (
          <div key={index} className="portfolio-card">
            {work.w_url ? (
              <a href={work.w_url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                <img src={work.w_img} alt={work.w_name} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>{work.w_name}</h3>
                  <img src={arrow_icon} alt="arrow" className="overlay-arrow" />
                </div>
              </a>
            ) : (
              <>
                <img src={work.w_img} alt={work.w_name} className="portfolio-img" />
                <div className="portfolio-overlay">
                  <h3>{work.w_name}</h3>
                  <img src={arrow_icon} alt="arrow" className="overlay-arrow" />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
