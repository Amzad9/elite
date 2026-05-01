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
          Flexible Seasonal ATM Rental Programs for Most States Events
        </h2>

        <div className="space-y-12 mt-5">
          {/* Short-Term Event ATM Rental - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/03-internal-images-1920w.webp" 
                    alt="Short-Term Event ATM Rental" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Short-Term Event ATM Rental</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Flexible rental periods from single-day events to multi-week festivals with professional delivery, installation, monitoring, cash management, and removal services coordinated around your event schedule.
                </p>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Short-Term Rental">
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Seasonal Business ATM Programs - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/Festival.avif" 
                    alt="Seasonal Business ATM Programs" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Seasonal Business ATM Programs</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Extended rental periods for seasonal businesses including summer camps, tourist attractions, and seasonal retail operations with competitive rates for longer-term seasonal placements and recurring seasonal arrangements.
                </p>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Seasonal Programs">
                  Explore Programs
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Festival and Fair ATM Packages - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/Event-Atm-Rental-2-795x402.jpg" 
                    alt="Festival and Fair ATM Packages" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Festival and Fair ATM Packages</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Comprehensive ATM services for outdoor events including weather-resistant equipment, enhanced security, high-capacity cash management, and 24/7 monitoring throughout your event duration.
                </p>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Festival Packages">
                  View Packages
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Holiday Market ATM Services - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/photo-on-side.webp" 
                    alt="Holiday Market ATM Services" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Holiday Market ATM Services</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Specialized ATM placement for holiday markets, Christmas tree lots, and seasonal retail operations with holiday branding options and flexible setup schedules to accommodate seasonal business needs.
                </p>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Holiday Services">
                  Get Holiday Quote
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Corporate Event ATM Rental - Image Left, Content Right */}
          <div className="card overflow-hidden group rounded-4xl h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/Pasadena_Rose.webp" 
                    alt="Corporate Event ATM Rental" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Corporate Event ATM Rental</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Professional ATM services for corporate events, weddings, and private gatherings with discreet placement, professional appearance, and coordinated setup and removal around your event timeline.
                </p>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Corporate Rental">
                  Request Quote
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden group h-full rounded-4xl flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/customizedautomatic.avif" 
                    alt="Custom Seasonal ATM Solutions" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Custom Seasonal ATM Solutions</h3>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Tailored seasonal ATM programs for unique events and businesses including specialized equipment, custom branding, unique placement requirements, and industry-specific support services.
                </p>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-4 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn About Custom Solutions">
                  Discuss Custom Needs
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
}
