import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-8 pt-12 pb-6 bg-[var(--color-bg-secondary)] text-[var(--color-text)]">
      
      {/* Top Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
        
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Ayush Narayan Gupta</h3>
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
            Frontend Developer specializing in React and modern web technologies.
            Building beautiful, accessible user experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-[var(--color-text-secondary)] text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/work">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>

          <div className="flex items-center gap-4 text-[var(--color-text-secondary)]">
            {/* GitHub */}
            <a
              href="https://github.com/ayush16110"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-primary)] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.67.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.12-1.5-1.12-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.5.34 1.9-1.32 2.75-1.05 2.75-1.05.55 1.43.2 2.49.1 2.75.64.71 1.03 1.62 1.03 2.74 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.84c0 .26.18.58.69.48A10.29 10.29 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ayush-narayan-gupta/"
              target="_blank"
              className="hover:text-[var(--color-primary)] transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C3.32 3.5 2 4.82 2 6.48s1.32 2.98 2.98 2.98A2.98 2.98 0 0 0 7.96 6.48C7.96 4.82 6.64 3.5 4.98 3.5zM3 21h4V9H3v12zM9 9h4v1.71h.06c.56-1.06 1.94-2.21 4-2.21 4.28 0 5.07 2.82 5.07 6.49V21h-4v-5.39c0-1.28-.02-2.93-1.79-2.93-1.8 0-2.08 1.4-2.08 2.84V21h-4V9z"/>
              </svg>
            </a>

            {/* Twitter
            <a
              href="#"
              className="hover:text-[var(--color-primary)] transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 0 0 1.88-2.35 8.46 8.46 0 0 1-2.69 1.03A4.23 4.23 0 0 0 11.14 8a12 12 0 0 1-8.72-4.42A4.23 4.23 0 0 0 3.1 9.15c-.7-.02-1.37-.21-1.96-.52v.05c0 2.15 1.53 3.94 3.57 4.35-.37.1-.76.15-1.16.15-.28 0-.56-.03-.83-.08.56 1.75 2.18 3.03 4.1 3.06A8.5 8.5 0 0 1 2 18.41 12.09 12.09 0 0 0 8.29 20c7.55 0 11.68-6.32 11.68-11.79l-.01-.54A8.5 8.5 0 0 0 22.46 6z"/>
              </svg>
            </a> */}

            {/* Email */}
            <a
              href="mailto:newayushgupta2017@gmail.com"
              className="hover:text-[var(--color-primary)] transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" d="M4 4h16v16H4z" />
                <path strokeWidth="2" d="m4 4 8 8 8-8" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p
        className="text-center pt-6 border-t border-[var(--color-border)] 
                   text-sm text-[var(--color-text-secondary)]"
      >
        © {new Date().getFullYear()} Ayush Narayan Gupta. All rights reserved.
      </p>
    </footer>
  );
}
