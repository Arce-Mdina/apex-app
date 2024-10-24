import React from 'react'
import Card from '../components/Card'

const Research = () => {
  return (
    <div>
        <h1 className="project-heading"><span style={{ color: "brown" }}>Filfla.eu</span>'s Research</h1>
        <div className="projects-page">
        <div className="card-grid-double">
          <Card 
            link="https://research.filfla.eu/malta-guide"
            heading="Malta Guide Research"
            desc={
                <>
                  This project focused on creating a guide for people visiting Malta as well as
                  learning about Malta's cultural heritage, history, current affairs etc.
                </>
            }
          />

          <Card 
            link="https://research.filfla.eu/lehman-brothers"
            heading="Lehman Brothers Research"
            desc={
                <>
                  This project focuses on giving people a more concentration information center
                  for a company called Lehman Brothers. It seeks to educate people and let them 
                  learn and possibly introduce them into the financial world.
                </>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Research