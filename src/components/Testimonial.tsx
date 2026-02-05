"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Testimonial() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <section
      ref={sectionRef}
      className="py-32 lg:py-48 bg-slate-50 overflow-hidden"
    >
      <motion.div
        className="max-w-4xl mx-auto px-6 lg:px-8 text-center"
        style={{ opacity, scale }}
      >
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Quote mark */}
          <motion.div
            className="text-ruby-200 text-[60px] sm:text-[80px] lg:text-[120px] leading-none font-serif mb-[-20px] sm:mb-[-30px] lg:mb-[-40px]"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            &ldquo;
          </motion.div>

          <motion.p
            className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 leading-tight mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Finally, a dev partner who{" "}
            <span className="text-gradient">
              actually understands how our business works.
            </span>
            &rdquo;
          </motion.p>

          <motion.footer
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              className="w-16 h-px bg-slate-300 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <p className="text-lg font-medium text-slate-900">
              Operations Director
            </p>
            <p className="text-slate-500 mt-1">50+ Person Company</p>
          </motion.footer>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
