import React from 'react'

export default function SkillsSection() {
  return (
    <section className="p-8">

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-[var(--color-text)] mb-10">
        Skills & Technologies
      </h2>

      {/* Skills Container */}
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">

        {/* Category: Frontend Development */}
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
            Frontend Development
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="skill-badge">React</span>
            <span className="skill-badge">JavaScript (ES6+)</span>
            <span className="skill-badge">HTML & CSS</span>
            <span className="skill-badge">Tailwind CSS</span>
            <span className="skill-badge">Responsive Design</span>
            <span className="skill-badge">Redux</span>
          </div>
        </div>

        {/* Category: Tools & Workflow */}
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
            Tools & Workflow
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="skill-badge">Git & GitHub</span>
            <span className="skill-badge">Vite</span>
            <span className="skill-badge">NPM / Yarn</span>
            <span className="skill-badge">VS Code</span>
            <span className="skill-badge">Figma (Basic)</span>
          </div>
        </div>

        {/* Category: Concepts & Practices */}
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6">
          <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-4">
            Concepts & Practices
          </h3>

          <div className="flex flex-wrap gap-2">
            <span className="skill-badge">Component Architecture</span>
            <span className="skill-badge">API Integration</span>
            <span className="skill-badge">Web Performance</span>
            <span className="skill-badge">Accessibility</span>
            <span className="skill-badge">UI/UX Basics</span>
          </div>
        </div>

      </div>
    </section>
  );
}
