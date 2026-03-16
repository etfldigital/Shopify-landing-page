"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, AlertTriangle, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface CostItem {
  platform: string;
  items: { label: string; cost: string }[];
  accent: string;
  bgColor: string;
}

const hiddenCosts: CostItem[] = [
  {
    platform: "WooCommerce",
    accent: "text-amber-500",
    bgColor: "bg-amber-50",
    items: [
      { label: "Managed hosting (opgradering ved vækst)", cost: "150–350 kr/md" },
      { label: "Sikkerhedsplugins (Wordfence, Sucuri)", cost: "50–150 kr/md" },
      { label: "WordPress core + PHP-opdateringer", cost: "Udvikler-tid" },
      { label: "Plugin-kompatibilitetsproblemer", cost: "Uforudsigelig" },
      { label: "Backup-løsning", cost: "50–100 kr/md" },
      { label: "Udvikler-vedligeholdelse (retainer)", cost: "1.500–5.000 kr/md" },
      { label: "SSL-certifikat (hvis ikke inkl.)", cost: "0–150 kr/år" },
    ],
  },
  {
    platform: "DanDomain",
    accent: "text-red-500",
    bgColor: "bg-red-50",
    items: [
      { label: "OnPay betalingsmodul (obligatorisk)", cost: "149 kr/md + gebyr" },
      { label: "MobilePay tilkøb", cost: "49 kr/md + 1,02 kr/trans" },
      { label: "Ordrebegrænsninger (overskridelse)", cost: "Tvunget opgradering" },
      { label: "Klaviyo / email-marketing integration", cost: "5.000 kr setup + 99 kr/md" },
      { label: "Bewise Plus (salgsoptimering)", cost: "995 kr/md" },
      { label: "Ekstra sproglag", cost: "159 kr/md" },
      { label: "Begrænset template-tilpasning", cost: "Udvikler: 800–1.200 kr/time" },
      { label: "Dårlig PageSpeed → tabt omsætning", cost: "Uberegneligt" },
    ],
  },
];

export default function HiddenCosts() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-fl-light-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-fl-green font-semibold text-sm uppercase tracking-wider">
            Det de ikke fortæller dig
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fl-sort mt-3 mb-4">
            Skjulte <span className="text-fl-green">omkostninger</span>
          </h2>
          <p className="text-fl-blue text-lg max-w-2xl mx-auto">
            Den månedlige pris er kun toppen af isbjerget. Her er hvad der
            gemmer sig under overfladen.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {hiddenCosts.map((cost, i) => (
            <AnimatedSection key={cost.platform} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === i ? null : i)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle className={`w-5 h-5 ${cost.accent}`} />
                    <span className="font-display text-lg font-bold text-fl-sort">
                      Skjulte omkostninger ved {cost.platform}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-fl-blue" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="space-y-3">
                          {cost.items.map((item) => (
                            <div
                              key={item.label}
                              className={`flex items-center justify-between ${cost.bgColor} rounded-lg px-4 py-3`}
                            >
                              <span className="text-sm text-fl-sort">
                                {item.label}
                              </span>
                              <span
                                className={`text-sm font-semibold ${cost.accent} whitespace-nowrap ml-4`}
                              >
                                {item.cost}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}

          {/* Shopify - the green box */}
          <AnimatedSection delay={0.2}>
            <div className="bg-fl-green/10 rounded-2xl border-2 border-fl-green/30 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-fl-green rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-fl-sort" />
                </div>
                <span className="font-display text-lg font-bold text-fl-sort">
                  Shopify: Alt inkluderet
                </span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Hosting & CDN",
                  "SSL-certifikat",
                  "Sikkerhedsopdateringer",
                  "PCI DSS Level 1",
                  "Automatisk backup",
                  "24/7 support",
                  "Shopify Payments",
                  "Ingen ordrebegrænsning",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-fl-green flex-shrink-0" />
                    <span className="text-sm text-fl-sort">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
