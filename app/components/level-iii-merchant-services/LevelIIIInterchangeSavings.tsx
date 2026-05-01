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
          Level III Interchange Rate Savings and Cost Optimization
        </h2>

        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden  rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/mobilepayment.jpg" 
                    alt="Visa Level III Interchange Rates" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Visa Level III Interchange Rates</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Significant savings with Level III data submission compared to Level I processing. Large ticket transactions over $8,000 qualify for commercial large ticket rates of 1.45% + $35 when properly qualified with complete Level III data capture.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Visa Savings">
                    View Visa Rate Savings
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </div>
          </div>

          {/* MasterCard Level III Interchange Rates - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/tablet.jpg" 
                    alt="MasterCard Level III Interchange Rates" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">MasterCard Level III Interchange Rates</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Optimized MasterCard Level III processing rates for corporate cards including Enhanced, World Business, and World Elite Business categories. Large ticket processing thresholds vary by card program - contact us for current qualification requirements.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About MasterCard Rates">
                    View MasterCard Optimization
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            
            </div>
          </div>

          {/* Government SmartPay Optimization - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/terminals.webp" 
                    alt="Government SmartPay Optimization" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Government SmartPay Optimization</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Specialized GSA SmartPay processing with Level III data capture provides the lowest possible interchange rates for government contractors while ensuring compliance with federal procurement requirements.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About SmartPay">
                    Learn About GSA SmartPay
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
             
            </div>
          </div>

          {/* Cost Comparison Analysis - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/Cloverpayments.webp" 
                    alt="Cost Comparison Analysis" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Cost Comparison Analysis</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Level III processing can save businesses up to 1.5% per transaction compared to Level I processing rates. Most government contractors and B2B businesses achieve significant monthly savings with proper Level III merchant services implementation.
                </p>
              </div>
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="View Cost Analysis">
                    View Savings Analysis
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            
            </div>
          </div>

          {/* Automatic Rate Qualification - Image Left, Content Right */}
          <div className="card overflow-hidden group rounded-4xl h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/mobilepayment.jpg" 
                    alt="Automatic Rate Qualification" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Automatic Rate Qualification</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Our specialized Level III credit card processing systems through Accept.Blue, USAePay, NMI, and Valor PayTech automatically capture required data fields to ensure qualification for lowest interchange rates without additional staff training or complex procedures.
                </p>
              </div>
              
            
              <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Auto-Qualification">
                    Learn About Auto-Qualification
                    <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </div>
          </div>

          {/* Monthly Savings Reporting - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden group h-full rounded-4xl flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/IntegratedTerminal.jpg" 
                    alt="Monthly Savings Reporting" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Monthly Savings Reporting</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Comprehensive reporting showing actual interchange savings achieved through Level III processing compared to standard rates, helping justify merchant services costs and demonstrate ROI.
                </p>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row gap-4">
                <div className="text-left mt-4">
                    <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="View Reporting Features">
                    View Savings Reports
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