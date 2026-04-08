import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";

export default function WhatWeBuild() {
  const services = [
    {
      number: "01",
      label: "Web",
      title: "Consumer-Facing Websites",
      description:
        "Marketing sites, landing pages, and client portals that convert. Fast, polished, and built to integrate with your existing systems.",
    },
    {
      number: "02",
      label: "Internal",
      title: "Internal Tools & Dashboards",
      description:
        "Team portals, admin panels, and productivity dashboards. Built for how your team actually works—not how a vendor thinks they should.",
    },
    {
      number: "03",
      label: "AI",
      title: "Advanced AI Tools",
      description:
        "Custom AI assistants, automation workflows, and intelligent features. From chatbots to image processing—AI that fits your business, not the other way around.",
    },
    {
      number: "04",
      label: "Mobile",
      title: "Mobile Apps",
      description:
        "Native iPhone and Android apps for your team and customers. Field-ready tools that work offline and sync when they need to.",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <div className="section-label mb-6">What We Build</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
              We don&apos;t sell templates. We build what your business{" "}
              <span className="text-ruby-600">actually needs.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every engagement starts with strategy. We understand your workflows,
              identify the bottlenecks, then design and ship a tight v1—not a
              bloated feature list.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <motion.div
                className="group relative h-full bg-white rounded-2xl border border-slate-200 overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Top hairline accent that fills on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
                <motion.div
                  className="absolute left-0 top-0 h-px bg-ruby-600"
                  initial={{ width: "20%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Oversized serif watermark numeral */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-6 select-none font-serif leading-none text-[11rem] text-ruby-600/[0.06] group-hover:text-ruby-600/[0.10] transition-colors duration-500"
                >
                  {service.number}
                </div>

                <div className="relative p-8 sm:p-10 h-full flex flex-col">
                  {/* Eyebrow row */}
                  <div className="flex items-center gap-3 mb-10">
                    <span className="text-[11px] font-mono font-medium tracking-[0.18em] uppercase text-ruby-600">
                      {service.number}
                    </span>
                    <span className="h-px w-8 bg-ruby-600/40" />
                    <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-slate-500">
                      {service.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-[1.75rem] font-serif text-slate-900 leading-tight mb-4 max-w-[22ch]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed max-w-prose">
                    {service.description}
                  </p>

                  {/* Bottom rule + chevron */}
                  <div className="mt-auto pt-10 flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-200" />
                    <motion.span
                      className="text-ruby-600 text-lg leading-none"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
