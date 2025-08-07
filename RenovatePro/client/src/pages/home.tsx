import Hero from "@/components/home/hero";
import ServicesOverview from "@/components/home/services-overview";
import CostCalculator from "@/components/home/cost-calculator";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <div className="pt-16" data-testid="page-home">
      <Hero />
      <ServicesOverview />
      <CostCalculator />
      <Testimonials />
    </div>
  );
}
