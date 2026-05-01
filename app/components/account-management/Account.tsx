import CTA from "../solutions/CTA";
import AccountPortal from "./AccountPortal";
import DualPricingVsSurcharging from "./DualPricingVsSurcharging";
import TechnologyPartnerAccess from "./TechnologyPartnerAccess";
import TerminalsAndAgreements from "./TerminalsAndAgreements";
import MarylandBusiness from "./MarylandBusiness";
export default function Page() {
  return (
    <>
      <AccountPortal />
      <div id="resources" className="scroll-mt-24">
        <TechnologyPartnerAccess />
        <DualPricingVsSurcharging />
        <TerminalsAndAgreements />
        <MarylandBusiness />
      </div>
      <CTA />
    </>
  );
}
