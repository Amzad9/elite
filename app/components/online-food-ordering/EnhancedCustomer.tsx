import { ArrowRight } from "lucide-react";
import Image from "next/image";
export default function MarylandBusiness() {
  return (
    <section className="mx-auto px-2 md:px-4 py-8 md:py-16 bg-white">
      <div className="container mx-auto  rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
           Businesses Thriving with Elite Card Processing Merchant Services
        </h2>
        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image
                    src="/onlinefoodordering/e1.png"
                    alt="DinerDaddy POS with Integrated Merchant Services" 
                    height={500} width={500}
                    className="w-full h-120 rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">DinerDaddy POS with Integrated Merchant Services</h3>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Full-service restaurants requiring comprehensive payment processing
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Complete restaurant management, Advanced reporting, Staff scheduling with integrated merchant services
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Industry-leading restaurant features, Seamless credit card processing integration
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>

          {/* Clover POS - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/onlinefoodordering/e2.png" 
                    alt="Clover POS All-in-One Payment Systems" 
                    height={500} width={500}
                    className="w-full h-120 rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Clover POS All-in-One Payment Systems</h3>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Restaurants, retail, and service businesses needing versatile merchant services
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Complete payment processing design, App marketplace, Inventory management with integrated credit card processing
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Easy to use merchant services, Extensive third-party payment processing integrations
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>

          {/* Aldelo POS - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/onlinefoodordering/e3.png" 
                    alt="Aldelo POS Restaurant Merchant Services" 
                    height={500}
                    width={500}
                    className="w-full h-120 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Aldelo POS Restaurant Merchant Services</h3>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Full-service restaurants requiring processor-agnostic POS solutions
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Scalable POS solutions, Non-proprietary hardware POS, Advanced restaurant management with complete merchant services
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Affordable POS platform, Comprehensive credit card processing reporting, POS reseller support
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            
            </div>
          </div>

          {/* Mobile Payment Processing - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/onlinefoodordering/e4.png" 
                    alt="Mobile Payment Processing Options" 
                    height={500}
                    width={500}
                    className="w-full h-120 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Mobile Payment Processing Options</h3>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Food trucks, farmers markets, mobile services requiring portable merchant services
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Wireless connectivity, Portable design with integrated credit card processing
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Accept payments anywhere, Real-time merchant services synchronization
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}