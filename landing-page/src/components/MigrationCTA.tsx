"use client";

import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Gratis analyse",
    description:
      "Vi gennemgår din nuværende webshop og identificerer besparelsespotentiale og vækstmuligheder.",
  },
  {
    number: "02",
    title: "Migration-plan",
    description:
      "Du får en detaljeret plan med tidsramme, omkostninger og en komplet migration-strategi.",
  },
  {
    number: "03",
    title: "Go live",
    description:
      "Vi migrerer produkter, kunder og ordrer. Du mister ikke én ordre under overgangen.",
  },
];

export default function MigrationCTA() {
  return (
    <section id="kontakt" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-fl-green font-semibold text-sm uppercase tracking-wider">
            Kom i gang
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fl-sort mt-3 mb-4">
            Klar til at skifte til{" "}
            <span className="text-fl-green">Shopify</span>?
          </h2>
          <p className="text-fl-blue text-lg max-w-2xl mx-auto">
            Vi håndterer hele migrationen – du fokuserer på din forretning. Ifølge
            Shopify Commerce Report 2025 oplever virksomheder gennemsnitligt
            36% vækst i det første år efter migration.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="text-center relative">
                <div className="w-16 h-16 bg-fl-green/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-2xl font-bold text-fl-green">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-fl-sort mb-3">
                  {step.title}
                </h3>
                <p className="text-fl-blue leading-relaxed">
                  {step.description}
                </p>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-fl-green/30" />
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Box */}
        <AnimatedSection delay={0.3}>
          <div className="bg-fl-sort rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fl-green/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-fl-blue/20 rounded-full blur-3xl" />

            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Book en gratis analyse i dag
              </h3>
              <p className="text-white/60 mb-8 max-w-lg mx-auto">
                Vi gennemgår din webshop og giver dig et konkret overblik over
                besparelser og vækstmuligheder ved at skifte til Shopify.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://fldigital.dk"
                  target="_blank"
                  rel="noopener"
                  className="bg-fl-green hover:bg-fl-green-light text-fl-sort font-bold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-xl hover:shadow-fl-green/25 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
                >
                  Book gratis analyse
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#beregner"
                  className="border border-white/20 hover:border-white/40 text-white font-medium px-8 py-4 rounded-lg text-lg transition-all hover:bg-white/5 inline-flex items-center justify-center"
                >
                  Prøv beregneren først
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
