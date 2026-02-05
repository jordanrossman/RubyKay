"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";
import { ScaleOnScroll } from "./animations/Parallax";

export default function CaseStudies() {
  const caseStudies = [
    {
      name: "PropertyBrushAI",
      tagline: "Professional property photos in 60 seconds—not 3 days.",
      description:
        "AI-powered virtual staging, sky replacement, and object removal at a fraction of the cost. Users get professional photos instantly without waiting on editors or paying agency prices.",
      image: "/screenshots/propertybrushai-hero-v2.png",
      link: "https://www.propertybrushai.com",
    },
    {
      name: "INVSBL",
      tagline: "The follow-up system people actually use.",
      description:
        "A mobile app built for professionals who hate bloated CRMs. It helps them do one thing really well: relentless follow-up that converts.",
      image: "/screenshots/invsbl-hero-v4.png",
      link: "https://www.goinvsbl.com",
    },
  ];

  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <div className="section-label mb-6">Proof of Work</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
              Products we&apos;ve shipped.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don&apos;t just talk about building—we ship. Here are two products
              we&apos;ve designed, built, and launched.
            </p>
          </FadeIn>
        </div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <ScaleOnScroll key={study.name}>
              <motion.div
                className="group relative bg-slate-900 rounded-3xl overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                {/* Content */}
                <div className="relative p-6 sm:p-8 lg:p-10">
                  {/* Header */}
                  <div className="mb-6">
                    <motion.h3
                      className="text-2xl lg:text-3xl font-semibold text-white mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.2 }}
                    >
                      {study.name}
                    </motion.h3>
                    <p className="text-slate-400">{study.tagline}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-8">
                    {study.description}
                  </p>

                  {/* Image */}
                  <motion.div
                    className="rounded-xl overflow-hidden mb-6 bg-slate-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={study.image}
                      alt={`${study.name} screenshot`}
                      width={600}
                      height={340}
                      className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </motion.div>

                  {/* CTA */}
                  <motion.div whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Link
                      href={study.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white font-medium hover:text-ruby-400 transition-colors"
                    >
                      Visit {study.name}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </ScaleOnScroll>
          ))}
        </div>

        {/* What This Proves */}
        <FadeIn delay={0.3} className="mt-16 text-center">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            <span className="font-semibold text-slate-900">
              What this means for you:
            </span>{" "}
            You get a partner who ships—from idea to launch to adoption. No endless discovery. No bloated timelines. Just a product your team actually uses.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
