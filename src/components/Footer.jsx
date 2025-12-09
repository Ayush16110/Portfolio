import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-[var(--color-card)] border-t border-[var(--color-border)] mt-20 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Column 1 --> */}
                <div>
                    <h3 className="text-[18px] font-semibold mb-4 text-[var(--color-text)]">About</h3>
                    <ul className="space-y-2">
                        <li><Link to='/about' className="text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Who I Am</Link></li>
                        <li><Link to='./work' className="text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Resume</Link></li>
                        <li><Link to='./work#skills' className="text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Skills</Link></li>
                    </ul>
                </div>

                {/* <!-- Column 2 --> */}
                <div>
                    <h3 className="text-[18px] font-semibold mb-4 text-[var(--color-text)]">Projects</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Featured Work</a></li>
                        <li><a href="#" className="text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Open Source</a></li>
                        <li><a href="#" className="text-[14px] text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">Case Studies</a></li>
                    </ul>
                </div>

                {/* <!-- Column 3 (Social Links) --> */}
                <div>
                    <h3 className="text-[18px] font-semibold mb-4 text-[var(--color-text)]">Connect</h3>
                    <ul className="flex gap-4">
                        {/* <!-- GitHub --> */}
                        <li>
                            <a href="#" aria-label="GitHub"
                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-6 h-6">
                                    <path
                                        d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.17c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.107-.776.418-1.305.762-1.606-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.018.005 2.043.138 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.236 1.911 1.236 3.221 0 4.61-2.807 5.624-5.479 5.921.43.37.823 1.102.823 2.222v3.293c0 .32.216.694.825.576C20.565 22.092 24 17.593 24 12.297 24 5.67 18.627.297 12 .297z" />
                                </svg>
                            </a>
                        </li>

                        {/* <!-- LinkedIn --> */}
                        <li>
                            <a href="#" aria-label="LinkedIn"
                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                    className="w-6 h-6">
                                    <path
                                        d="M19 0h-14C2.239 0 0 2.238 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.762-2.238-5-5-5zm-11 19H5v-9h3v9zM6.5 8.691A1.691 1.691 0 1 1 6.5 5.31a1.691 1.691 0 0 1 0 3.382zM20 19h-3v-4.604c0-1.099-.021-2.513-1.533-2.513-1.534 0-1.768 1.197-1.768 2.435V19h-3v-9h2.884v1.233h.041c.402-.762 1.384-1.565 2.848-1.565 3.044 0 3.528 2.004 3.528 4.611V19z" />
                                </svg>
                            </a>
                        </li>

                        {/* <!-- Twitter (X) --> */}
                        <li>
                            <a href="#" aria-label="Twitter"
                                className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    viewBox="0 0 24 24" className="w-6 h-6">
                                    <path
                                        d="M17.21 2.25H20.1L13.53 9.81 21 21.75h-5.67l-4.41-6.48-5.04 6.48H1.98l7.05-8.79L1.8 2.25h5.82l3.99 5.94 4.6-5.94z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* <!-- Bottom Text --> */}
            <div className="text-center text-[13px] text-[var(--color-text-secondary)] mt-8">
                © 2025 Ayush Narayan Gupta. All rights reserved.
            </div>
        </footer>


    )
}

export default Footer