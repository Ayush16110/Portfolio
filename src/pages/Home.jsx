import React from 'react'
import HeroSection from '../components/HeroSection'
import QuickAbout from '../components/QuickAbout'
import FeaturedProjects from '../components/FeaturedProjects'
import CurrentStatus from '../components/CurrentStatus'

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