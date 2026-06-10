import { Reveal, Rule, Rise } from "./animations/Reveal";

/* ----------------------------------------------------------------
   The Difference — why this studio, stated plainly on ink.
---------------------------------------------------------------- */

const POINTS = [
  {
    index: "01",
    title: "Operator fluency",
    description:
      "Twelve years running businesses before building software for them. We speak P&L and workflow, not jargon.",
  },
  {
    index: "02",
    title: "Proof on the table",
    description:
      "Live products, designed and built end to end. Judge the work, not the slide deck.",
  },
  {
    index: "03",
    title: "Weeks, not quarters",
    description:
      "A working first version fast — then we iterate against real usage instead of a frozen spec.",
  },
  {
    index: "04",
    title: "Yours, outright",
    description:
      "Your brand, your IP, your asset. Standard stacks and clean handover terms — nothing rented, nothing held hostage.",
  },
  {
    index: "05",
    title: "A direct line",
    description:
      "The person who hears your problem is the person who builds your product. No account managers, no handoffs.",
  },
  {
    index: "06",
    title: "Built for adoption",
    description:
      "Software only counts if your people open it. We design for the daily user first, the org chart second.",
  },
];

export default function WhyRubyKay() {
  return (
    <section
      id="difference"
      data-chapter="04 — The Difference"
      className="bg-ink-950 text-bone-100 py-28 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="flex items-baseline justify-between mb-4">
          <span className="overline-label text-ruby-400">
            04 — The Difference
          </span>
          <span className="overline-label text-bone-500 hidden sm:block">
            Why RubyKay
          </span>
        </div>
        <Rule className="bg-bone-100/15" />

        <div className="mt-12 lg:mt-16 mb-20 lg:mb-28 max-w-4xl">
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[1.05] text-bone-50">
              Most firms sell hours.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="display text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[1.05] text-bone-50">
              We sell{" "}
              <em className="text-ruby-400">working software.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-12 lg:gap-y-16">
          {POINTS.map((point, i) => (
            <Rise key={point.index} delay={(i % 2) * 0.08}>
              <div className="border-t border-bone-100/15 pt-6">
                <div className="flex items-baseline gap-5">
                  <span className="overline-label text-ruby-400">
                    {point.index}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl lg:text-[1.7rem] text-bone-100">
                      {point.title}
                    </h3>
                    <p className="text-bone-400 leading-relaxed mt-3 max-w-md">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}
