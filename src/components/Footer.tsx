import { motion } from "framer-motion";
import { Reveal } from "./animations/Reveal";

/* ----------------------------------------------------------------
   The Colophon — a footer that closes like the last page of a book,
   pressed shut with the studio's seal.
---------------------------------------------------------------- */

/** The studio seal — stamps itself onto the page when reached. */
function Seal() {
  return (
    <motion.svg
      viewBox="0 0 64 64"
      className="w-12 h-12 shrink-0"
      aria-label="RubyKay Labs seal"
      initial={{ scale: 1.8, rotate: 8, opacity: 0 }}
      whileInView={{ scale: 1, rotate: -8, opacity: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ type: "spring", stiffness: 320, damping: 17, delay: 0.35 }}
    >
      <polygon
        points="32,3 57,17.5 57,46.5 32,61 7,46.5 7,17.5"
        fill="none"
        stroke="var(--ruby-500)"
        strokeWidth="1.5"
      />
      <polygon
        points="32,9 51.8,20.5 51.8,43.5 32,55 12.2,43.5 12.2,20.5"
        fill="none"
        stroke="var(--ruby-500)"
        strokeWidth="0.5"
        opacity="0.5"
      />
      <text
        x="32"
        y="40.5"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="22"
        fill="var(--ruby-400)"
      >
        RK
      </text>
    </motion.svg>
  );
}

const INDEX_LINKS = [
  { label: "The Work", href: "/#work" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Method", href: "/#method" },
  { label: "Principal", href: "/about" },
  { label: "Commence", href: "/#contact" },
];

const PRODUCT_LINKS = [
  { label: "PropertyBrushAI", href: "https://www.propertybrushai.com" },
  { label: "INVSBL", href: "https://www.goinvsbl.com" },
  { label: "Daily Rabbi", href: "https://www.dailyrabbi.com" },
  { label: "GoodPar", href: "https://goodpar.app" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-chapter="∎ — End of File"
      className="bg-ink-950 text-bone-100 border-t border-bone-100/10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-24 pt-20 lg:pt-28 pb-10">
        {/* The signature */}
        <Reveal amount={0.2}>
          <p className="display text-[clamp(2.8rem,9vw,8rem)] leading-none text-bone-50">
            RubyKay Labs<span className="text-ruby-500">.</span>
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-12 mt-16 lg:mt-24">
          <div>
            <h3 className="overline-label text-bone-500 mb-5">Index</h3>
            <ul className="space-y-3">
              {INDEX_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-draw text-bone-300 hover:text-bone-50 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="overline-label text-bone-500 mb-5">Products</h3>
            <ul className="space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw text-bone-300 hover:text-bone-50 transition-colors text-sm inline-flex items-center gap-2"
                  >
                    {link.label}
                    <span aria-hidden className="text-bone-500 text-xs">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="overline-label text-bone-500 mb-5">Direct</h3>
            <a
              href="mailto:jordan@rubykaylabs.com"
              className="link-draw font-serif text-xl text-bone-200"
            >
              jordan@rubykaylabs.com
            </a>
            <p className="text-bone-500 text-sm leading-relaxed mt-4 max-w-xs">
              A private software studio building custom AI and software, to
              order, for serious operators.
            </p>
          </div>
        </div>

        {/* Colophon — signed and sealed */}
        <div className="border-t border-bone-100/10 mt-16 lg:mt-20 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <p className="overline-label text-bone-500">
            © {currentYear} RubyKay Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <p className="overline-label text-bone-500">
              Designed &amp; built in-house. No template.
            </p>
            <Seal />
          </div>
        </div>
      </div>
    </footer>
  );
}
