import React from 'react'

import Card from '../components/Card'

import maltaGuide from '../assets/maltaGuide.webp'
import lehmanBrothers from '../assets/lehmanBrothers.webp'

const Pages = () => {
  return (
    <div>
      {/* <Card /> */}
      <h1 className="project-heading"><span style={{ color: "brown" }}>Filfla.eu</span>'s Basic Projects</h1>
      <div className="projects-page">
        <div className="card-grid-double">
          <Card 
            link="https://malta-guide.filfla.eu"
            heading="Malta Guide"
            desc="Explore Malta's rich history, breathtaking scenery, and vibrant culture with this essential guide, perfect for travelers and anyone eager to learn more about this captivating Mediterranean island."
            image={maltaGuide}
          />

          <Card 
            link="https://lehman-brothers.filfla.eu"
            heading="Lehman Brothers"
            desc="We know it is hard to find information about Lehman Brothers. Which is why Filfla.eu presents you Lehman Brothers: A Case Study"
            image={lehmanBrothers}
          />

          <Card 
            link="https://research.filfla.eu"
            heading="Research App"
            desc="Find out how I created my sites and what information I got in doing so! All sites' info in one! Have fun learning and exploring my content! (Under construction! Coming out soon!)"
            // image={lehmanBrothers}
          />
        </div>
      </div>
    </div>
  )
}

export default Pages