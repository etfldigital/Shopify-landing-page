"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const tcoData = [
  {
    platform: "Shopify",
    year1: 62300,
    recurring: 32300,
    total3yr: 126900,
    color: "bg-fl-green",
    textColor: "text-fl-green",
  },
  {
    platform: "DanDomain",
    year1: 55900,
    recurring: 38100,
    total3yr: 132100,
    color: "bg-amber-400",
    textColor: "text-amber-500",
  },
  {
    platform: "WooCommerce",
    year1: 82100,
    recurring: 42100,
    total3yr: 166300,
    color: "bg-red-400",
    textColor: "text-red-500",
  },
];

const maxTotal = 166300;

export default function TCOChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-fl-dark-blue">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <AnimatedSection className="text-center mb-16">
          <span className="text-fl-green font-semibold text-sm uppercase tracking-wider">
            Total Cost of Ownership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            3-års <span className="text-fl-green">omkostningsoverblik</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Scenarie: Typisk dansk SMB-webshop med ~500 ordrer/md, ~50.000 kr
            månedlig omsætning, Klaviyo email-marketing og standard integrationer.
          </p>
        </AnimatedSection>

        {/* Chart */}
        <AnimatedSection>
          <div className="space-y-8">
            {tcoData.map((item, i) => (
              <div key={item.platform} className="group">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-lg font-bold text-white">
                    {item.platform}
                  </span>
                  <span className={`font-display text-2xl font-bold ${item.textColor}`}>
                    {item.total3yr.toLocaleString("da-DK")} kr
                  </span>
                </div>
                <div className="h-12 bg-white/5 rounded-xl overflow-hidden relative">
                  <motion.div
                    className={`h-full ${item.color} rounded-xl flex items-center justify-end pr-4`}
                    initial={{ width: 0 }}
                    animate={
                      isInView
                        ? { width: `${(item.total3yr / maxTotal) * 100}%` }
                        : { width: 0 }
                    }
                    transition={{
                      duration: 1,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  >
                    <span className="text-sm font-bold text-fl-sort/80 hidden sm:inline">
                      År 1: {item.year1.toLocaleString("da-DK")} kr | Herefter: {item.recurring.toLocaleString("da-DK")} kr/år
                    </span>
                  </motion.div>
                </div>
                {/* Mobile breakdown */}
                <div className="sm:hidden mt-2 flex gap-4 text-xs text-white/40">
                  <span>År 1: {item.year1.toLocaleString("da-DK")} kr</span>
                  <span>Herefter: {item.recurring.toLocaleString("da-DK")} kr/år</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Saving highlight */}
        <AnimatedSection delay={0.3}>
          <div className="mt-12 bg-fl-green/10 border border-fl-green/20 rounded-2xl p-8 text-center">
            <p className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Spar op til{" "}
              <span className="text-fl-green">39.400 kr</span> over 3
              år
            </p>
            <p className="text-white/50">
              ved at vælge Shopify frem for WooCommerce (inkl. vedligeholdelse)
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4} className="mt-6">
          <p className="text-xs text-white/30 text-center">
            Kilde: Egne beregninger baseret på data fra Shopify Commerce Reports (2024/2025),{" "}
            <a href="https://www.onlinemarketers.dk/dandomain-priser/" className="underline" target="_blank" rel="noopener">
              OnlineMarketers.dk
            </a>
            ,{" "}
            <a href="https://dandomain.dk/webshop/priser" className="underline" target="_blank" rel="noopener">
              DanDomain.dk
            </a>{" "}
            og{" "}
            <a href="https://www.klaviyo.com/pricing" className="underline" target="_blank" rel="noopener">
              Klaviyo.com
            </a>
            . Estimater kan variere afhængigt af individuelle behov.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
