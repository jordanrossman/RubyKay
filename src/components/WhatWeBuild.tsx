export default function WhatWeBuild() {
  const services = [
    {
      number: "01",
      title: "AI-Powered Follow-Up & Agent Assistants",
      problem: "Agents forget tasks, leads slip through, follow-up is inconsistent.",
      solution:
        "Tools that draft responses, remind agents, and route leads—so nothing falls through the cracks.",
      example: "INVSBL-style assistant tailored to your team.",
    },
    {
      number: "02",
      title: "Custom CRMs & Productivity Dashboards",
      problem: "Big CRMs are complex and under-used. Agents ignore them.",
      solution:
        "Simple, agent-first interfaces with leadership visibility. Built for how your team actually works.",
      example: "Lightweight CRM overlays that integrate with existing systems.",
    },
    {
      number: "03",
      title: "Listing Marketing & Media Workflows",
      problem: "Inconsistent listing launches, manual media pipelines, wasted time.",
      solution:
        "Automated workflows for photos, edits, virtual staging, and social campaigns.",
      example: "Integration with AI tools like PropertyBrushAI.",
    },
    {
      number: "04",
      title: "Internal Portals & Agent Toolkits",
      problem: "Scattered training, resources, and playbooks across too many places.",
      solution:
        "Centralized portal for onboarding, training, scripts, and branded assets.",
      example: "Custom agent hubs built for your brokerage.",
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-6">What We Build</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
            We don&apos;t sell templates. We build what your business{" "}
            <span className="text-ruby-600">actually needs.</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every engagement starts with strategy. We understand your workflows,
            identify the bottlenecks, then design and ship a tight v1—not a
            bloated feature list.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.number} className="feature-card">
              {/* Number */}
              <span className="section-number">[{service.number}]</span>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-4 mb-6">
                {service.title}
              </h3>

              {/* Problem */}
              <div className="mb-4">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
                  The Problem
                </p>
                <p className="text-slate-600">{service.problem}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">
                  Our Solution
                </p>
                <p className="text-slate-900 font-medium">{service.solution}</p>
              </div>

              {/* Example */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm text-slate-500">
                  <span className="font-medium">Example:</span> {service.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
