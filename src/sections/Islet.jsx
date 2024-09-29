import React, { useState } from 'react'

import rock from '../assets/fifla-filfoletta-rock.webp'

import bigRock from '../assets/rock.webp'

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
        <h1 className='project-heading'>Filfoletta Islet</h1>
        <div>
            <BgCard 
                image={bigRock}
                heading="What is Filfoletta?"
                func={openBackgroundOverlay}
            />

            <BgCard 
                image={rock}
                heading="Where is Filfoletta?"
                func={openLocationOverlay}
            />

            <BgCard 
                image="https://cdn2.picryl.com/photo/2016/03/24/a-british-royal-marines-fires-at-his-target-at-the-ce6b9b-1024.jpg"
                heading="Usages of Filfoletta"
                func={openUsageOverlay}
            />

            <BgCard 
                image="https://live.staticflickr.com/2927/14051058577_fcf26d691a_b.jpg"
                heading="How can I get to Filfoletta?"
                func={() => open('https://www.ecomarinemalta.com.mt/tours/filfla-tour/', '_blank')}
            />
        </div>

        {/* Overlays */}
        <Overlay 
            type={locationOverlay}
            closeFunc={closeLocationOverlay}
            heading={
                <div style={{ color: "brown" }}>
                    Filfoletta's Location
                </div>
            }
            content={
                <div>
                    Filfoletta is located at one of the most southern points in the
                    Maltese Archipelago. It is right next to an bigger, but still quite small island, 
                    called Filfla. It's exact coordinates in the world: 
                    <a href="https://maps.app.goo.gl/3n3Fp3yAXftvxJLt5" target="_blank"> 35.78647615143773, 14.4069164787208</a>
                </div>
            }
        />

        <Overlay 
            type={backgroundOverlay}
            closeFunc={closeBackgroundOverlay}
            heading={
                <div style={{ color: "brown" }}>
                    About Filfoletta
                </div>
            }
            content={
                <div>
                    Filfoletta is one of Malta's smallest islands/islets. There is no sign of life on the
                    islet except for a few plants as an exception. It is a nature reserve protected by the Maltese
                    government so getting there and going on it is impossible. However, you can go on a boat around
                    it to get photos and a good look.
                </div>
            }
        />

        <Overlay 
            type={usageOverlay}
            closeFunc={closeUsageOverlay}
            heading={
                <div style={{ color: "brown" }}>
                    Filfoletta's Usage
                </div>
            }
            content={
                <div>
                    When the British governed Malta, the islands were used as a Royal Navy and sometimes
                    Royal Air Force military base. The small islands of Filfla and Filfoletta
                    is often used for target practice. Many shells from the 1900s are still there!
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