import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { EASE } from "./animations/Reveal";

const NAV_LINKS: { label: string; index: string; href: string; isRoute?: boolean }[] = [
  { label: "The Work", index: "01", href: "#work" },
  { label: "Capabilities", index: "02", href: "#capabilities" },
  { label: "Method", index: "03", href: "#method" },
  { label: "Principal", index: "04", href: "/about", isRoute: true },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Resolve anchors: from other pages, route home first
  const resolveHref = (href: string) =>
    href.startsWith("#") ? (isHome ? href : `/${href}`) : href;

  // Lock scroll behind the mobile overlay
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-50 bg-ink-950/85 backdrop-blur-md border-b border-bone-100/10"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        {/* Reading progress — a single ruby thread */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-ruby-500 origin-left"
          style={{ scaleX: progress }}
        />

        <nav className="max-w-[1440px] mx-auto px-6 lg:px-10 h-16 lg:h-[72px] flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img
              src="/logo.png"
              alt="RubyKay Labs"
              className="h-6 lg:h-7 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="overline-label text-bone-400 hover:text-bone-50 transition-colors duration-300 link-draw"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={resolveHref(link.href)}
                  className="overline-label text-bone-400 hover:text-bone-50 transition-colors duration-300 link-draw"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={resolveHref("#contact")}
              className="overline-label text-bone-100 border border-bone-100/30 px-5 py-3 hover:bg-bone-100 hover:text-ink-950 hover:border-bone-100 transition-colors duration-300"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[7px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <motion.span
              className="block w-6 h-px bg-bone-100"
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            />
            <motion.span
              className="block w-6 h-px bg-bone-100"
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay — the menu as a title page */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-ink-950 md:hidden flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex-1 flex flex-col justify-center px-8 pt-16">
              {NAV_LINKS.map((link, i) => (
                <div key={link.label} className="overflow-hidden border-b border-bone-100/10">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: EASE }}
                  >
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-baseline gap-4 py-5"
                      >
                        <span className="overline-label text-ruby-400">{link.index}</span>
                        <span className="display text-4xl text-bone-100">{link.label}</span>
                      </Link>
                    ) : (
                      <a
                        href={resolveHref(link.href)}
                        onClick={() => setIsOpen(false)}
                        className="flex items-baseline gap-4 py-5"
                      >
                        <span className="overline-label text-ruby-400">{link.index}</span>
                        <span className="display text-4xl text-bone-100">{link.label}</span>
                      </a>
                    )}
                  </motion.div>
                </div>
              ))}

              <motion.a
                href={resolveHref("#contact")}
                onClick={() => setIsOpen(false)}
                className="btn-bone mt-10 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
              >
                Start a Project
              </motion.a>
            </div>

            <motion.div
              className="px-8 pb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              <p className="overline-label text-bone-500">Direct</p>
              <a
                href="mailto:jordan@rubykaylabs.com"
                className="font-serif text-xl text-bone-200 mt-2 inline-block"
              >
                jordan@rubykaylabs.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
