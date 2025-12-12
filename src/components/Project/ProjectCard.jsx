import React from "react";

export default function ProjectCard({
    title,
    description,
    image,
    tech = [],
    codeLink = "#",
    demoLink = "#",
}) {
    return (
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] 
      rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 max-w-xl mx-auto">

            {/* Image */}
            <img
                src={image}
                alt={title}
                width="600"
                height="340"
                loading="lazy"
                className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">

                {/* Title */}
                <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium 
                            bg-[var(--color-bg-secondary)] text-[var(--color-text)] 
                            border border-[var(--color-border)] rounded-full"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                    {/* Code Button */}
                    <a
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 
                        border border-[var(--color-border)]
                        rounded-lg text-sm text-[var(--color-text)]
                        hover:bg-[var(--color-bg-secondary)] transition"
                    >
                        <span>💻</span> Code
                    </a>

                    {/* Demo Button */}
                    {demoLink ? (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 
                            rounded-lg text-sm font-medium
                            bg-[var(--color-primary)] text-white
                            hover:bg-[var(--color-primary-hover)] transition"
                        >
                            <span>🔗</span> Demo
                        </a>
                    ) : (
                        <button
                            disabled
                            className="inline-flex items-center gap-2 px-4 py-2 
                            rounded-lg text-sm font-medium
                            border border-[var(--color-border)]
                            text-[var(--color-text-secondary)]
                            cursor-not-allowed opacity-60"
                        >
                            🚧 Demo Coming Soon
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}
