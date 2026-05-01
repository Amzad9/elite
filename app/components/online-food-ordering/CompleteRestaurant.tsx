import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CompleteRestaurant() {
  return (
    <section className="mx-auto py-8 md:py-16 bg-white">
      <div className="container mx-auto p-3 md:p-6 rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Professional Payment Processing Hardware and All-in-One Payment Systems
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
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Integrated Online Payment Processing</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Seamless merchant services integration with competitive restaurant processing rates, transparent pricing, and complete online payment acceptance through your Novi Eats platform. Accept all major credit cards, debit cards, and digital payments.
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
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Secure Online Transaction Processing</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Advanced security features including SSL encryption, PCI DSS compliance, fraud protection, and secure payment processing designed to protect your restaurant and customers during online ordering.
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
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Mobile Payment Integration</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Complete mobile payment support including Apple Pay, Google Pay, Samsung Pay, and other digital wallet options providing convenient and secure payment methods for online food ordering customers.
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
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Real-Time Payment Authorization</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Instant payment authorization, real-time transaction processing, immediate order confirmation, and automated receipt delivery through your integrated Novi Eats and merchant services solution.
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
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Restaurant-Specific Payment Features</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Tip processing for delivery orders, tax calculation, promotional pricing, discount codes, and flexible payment options all processed through your integrated Novi Eats online ordering platform.
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
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Comprehensive Transaction Reporting</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Detailed payment reporting, online sales analytics, transaction tracking, and comprehensive financial reporting integrated with your restaurant POS and merchant services account.
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