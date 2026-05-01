import WhyChoose from "../solutions/WhyChoose";
import TestimonialCard from "../solutions/TestimonialCard";
import Tabs from "../level-iii-merchant-services/Tabs";
import ContactEliteCardProcessing from "../solutions/ContactEliteCardProcessing";
import CTA from "../solutions/CTA";
import PaymentProcessingResources from "../level-iii-merchant-services/PaymentProcessingResources";
import NoviEatsOnlineOrdering from "./NoviEatsOnlineOrdering";

export default function Page() {
  return (
    <>
      <Tabs />
      <WhyChoose />
      <TestimonialCard />
      <NoviEatsOnlineOrdering />
      <ContactEliteCardProcessing />
      <PaymentProcessingResources />
      <CTA />
    </>
  );
}
