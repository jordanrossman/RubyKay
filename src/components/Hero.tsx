import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./animations/MagneticButton";
import { EASE } from "./animations/Reveal";

/** One masked headline line, with room for descenders inside the clip. */
function Line({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden pb-[0.22em] -mb-[0.22em] ${className}`}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "135%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Corner caption pinned to the plate frame. */
function Corner({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <motion.span
      className={`absolute bg-ink-950 px-3 overline-label text-bone-500 whitespace-nowrap ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 2.2 }}
    >
      {children}
    </motion.span>
  );
}

/**
 * The plate frame draws itself: top edge first, then the sides,
 * then the bottom — like a draftsman ruling a sheet.
 */
function Frame() {
  const edge = "absolute bg-bone-100/15";
  return (
    <div className="pointer-events-none absolute inset-4 sm:inset-6 lg:inset-8">
      <motion.span
        className={`${edge} top-0 left-0 right-0 h-px origin-left`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 1.1, ease: EASE }}
      />
      <motion.span
        className={`${edge} top-0 left-0 bottom-0 w-px origin-top`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.0, delay: 1.5, ease: EASE }}
      />
      <motion.span
        className={`${edge} top-0 right-0 bottom-0 w-px origin-top`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.0, delay: 1.5, ease: EASE }}
      />
      <motion.span
        className={`${edge} bottom-0 left-0 right-0 h-px origin-right`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, delay: 1.9, ease: EASE }}
      />

      <Corner className="top-0 left-6 sm:left-10 -translate-y-1/2">
        RubyKay Labs
      </Corner>
      <Corner className="top-0 right-6 sm:right-10 -translate-y-1/2">
        N° 001
      </Corner>
      <Corner className="hidden sm:block bottom-0 left-10 translate-y-1/2">
        AI-Native · Built to Order
      </Corner>
      <Corner className="hidden sm:block bottom-0 right-10 translate-y-1/2">
        North America
      </Corner>
    </div>
  );
}

const LEDGER: { label: string; value: string }[] = [
  { label: "Practice", value: "AI & Custom Software" },
  { label: "First Version", value: "Weeks, not quarters" },
  { label: "Ownership", value: "Yours, outright" },
];

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section
      ref={containerRef}
      data-chapter="01 — Thesis"
      className="relative bg-ink-950 text-bone-100 min-h-screen flex flex-col overflow-hidden"
    >
      <Frame />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative flex-1 flex flex-col max-w-[1440px] w-full mx-auto px-10 sm:px-16 lg:px-24"
      >
        {/* Headline block */}
        <div className="flex-1 flex flex-col justify-center pt-32 pb-16">
          <motion.div
            className="flex items-center gap-4 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            <motion.span
              className="h-px w-12 bg-ruby-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            />
            <span className="overline-label text-ruby-400">
              A Private Software Studio
            </span>
          </motion.div>

          <h1 className="display text-[clamp(3.2rem,9.5vw,9rem)] leading-[0.98] text-bone-50">
            <Line delay={0.45}>Software your</Line>
            <Line delay={0.58}>competitors</Line>
            <Line delay={0.71}>
              <em className="text-ruby-400 pr-[0.06em]">can&rsquo;t buy.</em>
            </Line>
          </h1>

          <div className="mt-12 lg:mt-14 lg:flex lg:items-end lg:justify-between lg:gap-16">
            <motion.p
              className="max-w-xl text-lg lg:text-xl leading-relaxed text-bone-400"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.05, ease: EASE }}
            >
              RubyKay Labs designs and builds custom AI systems and software for
              companies that refuse to run on the same tools as everyone else.
              Built around your operation. Owned by you. Live in weeks.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10 lg:mt-0 shrink-0"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: EASE }}
            >
              <MagneticButton as="a" href="#contact" strength={0.15} className="btn-bone">
                Start the Conversation
                <span aria-hidden>→</span>
              </MagneticButton>
              <a href="#work" className="btn-hairline text-bone-100">
                Examine the Work
              </a>
            </motion.div>
          </div>
        </div>

        {/* The ledger strip */}
        <motion.div
          className="mb-16 lg:mb-20 border-t border-bone-100/15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          <dl className="grid grid-cols-1 sm:grid-cols-3">
            {LEDGER.map((item, i) => (
              <div
                key={item.label}
                className={`py-5 sm:py-6 border-bone-100/15 ${
                  i > 0 ? "border-t sm:border-t-0 sm:border-l sm:pl-8" : ""
                }`}
              >
                <dt className="overline-label text-bone-500 mb-2">{item.label}</dt>
                <dd className="font-serif text-lg lg:text-xl text-bone-200">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </section>
  );
}
