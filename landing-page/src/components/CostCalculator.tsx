"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

type Platform = "woocommerce" | "dandomain" | "andet";

interface CostResult {
  current: number;
  shopify: number;
  saving: number;
  roiMonths: number;
}

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) return;
    const duration = 800;
    const start = display;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + (value - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value, isInView]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("da-DK")}
      {suffix}
    </span>
  );
}

function calculateCosts(
  platform: Platform,
  products: number,
  revenue: number,
  integrations: number
): CostResult {
  let currentMonthly = 0;
  const migrationCost = 30000;

  if (platform === "dandomain") {
    // DanDomain base (Growth plan if >100 orders, Advance if >250)
    const estimatedOrders = Math.max(50, revenue / 500);
    let basePlan = 249;
    if (estimatedOrders > 250) basePlan = 1199;
    else if (estimatedOrders > 100) basePlan = 699;

    // OnPay
    const onpay = 149 + estimatedOrders * 0.25;
    // MobilePay
    const mobilepay = 49 + estimatedOrders * 1.02;
    // Transaction fees (acquirer ~1.2%)
    const acquirer = revenue * 0.012;
    // Integrations (Klaviyo etc – expensive on DD)
    const integrationCost = integrations * 350;
    // App store tilkøb
    const apps = Math.min(integrations * 200, 2000);

    currentMonthly = basePlan + onpay + mobilepay + acquirer + integrationCost + apps;
  } else if (platform === "woocommerce") {
    // Hosting
    const hosting = products > 200 ? 300 : 150;
    // Plugins
    const plugins = 100 + integrations * 50;
    // Transaction fees (Stripe 1.5% + 1.80kr)
    const estimatedOrders = Math.max(50, revenue / 500);
    const transactions = revenue * 0.015 + estimatedOrders * 1.8;
    // Developer maintenance
    const maintenance = 2500;
    // Security plugins
    const security = 60;

    currentMonthly = hosting + plugins + transactions + maintenance + security;
  } else {
    // "Andet" – estimate conservatively
    currentMonthly = 500 + revenue * 0.02 + integrations * 200;
  }

  // Shopify costs
  let shopifyPlan = 142; // Basic annual
  if (revenue > 200000) shopifyPlan = 2157; // Advanced
  else if (revenue > 50000) shopifyPlan = 418; // Grow

  const shopifyEstOrders = Math.max(50, revenue / 500);
  const shopifyTransactions = revenue * 0.018 + shopifyEstOrders * 1.87; // ~0.25 EUR
  const shopifyApps = Math.min(integrations * 100, 1500);
  const shopifyMonthly = shopifyPlan + shopifyTransactions + shopifyApps;

  const saving = currentMonthly - shopifyMonthly;
  const roiMonths = saving > 0 ? Math.ceil(migrationCost / saving) : 0;

  return {
    current: Math.round(currentMonthly),
    shopify: Math.round(shopifyMonthly),
    saving: Math.round(saving * 12),
    roiMonths,
  };
}

