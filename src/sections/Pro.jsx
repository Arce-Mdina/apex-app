import React from 'react'

import Card from '../components/Card'

import crypto from '../assets/crypto.webp'
import bibleVerse from '../assets/bible-verse.webp'

const Pro = () => {

  return (
    <div>
        <h1 className="project-heading"><span style={{ color: "brown" }}>Filfla.eu</span>'s Pro Projects</h1>
        <div className="projects-page">
            <div className="card-grid-double">
                <Card 
                    link="https://crypto.filfla.eu"
                    heading="Cryptotracker"
                    desc="Cryptotracker is Filfla.eu's first API-powered application that provides dynamic data from Coincap's API. You can find historical pricing data as well as extra information on each individual crypto"
                    image={crypto}
                />

                <Card 
                  link='https://bible-verse.filfla.eu'
                  heading="Bible Verse (KJV)"
                  desc="A Filfla.eu's website giving random Bible verses to its users with the click of a button. This website hopes to bring people to God's Word inspires them to follow the Truth even further."
                  image={bibleVerse}
                />
            </div>
        </div>
        
    </div>
  )
}

export default Pro