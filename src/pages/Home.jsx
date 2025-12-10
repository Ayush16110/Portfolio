import React from 'react'
import HeroSection from '../components/Home Components/HeroSection'
import QuickAbout from '../components/Home Components/QuickAbout'
import FeaturedProjects from '../components/Home Components/FeaturedProjects'
import CurrentStatus from '../components/Home Components/CurrentStatus'

function Home() {
    return (
        <div>
            <HeroSection/>
            <QuickAbout/>
            <FeaturedProjects/>
            <CurrentStatus/>
        </div>
    )
}

export default Home