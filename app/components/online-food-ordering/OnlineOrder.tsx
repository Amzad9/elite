import WhyChoose from "../solutions/WhyChoose";
import TestimonialCard from "../solutions/TestimonialCard";
import Tabs from "../online-food-ordering/Tabs";
import MarylandPaymentProcessing from "../solutions/MarylandPaymentProcessing";
import ContactEliteCardProcessing from "../solutions/ContactEliteCardProcessing";
import CTA from "../solutions/CTA";
import ResourcesSection from "../solutions/ResourcesSection";
import NoviEatsOnlineOrdering from "./NoviEatsOnlineOrdering";

export default function Page() {
  return (
    <>
      <Tabs />
      <WhyChoose />
      <TestimonialCard />
      <NoviEatsOnlineOrdering />
      <ContactEliteCardProcessing />
      <ResourcesSection />
      <CTA />
    </>
  );
}
