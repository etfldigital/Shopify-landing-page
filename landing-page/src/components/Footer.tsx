"use client";

export default function Footer() {
  return (
    <footer className="bg-fl-sort py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold text-white">
              FL Digital
            </span>
            <p className="text-white/50 mt-4 max-w-sm leading-relaxed">
              Dit digitale marketing bureau og Shopify-partner i Danmark. Vi
              hjælper virksomheder med at vækste online gennem strategisk
              e-commerce og digital marketing.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://fldigital.dk"
                target="_blank"
                rel="noopener"
                className="text-white/40 hover:text-fl-green transition-colors text-sm"
              >
                fldigital.dk
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Sider
            </h4>
            <ul className="space-y-3">
              {[
                ["#hvorfor", "Hvorfor Shopify"],
                ["#sammenligning", "Sammenligning"],
                ["#beregner", "Beregner"],
                ["#omkostninger", "Omkostninger"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-fl-green transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Ressourcer
            </h4>
            <ul className="space-y-3">
              {[
                [
                  "https://www.shopify.com/dk-en/pricing",
                  "Shopify Priser (DK)",
                ],
                [
                  "https://www.shopify.com/editions/winter2026",
                  "Shopify Editions 2026",
                ],
                [
                  "https://www.shopify.com/commerce-trends",
                  "Shopify Commerce Reports",
                ],
                ["https://www.klaviyo.com/pricing", "Klaviyo Priser"],
                ["https://fldigital.dk", "FL Digital"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="text-white/50 hover:text-fl-green transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} FL Digital. Alle rettigheder
            forbeholdes.
          </p>
          <p className="text-white/20 text-xs">
            Prisdata er estimater baseret på offentligt tilgængelige kilder pr.
            marts 2026. Se individuelle platformes hjemmesider for aktuelle priser.
          </p>
        </div>
      </div>
    </footer>
  );
}