export default function CostCalculator() {
  const [platform, setPlatform] = useState<Platform>("dandomain");
  const [products, setProducts] = useState(100);
  const [revenue, setRevenue] = useState(100000);
  const [integrations, setIntegrations] = useState(3);

  const result = calculateCosts(platform, products, revenue, integrations);
  const maxBar = Math.max(result.current, result.shopify);

  return (
    <section id="beregner" className="py-24 bg-fl-sort relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fl-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fl-blue/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-fl-green font-semibold text-sm uppercase tracking-wider">
            Interaktiv beregner
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Beregn dit <span className="text-fl-green">potentiale</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Indtast dine data og se hvad du kan spare ved at skifte til Shopify.
            Baseret på reelle prisdata fra 2026.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input side */}
          <AnimatedSection>
            <div className="space-y-8">
              {/* Platform */}
              <div>
                <label className="block text-white/80 text-sm font-medium mb-3">
                  Nuværende platform
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(
                    [
                      ["dandomain", "DanDomain"],
                      ["woocommerce", "WooCommerce"],
                      ["andet", "Andet"],
                    ] as [Platform, string][]
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() => setPlatform(value)}
                      className={`py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                        platform === value
                          ? "bg-fl-green text-fl-sort"
                          : "bg-white/10 text-white/70 hover:bg-white/15"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products slider */}
              <div>
                <label className="flex justify-between text-white/80 text-sm font-medium mb-3">
                  <span>Antal produkter</span>
                  <span className="text-fl-green font-bold">{products}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={products}
                  onChange={(e) => setProducts(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-fl-green"
                />
                <div className="flex justify-between text-xs text-white/40 mt-1">
                  <span>10</span>
                  <span>1.000+</span>
                </div>
              </div>

              {/* Revenue slider */}
              <div>
                <label className="flex justify-between text-white/80 text-sm font-medium mb-3">
                  <span>Månedlig omsætning (DKK)</span>
                  <span className="text-fl-green font-bold">
                    {revenue.toLocaleString("da-DK")} kr
                  </span>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-fl-green"
                />
                <div className="flex justify-between text-xs text-white/40 mt-1">
                  <span>10.000 kr</span>
                  <span>500.000+ kr</span>
                </div>
              </div>

              {/* Integrations slider */}
              <div>
                <label className="flex justify-between text-white/80 text-sm font-medium mb-3">
                  <span>Antal integrationer</span>
                  <span className="text-fl-green font-bold">{integrations}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={integrations}
                  onChange={(e) => setIntegrations(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-fl-green"
                />
                <div className="flex justify-between text-xs text-white/40 mt-1">
                  <span>0</span>
                  <span>10+</span>
                </div>
                <p className="text-white/30 text-xs mt-2">
                  F.eks. Klaviyo, regnskab, lagerstyring, fragt, anmeldelser
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Results side */}
          <AnimatedSection delay={0.2}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="font-display text-xl font-bold text-white mb-8">
                Estimeret månedlig omkostning
              </h3>

              {/* Bar comparison */}
              <div className="space-y-6 mb-10">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">
                      {platform === "dandomain"
                        ? "DanDomain"
                        : platform === "woocommerce"
                        ? "WooCommerce"
                        : "Nuværende platform"}
                    </span>
                    <span className="text-white font-bold">
                      <AnimatedNumber
                        value={result.current}
                        suffix=" kr/md"
                      />
                    </span>
                  </div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-red-400/80 rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(result.current / maxBar) * 100}%`,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Shopify</span>
                    <span className="text-fl-green font-bold">
                      <AnimatedNumber
                        value={result.shopify}
                        suffix=" kr/md"
                      />
                    </span>
                  </div>
                  <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-fl-green rounded-full"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(result.shopify / maxBar) * 100}%`,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-5 text-center border border-white/5">
                  <p className="text-3xl font-display font-bold text-fl-green mb-1">
                    <AnimatedNumber
                      value={Math.max(0, result.saving)}
                      suffix=" kr"
                    />
                  </p>
                  <p className="text-white/50 text-sm">Årlig besparelse</p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 text-center border border-white/5">
                  <p className="text-3xl font-display font-bold text-fl-green mb-1">
                    {result.roiMonths > 0 ? (
                      <AnimatedNumber
                        value={result.roiMonths}
                        suffix=" md"
                      />
                    ) : (
                      "–"
                    )}
                  </p>
                  <p className="text-white/50 text-sm">ROI på migration</p>
                </div>
              </div>

              <a
                href="#kontakt"
                className="block w-full bg-fl-green hover:bg-fl-green-light text-fl-sort font-bold py-4 rounded-lg text-center transition-all hover:shadow-xl hover:shadow-fl-green/20"
              >
                Få en gratis analyse
              </a>

              <p className="text-white/30 text-xs mt-4 text-center">
                * Estimater baseret på gennemsnitspriser. Migrationsomkostning
                estimeret til ~30.000 DKK. Kontakt os for et præcist tilbud.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
