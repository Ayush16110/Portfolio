import React from "react";

export default function ContactInfoCard({ icon, label, value }) {
  return (
    <div
      className="flex items-center gap-4 p-6 bg-[var(--color-card)] 
      border border-[var(--color-border)] rounded-xl"
    >
      <div
        className="w-12 h-12 rounded-xl bg-[var(--color-primary-muted)] 
        flex items-center justify-center text-[var(--color-primary)] text-xl"
      >
        {icon}
      </div>

      <div>
        <p className="text-[var(--color-text)] font-semibold">{label}</p>
        <p className="text-[var(--color-text-secondary)] text-sm">{value}</p>
      </div>
    </div>
  );
}
