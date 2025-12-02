import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="max-w-xl">
            {/* Section Label */}
            <div className="section-label mb-8 animate-fade-in-up">
              Custom AI & Software
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-serif text-slate-950 leading-[1.1] mb-6 animate-fade-in-up animation-delay-100">
              Custom products for{" "}
              <span className="text-ruby-600">serious</span> real estate teams.
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-[480px] animate-fade-in-up animation-delay-200">
              We build white-label AI tools and software that give your team an
              edge your competitors can&apos;t buy off the shelf.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Link href="#contact" className="btn-primary">
                Book a Strategy Call
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link href="#case-studies" className="btn-secondary">
                See What We&apos;ve Built
              </Link>
            </div>
          </div>

          {/* Right Column - Product Mockups */}
          <div className="relative animate-slide-in-right animation-delay-400">
            <div className="relative">
              {/* Main Product Image - PropertyBrushAI */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/screenshots/propertybrushai-hero-v2.png"
                  alt="PropertyBrushAI - AI Photo Editing"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating Card - INVSBL */}
              <div className="absolute -bottom-8 -left-8 w-64 rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="/screenshots/invsbl-hero-v4.png"
                  alt="INVSBL - AI Follow-up Assistant"
                  width={256}
                  height={160}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-24 pt-12 border-t border-slate-200 animate-fade-in-up animation-delay-500">
          <p className="text-sm text-slate-500 mb-8 text-center uppercase tracking-wider font-medium">
            Built for teams doing $1M+ GCI
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="text-center">
              <p className="text-4xl font-semibold text-slate-900">1,000+</p>
              <p className="text-sm text-slate-500 mt-1">Properties Enhanced</p>
            </div>
            <div className="w-px h-12 bg-slate-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-4xl font-semibold text-slate-900">2</p>
              <p className="text-sm text-slate-500 mt-1">Products Shipped</p>
            </div>
            <div className="w-px h-12 bg-slate-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-4xl font-semibold text-slate-900">100%</p>
              <p className="text-sm text-slate-500 mt-1">Real Estate Focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
