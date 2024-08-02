import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import DeveloperProfile from './components/DeveloperProfile';

const App = () => {
  return (
    <>
      <div className="content">
        <Navbar />
        <Section
          id="about"
          backgroundColor="#f8f9fa"
          title="About Us"
          content="Hello! Welcome to our site. This site is still under maintenance. When it's finished, it will include all of our projects and platforms."
        />
        <Section
          id="projects"
          backgroundColor="#ffc48a"
          // backgroundColor="#e9ecef"
          title="Upcoming Projects"
          content="Give us a suggestion!"
        />
        <Section
          id="developers"
          backgroundColor="#ff8e7a"
          // backgroundColor="#dee2e6"
          title="Meet the Developers"
          content={
            <div style={{ display: 'flex', justifyContent: 'space-around', color: 'white' }}>
              <DeveloperProfile
                name="Bill"
                imageUrl="path/to/image1.jpg"
                // bio="Bio of Developer One."
              />
              {/* <DeveloperProfile
                name="Developer Two"
                imageUrl="path/to/image2.jpg"
                bio="Bio of Developer Two."
              />
              <DeveloperProfile
                name="Developer Three"
                imageUrl="path/to/image3.jpg"
                bio="Bio of Developer Three."
              /> */}
            </div>
          }
        />
        <Section
          id="contact"
          backgroundColor="#ced4da"
          title="Contact Us"
          content={(
            <div>
              <a href="mailto:william@redhill.space" style={{ padding: '10px', backgroundColor: "white", borderRadius: "10px", borderColor: "0.3px solid gray", color: "dodgerblue"}} className="contact-btn">Give us an email!</a>
              <h4>Or give us a suggestion of a project!</h4>
              <h5>Site 2.0 is coming!</h5>
            </div>
          )}
        />
      </div>
    </>
  );
};

export default App;
