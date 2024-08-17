import React from 'react'

import Card from '../components/Card'

import maltaGuide from '../assets/maltaGuide.webp'

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
      </div>
    </div>
  )
}

export default Pages