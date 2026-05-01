import Image from "next/image";
import WhyChoose from "./WhyChoose";
import TestimonialCard from "./TestimonialCard";
import MarylandPaymentProcessing from "./MarylandPaymentProcessing";
import ContactEliteCardProcessing from "./ContactEliteCardProcessing";
import ResourcesSection from "./ResourcesSection";
import CTA from "./CTA";
  
export default function Business() {
  return (
    <>
      <section className="md:py-6 px-2 md:px-6 rounded-2xl">
        <div className="container mx-auto space-y-24 rounded-xl relative">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-230 left-120 w-120 h-120 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="space-y-10 text-center max-w-4xl mx-auto lg:text-center mb-16 mt-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Integrated Payment Processing And POS Systems
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-colors block">
                Restaurant Merchant Services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Complete restaurant merchant services with integrated payment processing, kitchen display systems, online ordering integration, and table management. DinerDaddy, Aldelo POS and Clover systems provide all-in-one solutions for quick service to full-service dining.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/pointsystems/b1.png"
                  alt="Tablet POS system on restaurant counter"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/pointsystems/b2.png"
                  alt="Modern retail payment terminals comparison"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-colors block">
                Retail Payment Processing Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Comprehensive retail merchant services with integrated credit card processing, inventory tracking, customer management, and multi-location support. Perfect for boutiques, hardware stores, and specialty retailers.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-colors block">
                Service Business Payment Systems
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mobile and stationary merchant services for salons, auto repair shops, contractors, and professional services. Accept payments anywhere with integrated processing and mobile capabilities.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/pointsystems/b3.png"
                  alt="iPad POS system for service businesses"
                  width={1400}
                  height={1050}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/pointsystems/b4.png"
                  alt="Multi-location warehouse and inventory management dashboard"
                  width={1600}
                  height={1200}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-colors block">
                Multi-Location Merchant Services
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Scalable payment processing solutions that grow with your business. Manage multiple locations from a single dashboard with real-time reporting, centralized inventory control, and integrated credit card processing.
              </p>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
            <a href="/contact" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
      <WhyChoose />
      <TestimonialCard />
      <MarylandPaymentProcessing />
      <ContactEliteCardProcessing />
      <ResourcesSection />
      <CTA />
    </>
  );
}