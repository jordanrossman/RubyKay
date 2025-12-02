export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your current tools, workflows, and bottlenecks. Define success metrics and constraints together.",
    },
    {
      number: "02",
      title: "Product Blueprint",
      description:
        "Map key flows and screens. Align on v1 scope vs future roadmap. No feature bloat—just what moves the needle.",
    },
    {
      number: "03",
      title: "Build & Iterate",
      description:
        "Develop the product with regular demos and feedback loops. Integrate with your existing CRMs and tools.",
    },
    {
      number: "04",
      title: "Launch & Onboard",
      description:
        "Support your internal rollout with training, guides, and hands-on help getting your team up to speed.",
    },
    {
      number: "05",
      title: "Iterate & Support",
      description:
        "Analyze usage and feedback. Prioritize and ship improvements. Optional ongoing retainer for continuous development.",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-6">How We Work</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
            From idea to launched product.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A clear, repeatable process that reduces risk and gets you to a
            working product fast. No endless discovery phases or scope creep.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 md:gap-10">
                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                      index === steps.length - 1
                        ? "bg-ruby-600 text-white"
                        : "bg-slate-900 text-white"
                    }`}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 md:pb-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
