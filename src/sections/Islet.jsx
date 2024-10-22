import React, { useState } from 'react'

// import loc from '../assets/Filfla-place.webp'

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
        <h1 className='project-heading'>Filfla Islet</h1>
        <div>
            <BgCard 
                image="https://upload.wikimedia.org/wikipedia/commons/6/65/Filfla_Island.jpg"
                heading="What is Filfla?"
                func={openBackgroundOverlay}
            />

            <BgCard 
                image=""
                heading="Where is Filfla?"
                func={openLocationOverlay}
            />

            <BgCard
                image='' 
                heading="History of Filfla"
                func={openUsageOverlay}
            />

            <BgCard 
                image=''
                heading="How can I get to Filfla?"
                func={() => open('https://kmmaltairlines.com/en', '_blank')}
            />
        </div>

        {/* Overlays */}
        <Overlay 
            type={locationOverlay}
            closeFunc={closeLocationOverlay}
            heading={
                <div style={{ color: "brown" }}>
                    Filfla's Location
                </div>
            }
            content={
                <div>
                    Filfla is off the Southern Coast of Malta. You can view this tiny islet on the Dingli Cliffs,
                    and on the coast in the city of Qrendi, Siġġiewi or any other coastal cities. Its exact cooridinate is here: &nbsp;
                    
                    <a href="https://www.google.ie/maps/place/35%C2%B047'14.6%22N+14%C2%B024'35.0%22E/@35.7873901,14.4071323,17z/data=!3m1!4b1!4m4!3m3!8m2!3d35.7873901!4d14.4097072?entry=ttu&g_ep=EgoyMDI0MTAxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank"> 
                        35.787390114902145, 14.409707152162456
                    </a>
                </div>
            }
        />

        <Overlay 
            type={backgroundOverlay}
            closeFunc={closeBackgroundOverlay}
            heading={
                <div style={{ color: "brown" }}>
                    About Filfla
                </div>
            }
            content={
                <div>
                    <p>
                        Filfla is tiny islet off the coast of Malta, it is owned by the Government of Malta
                        and it is a natural reserve site. Filfla is currently inhabited, and will remain so, although
                        it is possible to go on it for tours etc.
                    </p>

                    <p>
                        There is a Maltese legends on the creation of Filfla. The legend recounts that there was a community
                        who lived in the area now called Il-Maqluba. The community lived such dissolute lives that a neighbour
                        once warned of the community of their sinful ways, to no effect. God therefore wants to punish the sinners
                        by englufing the hamlet, saving only the wise neighbour. Angels were to said to have thrown a piece of the hamlet
                        into the sea, creating the isle of Filfla.
                    </p>
                </div>
            }
        />

        <Overlay 
            type={usageOverlay}
            closeFunc={closeUsageOverlay}
            heading={
                <div style={{ color: "brown" }}>
                    Filfla's History
                </div>
            }
            content={
                <div>
                    <p>
                        Filfla was considered to be sacred, which was probably why the Maltese built temples 
                        on the Maltese main coast opposite the islet.
                    </p>

                    <p>
                        Filfla had some structures on it. There was a chapel built inside the cave of Filfla,
                        however, it was destroyed in an earthquake in 1856, but that also sank the cave. 
                        An old Malta map showed a fort, a lighthouse and also a chapel dating back to 1798.
                    </p>

                    <p>
                        Until 1971, the Royal Navy and the Royal Air Force used the islet for target practice,
                        these bombardments and empty catridges could still be seen today! In 1980, it became a bird reserve.
                    </p>

                    <p>
                        In 1988, there was Filfla Natural Reserve Act enacted by the Maltese government which provided
                        restriction on access and use, including a ban on fishing within one nautical mile of the islet 
                        due to the risk of unexploded ordance exploding (it was a target practice...), although later acts
                        permitted people to fish there again.
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