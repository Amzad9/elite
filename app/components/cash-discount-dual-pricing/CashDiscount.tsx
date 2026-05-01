import WhyChoose from "../solutions/WhyChoose";
import CTA from "../solutions/CTA";
import GasStation from "./GasStation";
import RetailPOSSystem from "./RetailPOSSystem";
import MarylandSurchargeLaws from "./MarylandSurchargeLaws";
import LegalCompliance from "./LegalCompliance";
import TechnologySection from "./TechnologySection";
import DualPricingVsSurcharging from "./DualPricingVsSurcharging";
import SuccessStories from './PaymentProcessingResources'
import WhyChooseUs from './WhyChooseUs'
import DualPricingCard from './DualPricingCard'
import SurchargeFAQ from "./SurchargeFAQ";
import DualPricing from "./DualPricing";
import ContactEliteCardProcessing from "../solutions/ContactEliteCardProcessing";
export default function Page() {
  return (
    <>
      <GasStation />
      <RetailPOSSystem />
      <DualPricingVsSurcharging />
      <MarylandSurchargeLaws />
      <LegalCompliance />
      <TechnologySection />
      <SuccessStories />
      <WhyChooseUs />
      <DualPricingCard />
      <SurchargeFAQ />
      <DualPricing />
      <ContactEliteCardProcessing />
    </>
  );
}
