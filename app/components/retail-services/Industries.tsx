import Image from "next/image";
import Link from "next/link";

export default function IndustrySolutions() {
  return (
    <section className="mx-auto px-0 md:px-4 py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto rounded-3xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Specialized Retail Payment Processing Solutions
        </h2>

        <div className="space-y-12 mb-5">
          {/* Fashion and Apparel Retail */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/Fashion.png" 
                    alt="Fashion and Apparel Retail Processing" 
                    width={200} 
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h2
                className="card-title text-2xl font-bold mb-6"
              >
                Fashion and Apparel Retail
              </h2>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Size and color variant management</strong> - with retail POS system integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Seasonal inventory tracking</strong> - and clearance management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Customer fitting preferences</strong> - and purchase history
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Fashion trend analytics</strong> - with retail merchant services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Multi-size barcode scanning</strong> - and inventory control
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Layaway and special order processing</strong> - with retail credit card processing
                  </span>
                </li>
              </ul>
          
            </div>
          </div>

          {/* Gift Shops and Specialty Retail */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/Gift.png" 
                    alt="Gift Shops and Specialty Retail Processing" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h2
                className="card-title text-2xl font-bold mb-6"
              >
                Gift Shops and Specialty Retail
              </h2>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Unique product cataloging</strong> - with retail POS system
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Gift card and store credit</strong> - management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Holiday and seasonal</strong> - sales tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Custom product ordering</strong> - and special requests
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Tourist and seasonal</strong> - customer management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Artisan and consignment tracking</strong> - with retail merchant services
                  </span>
                </li>
              </ul>
            
            </div>
          </div>

          {/* Hardware and Home Improvement Retail */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/Hardware.png" 
                    alt="Hardware and Home Improvement Retail Processing" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h2
                className="card-title text-2xl font-bold mb-6"
              >
                Hardware and Home Improvement Retail
              </h2>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Heavy item and bulk product</strong> - management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Contractor account and wholesale</strong> - pricing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Special order and delivery</strong> - coordination
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Tool rental and equipment</strong> - tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Seasonal product management</strong> - and storage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Professional contractor loyalty programs</strong> - with retail payment processing
                  </span>
                </li>
              </ul>
            
            </div>
          </div>

          {/* Electronics and Technology Retail */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/Electronics.png" 
                    alt="Electronics and Technology Retail Processing" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h2
                className="card-title text-2xl font-bold mb-6"
              >
                Electronics and Technology Retail
              </h2>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Serial number tracking</strong> - and warranty management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Trade-in and upgrade program</strong> - integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Technical support and service</strong> - scheduling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>High-value item security</strong> - and processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Manufacturer rebate and promotion</strong> - tracking
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Extended warranty and service plan sales</strong> - with retail merchant services
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
            <a href="/contact" className="bg-blue-600 text-white px-4 md:px-10 py-5 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300">
              Schedule retail consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}