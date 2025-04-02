import CTASection from "@/components/home/ctaSection";
import DemoSection from "@/components/home/demoSection";
import HeroSection from "@/components/home/heroSection";
import HowItWorksSection from "@/components/home/howItWorksSection";
import PricingSection from "@/components/home/pricingSection";
import BgGradient from "@/components/ui/common/bg-gradient";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full">
      <BgGradient className=""/>
      <div className="flex flex-col">
        <HeroSection />
      </div>
      <DemoSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
