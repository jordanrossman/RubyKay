"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    markets: "",
    message: "",
    budget: "",
  });
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
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
          </div>
          <h2 className="text-3xl font-serif text-slate-900 mb-4">
            Thanks for reaching out!
          </h2>
          <p className="text-lg text-slate-600">
            We&apos;ll review your message and get back to you within 24-48
            hours to schedule a strategy call.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <div>
            <div className="section-label mb-6">Let&apos;s Build</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
              Ready to give your team a{" "}
              <span className="text-ruby-600">real edge?</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Tell us about your team and what you&apos;re thinking about
              building. We&apos;ll schedule a strategy call to explore if
              we&apos;re a fit.
            </p>

            {/* What to Expect */}
            <div className="space-y-4">
              <h3 className="font-semibold text-slate-900">What to expect:</h3>
              <ul className="space-y-3">
                {[
                  "30-minute strategy call to understand your needs",
                  "Honest assessment of whether custom build makes sense",
                  "High-level scope and investment range",
                  "No pressure, no hard sell",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-ruby-600 flex-shrink-0 mt-0.5"
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
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-slate-200"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="input"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
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
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Company / Brokerage *
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
                </div>

                {/* Role */}
                <div>
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
                    <option value="team-leader">Team Leader</option>
                    <option value="broker-owner">Broker / Owner</option>
                    <option value="ops-director">Operations Director</option>
                    <option value="marketing-director">
                      Marketing Director
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Team Size */}
                <div>
                  <label
                    htmlFor="teamSize"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Team / Agent Count
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="input bg-white"
                  >
                    <option value="">Select size</option>
                    <option value="10-25">10-25 agents</option>
                    <option value="25-50">25-50 agents</option>
                    <option value="50-100">50-100 agents</option>
                    <option value="100+">100+ agents</option>
                  </select>
                </div>

                {/* Markets */}
                <div>
                  <label
                    htmlFor="markets"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Market(s)
                  </label>
                  <input
                    type="text"
                    id="markets"
                    name="markets"
                    value={formData.markets}
                    onChange={handleChange}
                    className="input"
                    placeholder="e.g., Toronto, Vancouver"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
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
              </div>

              {/* Budget */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Budget Range (optional)
                </label>
                <div className="flex flex-wrap gap-3">
                  {["$10k-$25k", "$25k-$50k", "$50k+"].map((option) => (
                    <label
                      key={option}
                      className={`inline-flex items-center px-4 py-2 rounded-lg border cursor-pointer transition-all ${
                        formData.budget === option
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-300 hover:border-slate-400 bg-white"
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
                      <span className="text-sm font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Request a Strategy Call"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
