import React from 'react'

import Accordion from '../components/Accordion'


const Process = () => {

  return (
    <>
        <h1 className="project-heading"><span style={{ color: "brown" }}>Filfla.eu</span>'s Work Process</h1>
        <div className="card-grid-double process">
            <div className="phases">
                <h1 className="phases-heading">Phase 1</h1>
            </div>
            <div className="">
                <Accordion 
                    title="Inspiration"
                    content={
                        <>
                            <div>
                                <p>
                                    Our projects usually start with a topic of interest or with something
                                    that we have a connection with. This could range from studies of one of
                                    the most important financial institutions of all time to a disease we got over
                                    the holidays.
                                </p>
                            </div>
                        </>
                    }
                />
                <Accordion 
                    title="Research & Development"
                    content={
                        <>
                            <div>
                                <p>
                                    Once we have an idea, we start by researching the subject even more, learning
                                    as much as we can to provide accurate information for our viewers. This is also
                                    one of the most time-consuming bits of a project.
                                </p>

                                <p>
                                    After we have thoroughly researched the project and the topic,
                                    we generally put together a document where the research is layed
                                    out nicely and neatly. This so we can refer to it whenever we like.
                                    This does not mean we stop researching, we continually add to it when
                                    possible.
                                </p>
                            </div>
                        </>
                    }
                />

            </div>

            <div className="phases phase-two">
                <h1 className="phases-heading">Phase 2</h1>
            </div>
            <div className="">
                <Accordion 
                    title="Design"
                    content={
                        <>
                            <div>
                                <p>
                                    We output our findings, generally through the format of a website,
                                    to promote our work on the internet. We can exploring other areas such as
                                    social media platforms such as Youtube or FaceBook.
                                </p>

                                <p>
                                    But whatever the format, it always needs a good design - well, it would be nice if
                                    there was one. So, we draw out a design layout, using online and offline tools
                                    to ensure we engage our viewers as much as we can.
                                </p>
                            </div>
                        </>
                    }
                />
                <Accordion 
                    title="Coding"
                    content={
                        <>
                            <div>
                                <p>dafads</p>
                            </div>
                        </>
                    }
                />
            </div>

            <div className="phases phase-three">
                <h1 className="phases-heading">Phase 3</h1>
            </div>
            <div className="">
                <Accordion 
                    title="Debugging & Deployment"
                    content={
                        <>
                            <div>
                                <p></p>
                            </div>
                        </>
                    }
                />
                <Accordion 
                    title="Updating"
                    content={
                        <>
                            <div>
                                <p></p>
                            </div>
                        </>
                    }
                />
            </div>
        </div>
    </>
  )
}

export default Process