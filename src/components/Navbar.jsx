import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#343a40', padding: '1rem' }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', margin: 0, padding: 0, color: '#fff' }}>
        <li><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a></li>
        <li><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
        <li><a href="#developers" style={{ color: '#fff', textDecoration: 'none' }}>Developers</a></li>
        <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
