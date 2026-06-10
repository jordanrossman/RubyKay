import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, Rule, Rise } from "./animations/Reveal";

/* ----------------------------------------------------------------
   Method — the protocol. A scroll-drawn spine with five steps.
---------------------------------------------------------------- */

const STEPS = [
  {
    index: "01",
    title: "Discovery & Strategy",
    description:
      "We map your tools, workflows, and bottlenecks — and define what success costs and what it pays.",
  },
  {
    index: "02",
    title: "Blueprint",
    description:
      "Key flows on paper before a line of code. First-version scope agreed up front: no bloat, no surprises.",
  },
  {
    index: "03",
    title: "Build & Integrate",
    description:
      "Working demos on a regular cadence, plugged into the systems you already run.",
  },
  {
    index: "04",
    title: "Launch & Onboard",
    description:
      "Rollout, training, and documentation — your team up to speed, not left alone with a login screen.",
  },
  {
    index: "05",
    title: "Iterate & Support",
    description:
      "Usage tells the truth. We read it, then ship the next version. Ongoing partnership, optional.",
  },
];

export default function Process() {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.6"],
  });
  const spine = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="method"
      data-chapter="05 — Method"
      className="bg-bone-50 text-ink-950 py-28 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="flex items-baseline justify-between mb-4">
          <span className="overline-label text-ruby-600">05 — Method</span>
          <span className="overline-label text-ink-500 hidden sm:block">
            The Protocol
          </span>
        </div>
        <Rule className="bg-ink-950/15" />

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Sticky header column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <h2 className="display text-5xl lg:text-6xl text-ink-950">
                  A protocol,
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="display text-5xl lg:text-6xl text-ink-950">
                  not a <em className="text-ruby-600">gamble.</em>
                </h2>
              </Reveal>
              <Rise delay={0.2}>
                <p className="text-lg text-ink-600 leading-relaxed mt-6 max-w-sm">
                  Custom software has a reputation for risk. This is how we
                  take the risk out of it — the same five steps, every
                  engagement.
                </p>
              </Rise>
            </div>
          </div>

          {/* Steps with drawn spine */}
          <div ref={listRef} className="lg:col-span-7 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-ink-950/10" />
            <motion.div
              className="absolute left-0 top-0 w-px bg-ruby-600"
              style={{ height: spine }}
            />

            <div className="pl-8 sm:pl-12 space-y-14 lg:space-y-20">
              {STEPS.map((step, i) => (
                <Rise key={step.index} delay={i * 0.05} amount={0.5}>
                  <div>
                    <span className="overline-label text-ruby-600">
                      Step {step.index}
                    </span>
                    <h3 className="font-serif text-3xl lg:text-4xl text-ink-950 mt-3">
                      {step.title}
                    </h3>
                    <p className="text-ink-600 leading-relaxed mt-4 max-w-md">
                      {step.description}
                    </p>
                  </div>
                </Rise>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
