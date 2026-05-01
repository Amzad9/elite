import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MarylandBusiness() {
  return (
    <section className="mx-auto px-2 md:px-4 py-8 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Get Your Most States Restaurant Payment Processing System Today
        </h2>

        <div className="space-y-12 mt-5">
          {/* FIRST CARD: Free Restaurant Consultation */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image
                    src="/diner.png"
                    alt="Free Restaurant Consultation"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">
                Free Restaurant Consultation Includes:
              </h3>

              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Restaurant business needs assessment and POS system recommendation
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Current restaurant payment processing evaluation and cost analysis
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Restaurant credit card processing pricing comparison and savings calculation
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Restaurant online ordering and marketing strategy planning
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Kitchen workflow optimization and equipment integration planning
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Staff training timeline and restaurant merchant services implementation plan
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Schedule Free Consultation">
                  Schedule Free Consultation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Why Choose Elite Card Processing */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image
                    src="/clover.jpg"
                    alt="Why Choose Elite Card Processing"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Why Choose Elite Card Processing for Restaurant Merchant Services:</h3>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Local Most States restaurant payment processing company with same-day support
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Professional restaurant equipment installation and comprehensive staff training
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Competitive restaurant credit card processing rates with transparent pricing
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Integration with cash discount programs for restaurants
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Restaurant online ordering and local restaurant SEO services included
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      Scalable restaurant payment processing solutions that grow with your business
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Our Services">
                  Learn About Our Services
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Handheld Restaurant Payment Devices */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image
                    src="/aldeiro.webp"
                    alt="Handheld Restaurant Payment Devices"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Handheld Restaurant Payment Devices</h3>
              <p className="text-gray-700 mb-6">
                Wireless handheld terminals for tableside restaurant payment processing, reducing card handling time and improving customer security. Perfect for full-service restaurants and outdoor dining.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Full-service restaurants and outdoor dining areas
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Wireless operation, Tableside payment processing, Secure card handling, Portable design
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Faster table turnover, Enhanced customer security, Reduced card handling, Improved service
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Handheld Payment Devices">
                  Learn more about Handheld Devices
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Restaurant-Specific Peripherals */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image
                    src="/mobilepayment.jpg"
                    alt="Restaurant-Specific Peripherals"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Restaurant-Specific Peripherals</h3>
              <p className="text-gray-700 mb-6">
                Kitchen printers, bump bars, cash drawers, barcode scanners, scale integration, and customer-facing displays designed specifically for restaurant environments with merchant services integration.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Complete restaurant hardware ecosystems
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Kitchen printers, Bump bars, Cash drawers, Barcode scanners, Scale integration, Customer displays
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Seamless integration, Restaurant-optimized hardware, Enhanced operational efficiency
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Restaurant Peripherals">
                  Learn more about Peripherals
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Restaurant Processing Equipment */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image
                    src="/diner.png"
                    alt="Mobile Restaurant Processing Equipment"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Mobile Restaurant Processing Equipment</h3>
              <p className="text-gray-700 mb-6">
                Portable restaurant POS systems, wireless terminals, and smartphone card readers for food trucks, catering, farmers markets, and outdoor events with full restaurant credit card processing.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Mobile food businesses and outdoor events
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Portable POS systems, Wireless terminals, Smartphone card readers, Battery operation
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Process payments anywhere, Ideal for mobile operations, Full credit card processing capabilities
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Mobile Processing Equipment">
                  Learn more about Mobile Equipment
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Professional Installation and Training */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[500px]">
                  <Image
                    src="/clover.jpg"
                    alt="Professional Installation and Training"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Professional Installation and Training</h3>
              <p className="text-gray-700 mb-6">
                Complete restaurant equipment installation, staff training, and ongoing support included with all restaurant merchant services. Our Most States-based technicians specialize in restaurant payment processing setup.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Services Include:</span>
                      Equipment installation, Staff training, Ongoing technical support
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Most States-based technicians, Restaurant-specialized setup, Comprehensive staff training
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Expert installation, Reduced downtime, Maximized system utilization, Local support
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Installation and Training">
                  Learn about Installation Services
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div className="text-center mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="group flex items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="text-lg">View restaurant equipment options</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-2" />
              </button>
              <button
                className="group flex items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="text-lg">Get restaurant hardware quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}