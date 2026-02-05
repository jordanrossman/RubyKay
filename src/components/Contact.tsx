import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./animations/FadeIn";
import MagneticButton from "./animations/MagneticButton";

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
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto px-6 lg:px-8 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>
          <motion.h2
            className="text-3xl font-serif text-slate-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Thanks for reaching out!
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We&apos;ll review your message and get back to you within 24-48
            hours to schedule a strategy call.
          </motion.p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Text */}
          <div>
            <FadeIn>
              <div className="section-label mb-6">Let&apos;s Build</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
                Ready to build something that{" "}
                <span className="text-ruby-600">actually fits?</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Tell us about your team and what you&apos;re thinking about
                building. We&apos;ll schedule a strategy call to explore if
                we&apos;re a fit.
              </p>
            </FadeIn>

            {/* What to Expect */}
            <FadeIn delay={0.3}>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900">What to expect:</h3>
                <ul className="space-y-3">
                  {[
                    "30-minute strategy call to understand your needs",
                    "Honest assessment of whether custom build makes sense",
                    "High-level scope and investment range",
                    "No pressure, no hard sell",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <motion.svg
                        className="w-5 h-5 text-ruby-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          delay: 0.5 + index * 0.1,
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                      <span className="text-slate-600">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Form */}
          <FadeIn delay={0.2} direction="left">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-200"
              whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input"
                    placeholder="First name"
                  />
                </motion.div>

                {/* Last Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input"
                    placeholder="Last name"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="input"
                    placeholder="you@company.com"
                  />
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input"
                    placeholder="(555) 555-5555"
                  />
                </motion.div>

                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your company"
                  />
                </motion.div>

                {/* Role */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Your Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="input bg-white"
                  >
                    <option value="">Select role</option>
                    <option value="founder-ceo">Founder / CEO</option>
                    <option value="cto-tech-lead">CTO / Tech Lead</option>
                    <option value="ops-director">Operations Director</option>
                    <option value="product-manager">Product Manager</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                {/* Team Size */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="teamSize"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Team Size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="input bg-white"
                  >
                    <option value="">Select size</option>
                    <option value="10-25">10-25 people</option>
                    <option value="25-50">25-50 people</option>
                    <option value="50-100">50-100 people</option>
                    <option value="100+">100+ people</option>
                  </select>
                </motion.div>

                {/* Industry */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                >
                  <label
                    htmlFor="markets"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Industry
                  </label>
                  <input
                    type="text"
                    id="markets"
                    name="markets"
                    value={formData.markets}
                    onChange={handleChange}
                    className="input"
                    placeholder="e.g., Real Estate, Healthcare, SaaS"
                  />
                </motion.div>
              </div>

              {/* Message */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  What are you thinking about building? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="input textarea"
                  placeholder="Tell us about the problem you're trying to solve..."
                />
              </motion.div>

              {/* Budget */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Budget Range (optional)
                </label>
                <div className="flex flex-wrap gap-3">
                  {["$10k-$25k", "$25k-$50k", "$50k+"].map((option) => (
                    <motion.label
                      key={option}
                      className={`inline-flex items-center px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                        formData.budget === option
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-300 hover:border-slate-400 bg-white"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span className="text-sm font-medium">{option}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>

              {/* Error Display */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit */}
              <MagneticButton
                as="button"
                onClick={() => {}}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <motion.span
                  animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {isSubmitting ? "Sending..." : "See If We're a Fit"}
                </motion.span>
              </MagneticButton>
            </motion.form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
