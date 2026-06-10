import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { EASE } from "./animations/Reveal";

/* ----------------------------------------------------------------
   Chapter indicator — a small fixed marker that tracks where the
   reader is in the dossier, rolling over as chapters change.
   Sections opt in via a data-chapter attribute.
---------------------------------------------------------------- */

export default function ChapterIndicator() {
  const [chapter, setChapter] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setChapter(null);

    // Let the route render before scanning for chapters
    const scan = setTimeout(() => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-chapter]")
      );
      if (sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setChapter(
                (entry.target as HTMLElement).dataset.chapter ?? null
              );
            }
          }
        },
        // A thin band across the middle of the viewport decides
        { rootMargin: "-45% 0px -45% 0px" }
      );

      sections.forEach((section) => observer.observe(section));
      cleanup = () => observer.disconnect();
    }, 150);

    let cleanup = () => {};
    return () => {
      clearTimeout(scan);
      cleanup();
    };
  }, [location.pathname]);

  return (
    <div
      aria-hidden
      className="fixed left-8 bottom-7 z-40 hidden lg:flex items-center gap-3 pointer-events-none mix-blend-difference"
    >
      <AnimatePresence>
        {chapter && (
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="w-1.5 h-1.5 rotate-45 bg-ruby-400 shrink-0" />
            <span className="relative block h-4 overflow-hidden min-w-[12rem]">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={chapter}
                  className="block overline-label text-bone-200 leading-4 whitespace-nowrap"
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-120%" }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {chapter}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
