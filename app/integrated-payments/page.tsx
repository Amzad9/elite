import IntegratedPaymentsHero from "../components/integrated-payments/IntegratedPaymentsHero";
import PaymentsStatsSection from "../components/integrated-payments/PaymentsStatsSection";
import WhitepaperBanner from "../components/integrated-payments/WhitepaperBanner";
import StepsSection from "../components/integrated-payments/StepsSection";
import ExperienceCarousel from "../components/integrated-payments/ExperienceCarousel";
import TabsSection from "../components/integrated-payments/TabsSection";
import TestimonialSection from "../components/integrated-payments/TestimonialSection";
import ResourcesCarousel from "../components/integrated-payments/ResourcesCarousel";
import FinalCTA from "../components/integrated-payments/FinalCTA";

export const metadata = {
  title: "Integrated Payments for Software Vendors | Maryland Merchant Services",
  description:
    "Integrate and monetize payments on your platforms. Seamless omni-channel payments, developer-friendly APIs, and dedicated partner support for software vendors.",
};

export default function PaymentIntegrationPage() {
  return (
    <main className="overflow-x-hidden">
      <IntegratedPaymentsHero />
      <WhitepaperBanner />
      <StepsSection />

      <PaymentsStatsSection />

      <ExperienceCarousel />
      <TabsSection />
      {/* <TestimonialSection /> */}
      <ResourcesCarousel />
      <FinalCTA />
    </main>
  );
}
