import React from 'react'
import ContactInfoList from "../components/Contact/ContactInfoList";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <main className="px-8 py-16">

      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </section>

      {/* Layout */}
      <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 max-w-5xl mx-auto">
        <ContactInfoList />
        <ContactForm />
      </section>

    </main>
  );
}
