import React, { useState } from 'react'

import loc from '../assets/mdina-place.webp'

import BgCard from '../components/BgCard'
import Overlay from '../components/Overlay'

const Islet = () => {

  const [locationOverlay, setLocationOverlay] = useState(false)

  {/* Location */}
  const openLocationOverlay = () => {
    setLocationOverlay(true);
  }

  const closeLocationOverlay = () => {
    setLocationOverlay(false);
  }


  const [backgroundOverlay, setBackgroundOverlay] = useState(false)

  {/* Background */}
  const openBackgroundOverlay = () => {
    setBackgroundOverlay(true);
  }

  const closeBackgroundOverlay = () => {
    setBackgroundOverlay(false);
  }


  const [usageOverlay, setUsageOverlay] = useState(false)

  {/* Usage */}
  const openUsageOverlay = () => {
    setUsageOverlay(true);
  }

  const closeUsageOverlay = () => {
    setUsageOverlay(false);
  }

  return (
    <div>
        <h1 className='project-heading'>The Silent City</h1>
        <div>
            <BgCard 
                image="https://live.staticflickr.com/3163/3089465155_a01643860b_b.jpg"
                heading="What is Mdina?"
                func={openBackgroundOverlay}
            />

            <BgCard 
                image={loc}
                heading="Where is Mdina?"
                func={openLocationOverlay}
            />

            <BgCard
                image='https://images.pexels.com/photos/7681934/pexels-photo-7681934.jpeg' 
                heading="History of Mdina"
                func={openUsageOverlay}
            />

            <BgCard 
                image='https://live.staticflickr.com/7756/27063138613_1c6d0b28b9_b.jpg'
                heading="How can I get to Mdina?"
                func={() => open('https://kmmaltairlines.com/en', '_blank')}
            />
        </div>

        {/* Overlays */}
        <Overlay 
            type={locationOverlay}
            closeFunc={closeLocationOverlay}
            heading={
                <div style={{ color: "brown" }}>
                    Mdina's Location
                </div>
            }
            content={
                <div>
                     
                    <a href="" target="_blank"> </a>
                </div>
            }
        />

        <Overlay 
            type={backgroundOverlay}
            closeFunc={closeBackgroundOverlay}
            heading={
                <div style={{ color: "brown" }}>
                    About Mdina
                </div>
            }
            content={
                <div>
                    
                </div>
            }
        />

        <Overlay 
            type={usageOverlay}
            closeFunc={closeUsageOverlay}
            heading={
                <div style={{ color: "brown" }}>
                    Mdina's History
                </div>
            }
            content={
                <div>
                    
                </div>
            }
        />
        <br></br>

        <a style={{ color: "gray", cursor: "pointer", textDecoration: "none", fontWeight: "bold" }} href="/sources">Learn more about where I found the images</a>
        <br></br>
        <br></br>
        <br></br>
    </div>
  )
}

export default Islet