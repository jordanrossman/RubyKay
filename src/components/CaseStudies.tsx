import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
  const caseStudies = [
    {
      name: "PropertyBrushAI",
      tagline: "AI-Powered Real Estate Photo Editing",
      description:
        "Virtual staging, sky replacement, and object removal—in seconds, not days. Built for agents who want professional photos without the wait or cost.",
      metrics: [
        { label: "Processing Time", value: "<60 sec" },
        { label: "Cost vs Traditional", value: "$1 vs $25" },
        { label: "Properties Enhanced", value: "1,000+" },
      ],
      image: "/screenshots/propertybrushai-section2.png",
      link: "https://www.propertybrushai.com",
    },
    {
      name: "INVSBL",
      tagline: "AI Follow-Up Assistant for Agents",
      description:
        "The CRM replacement that lives where agents already work. No more forgotten follow-ups, no more clunky dashboards—just results.",
      metrics: [
        { label: "Follow-up Completion", value: "3x More" },
        { label: "Works Via", value: "Text & Email" },
        { label: "CRM Login Required", value: "Never" },
      ],
      image: "/screenshots/invsbl-section3.png",
      link: "https://www.goinvsbl.com",
    },
  ];

  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-6">Proof of Work</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
            Products we&apos;ve shipped.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don&apos;t just talk about building—we ship. Here are two products
            we&apos;ve designed, built, and launched in the real estate space.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.name}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden"
            >
              {/* Content */}
              <div className="relative p-8 lg:p-10">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                    {study.name}
                  </h3>
                  <p className="text-slate-400">{study.tagline}</p>
                </div>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed mb-8">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="text-xl lg:text-2xl font-semibold text-white">
                        {metric.value}
                      </p>
                      <p className="text-sm text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>

                {/* Image */}
                <div className="rounded-xl overflow-hidden mb-6 bg-slate-800">
                  <Image
                    src={study.image}
                    alt={`${study.name} screenshot`}
                    width={600}
                    height={340}
                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* CTA */}
                <Link
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-medium hover:text-ruby-400 transition-colors link-underline"
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
              </div>
            </div>
          ))}
        </div>

        {/* What This Proves */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            <span className="font-semibold text-slate-900">
              What this proves:
            </span>{" "}
            RubyKay Labs can own the full lifecycle—from idea to product design
            to full build to launch to adoption. We ship.
          </p>
        </div>
      </div>
    </section>
  );
}
