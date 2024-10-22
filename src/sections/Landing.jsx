import React, { useRef, useState } from 'react'
import Logo from '../assets/logo.webp'

import HeroRight from '../components/HeroRight';
import HeroLeft from '../components/HeroLeft';

import { useNavigate } from 'react-router-dom'

import Section from '../components/Section'

import net from '../assets/network.webp'
// <img src={reactLogo} style={{ width: "100px" }}/>

import Footer from '../components/Foot'

import Padding from '../components/Padding'

import Overlay from '../components/Overlay'

const Landing = () => {


  const navigate = useNavigate();

  const explanationRef = useRef(null);

  // Function to handle the scroll
  const scrollToExplanation = () => {
    explanationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [domainOverlay, setDomainOverlay] = useState(false)

  {/* Domain */}
  const openDomainOverlay = () => {
    setDomainOverlay(true);
  }

  const closeDomainOverlay = () => {
    setDomainOverlay(false);
  }

  const svgs = {
    networkSVG: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 400 400"
        >

          <line x1="200" y1="200" x2="100" y2="100" stroke="black" strokeWidth="2" />
          <line x1="200" y1="200" x2="300" y2="100" stroke="black" strokeWidth="2" />
          <line x1="200" y1="200" x2="100" y2="300" stroke="black" strokeWidth="2" />
          <line x1="200" y1="200" x2="300" y2="300" stroke="black" strokeWidth="2" />
          <line x1="200" y1="200" x2="200" y2="75" stroke="black" strokeWidth="2" />
          <line x1="200" y1="200" x2="200" y2="325" stroke="black" strokeWidth="2" />
          <line x1="200" y1="200" x2="75" y2="200" stroke="black" strokeWidth="2" />
          <line x1="200" y1="200" x2="325" y2="200" stroke="black" strokeWidth="2" />
          <circle cx="200" cy="200" r="50" fill="#ffcc00" />

          <circle cx="100" cy="100" r="20" fill="#ff6666" />
          <circle cx="300" cy="100" r="20" fill="#66ff66" />
          <circle cx="100" cy="300" r="20" fill="#6666ff" />
          <circle cx="300" cy="300" r="20" fill="#ff66ff" />
          <circle cx="200" cy="75" r="20" fill="#66ffff" />
          <circle cx="200" cy="325" r="20" fill="#ff9933" />
          <circle cx="75" cy="200" r="20" fill="#99ccff" />
          <circle cx="325" cy="200" r="20" fill="#ffcc99" />

          
        </svg>
      </>
    ),
    SVG:(<></>),
  }

  return (
    <>

      

      <div className="header">
        <img src={Logo} className="logo-img"/>
        <h1>Welcome to <span style={{ color: "brown",  }}>Filfla.eu</span>!</h1>
        {/* <h2 style={{ fontWeight: "normal", paddingBottom: "15px", fontFamily: "EB Garamond", color:"gray" }}>Explore our matrix of innnovative projects all crafted from the heart of Europe.</h2>         */}
        <h2 style={{ fontWeight: "normal", paddingBottom: "15px", fontFamily: "EB Garamond", color:"gray" }}>Explore the place where our creative imaginations becomes reality.</h2>
        {/* <h2 style={{ fontWeight: "normal", paddingBottom: "15px", fontFamily: "EB Garamond", color:"gray" }}>Filfla.eu - where innovation meets collaboration.</h2> */}
        <div className="title-btns">
          <button className="link-btn link-1" onClick={scrollToExplanation}>Learn more</button>
          <button className="link-btn link-2" onClick={openDomainOverlay}>Why Filfla?</button>
          
        </div>
      </div>


      <div ref={explanationRef}></div>


      <HeroRight
        icon="fa-solid fa-globe"
        color="dodgerblue"
        fontSize={120}
        title="Discover our network"
        text={
          <>
            Our network covers different fields and ideas, giving you the chance to learn 
            more about practical solutions and developments. Each project offers something new, 
            helping you stay informed and engaged in a changing world.
          </>
        }
        
      />
      <HeroLeft
        icon="fa-solid fa-book"
        color="darkgreen"
        title="Expand your knowledge"
        fontSize={120}
        text={
          <>
            Explore various initiatives 
            spanning multiple fields, each designed to make an impact. 
            Whether you're interested in tech, sustainability, or creative ventures, 
            Filfla.eu connects you to cutting-edge solutions. 
          </>
        }
      />
      <HeroRight
        icon="fa-solid fa-lightbulb"
        color="gold"
        fontSize={120}
        title="Create your own ideas"
        text={
          <>
            By exploring Filfla.eu, you’ll gain valuable insights from our network of projects, 
            which can inspire your own creative ideas. With the information and resources available, 
            you’ll be able to shape your own unique solutions.
          </>
        }
      />

      <Overlay
        heading={<>Why I chose <span style={{ color: "brown" }}>Filfla.eu</span></>}
        type={domainOverlay}
        
        closeFunc={closeDomainOverlay}
        content={
          <>
            <div>
              <div style={{ color: "#374a5aff" }}>
                <p>I chose the domain name filfla.eu because it has a unique and memorable quality that stands out. Its distinctiveness makes it easy for people to recall, and the playful tone adds a fun element that reflects the personality and energy behind the brand. The name encapsulates both creativity and simplicity, making it the perfect fit.</p>
              </div>
            </div>
          </>
        }
      />

      <Section 
        fontSize="2.5em"
        color="white"
        titleTwo="And if you came for information about Filfla..."
        backgroundColor="maroon"
        footer={
          <>
            <br></br>
            <button className="island-btn" onClick={() => navigate('/filfla')}>Then click here to learn about Filfla Islet!</button>
          </>
        }
      />

      

      

      

      <Footer />
    </>
  )
}

export default Landing