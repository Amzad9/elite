import WhyChoose from "../solutions/WhyChoose";
import CTA from "../solutions/CTA";
import PaymentProcessingResources from "./PaymentProcessingResources";
import IntegratedRetailServices from "./IntegratedRetailServices";
import RetailPOSSystem from "./RetailPOSSystem";
import RestaurantOnlineOrdering from "./RestaurantOnlineOrdering";
import RestaurantPaymentEquipment from "./RestaurantPaymentEquipment";
import RestaurantSuccessStories from "./RestaurantSuccessStories";
import IndustrySolutions from "./GovernmentCorporateProcessing";
import RestaurantPaymentProcessing from './RestaurantPaymentProcessing'
export default function Page() {
  return (
    <>
      <IntegratedRetailServices />
      <RetailPOSSystem />
      <IndustrySolutions />
      <RestaurantOnlineOrdering />
      <RestaurantPaymentEquipment />
      <RestaurantSuccessStories />
      <RestaurantPaymentProcessing />
      <WhyChoose />
      <PaymentProcessingResources />
      <CTA />
    </>
  );
}
