"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-fl-sort">
      {/* Animated background lines */}
      <div className="absolute inset-0">
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M-100,400 C200,200 400,600 700,300 S1200,500 1540,250"
            stroke="#00d67e"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M-100,500 C300,300 500,700 800,400 S1300,600 1540,350"
            stroke="#00d67e"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.path
            d="M-100,600 C250,350 550,750 850,450 S1350,650 1540,400"
            stroke="#394e61"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-fl-sort via-fl-dark-blue/80 to-fl-sort" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-fl-green/10 text-fl-green text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-fl-green/20">
            Shopify Partner i Danmark
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Din næste webshop
          <br />
          <span className="text-fl-green">fortjener Shopify</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-sans"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Se hvorfor 700.000+ virksomheder verden over har valgt Shopify. Sammenlign
          med WooCommerce og DanDomain – og beregn hvad du kan spare.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a
            href="#beregner"
            className="bg-fl-green hover:bg-fl-green-light text-fl-sort font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl hover:shadow-fl-green/25 hover:-translate-y-0.5"
          >
            Beregn dit potentiale
          </a>
          <a
            href="#sammenligning"
            className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-lg text-lg transition-all hover:bg-white/5"
          >
            Se sammenligning
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span>Kilde: Shopify Commerce Reports 2024 & 2025</span>
          <span className="hidden sm:inline">•</span>
          <span>99.99% uptime</span>
          <span className="hidden sm:inline">•</span>
          <span>Shopify Payments i DKK</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-fl-green rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
