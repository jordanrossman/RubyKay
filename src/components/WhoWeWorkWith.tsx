export default function WhoWeWorkWith() {
  const audiences = [
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "High-Performing Teams",
      description:
        "10-100 agent teams who want proprietary tech that gives them a recruiting and conversion edge.",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Growth-Focused Brokerages",
      description:
        "50-500+ agent brokerages looking to stand out with superior tech for recruiting and retention.",
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
      title: "Operations Leaders",
      description:
        "Marketing and ops directors who need to systematize listing launches and agent workflows.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-6">Who We Work With</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
            Built for real estate leaders who want an edge.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We partner with teams and brokerages who are tired of off-the-shelf
            tools that everyone else uses. If you want something that&apos;s
            truly yours, we should talk.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="feature-card">
              <div className="w-12 h-12 rounded-xl bg-ruby-50 text-ruby-600 flex items-center justify-center mb-6">
                {audience.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {audience.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Clarification */}
        <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-200">
          <p className="text-slate-600 text-center">
            <span className="font-medium text-slate-900">Not a fit:</span> Solo
            agents looking for cheap websites or off-the-shelf CRM plugins. We
            build custom solutions for serious operators.
          </p>
        </div>
      </div>
    </section>
  );
}
