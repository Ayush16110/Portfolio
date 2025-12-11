import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart, checkout, and payment integration.",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=60",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task manager with real-time updates and team features.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=60",
    tech: ["React", "Tailwind CSS"],
  },
];

export default function FeaturedProjects() {
  return (
    <section className="px-8 py-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[var(--color-text)]">
          Featured Projects
        </h2>
        <p className="text-[var(--color-text-secondary)] mt-2">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto cursor-pointer">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-[var(--color-card)] border border-[var(--color-border)] transition-all duration-300 hover:shadow-xl"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[200px] object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-bg-secondary)] text-[var(--color-text)] border border-[var(--color-border)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button Bottom */}
      <div className="text-center mt-12">
        <Link to="./work" className="btn btn-outline px-6 py-3">
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
