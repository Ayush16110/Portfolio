import React from "react";

const features = [
  {
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code following best practices and design patterns.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-[var(--color-primary)]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.25 6.75h7.5m-7.5 5.25h7.5m-12 5.25h16.5"
        />
      </svg>
    ),
  },
  {
    title: "Modern Design",
    description:
      "Creating stunning user interfaces with attention to detail and user experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-[var(--color-primary)]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Performance",
    description:
      "Optimizing applications for speed and efficiency across all devices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-[var(--color-primary)]"
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
    ),
  },
];

export default function QuickAbout() {
  return (
    <section className="px-8 py-16 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-8 text-center bg-[var(--color-card)] rounded-xl shadow-md border border-[var(--color-border)]"
          >
            {/* Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
