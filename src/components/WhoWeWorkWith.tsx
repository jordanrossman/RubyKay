import { motion } from "framer-motion";
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
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(185,28,28,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(185,28,28,0.18) 1px, transparent 1px)",
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
            background: `rgba(185,28,28,${c.opacity})`,
          }}
        />
      ))}
    </div>
  );
}

export default function WhoWeWorkWith() {
  const audiences: {
    title: string;
    description: string;
    cells: FilledCell[];
  }[] = [
    {
      cells: [
        { col: 1, row: 0, opacity: 0.55 },
        { col: 3, row: 1, opacity: 0.25 },
        { col: 0, row: 2, opacity: 0.15 },
        { col: 5, row: 0, opacity: 0.35 },
        { col: 2, row: 3, opacity: 0.1 },
      ],
      title: "Growing Teams",
      description:
        "Companies with 10-100 people who want proprietary tools that give them a competitive edge.",
    },
    {
      cells: [
        { col: 0, row: 1, opacity: 0.45 },
        { col: 2, row: 0, opacity: 0.2 },
        { col: 4, row: 2, opacity: 0.3 },
        { col: 1, row: 3, opacity: 0.12 },
        { col: 6, row: 1, opacity: 0.18 },
      ],
      title: "Scaling Organizations",
      description:
        "Mid-size companies looking to stand out with custom tech that drives efficiency and retention.",
    },
    {
      cells: [
        { col: 2, row: 1, opacity: 0.5 },
        { col: 0, row: 0, opacity: 0.22 },
        { col: 4, row: 0, opacity: 0.13 },
        { col: 3, row: 2, opacity: 0.3 },
        { col: 1, row: 3, opacity: 0.1 },
      ],
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
                className="feature-card h-full relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <GridPattern filled={audience.cells} />
                <div className="relative pt-24">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
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
