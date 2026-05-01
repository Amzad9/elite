import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MarylandBusiness() {
  return (
    <section className="mx-auto px-2 md:px-4 py-8 md:py-16 bg-white">
      <div className="container mx-auto rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Professional Retail Payment Processing Equipment
        </h2>

        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image
                    src="/retail-services/re1.png"
                    alt="Retail POS System Terminals"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h2
                className="card-title text-2xl font-bold mb-6 text-gray-900"
              >
                Retail POS System Terminals
              </h2>

              <p className="text-gray-700 mb-6">
                Complete retail POS system stations with integrated retail credit card processing, receipt printing, barcode scanning, and cash drawer connectivity. Available in countertop, mobile, and tablet configurations for all retail environments.
              </p>

              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Configurations:</span>
                      Countertop, mobile, and tablet configurations
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Key Features:</span>
                        Integrated credit card processing, receipt printing, barcode scanning, cash drawer connectivity
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Designed For:</span>
                        All retail environments requiring complete POS solutions
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Barcode Scanners and Inventory Equipment */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/retail-services/re2.png"
                    alt="Barcode Scanners and Inventory Equipment"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Barcode Scanners and Inventory Equipment</h3>
              <p className="text-gray-700 mb-6">
                Professional barcode scanners, handheld inventory devices, price checking stations, and shelf labeling systems integrated with retail payment processing and inventory management.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Equipment Includes:</span>
                      Barcode scanners, handheld devices, price checking stations, shelf labeling systems
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Integrated payment processing, inventory management, real-time synchronization
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Streamlined inventory control, accurate pricing, efficient checkout processes
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            
            </div>
          </div>

          {/* Customer-Facing Payment Devices */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/retail-services/re3.png"
                    alt="Customer-Facing Payment Devices"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Customer-Facing Payment Devices</h3>
              <p className="text-gray-700 mb-6">
                PIN pads, signature capture devices, contactless payment readers, and customer-facing displays for secure retail credit card processing and enhanced customer experience.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Devices Include:</span>
                      PIN pads, signature capture, contactless readers, customer displays
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Secure credit card processing, enhanced customer experience, modern payment options
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Improved transaction security, faster checkout, customer satisfaction
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
        
            </div>
          </div>

          {/* Retail-Specific Peripherals */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/retail-services/re4.png"
                    alt="Retail-Specific Peripherals"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Retail-Specific Peripherals</h3>
              <p className="text-gray-700 mb-6">
                Receipt printers, cash drawers, security devices, scale integration, and customer displays designed specifically for retail environments with merchant services integration.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Peripherals Include:</span>
                      Receipt printers, cash drawers, security devices, scales, customer displays
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Retail-specific design, merchant services integration, complete system compatibility
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Complete retail solutions, seamless integration, optimized retail operations
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
           
            </div>
          </div>

          {/* Mobile Retail Processing Equipment */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/retail-services/re5.png"
                    alt="Mobile Retail Processing Equipment"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Mobile Retail Processing Equipment</h3>
              <p className="text-gray-700 mb-6">
                Portable retail POS systems, wireless terminals, and smartphone card readers for pop-up shops, farmers markets, trade shows, and mobile retail events with full retail credit card processing.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Ideal For:</span>
                      Pop-up shops, farmers markets, trade shows, mobile retail events
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Portable POS systems, wireless terminals, smartphone card readers, full processing
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Process payments anywhere, flexible retail solutions, complete mobile capabilities
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
          
            </div>
          </div>

          {/* Professional Installation and Training */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/retail-services/re6.png"
                    alt="Professional Installation and Training"
                    height={500}
                    width={500}
                    className="w-full h-110 rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Professional Installation and Training</h3>
              <p className="text-gray-700 mb-6">
                Complete retail equipment installation, staff training, and ongoing support included with all retail merchant services. Our specialized technicians focus on retail payment processing setup.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Services Include:</span>
                      Equipment installation, staff training, ongoing support
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Complete retail setup, specialized technicians, dedicated support
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Expert installation, comprehensive training, reliable ongoing support
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
           
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div className="text-center mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
              <a href="/getquote"
                className="group flex items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="text-lg">Get retail hardware quote</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}