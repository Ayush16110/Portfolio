import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import conf from "../../conf/conf";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    const form = formRef.current;

    const { name, email, subject, message } = form;

    if (
      !name.value.trim() ||
      !email.value.trim() ||
      !subject.value.trim() ||
      !message.value.trim()
    ) {
      toast.error("Please fill all required fields");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        conf.emailjsservicekey,
        conf.emailjstemplatekey,
        form,
        "YNWZF_rVTrIdU-Nst"
      )
      .then(() => {
        toast.success("Message sent successfully 🚀");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

    return (
        <div
            className="p-8 rounded-2xl bg-[var(--color-card)] 
      border border-[var(--color-border)] shadow-sm"
        >
            <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-6">
                Send me a message
            </h2>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6">

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm mb-2 font-medium text-[var(--color-text)]">
                            Your Name *
                        </label>
                        <input
                            name="name"
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
                            name="email"
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
                        name="subject"
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
                        name="message"
                        className="w-full px-4 py-2 rounded-lg bg-[var(--color-card)]
            border border-[var(--color-border)] text-[var(--color-text)]"
                        rows="6"
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary mt-2 flex items-center justify-center gap-2 
          px-6 py-3 rounded-lg text-white font-medium"
                >
                    {loading ? "Sending..." : "✉ Send Message"}
                </button>
            </form>
        </div>
    );
}
