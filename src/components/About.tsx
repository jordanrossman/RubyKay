import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";

function AboutHero() {
  return (
    <section className="min-h-[55vh] flex items-center relative overflow-hidden bg-hero-gradient">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-serif font-bold text-slate-900 opacity-[0.03]">
          ABOUT
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="section-label">Founder &amp; Builder</span>
        </motion.div>

        <motion.h1
          className="mt-8 text-4xl sm:text-5xl lg:text-[4.5rem] font-serif text-slate-950 leading-[1.05] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          The builder behind
          <br />
          <span className="italic font-semibold bg-gradient-to-r from-ruby-600 via-ruby-500 to-ruby-600 bg-clip-text text-transparent">
            RubyKay Labs.
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Building software that real estate teams actually use—shipped products, not slide decks.
        </motion.p>
      </div>
    </section>
  );
}

function AboutBio() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column — photo */}
          <FadeIn direction="right">
            <div className="relative">
              {/* Decorative blob */}
              <div className="absolute -inset-4 bg-gradient-to-br from-ruby-50 to-transparent rounded-3xl -z-10" />

              {/* Photo */}
              <div className="rounded-2xl overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.12)] relative aspect-[4/5] lg:aspect-[3/4]">
                <img
                  src="/jordan-rossman.jpg"
                  alt="Jordan Rossman"
                  className="w-full h-full object-cover"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ruby-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ruby-500" />
                </span>
                <span className="text-sm font-medium text-slate-700">
                  Available for projects
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Right column — text */}
          <div>
            <FadeIn>
              <span className="section-label">About Jordan</span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-950">
                Builder, not consultant.
              </h2>
            </FadeIn>

            <StaggerContainer className="mt-8 space-y-6" staggerDelay={0.12} delay={0.2}>
              <StaggerItem>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Jordan Rossman spent 12 years building and running real estate
                  businesses — the kind where you&apos;re responsible for every
                  decision, every dollar, and every outcome. No safety net. No one
                  else to blame. That experience shaped how he thinks about
                  business: outcomes first, everything else second.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-slate-600 text-lg leading-relaxed">
                  RubyKay Labs is the product of that mindset applied to software.
                  Jordan founded it to do what most dev shops won&apos;t — sit on
                  the operator side of the table, learn how the business actually
                  runs, and build tools that move the needle instead of checking a
                  spec box. Custom AI integrations, internal platforms,
                  client-facing products. Built to ship, not to demo.
                </p>
              </StaggerItem>
              <StaggerItem>
                <p className="text-slate-600 text-lg leading-relaxed">
                  He&apos;s not a consultant who&apos;s read the books. He&apos;s
                  an operator who&apos;s lived the problems — and now builds the
                  software to solve them.
                </p>
              </StaggerItem>
            </StaggerContainer>

            {/* CTA buttons */}
            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/#contact" className="btn-primary">
                  Work With Jordan
                </a>
                <a href="/#case-studies" className="btn-secondary">
                  See What We&apos;ve Built
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="bg-dark-grid text-white py-20 lg:py-24 relative overflow-hidden">
      {/* Radial ruby glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(220, 38, 38, 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
            Have a product idea?{" "}
            <span className="text-ruby-400">Let&apos;s talk.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            If you&apos;re serious about building custom software for your team,
            Jordan wants to hear from you.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-slate-950 text-[15px] font-medium rounded-lg hover:bg-slate-100 transition-colors"
            >
              Start the Conversation
            </a>
          </div>
        </FadeIn>
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
