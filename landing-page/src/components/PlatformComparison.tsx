"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

type Rating = "good" | "bad" | "neutral";

interface ComparisonRow {
  category: string;
  shopify: string;
  woocommerce: string;
  dandomain: string;
  shopifyRating: Rating;
  woocommerceRating: Rating;
  dandomainRating: Rating;
}

const comparisonData: ComparisonRow[] = [
  {
    category: "Månedlig pris",
    shopify: "Fra 142 DKK/md (Basic, årlig)",
    woocommerce: "55–350 DKK/md (hosting) + vedligeholdelse",
    dandomain: "Fra 249 DKK/md (reel: 1.800–3.500 DKK/md)",
    shopifyRating: "good",
    woocommerceRating: "neutral",
    dandomainRating: "bad",
  },
  {
    category: "Transaktionsgebyrer",
    shopify: "1,6–1,9% + €0,25 (Shopify Payments)",
    woocommerce: "~1,5% + 1,80 kr (Stripe/WooPay)",
    dandomain: "OnPay: 149 kr/md + 0,25 kr/trans + acquirer",
    shopifyRating: "good",
    woocommerceRating: "good",
    dandomainRating: "bad",
  },
  {
    category: "Klaviyo integration",
    shopify: "Gratis, 1-klik installation",
    woocommerce: "Gratis plugin, kræver teknisk setup",
    dandomain: "~5.000 DKK setup + 99 DKK/md",
    shopifyRating: "good",
    woocommerceRating: "neutral",
    dandomainRating: "bad",
  },
  {
    category: "Sikkerhed (SSL/PCI)",
    shopify: "Inkluderet – PCI DSS Level 1",
    woocommerce: "Selv-administreret, kræver plugins",
    dandomain: "Inkluderet, men begrænset kontrol",
    shopifyRating: "good",
    woocommerceRating: "bad",
    dandomainRating: "neutral",
  },
  {
    category: "Performance (PageSpeed)",
    shopify: "Global CDN inkluderet, 90+ score",
    woocommerce: "Afhænger af hosting og optimering",
    dandomain: "Ofte 40–65 på mobil (Core Web Vitals)",
    shopifyRating: "good",
    woocommerceRating: "neutral",
    dandomainRating: "bad",
  },
  {
    category: "Skalerbarhed",
    shopify: "Ubegrænset – fra startup til enterprise",
    woocommerce: "Kræver server-opgradering ved vækst",
    dandomain: "Ordrebegrænsninger per plan (100–2.500/md)",
    shopifyRating: "good",
    woocommerceRating: "neutral",
    dandomainRating: "bad",
  },
  {
    category: "Vedligeholdelse",
    shopify: "Ingen – alt er håndteret af Shopify",
    woocommerce: "Løbende: WP-core, PHP, plugins, sikkerhed",
    dandomain: "Minimal, men låst økosystem",
    shopifyRating: "good",
    woocommerceRating: "bad",
    dandomainRating: "neutral",
  },
  {
    category: "App-økosystem",
    shopify: "8.000+ apps i Shopify App Store",
    woocommerce: "59.000+ plugins (varierende kvalitet)",
    dandomain: "Begrænset App Store, dyre tilkøb",
    shopifyRating: "good",
    woocommerceRating: "good",
    dandomainRating: "bad",
  },
];

function RatingIcon({ rating }: { rating: Rating }) {
  if (rating === "good")
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600">
        <Check className="w-4 h-4" />
      </span>
    );
  if (rating === "bad")
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-500">
        <X className="w-4 h-4" />
      </span>
    );
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600">
      <Minus className="w-4 h-4" />
    </span>
  );
}

type Platform = "shopify" | "woocommerce" | "dandomain";

export default function PlatformComparison() {
  const [activeTab, setActiveTab] = useState<"table" | "cards">("table");

  return (
    <section id="sammenligning" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-fl-green font-semibold text-sm uppercase tracking-wider">
            Sammenligning
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-fl-sort mt-3 mb-4">
            Shopify vs. WooCommerce vs. DanDomain
          </h2>
          <p className="text-fl-blue text-lg max-w-2xl mx-auto">
            En ærlig sammenligning baseret på faktiske priser og funktioner i
            2026. Data fra Shopify Commerce Report og offentlige priskilder.
          </p>
        </AnimatedSection>

        {/* Desktop table */}
        <AnimatedSection>
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-fl-sort text-white">
                  <th className="text-left py-5 px-6 font-display font-semibold">
                    Kategori
                  </th>
                  <th className="text-left py-5 px-6 font-display font-semibold">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-fl-green" />
                      Shopify
                    </span>
                  </th>
                  <th className="text-left py-5 px-6 font-display font-semibold">
                    WooCommerce
                  </th>
                  <th className="text-left py-5 px-6 font-display font-semibold">
                    DanDomain
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr
                    key={row.category}
                    className={`border-t border-gray-100 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    } hover:bg-fl-green/5 transition-colors`}
                  >
                    <td className="py-4 px-6 font-semibold text-fl-sort">
                      {row.category}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-2">
                        <RatingIcon rating={row.shopifyRating} />
                        <span className="text-sm text-fl-blue">
                          {row.shopify}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-2">
                        <RatingIcon rating={row.woocommerceRating} />
                        <span className="text-sm text-fl-blue">
                          {row.woocommerce}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-start gap-2">
                        <RatingIcon rating={row.dandomainRating} />
                        <span className="text-sm text-fl-blue">
                          {row.dandomain}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Mobile cards */}
        <div className="lg:hidden space-y-4">
          {comparisonData.map((row, i) => (
            <AnimatedSection key={row.category} delay={i * 0.05}>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-display font-bold text-fl-sort mb-4">
                  {row.category}
                </h3>
                <div className="space-y-3">
                  {(["shopify", "woocommerce", "dandomain"] as Platform[]).map(
                    (platform) => (
                      <div key={platform} className="flex items-start gap-2">
                        <RatingIcon
                          rating={row[`${platform}Rating` as keyof ComparisonRow] as Rating}
                        />
                        <div>
                          <span className="text-xs font-semibold uppercase text-fl-sort/50">
                            {platform === "shopify"
                              ? "Shopify"
                              : platform === "woocommerce"
                              ? "WooCommerce"
                              : "DanDomain"}
                          </span>
                          <p className="text-sm text-fl-blue">
                            {row[platform as keyof ComparisonRow] as string}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-8 text-center">
          <p className="text-sm text-fl-blue/60">
            Priser er estimater baseret på offentligt tilgængelige data pr. marts
            2026. Faktiske priser kan variere. Se kilder:{" "}
            <a href="https://www.shopify.com/dk-en/pricing" className="underline hover:text-fl-green" target="_blank" rel="noopener">
              Shopify DK
            </a>
            ,{" "}
            <a href="https://dandomain.dk/webshop/priser" className="underline hover:text-fl-green" target="_blank" rel="noopener">
              DanDomain
            </a>
            ,{" "}
            <a href="https://www.onlinemarketers.dk/dandomain-priser/" className="underline hover:text-fl-green" target="_blank" rel="noopener">
              OnlineMarketers.dk
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
