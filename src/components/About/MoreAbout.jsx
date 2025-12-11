import React from "react";

export default function MoreAboutMe() {
  return (
    <section className="px-8 py-16">
      <div className="max-w-4xl mx-auto bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl p-10 shadow-sm">

        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-8">
          More About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Column */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Location</h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Greater Noida, India
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Experience</h3>
            <p className="text-[var(--color-text-secondary)]">
              Frontend Development (Learning & Building Projects)
            </p>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Education</h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
              B.Tech in Computer Science — GCET, Greater Noida
            </p>

            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Interests</h3>
            <p className="text-[var(--color-text-secondary)]">
              React Development, UI/UX Improvement, DSA, Full-Stack Development
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
