import React, { useState } from 'react'

import rock from '../assets/fifla-filfoletta-rock.webp'

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

  return (
    <div>
        <h1>Filfoletta Islet</h1>
        <div>
            <BgCard 
                image={rock}
                heading="Where is Filfoletta?"
                func={openLocationOverlay}
            />
            {/* <p>
                Filfoletta is a piece of uninhabited rock or islet located in the
                most southern point in the Maltese Archipelago. 
            </p> */}
        </div>

        {/* Overlays */}
        <Overlay 
            type={locationOverlay}
            closeFunc={closeLocationOverlay}
            heading=""
            content=""
        />
    </div>
  )
}

export default Islet