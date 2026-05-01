import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function OrderingPricing() {
  return (
    <section className="mx-auto py-8 md:py-16 bg-white">
      <div className="container mx-auto p-3 md:p-6 rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Compare Retail POS Systems and Payment Processing Options
        </h2>

        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/retail-services/co1.png" 
                    alt="Clover Retail POS System" 
                    width={500} height={500}
                    className="w-full h-110 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Clover Retail POS System</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Best for:</strong> General retail stores and specialty shops needing versatile retail merchant services
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Features:</strong> Retail-specific apps, inventory management, customer loyalty, integrated retail payment processing
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Benefits:</strong> Easy to use retail POS system with extensive retail-focused integrations
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Retail Focus:</strong> Flexible platform adaptable to various retail business types
                </p>
              </div>
          
            </div>
          </div>

          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/retail-services/co2.png" 
                    alt="Specialized Retail Solutions" 
                    width={500} height={500}
                    className="w-full h-110 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Specialized Retail Solutions</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Best for:</strong> Unique retail concepts requiring specialized payment processing
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Features:</strong> Tailored retail functionality, industry-specific integrations, custom retail workflows
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Benefits:</strong> Perfect fit for specific retail needs with integrated merchant services
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Retail Focus:</strong> Completely customized for unique retail operations
                </p>
              </div>
            
            </div>
          </div>

          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/retail-services/co3.png" 
                    alt="Multi-Location Retail Platforms" 
                    width={500} height={500}
                    className="w-full h-110 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Multi-Location Retail Platforms</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Best for:</strong> Retail chains and franchises requiring centralized management
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Features:</strong> Multi-location inventory, unified customer databases, centralized retail payment processing
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Benefits:</strong> Scalable retail merchant services with centralized control
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Retail Focus:</strong> Enterprise-level retail management with integrated payment processing
                </p>
              </div>
           
            </div>
          </div>

          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/retail-services/co4.png" 
                    alt="Mobile Retail Processing" 
                    width={500} height={500}
                    className="w-full h-110 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Mobile Retail Processing</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Best for:</strong> Pop-up shops, farmers markets, mobile retail requiring portable merchant services
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Features:</strong> Wireless connectivity, portable design with integrated retail credit card processing
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Benefits:</strong> Accept payments anywhere with real-time retail merchant services synchronization
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  <strong>Retail Focus:</strong> Mobile retail operations with full payment processing capabilities
                </p>
              </div>
            
            </div>
          </div>

          <div className="card overflow-hidden group rounded-4xl h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/co5.png" 
                    alt="Compare all retail POS options" 
                    width={500} height={200}
                    className="w-full h-110 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Compare All Retail POS Options</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Get a comprehensive comparison of all retail POS systems and payment processing solutions tailored to your specific retail business needs.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Our experts will help you evaluate features, pricing, and integration options to find the perfect solution for your retail operation.
                </p>
              </div>
            
            </div>
          </div>

          <div className="card overflow-hidden group h-full rounded-4xl flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/co6.png" 
                    alt="Schedule retail demonstration" 
                    width={500} height={500}
                    className="w-full h-110 rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Schedule Retail Demonstration</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  See our retail POS systems in action with a personalized demonstration. Our specialists will show you exactly how each system works for your specific retail environment.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Get hands-on experience with inventory management, customer loyalty programs, integrated payment processing, and all the features that make our retail solutions stand out.
                </p>
              </div>
           
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
}