import React from "react";

export default function StepperTimeline() {
  const timeline = [
    {
      year: "2024",
      title: "Learned Web Development Basics",
      desc: "Started learning HTML, CSS, and JavaScript. Built mini projects and understood how websites work.",
    },
    {
      year: "2025",
      title: "Learning React & Building Projects",
      desc: "Started working with React and Tailwind CSS while improving DSA. Building real-world projects and enhancing UI skills.",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center text-[var(--color-text)] mb-12">
        My Journey
      </h2>

      <div className="max-w-4xl mx-auto">

        {timeline.map((item, index) => (
          <div key={index} className="relative pl-10 mb-10">

            {/* Connector Line */}
            {index !== timeline.length - 1 && (
              <div className="absolute left-4 top-5 h-full w-[2px] bg-[var(--color-border)]"></div>
            )}

            {/* Step Circle */}
            <div className="
              w-6 h-6 rounded-full 
              bg-[var(--color-primary)] border-4 border-[var(--color-card)]
              absolute left-0 top-1.5
            " />

            {/* Content */}
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 shadow-sm">
              <p className="text-[var(--color-primary)] font-semibold mb-1">{item.year}</p>
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
