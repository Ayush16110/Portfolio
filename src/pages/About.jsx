import React from 'react'
import BioCard from '../components/About Components/BioCard'
import SkillsSection from '../components/About Components/SkillsSection'
import JourneyTimeline from '../components/About Components/JourneyTimeline'
import MoreAboutMe from '../components/About Components/MoreAbout'

function About() {
  return (
    <div>
      <BioCard/>
      <SkillsSection/>
      <JourneyTimeline/>
      <MoreAboutMe/>
    </div>
  )
}

export default About