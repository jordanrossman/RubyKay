import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE } from "./animations/Reveal";

/* ----------------------------------------------------------------
   The file opens — a brief title sequence. The studio name
   decodes itself like a cipher, a ruby rule is drawn, and the
   ink curtain lifts onto the dossier.
---------------------------------------------------------------- */

const GLYPHS = "RKLABS◆※0123456789—·";

function Decode({
  text,
  duration = 700,
  delay = 150,
  className = "",
}: {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState(() => text.replace(/\S/g, " "));
  const frame = useRef<number | null>(null);

  useEffect(() => {
    let start: number | null = null;

    const tick = (now: number) => {
      if (start === null) start = now + delay;
      const t = Math.max(0, (now - start) / duration);
      const settled = Math.floor(t * text.length);

      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < settled) return ch;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join("")
      );

      if (settled < text.length) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [text, duration, delay]);

  return <span className={className}>{display}</span>;
}

export default function Intro({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"playing" | "exiting" | "gone">("playing");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("gone");
      onDone();
      return;
    }

    const exit = setTimeout(() => {
      setPhase("exiting");
      onDone(); // mount the page beneath the lifting curtain
    }, 1500);
    const gone = setTimeout(() => setPhase("gone"), 2500);

    return () => {
      clearTimeout(exit);
      clearTimeout(gone);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (phase === "gone") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[70] bg-ink-950 border-b-2 border-ruby-600 flex items-center justify-center"
      initial={{ y: 0 }}
      animate={phase === "exiting" ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <div className="flex flex-col items-center gap-5 px-6">
        <Decode
          text="RUBYKAY LABS"
          className="font-mono text-bone-100 text-sm sm:text-base font-medium tracking-[0.35em] whitespace-pre"
        />
        <motion.span
          className="h-px w-44 bg-ruby-500 origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
        />
        <motion.span
          className="overline-label text-bone-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Private Dossier — N° 001
        </motion.span>
      </div>
    </motion.div>
  );
}
