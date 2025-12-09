import React from "react";
import { Link } from "react-router-dom";

export default function CurrentStatus() {
  return (
    <section className="px-8 py-20 flex justify-center items-center">
      <div
        className="max-w-3xl w-full bg-[var(--color-card)] border border-[var(--color-border)] 
                   rounded-2xl p-10 text-center shadow-md"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-[var(--color-primary)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M12 3v4m0 10v4m9-9h-4M7 12H3m14.95-6.95l-2.83 2.83M9.88 14.12l-2.83 2.83M14.12 14.12l2.83 2.83M9.88 9.88 7.05 7.05"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-2">
          Current Status
        </h2>

        {/* Subtitle */}
        <p className="text-[var(--color-text-secondary)] mb-4">
          Senior Frontend Developer at{" "}
          <span className="font-semibold text-[var(--color-text)]">
            TechCorp Inc.
          </span>
        </p>

        {/* Description */}
        <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-6">
          Currently working on building scalable web applications using React,
          TypeScript, and modern frontend tools. Always open to exciting
          opportunities and collaborations.
        </p>

        {/* Button */}
        <div>
          <Link to="./contact" className="btn btn-primary px-6 py-3">
            Let's Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
