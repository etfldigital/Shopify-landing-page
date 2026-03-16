"use client";

import AnimatedSection from "./AnimatedSection";

const integrations = [
  {
    name: "Klaviyo",
    category: "Email & SMS Marketing",
    shopify: "Gratis 1-klik integration",
    other: "DanDomain: 5.000 kr setup + 99 kr/md",
    description: "Verdens førende e-mail marketing platform for e-commerce. Dyb integration med Shopify kundedata.",
  },
  {
    name: "Shipmondo",
    category: "Fragt & Logistik",
    shopify: "Gratis Shopify-app",
    other: "Varierende setup-omkostninger",
    description: "Danmarks mest populære fragtløsning. Automatisk ordresync og label-print.",
  },
  {
    name: "e-conomic",
    category: "Regnskab",
    shopify: "1-klik integration via app",
    other: "Ofte custom-udvikling nødvendig",
    description: "Automatisk bogføring af ordrer, moms og kreditnotaer direkte i e-conomic.",
  },
  {
    name: "Meta & Google Ads",
    category: "Annoncering",
    shopify: "Indbygget kanal-integration",
    other: "Manuel pixel-opsætning",
    description: "Shopifys native integration med Meta CAPI og Google Merchant Center. Server-side tracking ud af boksen.",
  },
  {
    name: "Trustpilot",
    category: "Anmeldelser",
    shopify: "Gratis Shopify-app",
    other: "Kræver ofte custom-integration",
    description: "Automatisk invitation til anmeldelser efter køb. Vis stjerner i Google Shopping.",
  },
  {
    name: "Shopify POS",
    category: "Fysisk Butik",
    shopify: "Indbygget i Shopify",
    other: "Ikke tilgængeligt / tredjepartsløsning",
    description: "Ét samlet system til online og fysisk salg. Synkroniseret lager og kundedata.",
  },
];

export default function Integrations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-fl-green font-semibold text-sm uppercase tracking-wider">
            Økosystem
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fl-sort mt-3 mb-4">
            Integrationer der <span className="text-fl-green">bare virker</span>
          </h2>
          <p className="text-fl-blue text-lg max-w-2xl mx-auto">
            Shopifys app-økosystem gør det nemt at forbinde de værktøjer du
            allerede bruger – ofte med 1-klik installation.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-200 hover:border-fl-green/30 hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-fl-sort">
                      {item.name}
                    </h3>
                    <span className="text-xs text-fl-blue/60 font-medium">
                      {item.category}
                    </span>
                  </div>
                  <span className="bg-fl-green/10 text-fl-green text-xs font-bold px-2.5 py-1 rounded-full">
                    Shopify
                  </span>
                </div>
                <p className="text-sm text-fl-blue mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fl-green" />
                    <span className="text-xs text-fl-sort font-medium">
                      Shopify: {item.shopify}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="text-xs text-fl-blue/60">
                      Andre: {item.other}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
