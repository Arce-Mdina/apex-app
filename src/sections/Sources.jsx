import React from 'react'

import { useNavigate } from 'react-router-dom'

const Sources = () => {

    const navigate = useNavigate();

    const links = {
        link1: "https://live.staticflickr.com/3163/3089465155_a01643860b_b.jpg",
        link2: "https://www.google.ie/maps/place/Mdina,+Malta/@41.3407466,-2.7550474,4.21z/data=!4m6!3m5!1s0x130e519568ce9a2f:0x99705c199db5bc13!8m2!3d35.8863691!4d14.4031146!16zL20vMDVqMTBx?entry=ttu&g_ep=EgoyMDI0MTAwNS4wIKXMDSoASAFQAw%3D%3D",
        link3: "https://images.pexels.com/photos/7681934/pexels-photo-7681934.jpeg",
        link4: "https://live.staticflickr.com/7756/27063138613_1c6d0b28b9_b.jpg",
    }

  return (
    <div>
        <div style={{ width: "60vw", textAlign: "left", overflow: "hidden" }}>
            Images used in the <span onClick={() => navigate('/filfoletta')} style={{ color: "green", cursor: "pointer" }}>/filfoletta</span> page (in order):
            <ul className="source-list">
                <li><a href={links.link1} target="_blank">{links.link1}</a></li>
                <li><a href={links.link2} target="_blank">{links.link2}</a></li>
                <li><a href={links.link3} target="_blank">{links.link3}</a></li>
                <li><a href={links.link4} target="_blank">{links.link4}</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Sources