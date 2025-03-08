import React, { useRef, useState, useEffect } from 'react'
import Logo from '../assets/logo.webp'

import Hero from '../components/Hero';

import { useNavigate } from 'react-router-dom'

import Section from '../components/Section'
import Footer from '../components/Foot'
import Padding from '../components/Padding'
import Overlay from '../components/Overlay'

import Navbar from '../components/Navbar';

// Icons
import { faGlobe, faBook, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import gsap from 'gsap'

import logo from '../assets/logo.webp'

const Landing = () => {

  const navigate = useNavigate();

  const explanationRef = useRef(null);

  useEffect(() => {
    gsap.from(".word", {
      opacity: 0,
      y: 20, 
      duration: 0.7, 
      stagger: 0.1 
    })
  }, [])

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  

  return (
    <div className="App">

      {/* <Navbar/> */}

      <div style={{ padding: "20px" }}></div>

      <div className="header">
        <div style={{ display: "flex", margin: "0 auto", justifyContent: "center", alignItems: "center" }}>
          <img src={logo} style={{ width: "20px", height: "auto" }}/>
          &nbsp;
          <div className="label-heading">Filfla.eu</div>
        </div>

        <div className="heading-wrap">
          <h1 className="heading">
            <div>
              <span className="word">
                Promoting
              </span>&nbsp;
              <span className="word word1">Truths</span>&nbsp;
              <span className="word">Through</span>&nbsp;
              <span className="word">Seamless</span>&nbsp;
              <span className="word">Web</span>&nbsp;
              <span className="word">Experiences</span>&nbsp;
            </div>
          </h1>
        </div>

        {/* <button className="head-btn">
          <span className="head-btn-border"></span>
          <span className="inline-btn-text">
            Show my projects
          </span>
        </button> */}

        <button className="normal-btn" onClick={() => navigate('/projects')}>Explore our network</button>
      </div>

      <div className="card-grid-double">
        {/* <Hero
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
          
        /> */}
        <Hero
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
              <button className="standard-btn" onClick={() => navigate('/research')}>Our Research</button>
            </>
          }
        />
        <Hero
          icon={faLightbulb}
          color="gold"
          fontSize={120}
          title="Create your own ideas"
          text={
            <>
              By exploring Filfla.eu, you’ll gain valuable insights from our network of projects, 
              which can inspire your own creative ideas. With the information and resources available, 
              you’ll be able to shape your own unique solutions.

              <br></br>
              <br></br>
              <button className="standard-btn" onClick={() => navigate('/process')}>Our idea process</button>
            </>
          }
        />
      </div>

      {/* <Overlay
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
      /> */}

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
    </div>
  )
}

export default Landing