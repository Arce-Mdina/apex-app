import React, { useRef } from 'react'
import Logo from '../../public/logo.webp'

import { useNavigate } from 'react-router-dom'

import Section from '../components/Section'

import reactLogo from '../assets/react.svg'

import Footer from '../components/Foot'

const Landing = () => {

  const navigate = useNavigate();

  const explanationRef = useRef(null);

  // Function to handle the scroll
  const scrollToExplanation = () => {
    explanationRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="header">
        <img src={Logo} className="logo-img"/>
        <h1>Welcome to <span style={{ color: "brown" }}>Filfoletta.eu</span>!</h1>
        {/* <h2>The website where all your dreams come true!!!</h2> */}
        <h2 style={{ fontWeight: "normal", paddingBottom: "15px", fontFamily: "EB Garamond" }}>Discover my journey through innovative projects and creative explorations, all crafted from the heart of Europe.</h2>
        <div className="title-btns">
          <button className="link-btn link-1" onClick={scrollToExplanation}>Learn more</button>
          <button className="link-btn link-2" onClick={() => navigate('/domain-history')}>Why filfoletta?</button>
        </div>
      </div>

      <div ref={explanationRef}>

        <Section 
          fontSize="2.5em"
          title="Discover"
          titleTwo="all of my projects"
          backgroundColor="#ECEFF1"
          content={<><img src={reactLogo} style={{ width: "100px" }}/> <br /> <br></br> All of my projects will be displayed here so you can take inspiration and build your own! Not all of them are about programming so anyone is welcome! </>}
          footer={(<><button className='project-btn' onClick={() => navigate('/pages')}>See all of my projects</button></>)}
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
        title="Learn"
        titleTwo="new skills"
        backgroundColor="#DEE3E6"
        content={<>Learn as you explore how I do my projects, and make them better. You can access my open-source code anywhere* and use them as reference. <br /> <br /><div style={{ fontSize: '0.7em' }}>*as long as the network you are on is not blocking the platform.</div></>}
      />

      <Section 
        fontSize="2.5em"
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