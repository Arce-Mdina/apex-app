import React from 'react'

import { useNavigate } from 'react-router-dom'

const Sources = () => {

    const navigate = useNavigate();

    const links = {
        link1: "https://upload.wikimedia.org/wikipedia/commons/6/65/Filfla_Island.jpg",
        link2: "https://upload.wikimedia.org/wikipedia/commons/8/81/Filfla_island.jpg",
        link3: "https://upload.wikimedia.org/wikipedia/commons/2/22/Filfla_the_islet_of_Malta.jpg",
        link4: "https://live.staticflickr.com/4029/34829777774_91181405a6_b.jpg",
    }

  return (
    <div>
        <div style={{ width: "60vw", textAlign: "left", overflow: "hidden" }}>
            Images used in the <span onClick={() => navigate('/filfla')} style={{ color: "green", cursor: "pointer" }}>/filfla</span> page (in order):
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