import React from 'react';

import { useNavigate } from 'react-router-dom';


// Sections
import Pages from './Pages'
import Pro from './Pro'

import ProjectCard from '../components/ProjectCard';


const Projects = () => {

  const navigate = useNavigate()

  return (
    <>
      <h1 className="project-heading"><span style={{ color: "brown" }}>Filfla.eu</span>'s Projects</h1>
      <div className="disclaimer">
        <h2 style={{ padding: "10px", margin: "0 auto" }}>Side Note</h2>
        We have two types of projects: Basic & Pro. <strong>Basic</strong> projects 
        are mostly-static websites containing static information. <strong>Pro</strong> projects 
        are none-static websites that generally offers a service and more features such as dynamic
        data & information.
      </div>

      <div className="projects-page">
        <div className="card-grid-double">
          <ProjectCard 
            link="/basic"
            heading="Basic Projects"
            desc="Our basic projects include informational websites built on areas of interest e.g. Malta & the finanical world."
          />

          <ProjectCard 
            link="/pro"
            heading="Pro Projects"
            desc="Our pro projects includes mostly API-powered websites build with dynamic data on areas of interest e.g. Crypto"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
