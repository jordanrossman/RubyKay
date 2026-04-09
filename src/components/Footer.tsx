
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
      { label: "Daily Rabbi", href: "https://www.dailyrabbi.com", external: true },
      { label: "GoodPar", href: "https://goodpar.app", external: true },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="RubyKay Labs"
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Custom AI & software products for growing companies.
            </p>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Site
            </h3>
            <ul className="space-y-3">
              {footerLinks.site.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-slate-300 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && (
                      <svg
                        className="w-3 h-3"
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
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} RubyKay Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
