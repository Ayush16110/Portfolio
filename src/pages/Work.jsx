import React from 'react'
import ProjectCard from '../components/Project Components/ProjectCard'
import JourneyTimeline from '../components/About Components/JourneyTimeline'

function Work() {
    return (
        <div className='max-w-5xl mx-auto px-8'>

            <h2 className="text-4xl font-bold text-center text-[var(--color-text)] my-12">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 py-12 max-w-5xl mx-auto gap-[32px]">
                <ProjectCard
                    title="E-Commerce Cart"
                    description="A comprehensive online shopping platform cart, checkout system."
                    image="https://5.imimg.com/data5/WV/RX/VN/SELLER-9011650/e-commerce-website-designing-services.jpg"
                    tech={["HTML", "CSS", "JS"]}
                    codeLink="https://github.com/Ayush16110/mini-projects/tree/main/ecommerce-cart"
                    demoLink="https://ecommerce-demo.com"
                />

                <ProjectCard
                    title="Todo App"
                    description="Simple Todo to add, update, mark as done and delete tasks."
                    image="https://resources-cdn.appfigures.com/aso-teardown/todoist/app-teardown-todoist-cover-a-plus.png"
                    tech={["HTML", "CSS", "JS"]}
                    codeLink="https://github.com/Ayush16110/mini-projects/tree/main/todo"
                    demoLink="https://taskapp-demo.com"
                />

                <ProjectCard
                    title="Weather App"
                    description="A simple weather application that fetches real-time temperature, humidity, and conditions using a public API."
                    image="https://www.dimosthenisemmanouil.se/WeatherApp-ss.png"
                    tech={["HTML", "CSS", "JS", "API"]}
                    codeLink="https://github.com/Ayush16110/mini-projects/tree/main/weather-app"
                    demoLink="https://weather-demo.com"
                />

                <ProjectCard
                    title="Expense Tracker"
                    description="A functional tool to track daily expenses, calculate totals, and store data using LocalStorage."
                    image="https://www.zoho.com/expense/images/expense-software-dashboard.png?v=1"
                    tech={["HTML", "CSS", "JS"]}
                    codeLink="https://github.com/Ayush16110/mini-projects/tree/main/expense-tracker"
                    demoLink="https://expense-demo.com"
                />

                <ProjectCard
                    title="Quiz App"
                    description="An interactive quiz application with multiple-choice questions, score tracking, and final results."
                    image="https://img.freepik.com/free-vector/course-application_23-2148676845.jpg?semt=ais_hybrid&w=740&q=80"
                    tech={["HTML", "CSS", "JS"]}
                    codeLink="https://github.com/Ayush16110/mini-projects/tree/main/quiz-app"
                    demoLink="https://quiz-demo.com"
                />


            </div>

            <JourneyTimeline />

        </div>
    )
}

export default Work