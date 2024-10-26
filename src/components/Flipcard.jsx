import React, { useState } from 'react';

const FlipCard = ({ info, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped); // Toggle the flip state
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {title}
        </div>
        <div className="flip-card-back">
          {info}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
