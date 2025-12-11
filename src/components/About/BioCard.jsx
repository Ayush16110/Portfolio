import React from "react";

export default function BioCard() {
    return (
        <main className="px-8 py-16">

            {/* Header Section */}
            <section className="text-center mb-16">
                <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
                    About Me
                </h1>

                <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                    Get to know more about my journey, skills, and what drives me as a developer.
                </p>
            </section>

            {/* Main Card */}
            <section className="max-w-4xl mx-auto bg-[var(--color-card)] border border-[var(--color-border)] 
                          rounded-2xl p-8 md:p-10 shadow-sm mb-12">

                <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
                    Hello! I'm Ayush — a Frontend Developer
                </h2>

                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    I’m a frontend developer who enjoys building clean, modern, and user-friendly web experiences.
                    I primarily work with <strong className="text-[var(--color-text)]">React, Tailwind CSS, and JavaScript</strong>,
                    and I love focusing on UI that feels smooth, consistent, and visually appealing.
                </p>

                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    My journey in web development started with curiosity about how websites work. Over time, this curiosity
                    evolved into a passion for creating intuitive interfaces and solving problems through clean, efficient code.
                    I enjoy turning ideas into functional, polished user experiences.
                </p>

                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    I’m currently pursuing a degree in Computer Science at
                    <strong className="text-[var(--color-text)]"> Galgotias College of Engineering & Technology</strong>,
                    while learning backend development and improving my Data Structures & Algorithms to grow into a full-stack developer.
                </p>

                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                    Outside of coding, I enjoy exploring new technologies, improving my UI design sense, working on personal
                    projects, and continuously learning to become a better developer every day.
                </p>

            </section>

        </main>
    );
}
