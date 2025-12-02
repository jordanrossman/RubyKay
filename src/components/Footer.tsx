"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./animations/FadeIn";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    site: [
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    products: [
      {
        label: "PropertyBrushAI",
        href: "https://www.propertybrushai.com",
        external: true,
      },
      { label: "INVSBL", href: "https://www.goinvsbl.com", external: true },
    ],
    connect: [
      { label: "Email", href: "mailto:hello@rubykaylabs.com" },
      { label: "LinkedIn", href: "https://linkedin.com", external: true },
      { label: "Twitter", href: "https://twitter.com", external: true },
    ],
  };

  const linkHoverVariants = {
    initial: { x: 0 },
    hover: { x: 4, transition: { duration: 0.2 } },
  };

  return (
    <footer className="bg-slate-900 text-white py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <FadeIn className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src="/logo.png"
                  alt="RubyKay Labs"
                  width={160}
                  height={36}
                  className="h-8 w-auto brightness-0 invert"
                />
              </motion.div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Custom AI & software products for real estate teams and
              brokerages.
            </p>
          </FadeIn>

          {/* Site Links */}
          <FadeIn delay={0.1}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Site
            </h3>
            <ul className="space-y-3">
              {footerLinks.site.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <motion.div
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm inline-block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </FadeIn>

          {/* Products */}
          <FadeIn delay={0.2}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <motion.div
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-slate-300 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && (
                        <motion.svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          initial={{ opacity: 0.5 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </motion.svg>
                      )}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </FadeIn>

          {/* Connect */}
          <FadeIn delay={0.3}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.div
                    variants={linkHoverVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-slate-300 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && (
                        <motion.svg
                          className="w-3 h-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          initial={{ opacity: 0.5 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </motion.svg>
                      )}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Animated Divider */}
        <motion.div
          className="border-t border-slate-800 pt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} RubyKay Labs. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/privacy"
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/terms"
                  className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
                >
                  Terms
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
