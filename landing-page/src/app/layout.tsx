import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skift til Shopify | FL Digital – Din Shopify Partner i Danmark",
  description:
    "Sammenlign Shopify med WooCommerce og DanDomain. Beregn dit potentiale og se hvorfor Shopify er det bedste valg for din webshop. FL Digital er dit digitale marketing bureau.",
  keywords:
    "shopify, woocommerce, dandomain, webshop, e-commerce, shopify partner, danmark, migration",
  openGraph: {
    title: "Skift til Shopify | FL Digital",
    description:
      "Sammenlign platforme, beregn besparelser og find ud af hvorfor Shopify er det bedste valg for din webshop.",
    type: "website",
    locale: "da_DK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300;400;500;600;700;800&family=Funnel+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
