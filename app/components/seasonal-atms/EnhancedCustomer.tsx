import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MarylandBusiness() {
  return (
    <section className="mx-auto px-2 md:px-4 py-8 md:py-16 bg-white">
      <div className="container mx-auto rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Complete Seasonal ATM Installation and Event Support Services
        </h2>

        <div className="space-y-12 mt-5">
          {/* Professional Delivery and Installation - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image
                    src="/GettyImages-2159608119-scaled.webp"
                    alt="Professional Delivery and Installation"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">
                Professional Delivery and Installation
              </h3>

              <p className="text-gray-700 mb-6">
                Coordinated delivery, professional installation, testing, and setup services scheduled around your event timeline with minimal disruption to your event preparation and operation.
              </p>

              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Delivery and Installation">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Weather-Resistant Equipment - Image Right, Content Left */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/extreme-weather-gear-performance.jpeg"
                    alt="Weather-Resistant Equipment"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Weather-Resistant Equipment</h3>
              <p className="text-gray-700 mb-6">
                Outdoor-rated ATM equipment designed for festivals, fairs, and seasonal events with weather protection, secure mounting, and reliable operation in various environmental conditions.
              </p>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Weather-Resistant Equipment">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Event Cash Management - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/pangofinancial-281250-eventtradecash-image1.webp"
                    alt="Event Cash Management"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Event Cash Management</h3>
              <p className="text-gray-700 mb-6">
                Professional cash loading, monitoring, and management throughout your event duration with optimized cash levels based on expected transaction volume and event attendance projections.
              </p>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Cash Management">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* 24/7 Event Monitoring - Image Right, Content Left */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/Bytagig-ArticlesBlog-22-1200x720.jpg"
                    alt="24/7 Event Monitoring"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">24/7 Event Monitoring</h3>
              <p className="text-gray-700 mb-6">
                Real-time ATM monitoring, technical support, and emergency response services throughout your event to ensure optimal performance and customer satisfaction.
              </p>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Event Monitoring">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Coordinated Removal Services - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/young-courier-his-colleague-unloading-cardboard-boxes-from-delivery-van.jpg"
                    alt="Coordinated Removal Services"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Coordinated Removal Services</h3>
              <p className="text-gray-700 mb-6">
                Professional ATM removal and pickup services scheduled around your event conclusion with minimal disruption to cleanup and breakdown operations.
              </p>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Removal Services">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Event Performance Reporting - Image Right, Content Left */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/clover.jpg"
                    alt="Event Performance Reporting"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Event Performance Reporting</h3>
              <p className="text-gray-700 mb-6">
                Comprehensive transaction reporting, revenue analysis, and performance metrics provided after your event to help plan future seasonal ATM needs and optimize placement strategies.
              </p>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Performance Reporting">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div className="text-center mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/getquote"
                className="group flex items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="text-lg">Get event support services</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
