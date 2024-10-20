import React, { useRef, useState } from 'react'
import Logo from '../../public/logo.webp'

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

  return (
    <>

      

      <div className="header">
        <img src={Logo} className="logo-img"/>
        <h1>Welcome to <span style={{ color: "brown" }}>Filfla.eu</span>!</h1>
        <h2 style={{ fontWeight: "normal", paddingBottom: "15px", fontFamily: "EB Garamond" }}>Start your journey with us today!</h2>
        <div className="title-btns">
          <button className="link-btn link-1" onClick={scrollToExplanation}>Learn more</button>
          <button className="link-btn link-2" onClick={openDomainOverlay}>Why Filfla?</button>
          
        </div>
      </div>

      <HeroRight
        icon="fa-solid fa-user"
        fontSize={50}
        title="Optimise your content with Search Analytics"
        text="See which queries bring users to your site. Analyse your site's impressions, clicks and position on Google Search."
      />
      <HeroLeft
        title="Get your content on Google"
        fontSize={50}
        text="Submit sitemaps and individual URLs for crawling. Review your index coverage to make sure your site is fresh."
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
            <button className="island-btn" onClick={() => navigate('/filfla')}>Then click here to learn about Filfla Islet</button>
          </>
        }
      />

      <div ref={explanationRef}>

        <Section 
          fontSize="2.5em"
          color="#374a5aff"
          title="Discover"
          titleTwo={<>our <span style={{ color: "#265573ff", fontWeight: "500" }}>network</span></>}
          backgroundColor="#ECEFF1"
          content={
            <div>
              {/* <span style={{ fontSize: "150px", lineHeight: "0.8", color: "dodgerblue", display: "inline-block", overflow: "hidden", }}>
                &#9881;
              </span> */}
              <img src={net} style={{ width: "100px" }}/>
              <Padding padding="3px"/>
              {/* <div>
                All of my projects will be displayed here so you can take inspiration and build your own! 
                Not all of them are about programming so anyone is welcome!
              </div> */}
            </div>
          }
          footer={(<><br></br><button className='project-btn' onClick={() => navigate('/network')}>See all of my projects</button></>)}
        />


        {/* <h2>How a site is produced (by the developer)</h2>
        <div style={{ padding: "17px" }}></div>
        <div className="card-grid-double">
          <Card heading="Step 1 - Idea" desc="It all starts with an inspiration, or idea that makes its way to the developer's mind. The first match that is lit in box of matches. This can range from anything, like a doodle, schoolwork, or out of boredom." classes="orange-red"/>
          <Card heading="Step 2 - Design" desc="The idea formulates to a plan, where a very brief design and logic of a website starts to form. This step could also include searching for similar sites to use as a reference. " classes="reddish-brown"/>
          <Card heading="Step 3 - Code" desc="Once a reference and design is completed, a website structure will be constructed. The most common language used in these projects are React.js. This step is the longest step of all of them and therefore requries more attention and resources." classes="blueish"/>
          <Card heading="Step 4 - Deploy" desc="A website has been built, tested, will be deployed onto GitHub, where using Cloudflare or other DNS sites, it is paired with a domain name and published online for the public's eyes. This is the time where a project will most likely show up here and marked as done." classes="green"/>
        </div> */}
      </div>

      <Section
        fontSize="2.5em"
        color="#374a5aff"
        title="Learn"
        titleTwo="new skills"
        backgroundColor="#DEE3E6"
        content={<>Learn as you explore how I do my projects, and make them better. You can access my open-source code anywhere* and use them as reference. <br /> <br /><div style={{ fontSize: '0.7em' }}>*as long as the network you are on is not blocking the platform.</div></>}
      />

      <Section 
        fontSize="2.5em"
        color="#374a5aff"
        title="Explore"
        titleTwo="your ideas"
        backgroundColor="#CCD4D9"
        content="By using my sites or other sites as a reference, your ideas will expand and you can create something wonderful! "
      />

      

      <Footer />
    </>
  )
}

export default Landing