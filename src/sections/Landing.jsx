import React, { useRef, useState } from 'react'
import Logo from '../assets/logo.webp'

import HeroRight from '../components/HeroRight';
import HeroLeft from '../components/HeroLeft';

import { useNavigate } from 'react-router-dom'

import Section from '../components/Section'

import Footer from '../components/Foot'

import Padding from '../components/Padding'

import Overlay from '../components/Overlay'

// Icons
import { faGlobe, faBook, faLightbulb } from '@fortawesome/free-solid-svg-icons';

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
        icon={faGlobe}
        color="dodgerblue"
        fontSize={120}
        title="Discover our network"
        text={
          <>
            Our network covers different fields and ideas, giving you the chance to learn 
            more about practical solutions and developments. Each project offers something new, 
            helping you stay informed and engaged in a changing world.

            <br></br>
            <br></br>
            <button className="standard-btn" onClick={() => navigate('/projects')}>Our projects</button>
          </>
        }
        
      />
      <HeroLeft
        icon={faBook}
        color="darkgreen"
        title="Expand your knowledge"
        fontSize={120}
        text={
          <>
            Explore various initiatives 
            spanning multiple fields, each designed to make an impact. 
            Whether you're interested in tech, sustainability, or creative ventures, 
            Filfla.eu connects you to cutting-edge solutions. 

            <br></br>
            <br></br>
            <button className="standard-btn" onClick={() => navigate('/research')}>Our research</button>
          </>
        }
      />
      <HeroRight
        icon={faLightbulb}
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