import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

function App() {

    const mode = useSelector((state) => state.ui.mode)

    useEffect(() => {
        document.querySelector("html").classList.add(mode)
    }, [])

    return (
        <div>

            <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 3000,
                }}
            />
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App
