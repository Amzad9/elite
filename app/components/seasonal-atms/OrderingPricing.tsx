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
          Free Seasonal ATM Planning for Events and Businesses
        </h2>

        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/03-internal-images-1920w.webp" 
                    alt="Event ATM Assessment" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Event ATM Assessment</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Comprehensive evaluation of your event or seasonal business including attendance projections, customer demographics, transaction volume estimates, optimal ATM placement positioning, and revenue potential analysis.
                </p>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Event ATM Assessment">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/SeasonalRevenue.jpg" 
                    alt="Seasonal Revenue Projections" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Seasonal Revenue Projections</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Detailed financial analysis including transaction volume estimates based on event type, duration, and attendance with revenue projections, cost analysis, and return on investment calculations for your seasonal ATM placement.
                </p>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Seasonal Revenue Projections">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Equipment and Placement Recommendations - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/aab809c1-4981-40a4-8f2d-590831b66f9f.jpg" 
                    alt="Equipment and Placement Recommendations" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Equipment and Placement Recommendations</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Professional equipment selection based on your event requirements, location constraints, security considerations, weather conditions, and customer accessibility needs.
                </p>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Equipment and Placement Recommendations">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Installation and Logistics Planning - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="https://plus.unsplash.com/premium_photo-1681074963633-0e91aa0676ab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Installation and Logistics Planning" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Installation and Logistics Planning</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Complete installation planning including delivery scheduling, site preparation, power requirements, security considerations, and coordination with your event timeline and operational needs.
                </p>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Installation and Logistics Planning">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Event Support and Monitoring Planning - Image Left, Content Right */}
          <div className="card overflow-hidden group rounded-4xl h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/iStock-669853862-1024x710.jpg" 
                    alt="Event Support and Monitoring Planning" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Event Support and Monitoring Planning</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Comprehensive support planning including cash management procedures, monitoring protocols, technical support availability, and emergency response procedures throughout your event duration.
                </p>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Event Support and Monitoring Planning">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Custom Seasonal Solutions - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden group h-full rounded-4xl flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/IntegratedTerminal.jpg" 
                    alt="Custom Seasonal Solutions" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Custom Seasonal Solutions</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Tailored seasonal ATM solutions for unique events and businesses including specialized equipment, custom branding, unique operational requirements, and industry-specific considerations.
                </p>
              </div>
              <div className="text-left mt-4">
                <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Custom Seasonal Solutions">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div className="text-center mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-white bg-linear-to-r from-blue-600 to-cyan-600 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white shadow-lg hover:shadow-xl" aria-label="Get free seasonal ATM planning">
                Get free seasonal ATM planning
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
              <button className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-white bg-linear-to-r from-emerald-600 to-teal-600 transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-emerald-400 ring-2 ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white shadow-lg hover:shadow-xl" aria-label="Schedule event consultation">
                Schedule event consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}