import React from 'react'
import BioCard from '../components/About/BioCard'
import SkillsSection from '../components/About/SkillsSection'
import MoreAboutMe from '../components/About/MoreAbout'

function About() {
  return (
    <div>
      <BioCard/>
      <SkillsSection/>
      {/* <JourneyTimeline/> */}
      <MoreAboutMe/>
    </div>
  )
}

export default About