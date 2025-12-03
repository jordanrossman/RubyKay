"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import MagneticButton from "./animations/MagneticButton";

// Animated word component with spring physics
function AnimatedWord({
  children,
  delay = 0,
  className = "",
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0, y: 80, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      }}
    >
      {children}
    </motion.span>
  );
}

// Special animated word with gradient, glow, and emphasis
function GlowWord({
  children,
  delay = 0,
}: {
  children: string;
  delay?: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      className="inline-block relative cursor-default"
      initial={{ opacity: 0, y: 80, rotateX: -90, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle glow effect behind text */}
      <motion.span
        className="absolute -inset-2 blur-2xl bg-ruby-500/20 rounded-full pointer-events-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 0.4 : 0.25,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      />
      {/* Gradient text - italic for emphasis */}
      <span className="relative italic font-semibold bg-gradient-to-r from-ruby-600 via-ruby-500 to-ruby-600 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-shift pr-[0.15em]">
        {children}
      </span>
    </motion.span>
  );
}

// Character-by-character reveal for extra impact
function TypewriterText({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.03,
            ease: "easeOut",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll-linked transforms
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(smoothProgress, [0, 1], [0, 200]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.95]);

  // Parallax for background watermark
  const watermarkY = useTransform(smoothProgress, [0, 1], [0, -100]);
  const watermarkOpacity = useTransform(smoothProgress, [0, 0.3], [0.03, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] bg-hero-gradient overflow-hidden"
    >
      {/* Large background watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ y: watermarkY, opacity: watermarkOpacity }}
      >
        <span className="text-[20vw] font-serif font-bold text-slate-900 whitespace-nowrap">
          RUBYKAY
        </span>
      </motion.div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32"
      >
        <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[70vh] text-center">
          {/* Text Content */}
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Section Label */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.span
                className="section-label"
                initial={{ opacity: 0, letterSpacing: "0.5em" }}
                animate={{ opacity: 1, letterSpacing: "0.2em" }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <TypewriterText text="Custom AI & Software" delay={0.5} />
              </motion.span>
            </motion.div>

            {/* Headline - The Star of the Show */}
            <h1 className="text-4xl sm:text-5xl lg:text-[5rem] xl:text-[6rem] font-serif text-slate-950 leading-[1.05] mb-8 perspective-1000">
              <span className="block overflow-hidden">
                <AnimatedWord delay={0.3}>Custom</AnimatedWord>{" "}
                <AnimatedWord delay={0.4}>products</AnimatedWord>{" "}
                <AnimatedWord delay={0.5}>for</AnimatedWord>
              </span>
              <span className="block">
                <GlowWord delay={0.7}>serious</GlowWord>{" "}
                <AnimatedWord delay={0.85}>real</AnimatedWord>{" "}
                <AnimatedWord delay={0.95}>estate</AnimatedWord>{" "}
                <AnimatedWord delay={1.05}>businesses.</AnimatedWord>
              </span>
            </h1>

            {/* Subhead */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 1.3,
              }}
            >
              AI tools and software that actually fit how your team works—not
              another off-the-shelf product you have to bend your business around.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
                delay: 1.5,
              }}
            >
              <MagneticButton as="a" href="#contact" className="btn-primary w-full sm:w-auto">
                See If We&apos;re a Fit
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#case-studies"
                className="btn-secondary w-full sm:w-auto"
              >
                See What We&apos;ve Built
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

      </motion.div>

      {/* Scroll indicator - hidden on very small screens */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-slate-400 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
