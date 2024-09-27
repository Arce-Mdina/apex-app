import React from 'react'

const BgCard = ({ func, id, heading, image, content }) => {
  return (
    <div className="bg-card-layout">
        <div key={id} className="city-card" onClick={func} style={{ backgroundImage: `url(${image})` }}>
            <div className="cover"></div>
            <div className='city-card-content'>
                <h2>{heading}</h2>
                <div>{content}</div>
            </div>
        </div>
    </div>
  )
}

export default BgCard