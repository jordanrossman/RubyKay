import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Rule, Rise } from "./animations/Reveal";

/* ----------------------------------------------------------------
   Commence — the intake. Ledger lines, not boxes.
---------------------------------------------------------------- */

const EXPECTATIONS = [
  {
    index: "01",
    text: "A thirty-minute strategy call to understand what you're solving.",
  },
  {
    index: "02",
    text: "An honest read on whether a custom build makes sense at all.",
  },
  {
    index: "03",
    text: "High-level scope and an investment range. No pressure, no hard sell.",
  },
];

function Field({
  label,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="overline-label text-bone-500 block mb-1"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    teamSize: "",
    markets: "",
    message: "",
    budget: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section
        id="contact"
        className="bg-ink-950 text-bone-100 py-32 lg:py-48 overflow-hidden"
      >
        <motion.div
          className="max-w-2xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="overline-label text-ruby-400">
            Transmission Logged
          </span>
          <h2 className="display text-6xl lg:text-7xl text-bone-50 mt-6">
            Received.
          </h2>
          <p className="text-lg text-bone-400 leading-relaxed mt-6 max-w-md mx-auto">
            We&rsquo;ll review what you&rsquo;re building and come back within
            24–48 hours with next steps.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      data-chapter="07 — Commence"
      className="bg-ink-950 text-bone-100 py-28 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="flex items-baseline justify-between mb-4">
          <span className="overline-label text-ruby-400">07 — Commence</span>
          <span className="overline-label text-bone-500 hidden sm:block">
            Strategy First
          </span>
        </div>
        <Rule className="bg-bone-100/15" />

        <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-14 lg:gap-24">
          {/* Left — the pitch */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="display text-5xl lg:text-6xl text-bone-50">
                Tell us what
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display text-5xl lg:text-6xl text-bone-50">
                you&rsquo;re trying{" "}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="display text-5xl lg:text-6xl text-bone-50">
                to <em className="text-ruby-400">build.</em>
              </h2>
            </Reveal>

            <Rise delay={0.25}>
              <div className="mt-12 space-y-7">
                {EXPECTATIONS.map((item) => (
                  <div key={item.index} className="flex items-baseline gap-5">
                    <span className="overline-label text-ruby-400 shrink-0">
                      {item.index}
                    </span>
                    <p className="text-bone-400 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </Rise>

            <Rise delay={0.35}>
              <div className="mt-14 border-t border-bone-100/15 pt-8">
                <p className="overline-label text-bone-500 mb-3">
                  Or skip the form
                </p>
                <a
                  href="mailto:jordan@rubykaylabs.com"
                  className="link-draw font-serif text-2xl sm:text-3xl text-bone-100"
                >
                  jordan@rubykaylabs.com
                </a>
              </div>
            </Rise>
          </div>

          {/* Right — the intake form */}
          <Rise delay={0.2} className="lg:col-span-7">
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                <Field label="First Name *" htmlFor="firstName">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-line"
                    placeholder="First name"
                  />
                </Field>

                <Field label="Last Name *" htmlFor="lastName">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input-line"
                    placeholder="Last name"
                  />
                </Field>

                <Field label="Email *" htmlFor="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input-line"
                    placeholder="you@company.com"
                  />
                </Field>

                <Field label="Phone" htmlFor="phone">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-line"
                    placeholder="(555) 555-5555"
                  />
                </Field>

                <Field label="Company *" htmlFor="company">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="input-line"
                    placeholder="Your company"
                  />
                </Field>

                <Field label="Your Role *" htmlFor="role">
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="input-line"
                  >
                    <option value="">Select role</option>
                    <option value="founder-ceo">Founder / CEO</option>
                    <option value="cto-tech-lead">CTO / Tech Lead</option>
                    <option value="ops-director">Operations Director</option>
                    <option value="product-manager">Product Manager</option>
                    <option value="other">Other</option>
                  </select>
                </Field>

                <Field label="Team Size" htmlFor="teamSize">
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="input-line"
                  >
                    <option value="">Select size</option>
                    <option value="10-25">10–25 people</option>
                    <option value="25-50">25–50 people</option>
                    <option value="50-100">50–100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
                </Field>

                <Field label="Industry" htmlFor="markets">
                  <input
                    type="text"
                    id="markets"
                    name="markets"
                    value={formData.markets}
                    onChange={handleChange}
                    className="input-line"
                    placeholder="e.g., Real Estate, Healthcare, SaaS"
                  />
                </Field>
              </div>

              <div className="mt-8">
                <Field
                  label="What are you thinking about building? *"
                  htmlFor="message"
                >
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-line"
                    placeholder="Tell us about the problem you're trying to solve…"
                  />
                </Field>
              </div>

              <div className="mt-10">
                <p className="overline-label text-bone-500 mb-4">
                  Budget Range — Optional
                </p>
                <div className="flex flex-wrap gap-3">
                  {["$10k-$25k", "$25k-$50k", "$50k+"].map((option) => (
                    <label
                      key={option}
                      className={`overline-label cursor-pointer border px-5 py-3 transition-colors duration-300 ${
                        formData.budget === option
                          ? "border-ruby-400 text-bone-50 bg-ruby-600/20"
                          : "border-bone-100/20 text-bone-400 hover:border-bone-100/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {option.replace(/-/g, " – ")}
                    </label>
                  ))}
                </div>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="mt-8 border border-ruby-500/40 bg-ruby-600/10 px-5 py-4 text-sm text-ruby-300"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-bone w-full mt-12 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending…" : "Request a Strategy Call"}
                {!isSubmitting && <span aria-hidden>→</span>}
              </button>
            </form>
          </Rise>
        </div>
      </div>
    </section>
  );
}
