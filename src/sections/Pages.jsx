import React from 'react'

import Card from '../components/Card'

import maltaGuide from '../assets/maltaGuide.webp'
import lehmanBrothers from '../assets/lehmanBrothers.webp'

const Pages = () => {
  return (
    <div>
      {/* <Card /> */}
      <h1 className="project-heading"><span style={{ color: "brown" }}>Mdina.eu</span>'s Projects</h1>
      <div className="projects-page">
        <div className="card-grid-double">
          <Card 
            link="https://malta-guide.mdina.eu"
            heading="Malta Guide"
            desc="Explore Malta's rich history, breathtaking scenery, and vibrant culture with this essential guide, perfect for travelers and anyone eager to learn more about this captivating Mediterranean island."
            image={maltaGuide}
          />

          <Card 
            link="https://lehman-brothers.mdina.eu"
            heading="Lehman Brothers"
            desc="We know it is hard to find information about Lehman Brothers. Which is why this site is all about Lehman Brothers."
            image={lehmanBrothers}
          />
        </div>
      </div>
    </div>
  )
}

export default Pages