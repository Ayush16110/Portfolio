import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {

    const mode = useSelector((state)=> state.ui.mode)

    useEffect(()=> {
        document.querySelector("html").classList.add(mode)
    },[])

    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default App
