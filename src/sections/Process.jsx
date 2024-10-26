import React from 'react'

import FlipCard from '../components/Flipcard';

const Process = () => {

  return (
    <div className="card-grid-triple phases">
        <div className="phase-one">
            
            <FlipCard 
                title={
                    <h1 className="phases-heading">Phase 1</h1>
                }
                info="fdas"
            />
        </div>

        <div className="phase-two">
            <FlipCard 
                title={
                    <h1 className="phases-heading">Phase 2</h1>
                }
                info="fdas"
            />
        </div>

        <div className="phase-three">
            <FlipCard 
                title={
                    <h1 className="phases-heading">Phase 3</h1>

                }
                info="fdas"
            />
        </div>
    </div>
  )
}

export default Process