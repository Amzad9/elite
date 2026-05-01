import WhyChoose from "../solutions/WhyChoose";
import TestimonialCard from "../solutions/TestimonialCard";
import Tabs from "./Tabs";
import ContactEliteCardProcessing from "../solutions/ContactEliteCardProcessing";
import CTA from "../solutions/CTA";
import PaymentProcessingResources from "./PaymentProcessingResources";
import NoviEatsOnlineOrdering from "./NoviEatsOnlineOrdering";

export default function Page() {
  return (
    <>
      <Tabs />
      <WhyChoose />
      {/* <TestimonialCard /> */}
      <NoviEatsOnlineOrdering />
      <ContactEliteCardProcessing />
      <PaymentProcessingResources />
      <CTA />
    </>
  );
}
