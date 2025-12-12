import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ui/ThemeSwitch";
import ButtonPrimary from "./ui/ButtonPrimary";
import download from '../assets/download.svg'

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Work", path: "/work" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] shadow-sm">
            <nav className="max-w-7xl mx-auto flex justify-between items-center h-[64px] px-6">
                {/* Brand */}
                <div className="font-bold text-[18px] text-[var(--color-primary)] cursor-default">
                    Ayush Narayan Gupta
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6 text-[14px] font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative px-5 py-2 rounded-md transition-all duration-200 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:rounded-full after:transition-all after:duration-300 ${isActive
                                        ? "text-[var(--navbar-active)] after:w-3/4 after:bg-[var(--navbar-active)]"
                                        : "text-[var(--navbar-text)] hover:text-[var(--navbar-hover)] after:w-0 hover:after:w-3/4 hover:after:bg-[var(--navbar-hover)]"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Right side */}
                <div className="flex items-center gap-4">
                    <ThemeSwitch />
                    <a
                        href="/Ayush_Narayan_Gupta_Resume.pdf"
                        download
                        className="btn btn-primary inline-flex items-center"
                    >
                        <img className="h-4 mr-2" src={download} alt="download icon" />
                        Resume
                    </a>

                    {/* Hamburger */}
                    <button
                        className="block md:hidden text-[var(--navbar-text)]"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-[var(--navbar-bg)] border-t border-[var(--navbar-border)] transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col gap-3 py-4 px-6 text-[14px] font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `relative block px-3 py-2 rounded-md transition-all duration-200 ${isActive
                                        ? "text-[var(--navbar-active)] after:w-3/4 after:bg-[var(--navbar-active)]"
                                        : "text-[var(--navbar-text)] hover:text-[var(--navbar-hover)] after:w-0 hover:after:w-full hover:after:bg-[var(--navbar-hover)]"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default NavBar;
