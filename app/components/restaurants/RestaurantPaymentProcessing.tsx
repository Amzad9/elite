import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MarylandBusiness() {
  return (
    <section className="mx-auto px-3 md:px-4 py-6 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto rounded-4xl relative">
        {/* Glow effect on top corners - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-2xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-snug md:leading-tight px-2">
          Get Your Restaurant Payment Processing System Today
        </h2>

        <div className="space-y-8 md:space-y-12 mt-5">
          {/* FIRST CARD: Free Restaurant Consultation */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-auto">
                  <Image
                    src="/restaurants/ps1.png"
                    alt="Free Restaurant Consultation"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">
                Free Restaurant Consultation Includes:
              </h3>

              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Restaurant business needs assessment and POS system recommendation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Current restaurant payment processing evaluation and cost analysis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Restaurant credit card processing pricing comparison and savings calculation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Restaurant online ordering and marketing strategy planning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Kitchen workflow optimization and equipment integration planning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Staff training timeline and restaurant merchant services implementation plan
                    </span>
                  </li>
                </ul>
              </div>

             
            </div>
          </div>

          {/* Why Choose Elite Card Processing */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/restaurants/ps2.png"
                    alt="Clover POS system - Why Choose Elite Card Processing"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Why Choose Elite Card Processing for Restaurant Merchant Services:</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Restaurant payment processing company with responsive, dedicated support
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Professional restaurant equipment installation and comprehensive staff training
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Competitive restaurant credit card processing rates with transparent pricing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Integration with cash discount programs for restaurants
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Restaurant online ordering and restaurant SEO services included
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700 text-sm md:text-base ml-3">
                      Scalable restaurant payment processing solutions that grow with your business
                    </span>
                  </li>
                </ul>
              </div>
           
            </div>
          </div>

          {/* Handheld Restaurant Payment Devices */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/restaurants/ps3.png"
                    alt="Handheld Restaurant Payment Devices"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Handheld Restaurant Payment Devices</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Wireless handheld terminals for tableside restaurant payment processing, reducing card handling time and improving customer security. Perfect for full-service restaurants and outdoor dining.
              </p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Best for:</span>
                      Full-service restaurants and outdoor dining areas
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Features:</span>
                      Wireless operation, Tableside payment processing, Secure card handling, Portable design
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Benefits:</span>
                      Faster table turnover, Enhanced customer security, Reduced card handling, Improved service
                    </div>
                  </li>
                </ul>
              </div>
           
            </div>
          </div>

          {/* Restaurant-Specific Peripherals */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/restaurants/ps4.png"
                    alt="Restaurant-Specific Peripherals"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Restaurant-Specific Peripherals</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Kitchen printers, bump bars, cash drawers, barcode scanners, scale integration, and customer-facing displays designed specifically for restaurant environments with merchant services integration.
              </p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Best for:</span>
                      Complete restaurant hardware ecosystems
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Features:</span>
                      Kitchen printers, Bump bars, Cash drawers, Barcode scanners, Scale integration, Customer displays
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Benefits:</span>
                      Seamless integration, Restaurant-optimized hardware, Enhanced operational efficiency
                    </div>
                  </li>
                </ul>
              </div>
          
            </div>
          </div>

          {/* Mobile Restaurant Processing Equipment */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/restaurants/ps5.png"
                    alt="Mobile Restaurant Processing Equipment"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Mobile Restaurant Processing Equipment</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Portable restaurant POS systems, wireless terminals, and smartphone card readers for food trucks, catering, farmers markets, and outdoor events with full restaurant credit card processing.
              </p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Best for:</span>
                      Mobile food businesses and outdoor events
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Features:</span>
                      Portable POS systems, Wireless terminals, Smartphone card readers, Battery operation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Benefits:</span>
                      Process payments anywhere, Ideal for mobile operations, Full credit card processing capabilities
                    </div>
                  </li>
                </ul>
              </div>
           
            </div>
          </div>

          {/* Professional Installation and Training */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image
                    src="/restaurants/ps6.png"
                    alt="Professional Installation and Training"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Professional Installation and Training</h3>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Complete restaurant equipment installation, staff training, and ongoing support included with all restaurant merchant services. Our specialized technicians focus on restaurant payment processing setup.
              </p>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Services Include:</span>
                      Equipment installation, Staff training, Ongoing technical support
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Features:</span>
                      Specialized technicians, Restaurant-specialized setup, Comprehensive staff training
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="text-gray-700 text-sm md:text-base ml-3">
                      <span className="font-semibold text-gray-900">Benefits:</span>
                      Expert installation, Reduced downtime, Maximized system utilization, Dedicated support
                    </div>
                  </li>
                </ul>
              </div>
         
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div className="text-center mt-12 md:mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#10284D] text-white font-semibold rounded-xl shadow-xl hover:bg-[#152E5A] transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="text-base md:text-lg">Contact Us</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
              <a href="/getquote"
                className="group flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="text-base md:text-lg">Get restaurant hardware quote</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}