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
                    Mdina is located next to the city of Rabat, in Malta. It is quite inland, quite
                    close to the center of the main island. The exact location on a map is here: &nbsp;
                    
                    <a href="https://www.google.ie/maps/place/Mdina,+Malta/@35.887438,14.3993175,15.52z/data=!4m6!3m5!1s0x130e519568ce9a2f:0x99705c199db5bc13!8m2!3d35.8863691!4d14.4031146!16zL20vMDVqMTBx?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" target="_blank"> 
                        35.88755948673046, 14.404176474670338
                    </a>
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
                    <p>
                        Mdina used to be the capital of Malta. Its high elevation gave its inhabitants
                        strategic defense and attacking positions in the event of war. In addition, its
                        fortification give the city defense from invaders. 
                    </p>

                    <p>
                        In the present day, it is called the Silent City. This due to the fact when the capital
                        mode out of Mdina into Valletta and left the city so inhabited people started to call it
                        a ghost town, or the silent city.
                    </p>
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
                    <p>
                        Mdina, often referred to as "The Silent City," 
                        is one of Malta's oldest and most historically rich cities. 
                        Its origins date back over 4,000 years, with evidence suggesting 
                        it was first established by the Phoenicians around 700 BCE. 
                        The city gained prominence during the Roman period when it became 
                        a key administrative center, and it is believed that St. Paul resided there 
                        after his shipwreck in Malta. Over time, Mdina became fortified due to 
                        its strategic location atop a hill, offering natural defense. 
                        Under Arab rule in the 9th century, it was further fortified, 
                        and its name was changed to "Mdina," derived from the Arabic word for "city."
                    </p>

                    <p>
                        During the medieval period, Mdina continued to thrive, especially under the 
                        rule of the Knights of St. John, who further enhanced its fortifications. 
                        Despite being replaced by Valletta as the administrative capital in the 16th century, 
                        Mdina retained its status as the noble and religious heart of Malta. 
                        Its narrow streets, baroque architecture, and serene atmosphere reflect 
                        centuries of history. Today, Mdina is a key cultural and historical attraction, 
                        with landmarks such as St. Paul's Cathedral and the city walls that still stand 
                        as a testament to its storied past.
                    </p>
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