'use client';
import Navbar from "./components/sections/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import POSCTASection from "./components/sections/POSCTASection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import BusinessCategoriesSection from "./components/sections/BusinessCategoriesSection";
import PaymentTechnologySection from "./components/sections/PaymentTechnologySection";
import SuccessStoriesSection from "./components/sections/SuccessStoriesSection";
import RetailInventorySection from "./components/sections/RetailInventorySection";
import ContactQuoteSection from "./components/sections/ContactQuoteSection";
import NewsletterSection from "./components/sections/NewsletterSection";
import ReviewsSection from "./components/sections/ReviewsSection";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <POSCTASection />
        <WhyChooseUsSection />
        <PaymentTechnologySection />
        <BusinessCategoriesSection />
        <SuccessStoriesSection />
        <RetailInventorySection />
        <ContactQuoteSection />
        {/* <NewsletterSection /> */}
        <ReviewsSection />
      </main>

    </div>
  );
}