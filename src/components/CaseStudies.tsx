import {
  motion,
  useMotionValue,
  useSpring,
  animate,
  type PanInfo,
} from "framer-motion";
import FadeIn from "./animations/FadeIn";
import { ScaleOnScroll } from "./animations/Parallax";
import { useState, useRef, useEffect, useCallback } from "react";

export default function CaseStudies() {
  const caseStudies = [
    {
      name: "PropertyBrushAI",
      tagline: "Professional property photos in 60 seconds—not 3 days.",
      description:
        "AI-powered virtual staging, sky replacement, and object removal at a fraction of the cost. Users get professional photos instantly without waiting on editors or paying agency prices.",
      image: "/screenshots/propertybrushai-hero-v2.png",
      link: "https://www.propertybrushai.com",
    },
    {
      name: "INVSBL",
      tagline: "The follow-up system people actually use.",
      description:
        "A mobile app built for professionals who hate bloated CRMs. It helps them do one thing really well: relentless follow-up that converts.",
      image: "/screenshots/invsbl-hero-v4.png",
      link: "https://www.goinvsbl.com",
    },
    {
      name: "Daily Rabbi",
      tagline: "Ancient wisdom, delivered daily.",
      description:
        "A daily devotional app that brings timeless rabbinical teachings to your morning routine. Bite-sized lessons from centuries of Jewish scholarship, curated and delivered fresh each day.",
      image: "/screenshots/dailyrabbi-hero.png",
      link: "https://www.dailyrabbi.com",
    },
  ];

  // Mobile carousel state
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mobileMetrics, setMobileMetrics] = useState({
    cardWidth: 300,
    sideMargin: 40,
  });
  const isDragging = useRef(false);
  const gap = 16;

  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, { damping: 30, stiffness: 300 });

  const measure = useCallback(() => {
    const mobile = window.innerWidth < 1024;
    setIsMobile(mobile);
    if (mobile) {
      const vw = window.innerWidth;
      const cw = vw * 0.82;
      setMobileMetrics({ cardWidth: cw, sideMargin: (vw - cw) / 2 });
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const getSnapX = useCallback(
    (index: number) => {
      const { cardWidth, sideMargin } = mobileMetrics;
      return sideMargin - index * (cardWidth + gap);
    },
    [mobileMetrics]
  );

  const snapToCard = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, caseStudies.length - 1));
      setActiveIndex(clamped);
      animate(dragX, getSnapX(clamped), {
        type: "spring",
        damping: 30,
        stiffness: 300,
      });
    },
    [getSnapX, dragX, caseStudies.length]
  );

  // Re-snap on resize
  useEffect(() => {
    if (isMobile && mobileMetrics.cardWidth > 0) {
      animate(dragX, getSnapX(activeIndex), {
        type: "spring",
        damping: 30,
        stiffness: 300,
      });
    }
  }, [isMobile, mobileMetrics, activeIndex, getSnapX, dragX]);

  const handleDragStart = () => {
    isDragging.current = true;
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const { offset, velocity } = info;
    let newIndex = activeIndex;
    if (offset.x < -50 || velocity.x < -500) {
      newIndex = activeIndex + 1;
    } else if (offset.x > 50 || velocity.x > 500) {
      newIndex = activeIndex - 1;
    }
    snapToCard(newIndex);
    setTimeout(() => {
      isDragging.current = false;
    }, 50);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
    }
  };

  const minX = getSnapX(caseStudies.length - 1) - 50;
  const maxX = getSnapX(0) + 50;

  // Shared card content renderer
  const renderCard = (
    study: (typeof caseStudies)[number],
  ) => (
    <div className="group relative bg-slate-900 rounded-3xl overflow-hidden h-full">
      <div className="relative p-6 sm:p-8 lg:p-10">
        <div className="mb-4">
          <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">
            {study.name}
          </h3>
          <p className="text-sm text-slate-400">{study.tagline}</p>
        </div>
        <p className="text-sm text-slate-400 leading-relaxed mb-6">
          {study.description}
        </p>
        <div className="rounded-xl overflow-hidden mb-6 bg-slate-800">
          <img
            src={study.image}
            alt={`${study.name} screenshot`}
            className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            draggable={false}
          />
        </div>
        <div>
          <a
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-medium hover:text-ruby-400 transition-colors"
            onClick={handleLinkClick}
            draggable={false}
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
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="case-studies"
      className="py-24 lg:py-32 bg-white overflow-hidden"
      role="region"
      aria-label="Case studies"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <FadeIn>
            <div className="section-label mb-6">Proof of Work</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-6">
              Products we&apos;ve shipped.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-slate-600 leading-relaxed">
              We don&apos;t just talk about building—we ship. Here are three
              products we&apos;ve designed, built, and launched.
            </p>
          </FadeIn>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <ScaleOnScroll key={study.name}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                {renderCard(study)}
              </motion.div>
            </ScaleOnScroll>
          ))}
        </div>
      </div>

      {/* Mobile: swipeable carousel */}
      <div ref={containerRef} className="relative lg:hidden">
        <motion.div
          className="flex"
          style={{
            x: springX,
            gap: gap,
            touchAction: "pan-y",
          }}
          drag="x"
          dragElastic={0.1}
          dragMomentum={false}
          dragConstraints={{ left: minX, right: maxX }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {caseStudies.map((study, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={study.name}
                className="shrink-0"
                style={{ width: mobileMetrics.cardWidth }}
                animate={{
                  scale: isActive ? 1 : 0.95,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                aria-label={`Case study ${index + 1} of ${caseStudies.length}: ${study.name}`}
                role="group"
                aria-roledescription="slide"
              >
                {renderCard(study)}
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Dot Indicators — mobile only */}
      <div
        className="flex lg:hidden justify-center gap-3 mt-8"
        role="tablist"
        aria-label="Case study navigation"
      >
        {caseStudies.map((study, index) => (
          <button
            key={study.name}
            onClick={() => snapToCard(index)}
            className={`rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-ruby-600 w-3 h-3 scale-125"
                : "bg-slate-300 w-2.5 h-2.5 hover:bg-slate-400"
            }`}
            style={{ minWidth: 10, minHeight: 10 }}
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Go to ${study.name}`}
          />
        ))}
      </div>

      {/* What This Proves */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0.3} className="mt-16 text-center">
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            <span className="font-semibold text-slate-900">
              What this means for you:
            </span>{" "}
            You get a partner who ships—from idea to launch to adoption. No
            endless discovery. No bloated timelines. Just a product your team
            actually uses.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
