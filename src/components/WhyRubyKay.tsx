import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "./animations/FadeIn";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";

type FilledCell = { col: number; row: number; opacity: number };

function GridPattern({ filled }: { filled: FilledCell[] }) {
  const CELL = 28;
  const mask =
    "radial-gradient(ellipse 120% 100% at 100% 0%, #000 10%, rgba(0,0,0,0.75) 45%, transparent 95%)";
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ WebkitMaskImage: mask, maskImage: mask }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(248,113,113,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,113,113,0.22) 1px, transparent 1px)",
          backgroundSize: `${CELL}px ${CELL}px`,
          backgroundPosition: "right top",
        }}
      />
      {filled.map((c, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            right: `${c.col * CELL + 1}px`,
            top: `${c.row * CELL + 1}px`,
            width: `${CELL - 1}px`,
            height: `${CELL - 1}px`,
            background: `rgba(220,38,38,${c.opacity})`,
          }}
        />
      ))}
    </div>
  );
}

const cellSets: FilledCell[][] = [
  [
    { col: 1, row: 0, opacity: 0.55 },
    { col: 3, row: 1, opacity: 0.25 },
    { col: 0, row: 2, opacity: 0.15 },
    { col: 5, row: 0, opacity: 0.35 },
  ],
  [
    { col: 0, row: 1, opacity: 0.5 },
    { col: 2, row: 0, opacity: 0.2 },
    { col: 4, row: 2, opacity: 0.32 },
    { col: 6, row: 1, opacity: 0.18 },
  ],
  [
    { col: 2, row: 1, opacity: 0.55 },
    { col: 0, row: 0, opacity: 0.22 },
    { col: 4, row: 0, opacity: 0.13 },
    { col: 3, row: 2, opacity: 0.3 },
  ],
  [
    { col: 1, row: 2, opacity: 0.45 },
    { col: 3, row: 0, opacity: 0.28 },
    { col: 5, row: 1, opacity: 0.18 },
    { col: 0, row: 1, opacity: 0.12 },
  ],
  [
    { col: 0, row: 0, opacity: 0.5 },
    { col: 2, row: 2, opacity: 0.2 },
    { col: 4, row: 1, opacity: 0.3 },
    { col: 6, row: 0, opacity: 0.15 },
  ],
  [
    { col: 1, row: 1, opacity: 0.55 },
    { col: 3, row: 2, opacity: 0.22 },
    { col: 5, row: 0, opacity: 0.3 },
    { col: 0, row: 3, opacity: 0.1 },
  ],
];

export default function WhyRubyKay() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const differentiators = [
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "Business Fluency",
      description:
        "We learn your workflows, your bottlenecks, your goals. No translating tech jargon—we speak operator.",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Shipped Products",
      description:
        "Our products aren't prototypes—they're live, used, and proven. We build to ship.",
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      title: "White-Label Ready",
      description:
        "Your brand, your asset. Everything we build can be fully branded and owned by you—not rented.",
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
      title: "Speed to Value",
      description:
        "Working v1 in weeks, not years. We prototype fast, validate quickly, and iterate based on real feedback.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Partnership Model",
      description:
        "Not just \"we built it, good luck.\" We offer ongoing support, iterations, and strategic partnership.",
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Clear Ownership",
      description:
        "Transparent contracts, standard tech stacks, and handover options. Your asset doesn't vanish with us.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark-grid text-white overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(185, 28, 28, 0.15) 0%, transparent 70%)",
          y: backgroundY,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight mb-6">
              We don&apos;t just write code.{" "}
              <span className="text-ruby-400">
                We build products your team actually uses.
              </span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="text-lg text-slate-400 leading-relaxed">
              Whether you need an AI assistant, a custom dashboard, or an internal
              tool—we design for adoption first. Because the best software is
              the software your team will actually open.
            </p>
          </FadeIn>
        </div>

        {/* Differentiators Grid */}
        <StaggerContainer
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {differentiators.map((item, index) => (
            <StaggerItem key={index} className="h-full">
              <motion.div
                className="relative h-full overflow-hidden p-5 sm:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm"
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.2)",
                  y: -4,
                }}
                transition={{ duration: 0.3 }}
              >
                <GridPattern filled={cellSets[index % cellSets.length]} />
                <div className="relative pt-20">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
