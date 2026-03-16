"use client";

import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Vi skiftede fra DanDomain til Shopify og oplevede en 37% stigning i konverteringsraten inden for de første 3 måneder. Alene besparelsen på integrationer har betalt migrationen hjem.",
    name: "Marie Sørensen",
    title: "Ejer, Nordic Living",
    metric: "+37%",
    metricLabel: "Konverteringsrate",
  },
  {
    quote:
      "Vores WooCommerce-side krævede konstant vedligeholdelse. Med Shopify bruger vi nu tiden på at sælge i stedet for at fikse tekniske problemer. FL Digital håndterede hele migrationen smertefrit.",
    name: "Thomas Andersen",
    title: "CEO, FitGear Danmark",
    metric: "5.000 kr",
    metricLabel: "Sparet pr. måned",
  },
  {
    quote:
      "Klaviyo-integrationen med Shopify tog bogstaveligt talt 2 minutter. På DanDomain betalte vi 5.000 kr for det samme. Og Shopifys hastighed har givet os bedre Google-placeringer.",
    name: "Sofie Nielsen",
    title: "Marketing Manager, Dansk Design Co.",
    metric: "48%",
    metricLabel: "Hurtigere loadtid",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-fl-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-fl-green font-semibold text-sm uppercase tracking-wider">
            Succeshistorier
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fl-sort mt-3 mb-4">
            Det siger vores <span className="text-fl-green">kunder</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between border border-gray-100 hover:shadow-lg transition-shadow">
                {/* Metric */}
                <div>
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <p className="font-display text-3xl font-bold text-fl-green">
                      {t.metric}
                    </p>
                    <p className="text-sm text-fl-blue/60">{t.metricLabel}</p>
                  </div>

                  {/* Quote */}
                  <p className="text-fl-blue leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-fl-green/20 flex items-center justify-center">
                    <span className="font-display font-bold text-fl-green text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-fl-sort text-sm">
                      {t.name}
                    </p>
                    <p className="text-xs text-fl-blue/60">{t.title}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8">
          <p className="text-xs text-fl-blue/40">
            * Navne og virksomheder er eksempler. Kontakt os for reelle
            case-studies.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
