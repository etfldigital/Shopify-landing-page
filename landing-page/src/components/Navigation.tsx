"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "#hvorfor", label: "Hvorfor Shopify" },
  { href: "#sammenligning", label: "Sammenligning" },
  { href: "#beregner", label: "Beregner" },
  { href: "#omkostninger", label: "Omkostninger" },
  { href: "#faq", label: "FAQ" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(useScroll().scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2">
              <span
                className={`font-display text-xl font-bold transition-colors ${
                  isScrolled ? "text-fl-sort" : "text-white"
                }`}
              >
                FL Digital
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-fl-green ${
                    isScrolled ? "text-fl-sort" : "text-white/90"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#beregner"
                className="bg-fl-green hover:bg-fl-green-light text-fl-sort font-semibold px-5 py-2.5 rounded-lg text-sm transition-all hover:shadow-lg hover:shadow-fl-green/25"
              >
                Beregn potentiale
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <span
                  className={`block w-6 h-0.5 transition-all ${
                    isScrolled ? "bg-fl-sort" : "bg-white"
                  } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all ${
                    isScrolled ? "bg-fl-sort" : "bg-white"
                  } ${mobileOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all ${
                    isScrolled ? "bg-fl-sort" : "bg-white"
                  } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-fl-sort font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#beregner"
                onClick={() => setMobileOpen(false)}
                className="block bg-fl-green text-fl-sort font-semibold px-5 py-3 rounded-lg text-center"
              >
                Beregn potentiale
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-fl-green z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
}
