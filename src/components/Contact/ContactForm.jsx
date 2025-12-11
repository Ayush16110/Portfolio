import React from "react";

export default function ContactForm() {
  return (
    <div 
      className="p-8 rounded-2xl bg-[var(--color-card)] 
      border border-[var(--color-border)] shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">
        Send me a message
      </h2>

      <form className="flex flex-col gap-6">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2 font-medium text-[var(--color-text)]">
              Your Name *
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg bg-[var(--color-card)] 
              border border-[var(--color-border)] text-[var(--color-text)]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-medium text-[var(--color-text)]">
              Your Email *
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-[var(--color-card)]
              border border-[var(--color-border)] text-[var(--color-text)]"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm mb-2 font-medium text-[var(--color-text)]">
            Subject *
          </label>
          <input
            className="w-full px-4 py-2 rounded-lg bg-[var(--color-card)]
            border border-[var(--color-border)] text-[var(--color-text)]"
            placeholder="Project Inquiry"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm mb-2 font-medium text-[var(--color-text)]">
            Message *
          </label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-[var(--color-card)]
            border border-[var(--color-border)] text-[var(--color-text)]"
            rows="6"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        {/* Button */}
        <button
          className="btn-primary mt-2 flex items-center justify-center gap-2 
          px-6 py-3 rounded-lg text-white font-medium"
        >
          ✉ Send Message
        </button>
      </form>
    </div>
  );
}
