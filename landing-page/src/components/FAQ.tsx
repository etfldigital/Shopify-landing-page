"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Hvor lang tid tager en migration til Shopify?",
    answer:
      "En typisk migration tager 2–6 uger afhængigt af kompleksiteten. Simple webshops med få produkter kan migreres på under 2 uger. Større shops med mange produkter, kundedata og integrationer tager typisk 4–6 uger. Under hele processen kører din nuværende shop videre – du mister ikke salg.",
  },
  {
    question: "Mister jeg mine SEO-rankings ved at skifte platform?",
    answer:
      "Nej, ikke hvis migrationen udføres korrekt. Vi opsætter 301-redirects fra alle gamle URLs til de nye, bevarer meta-titler og beskrivelser, og sikrer at Google genindekserer din nye shop hurtigt. Mange oplever faktisk bedre rankings efter migration pga. Shopifys hurtigere loadtider og bedre Core Web Vitals.",
  },
  {
    question: "Hvad koster det at migrere til Shopify?",
    answer:
      "En migration koster typisk 15.000–80.000 kr afhængigt af omfanget. Dette inkluderer produktmigration, design-tilpasning, opsætning af integrationer og test. Brug vores beregner ovenfor for at se hvor hurtigt investeringen er tjent hjem via lavere driftsomkostninger.",
  },
  {
    question: "Kan Shopify håndtere dansk moms korrekt?",
    answer:
      "Ja. Shopify understøtter fuld momshåndtering for Danmark inkl. 25% moms. Du kan opsætte forskellige momssatser for EU og ikke-EU lande, og Shopifys 'Managed Markets' funktion kan automatisk håndtere moms, told og afgifter for internationale ordrer.",
  },
  {
    question: "Hvad med mine eksisterende integrationer?",
    answer:
      "De fleste populære danske integrationer har Shopify-apps: Klaviyo (gratis), Shipmondo, e-conomic, Dinero, Trustpilot, Meta Ads og Google Shopping. Vi mapper dine nuværende integrationer og finder de bedste Shopify-alternativer som del af migrationsplanen.",
  },
  {
    question: "Understøtter Shopify Dankort og MobilePay?",
    answer:
      "Ja. Shopify Payments understøtter Visa/Dankort direkte. MobilePay Online kan tilføjes via Shopify Payments eller tredjepartsgateways som QuickPay. Begge dele er standard-opsætning som vi inkluderer i migrationen.",
  },
  {
    question: "Kan jeg prøve Shopify gratis først?",
    answer:
      "Ja! Shopify tilbyder en 3-dages gratis prøveperiode, og herefter kan du bruge platformen for blot €1/måned i de første 3 måneder. Det giver dig mulighed for at teste alt inden du forpligter dig til et fuldt abonnement.",
  },
  {
    question: "Hvad siger Shopify Commerce Report om platformens vækst?",
    answer:
      "Ifølge Shopify Commerce Reports (2024 & 2025) håndterer Shopify nu over 10% af al e-handel i USA. Platformen har over 700.000 aktive butikker globalt, og merchants oplever gennemsnitligt 36% vækst i det første år. Rapporten viser også at Shopify-butikker har 1,4x højere konverteringsrate sammenlignet med branchegennemsnittet.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-fl-light-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-fl-green font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fl-sort mt-3 mb-4">
            Ofte stillede <span className="text-fl-green">spørgsmål</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-display font-semibold text-fl-sort pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
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
                      <div className="px-5 pb-5">
                        <p className="text-fl-blue leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
