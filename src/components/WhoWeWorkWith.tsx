import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { Reveal, Rule, Rise } from "./animations/Reveal";

/* ----------------------------------------------------------------
   The Manifesto — a statement that inks itself in as you read it,
   followed by the clientele ledger.
---------------------------------------------------------------- */

const STATEMENT: { text: string; accent?: boolean }[] =
  `Every company runs on software. Most run on somebody else's — the same CRMs, the same dashboards, the same plugins as the competition. The edge belongs to the ones who`
    .split(" ")
    .map((text) => ({ text }));

const ACCENT_WORDS: { text: string; accent?: boolean }[] = [
  { text: "build", accent: true },
  { text: "their", accent: true },
  { text: "own.", accent: true },
];

const WORDS = [...STATEMENT, ...ACCENT_WORDS];

function Word({
  children,
  index,
  total,
  progress,
  accent,
}: {
  children: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  accent?: boolean;
}) {
  const start = (index / total) * 0.9;
  const end = start + 0.1;
  const opacity = useTransform(progress, [start, end], [0.16, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={accent ? "font-serif italic text-ruby-400" : undefined}
    >
      {children}{" "}
    </motion.span>
  );
}

const CLIENTELE = [
  {
    index: "01",
    title: "Growing teams",
    description:
      "Ten to a hundred people, ready to trade subscriptions for proprietary tools that compound.",
  },
  {
    index: "02",
    title: "Scaling organizations",
    description:
      "Operators standardizing on systems that are actually theirs — brand, data, and roadmap included.",
  },
  {
    index: "03",
    title: "Ops & marketing leaders",
    description:
      "Directors automating the manual work that eats their week, with software their people will actually open.",
  },
];

export default function WhoWeWorkWith() {
  const statementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: statementRef,
    offset: ["start 0.85", "start 0.3"],
  });

  return (
    <section
      data-chapter="01 — Thesis"
      className="bg-ink-950 text-bone-100 py-28 lg:py-44 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        {/* Statement */}
        <p
          ref={statementRef}
          className="font-serif text-[clamp(1.7rem,3.6vw,3.2rem)] leading-[1.22] max-w-5xl"
        >
          {WORDS.map((word, i) => (
            <Word
              key={i}
              index={i}
              total={WORDS.length}
              progress={scrollYProgress}
              accent={word.accent}
            >
              {word.text}
            </Word>
          ))}
        </p>

        {/* Clientele ledger */}
        <div className="mt-28 lg:mt-36">
          <div className="flex items-baseline justify-between mb-4">
            <Reveal as="span">
              <span className="overline-label text-bone-500">
                Who We Work With
              </span>
            </Reveal>
            <Reveal as="span" delay={0.1}>
              <span className="overline-label text-bone-500 hidden sm:block">
                RKL — Clientele
              </span>
            </Reveal>
          </div>

          {CLIENTELE.map((client, i) => (
            <div key={client.index}>
              <Rule className="bg-bone-100/15" delay={i * 0.08} />
              <Rise delay={0.1 + i * 0.08}>
                <div className="grid sm:grid-cols-12 gap-2 sm:gap-6 py-8 lg:py-10 items-baseline">
                  <span className="overline-label text-ruby-400 sm:col-span-1">
                    {client.index}
                  </span>
                  <h3 className="font-serif text-2xl lg:text-3xl text-bone-100 sm:col-span-5">
                    {client.title}
                  </h3>
                  <p className="text-bone-400 leading-relaxed sm:col-span-6 max-w-md">
                    {client.description}
                  </p>
                </div>
              </Rise>
            </div>
          ))}
          <Rule className="bg-bone-100/15" delay={0.3} />

          <Rise delay={0.35} className="pt-8">
            <p className="overline-label text-bone-500 leading-loose">
              <span className="text-ruby-400">Not a fit —</span> template
              websites, off-the-shelf plugins, cheap &amp; fast. We build
              assets, not expenses.
            </p>
          </Rise>
        </div>
      </div>
    </section>
  );
}
