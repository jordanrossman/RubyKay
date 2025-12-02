export default function Testimonial() {
  return (
    <section className="py-32 lg:py-40 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <blockquote>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-10">
            &ldquo;Finally, a dev partner who{" "}
            <span className="text-gradient">
              actually understands how real estate teams work.
            </span>
            &rdquo;
          </p>
          <footer className="mt-10">
            <div className="w-16 h-px bg-slate-300 mx-auto mb-6"></div>
            <p className="text-lg font-medium text-slate-900">
              Real Estate Team Leader
            </p>
            <p className="text-slate-500 mt-1">50+ Agent Brokerage</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
