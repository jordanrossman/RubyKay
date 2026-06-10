import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Rule, Rise, EASE } from "./animations/Reveal";

/* ----------------------------------------------------------------
   Capabilities — an index of what the studio builds to order.
   Rows expand like a ledger, not a card grid.
---------------------------------------------------------------- */

const CAPABILITIES = [
  {
    index: "01",
    title: "AI Systems",
    summary:
      "Assistants, automation, and intelligence built into the way you already operate — not bolted on after the fact.",
    deliverables: [
      "AI Assistants",
      "Workflow Automation",
      "Document & Image Intelligence",
      "LLM Integration",
    ],
  },
  {
    index: "02",
    title: "Internal Platforms",
    summary:
      "The dashboards, portals, and operations tooling your team lives in — designed for daily adoption, not a demo.",
    deliverables: ["Dashboards", "Admin Panels", "Team Portals", "Reporting"],
  },
  {
    index: "03",
    title: "Client-Facing Products",
    summary:
      "The software your customers touch: portals, marketplaces, booking flows, and sites that convert.",
    deliverables: ["Web Applications", "Client Portals", "Marketing Sites", "E-Commerce"],
  },
  {
    index: "04",
    title: "Mobile",
    summary:
      "Native iPhone and Android tools for the field — offline-ready, syncing when they need to.",
    deliverables: ["iOS", "Android", "Field Tools", "Offline-First"],
  },
];

function CapabilityRow({
  capability,
  isOpen,
  onToggle,
}: {
  capability: (typeof CAPABILITIES)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-ink-950/15">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group w-full grid grid-cols-12 items-baseline gap-4 py-7 lg:py-9 px-2 -mx-2 text-left cursor-pointer transition-colors duration-500 hover:bg-ink-950/[0.035]"
      >
        <span className="overline-label text-ruby-600 col-span-2 sm:col-span-1">
          {capability.index}
        </span>
        <span
          className={`display text-2xl sm:text-3xl lg:text-4xl col-span-8 sm:col-span-9 transition-[transform,color] duration-500 group-hover:translate-x-2 ${
            isOpen ? "text-ink-950" : "text-ink-950/80 group-hover:text-ink-950"
          }`}
        >
          {capability.title}
        </span>
        <span className="col-span-2 justify-self-end self-center relative w-4 h-4">
          {/* Plus that rotates into a close */}
          <motion.span
            className="absolute top-1/2 left-0 w-4 h-px bg-ink-950"
            animate={{ rotate: isOpen ? 0 : 0 }}
          />
          <motion.span
            className="absolute top-1/2 left-0 w-4 h-px bg-ink-950"
            animate={{ rotate: isOpen ? 0 : 90 }}
            transition={{ duration: 0.4, ease: EASE }}
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-12 gap-4 pb-10 lg:pb-12">
              <div className="hidden sm:block sm:col-span-1" />
              <p className="col-span-12 sm:col-span-6 text-ink-600 leading-relaxed max-w-md">
                {capability.summary}
              </p>
              <ul className="col-span-12 sm:col-span-5 space-y-2 mt-2 sm:mt-0">
                {capability.deliverables.map((item) => (
                  <li
                    key={item}
                    className="overline-label text-ink-500 flex items-center gap-3"
                  >
                    <span className="w-1 h-1 bg-ruby-600 rotate-45 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WhatWeBuild() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="capabilities"
      data-chapter="03 — Capabilities"
      className="bg-bone-100 text-ink-950 py-28 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="flex items-baseline justify-between mb-4">
          <span className="overline-label text-ruby-600">
            03 — Capabilities
          </span>
          <span className="overline-label text-ink-500 hidden sm:block">
            Built to Order
          </span>
        </div>
        <Rule className="bg-ink-950/15" />

        <div className="mt-12 lg:mt-16 mb-16 lg:mb-20 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display text-5xl lg:text-7xl text-ink-950">
                What we build to order.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <Rise delay={0.15}>
              <p className="text-lg text-ink-600 leading-relaxed max-w-md">
                No templates, no feature bloat. Every engagement starts with
                your workflows and ends with a tight first version your team
                actually uses.
              </p>
            </Rise>
          </div>
        </div>

        <Rise>
          <div className="border-b border-ink-950/15">
            {CAPABILITIES.map((capability, i) => (
              <CapabilityRow
                key={capability.index}
                capability={capability}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </Rise>
      </div>
    </section>
  );
}
