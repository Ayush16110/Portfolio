import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moon from '../../assets/moon.png'
import sun from '../../assets/sun.png'
import { darkMode, lightMode } from '../../store/uiSlice'

function ThemeSwitch() {
    const mode = useSelector(state => state.ui.mode)
    const dispatch = useDispatch()

    const toggleTheme = () => {
        if(mode === "light") {
            document.querySelector("html").classList.remove("light")
            document.querySelector("html").classList.add("dark")
            dispatch(darkMode())
        } else {
            document.querySelector("html").classList.remove("dark")
            document.querySelector("html").classList.add("light")
            dispatch(lightMode())
        }
    }

    return (
        <div
            onClick={toggleTheme}
            className='w-[40px] h-[40px] rounded-full hover:bg-[var(--color-accent)] transition-colors duration-200 flex justify-center items-center'
        >
            <img className={mode === "light" ? `` : `invert:`} src={mode === "light" ? moon : sun} alt="theme icon" />
        </div>
    )
}

export default ThemeSwitch
