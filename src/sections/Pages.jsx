import React from 'react'

import Card from '../components/Card'

import maltaGuide from '../assets/maltaGuide.webp'
import lehmanBrothers from '../assets/lehmanBrothers.webp'

const Pages = () => {
  return (
    <div>
      {/* <Card /> */}
      <h1><span style={{ color: "brown" }}>Filfoletta.eu</span>'s Projects</h1>
      <div className="card-grid-triple">
        <Card 
          link="https://malta-guide.filfoletta.eu"
          heading="Malta Guide"
          desc="Explore Malta's rich history, breathtaking scenery, and vibrant culture with this essential guide, perfect for travelers and anyone eager to learn more about this captivating Mediterranean island."
          image={maltaGuide}
        />

        <Card 
          link="https://lehman-brothers.filfoletta.eu"
          heading="Lehman Brothers"
          desc="We know it is hard to find information about Lehman Brothers. Which is why this site is all about Lehman Brothers."
          image={lehmanBrothers}
        />
      </div>
    </div>
  )
}

export default Pages