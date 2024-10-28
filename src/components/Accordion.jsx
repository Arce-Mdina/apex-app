import React, { useState, useRef } from 'react'

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button 
        onClick={toggleAccordion} 
        className={`accordion ${isOpen ? 'active' : ''}`}
      >
        {title}
        <span className="icon">
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div 
        ref={contentRef} 
        className={`panel ${isOpen ? 'open' : ''}  `}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0' }}
      >
        <div>{content}</div>
      </div>

      <br></br>
    </div>
  );
};

export default Accordion