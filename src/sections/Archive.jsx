import React from 'react'

const Archive = () => {

  // SVG
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
    <div>
        <div>

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
      </div>
      
    </div>
  )
}

export default Archive