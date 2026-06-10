import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Masked line reveal — content rises out of an overflow-hidden clip.
 * The editorial cousin of a fade: nothing moves through space,
 * it simply arrives.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 1,
  once = true,
  amount = 0.4,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  as?: "div" | "span";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  const Outer = as === "span" ? "span" : "div";
  const Inner = as === "span" ? motion.span : motion.div;

  return (
    <Outer
      ref={ref}
      className={`block overflow-hidden ${className}`}
      style={{
        display: as === "span" ? "inline-block" : undefined,
        // Leave room for descenders inside the clip, then pull
        // the layout back up so spacing is unchanged.
        paddingBottom: "0.22em",
        marginBottom: "-0.22em",
      }}
    >
      <Inner
        className="block will-change-transform"
        initial={{ y: "135%" }}
        animate={isInView ? { y: "0%" } : { y: "135%" }}
        transition={{ duration, delay, ease: EASE }}
      >
        {children}
      </Inner>
    </Outer>
  );
}

/** A hairline that draws itself across when it enters the viewport. */
export function Rule({
  className = "",
  delay = 0,
  duration = 1.2,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      className={`h-px origin-left ${className}`}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration, delay, ease: EASE }}
    />
  );
}

/** Soft fade-rise for body copy and plates. */
export function Rise({
  children,
  className = "",
  delay = 0,
  duration = 0.9,
  distance = 28,
  amount = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  amount?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: distance }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
