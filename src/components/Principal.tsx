import { Link } from "react-router-dom";
import { Reveal, Rule, Rise } from "./animations/Reveal";

/* ----------------------------------------------------------------
   The Principal — execs buy people. Put the person on the page.
---------------------------------------------------------------- */

export default function Principal() {
  return (
    <section
      id="principal"
      data-chapter="06 — Principal"
      className="bg-bone-100 text-ink-950 py-28 lg:py-40 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="flex items-baseline justify-between mb-4">
          <span className="overline-label text-ruby-600">06 — Principal</span>
          <span className="overline-label text-ink-500 hidden sm:block">
            Founder &amp; Builder
          </span>
        </div>
        <Rule className="bg-ink-950/15" />

        <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Portrait plate */}
          <Rise className="lg:col-span-5" distance={36}>
            <div className="border border-ink-950/15 bg-bone-50 p-3 sm:p-4 shadow-[0_40px_80px_-40px_rgba(12,10,9,0.35)] max-w-md">
              <img
                src="/jordan-rossman.jpg"
                alt="Jordan Rossman, founder of RubyKay Labs"
                loading="lazy"
                className="w-full h-auto aspect-[4/5] object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-3 px-1 max-w-md">
              <span className="overline-label text-ink-500">
                Jordan Rossman
              </span>
              <span className="overline-label text-ink-500">
                Founder
              </span>
            </div>
          </Rise>

          {/* Bio */}
          <div className="lg:col-span-7 lg:pt-4">
            <Reveal>
              <h2 className="display text-4xl lg:text-6xl text-ink-950">
                The person you&rsquo;d
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display text-4xl lg:text-6xl text-ink-950">
                actually <em className="text-ruby-600">work with.</em>
              </h2>
            </Reveal>

            <Rise delay={0.2}>
              <p className="text-lg text-ink-600 leading-relaxed mt-8 max-w-xl">
                Jordan Rossman spent twelve years building and running
                businesses — responsible for every decision, every dollar, and
                every outcome. RubyKay Labs is that operator&rsquo;s mindset
                applied to software: sit on your side of the table, learn how
                the business actually runs, then build the tool that moves the
                needle.
              </p>
              <p className="text-lg text-ink-600 leading-relaxed mt-5 max-w-xl">
                Not a consultant who&rsquo;s read the books. An operator
                who&rsquo;s lived the problems — and now builds the software
                that solves them.
              </p>
            </Rise>

            <Rise delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
                <span className="inline-flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ruby-500 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-ruby-600" />
                  </span>
                  <span className="overline-label text-ink-950">
                    Available for new engagements
                  </span>
                </span>

                <Link
                  to="/about"
                  className="link-draw overline-label text-ink-950 inline-flex items-center gap-2"
                >
                  More about Jordan
                  <span aria-hidden className="text-ruby-600">→</span>
                </Link>
              </div>
            </Rise>
          </div>
        </div>
      </div>
    </section>
  );
}
