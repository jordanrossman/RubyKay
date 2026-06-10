import { motion } from "framer-motion";
import { Reveal, Rule, Rise, EASE } from "./animations/Reveal";

/* ----------------------------------------------------------------
   About — the principal's page of the dossier.
---------------------------------------------------------------- */

function AboutHero() {
  return (
    <section className="relative bg-ink-950 text-bone-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 pt-44 pb-24 lg:pt-56 lg:pb-32">
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span
            className="h-px w-12 bg-ruby-500 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
          />
          <span className="overline-label text-ruby-400">The Principal</span>
        </motion.div>

        <h1 className="display text-[clamp(3rem,8.5vw,7.5rem)] leading-[0.98] text-bone-50">
          <span className="block overflow-hidden pb-[0.22em] -mb-[0.22em]">
            <motion.span
              className="block"
              initial={{ y: "135%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
            >
              Operator first.
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.22em] -mb-[0.22em]">
            <motion.span
              className="block"
              initial={{ y: "135%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, delay: 0.55, ease: EASE }}
            >
              <em className="text-ruby-400">Builder always.</em>
            </motion.span>
          </span>
        </h1>

        <motion.p
          className="mt-10 text-lg lg:text-xl text-bone-400 leading-relaxed max-w-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
        >
          Jordan Rossman founded RubyKay Labs to build software the way an
          owner would — shipped products, not slide decks.
        </motion.p>
      </div>
    </section>
  );
}

function AboutBio() {
  return (
    <section className="bg-bone-50 text-ink-950 py-28 lg:py-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24">
        <div className="flex items-baseline justify-between mb-4">
          <span className="overline-label text-ruby-600">Jordan Rossman</span>
          <span className="overline-label text-ink-500 hidden sm:block">
            Founder &amp; Principal Builder
          </span>
        </div>
        <Rule className="bg-ink-950/15" />

        <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Portrait plate */}
          <Rise className="lg:col-span-5" distance={36}>
            <div className="relative max-w-md">
              <div className="border border-ink-950/15 bg-bone-100 p-3 sm:p-4 shadow-[0_40px_80px_-40px_rgba(12,10,9,0.35)]">
                <img
                  src="/jordan-rossman.jpg"
                  alt="Jordan Rossman"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
              <div className="flex items-center justify-between mt-3 px-1">
                <span className="overline-label text-ink-500">
                  The Principal
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ruby-500 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-ruby-600" />
                  </span>
                  <span className="overline-label text-ink-500">
                    Available
                  </span>
                </span>
              </div>
            </div>
          </Rise>

          {/* Bio */}
          <div className="lg:col-span-7 lg:pt-2">
            <Reveal>
              <h2 className="display text-4xl lg:text-5xl text-ink-950">
                Builder, not consultant.
              </h2>
            </Reveal>

            <Rise delay={0.15}>
              <div className="mt-8 space-y-6 max-w-xl">
                <p className="text-lg text-ink-600 leading-relaxed">
                  Jordan Rossman spent 12 years building and running real
                  estate businesses — the kind where you&rsquo;re responsible
                  for every decision, every dollar, and every outcome. No
                  safety net. No one else to blame. That experience shaped how
                  he thinks about business: outcomes first, everything else
                  second.
                </p>
                <p className="text-lg text-ink-600 leading-relaxed">
                  RubyKay Labs is the product of that mindset applied to
                  software. Jordan founded it to do what most dev shops
                  won&rsquo;t — sit on the operator side of the table, learn
                  how the business actually runs, and build tools that move
                  the needle instead of checking a spec box. Custom AI
                  integrations, internal platforms, client-facing products.
                  Built to ship, not to demo.
                </p>
                <p className="text-lg text-ink-600 leading-relaxed">
                  He&rsquo;s not a consultant who&rsquo;s read the books.
                  He&rsquo;s an operator who&rsquo;s lived the problems — and
                  now builds the software to solve them.
                </p>
              </div>
            </Rise>

            <Rise delay={0.25}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="/#contact" className="btn-ink">
                  Work With Jordan
                  <span aria-hidden>→</span>
                </a>
                <a href="/#work" className="btn-hairline text-ink-950">
                  Examine the Work
                </a>
              </div>
            </Rise>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="bg-ink-950 text-bone-100 py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 text-center">
        <Reveal amount={0.3}>
          <h2 className="display text-[clamp(2.4rem,6vw,5rem)] leading-[1.05] text-bone-50">
            Have a product in mind?
          </h2>
        </Reveal>
        <Reveal amount={0.3} delay={0.12}>
          <h2 className="display text-[clamp(2.4rem,6vw,5rem)] leading-[1.05]">
            <em className="text-ruby-400">Let&rsquo;s talk.</em>
          </h2>
        </Reveal>

        <Rise delay={0.25}>
          <p className="mt-8 text-lg text-bone-400 leading-relaxed max-w-md mx-auto">
            If you&rsquo;re serious about building custom software for your
            company, Jordan wants to hear from you.
          </p>
          <div className="mt-10">
            <a href="/#contact" className="btn-bone">
              Start the Conversation
              <span aria-hidden>→</span>
            </a>
          </div>
        </Rise>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <main>
      <AboutHero />
      <AboutBio />
      <AboutCTA />
    </main>
  );
}
