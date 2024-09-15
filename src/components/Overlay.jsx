import React from 'react'

const Overlay = ({ type, closeFunc, content, heading }) => {
  return (
    <>
      {type && <div className="overlay-background" onClick={closeFunc}></div>}

      {type && (
      <div className="overlay">
        {/* Overlay content */}
        <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
          <h2 className="overlay-heading">{heading}</h2>
          <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
            <div className="scrollable-content">
                
              {content}
              
                
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Overlay