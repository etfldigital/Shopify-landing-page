import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhyShopify from "@/components/WhyShopify";
import PlatformComparison from "@/components/PlatformComparison";
import CostCalculator from "@/components/CostCalculator";
import HiddenCosts from "@/components/HiddenCosts";
import Integrations from "@/components/Integrations";
import TCOChart from "@/components/TCOChart";
import Testimonials from "@/components/Testimonials";
import MigrationCTA from "@/components/MigrationCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WhyShopify />
      <PlatformComparison />
      <CostCalculator />
      <HiddenCosts />
      <Integrations />
      <TCOChart />
      <Testimonials />
      <MigrationCTA />
      <FAQ />
      <Footer />
    </main>
  );
}

