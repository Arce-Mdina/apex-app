import React from 'react'

const Archive = () => {
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