import React from 'react'
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="px-8 pt-20 pb-12 min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center bg-[var(--color-bg)]">

      <div className="px-4 py-2 rounded-full text-sm font-medium mb-6 bg-[var(--color-bg-secondary)] text-[var(--color-text)] shadow-sm border border-[var(--color-border)]">
        Available for Freelance Work
      </div>

      <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 text-[var(--color-text)]">
        Building Beautiful <div className="text-[var(--color-primary)]">Web Experiences</div>
      </h1>

      <p className="text-lg max-w-2xl mb-8 leading-relaxed text-[var(--color-text-secondary)]">
        Frontend Developer specializing in React and modern JavaScript frameworks. I transform ideas into elegant,
        high-performance web applications.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <Link to="./work" className="btn btn-primary px-8 py-3 text-base">
          View My Work →
        </Link>

        <Link to="./contact" className="btn btn-outline px-8 py-3 text-base border border-[var(--color-border)]">
          Get In Touch
        </Link>
      </div>

    </section>
  );
}
