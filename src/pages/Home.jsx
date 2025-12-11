import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import QuickAbout from '../components/Home/QuickAbout'
import FeaturedProjects from '../components/Home/FeaturedProjects'
import CurrentStatus from '../components/Home/CurrentStatus'

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