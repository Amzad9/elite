// components/Features.tsx
import Image from "next/image";

export default function Business() {
  return (
    <>
      <section className="md:py-6 px-2 md:px-6 rounded-2xl bg-gray-100 overflow-hidden">
        <div className="container mx-auto space-y-24 rounded-xl relative">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-230 left-120 w-120 h-120 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="space-y-10 text-center max-w-4xl mx-auto lg:text-center mb-16 mt-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Integrated Retail Merchant Services for Every Retail Business Type
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/restaurants/traditional.png"
                    alt="Traditional retail store solutions"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Traditional Retail Store Solutions</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Complete retail merchant services with integrated payment processing, including inventory management, customer databases, and sales reporting. Our retail POS system options include Clover POS and specialized retail platforms with full retail credit card processing integration.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/restaurants/Boutique.png"
                    alt="Boutique and specialty store processing"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Boutique and Specialty Store Processing</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Streamlined retail payment processing for fashion boutiques, gift shops, and specialty retailers. Our retail merchant services include customer loyalty programs, seasonal inventory management, and integrated retail credit card processing systems.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - 2 Cards */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Card 3 */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/restaurants/Multi-location.png"
                    alt="Multi-location retail processing"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Multi-Location Retail Processing</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Centralized retail merchant services for chain stores and franchises with real-time inventory synchronization, unified reporting, and consistent retail payment processing across all locations.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
                <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                  <Image
                    src="/restaurants/rp.png"
                    alt="Multi-channel retail processing"
                    width={500}
                    height={500}
                    className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Multi-Channel Retail Processing</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Integrated retail payment processing connecting online stores with physical locations, including inventory synchronization, customer data management, and unified retail merchant services platforms.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
          
            <a href="/getquote" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Schedule retail payment processing consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}