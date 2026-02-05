"use client";

import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";

export default function WhoWeWorkWith() {
  const audiences = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Growing Teams",
      description:
        "Companies with 10-100 people who want proprietary tools that give them a competitive edge.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Scaling Organizations",
      description:
        "Mid-size companies looking to stand out with custom tech that drives efficiency and retention.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Operations Leaders",
      description:
        "Directors and managers who need to systematize workflows and eliminate manual bottlenecks.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <div className="section-label mb-6">Who We Work With</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
              Built for operators who refuse to settle.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 leading-relaxed">
              We partner with companies who are tired of off-the-shelf
              tools that everyone else uses. If you want something that&apos;s
              truly yours, we should talk.
            </p>
          </FadeIn>
        </div>

        {/* Audience Cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {audiences.map((audience, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="feature-card h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-ruby-50 text-ruby-600 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {audience.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Clarification */}
        <FadeIn delay={0.4} className="mt-12">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-slate-600 text-center">
              <span className="font-medium text-slate-900">Not a fit:</span> Early-stage
              startups looking for cheap websites or off-the-shelf plugins. We
              build custom solutions for serious operators.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
