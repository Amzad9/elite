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
        Transparent Novi Eats Online Food Ordering Pricing for Restaurants
        </h2>

        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden  rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/mobilepayment.jpg" 
                    alt="Integrated Online Payment Processing" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Novi Eats Standard Package</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Complete online food ordering solution including Novi Eats platform, website integration, menu setup, integrated merchant services, professional installation, and comprehensive staff training. Ideal for single-location restaurants.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    View Online Payment Options
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </div>
          </div>

          {/* Secure Online Transaction Processing - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/tablet.jpg" 
                    alt="Secure Online Transaction Processing" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center  text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Multi-Location Restaurant Package</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Centralized online ordering solution including multiple Novi Eats installations, unified branding, consistent customer experience, integrated merchant services, and comprehensive support across all restaurant locations.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    Learn About Security Features
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            
            </div>
          </div>

          {/* Mobile Payment Integration - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/terminals.webp" 
                    alt="Mobile Payment Integration" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Custom Restaurant Branding Package</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Premium online ordering solution including custom website design, advanced branding integration, specialized features, enhanced customer experience, and premium merchant services integration.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    View Mobile Payment Options
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
             
            </div>
          </div>

          {/* Real-Time Payment Authorization - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/Cloverpayments.webp" 
                    alt="Real-Time Payment Authorization" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Marketing-Enhanced Package</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Comprehensive online ordering solution including Novi Eats platform, integrated marketing tools, loyalty program setup, social media integration, and customer engagement optimization.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    Learn About Real-Time Processing
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            
            </div>
          </div>

          {/* Restaurant-Specific Payment Features - Image Left, Content Right */}
          <div className="card overflow-hidden group rounded-4xl h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative">
                <figure className="relative h-full">
                  <Image 
                     src="/mobilepayment.jpg" 
                    alt="Restaurant-Specific Payment Features" 
                    width={500} height={200}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Enterprise Restaurant Package</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Advanced online ordering solution for restaurant chains and franchises including enterprise features, centralized management, advanced reporting, and comprehensive support across all locations.
                </p>
              </div>
              
            
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 cursor-pointer ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    View Restaurant Features
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </div>
          </div>

          {/* Comprehensive Transaction Reporting - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden group h-full rounded-4xl flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/IntegratedTerminal.jpg" 
                    alt="Comprehensive Transaction Reporting" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center  text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Restaurant Merchant Services Integration</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  All Novi Eats packages include competitive restaurant merchant services rates, transparent pricing, secure online payment processing, and comprehensive transaction management capabilities.
                </p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
              
            
                <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400  focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    View Reporting Features
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
}