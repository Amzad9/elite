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
          Government Compliance and Level III Processing Requirements
        </h2>

        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden  rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/mobilepayment.jpg" 
                    alt="GSA SmartPay Compliance" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">GSA SmartPay Compliance</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Complete GSA SmartPay card processing compliance with Level III data capture, detailed reporting, and audit trail documentation required for government contractors and federal agencies.
                </p>
              </div>
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    Learn about compliance requirements
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
            </div>
          </div>

          {/* Federal Procurement Regulations - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/tablet.jpg" 
                    alt="Federal Procurement Regulations" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center  text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Federal Procurement Regulations</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Full compliance with federal procurement regulations including FAR requirements, DCAA cost accounting standards, and security protocols for government contractor merchant services.
                </p>
              </div>
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    Get compliance consultation
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
            
            </div>
          </div>

          {/* PoST Pilot Program Requirements - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/terminals.webp" 
                    alt="PoST Pilot Program Requirements" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">PoST Pilot Program Requirements</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Compliance with the PoST Pilot Program for 51V Schedule Contracts requiring Level III data on all GSA SmartPay transactions, giving participating vendors competitive advantages in government contracting.
                </p>
              </div>
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    Learn about compliance requirements
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
             
            </div>
          </div>

          {/* Government Charge Card Controls - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/Cloverpayments.webp" 
                    alt="Government Charge Card Controls" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Government Charge Card Controls</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Implementation of controls and safeguards required by the Government Charge Card Abuse Prevention Act with Level III line-item detail providing ready-made solutions for new requirements.
                </p>
              </div>
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    Get compliance consultation
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
            
            </div>
          </div>

          {/* State and Local Compliance - Image Left, Content Right */}
          <div className="card overflow-hidden group rounded-4xl h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative">
                <figure className="relative h-full">
                  <Image 
                     src="/mobilepayment.jpg" 
                    alt="State and Local Compliance" 
                    width={500} height={200}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">State and Local Compliance</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Compliance with state and local government procurement requirements, municipal purchasing policies, and educational institution payment processing regulations.
                </p>
              </div>
              
            
              <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 cursor-pointer ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    Learn about compliance requirements
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
            </div>
          </div>

          {/* Audit Trail and Documentation - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden group h-full rounded-4xl flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/IntegratedTerminal.jpg" 
                    alt="Audit Trail and Documentation" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center  text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Audit Trail and Documentation</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Comprehensive audit trail documentation, transaction reporting, and compliance records required for government audits, procurement reviews, and contract compliance verification.
                </p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
              
            
                <div className="text-left mt-4">
                    <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full  px-4 py-4 text-base font-bold text-black  transition-transform hover:-translate-y-1  focus:outline-none focus:ring-2 px-10 focus:ring-blue-400 ring-2 px-10 ring-blue-400  focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                    Get compliance consultation
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </button>
                </div>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
}