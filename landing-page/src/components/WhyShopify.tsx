"use client";

import { Shield, Zap, TrendingUp, CreditCard, Puzzle, Server } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    icon: Server,
    title: "Ingen vedligeholdelse",
    description:
      "Shopify håndterer hosting, sikkerhedsopdateringer og server-administration. Du fokuserer på din forretning – ikke på teknik.",
  },
  {
    icon: Shield,
    title: "Indbygget sikkerhed",
    description:
      "PCI DSS Level 1 certificeret, gratis SSL og automatisk fraud-detection. Alt inkluderet uden ekstra plugins.",
  },
  {
    icon: Zap,
    title: "99.99% uptime",
    description:
      "Global CDN og enterprise-grade infrastruktur sikrer at din webshop altid er online – også under Black Friday.",
  },
  {
    icon: CreditCard,
    title: "Shopify Payments i DKK",
    description:
      "Modtag betalinger direkte i danske kroner. Dankort, MobilePay, Visa, Mastercard – alt samlet ét sted.",
  },
  {
    icon: Puzzle,
    title: "8.000+ apps",
    description:
      "Klaviyo, Shipmondo, e-conomic og tusindvis af andre integrationer. Ofte med 1-klik installation.",
  },
  {
    icon: TrendingUp,
    title: "Skalérbart",
    description:
      "Fra startup til enterprise. Shopify vokser med din forretning – ifølge Shopify Commerce Report 2025 håndterer platformen 10% af al e-handel i USA.",
  },
];

export default function WhyShopify() {
  return (
    <section id="hvorfor" className="py-24 bg-fl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-fl-green font-semibold text-sm uppercase tracking-wider">
            Fordele
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fl-sort mt-3 mb-4">
            Hvorfor vælge <span className="text-fl-green">Shopify</span>?
          </h2>
          <p className="text-fl-blue text-lg max-w-2xl mx-auto">
            Shopify er verdens førende e-handelsplatform. Her er de vigtigste
            grunde til at skifte.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-gray-100">
                <div className="w-12 h-12 bg-fl-green/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-fl-green/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-fl-green" />
                </div>
                <h3 className="font-display text-xl font-bold text-fl-sort mb-3">
                  {feature.title}
                </h3>
                <p className="text-fl-blue leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
