import React, { useState, useEffect } from 'react';
import './Navbar.css'; // import your CSS

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // If scrolling down and passed a threshold, hide the navbar
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNavbar(false);
    } else if (currentScrollY < lastScrollY) {
      // When scrolling up, show the navbar again
      setShowNavbar(true);
    }
    
    // Update the last scroll position
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="nav">
      <div className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
        {/* <h1>My Navbar</h1> */}
        <a className="nav-link">About</a>
        <a className="nav-link">Mission</a>
        <a className="nav-link">Testimonials</a>
        <a className="nav-link">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
