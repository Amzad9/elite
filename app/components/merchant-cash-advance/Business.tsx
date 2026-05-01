import Image from "next/image";
import Link from "next/link";

export default function Business() {
  return (
    <>
      <section className="md:py-6 px-2 md:px-6 rounded-2xl">
        <div className="container mx-auto space-y-24 rounded-xl relative">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-230 left-120 w-120 h-120 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Updated Business Financing Programs Section */}
          <div className="space-y-10 text-center max-w-4xl mx-auto lg:text-center mb-16 mt-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Professional Business Financing Programs for Every Business Need
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Standard Merchant Cash Advance
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Receive immediate cash in exchange for a portion of your future credit card sales with automated daily repayment, flexible terms, and funding amounts from $5,000 to $250,000 based on your monthly processing volume.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/merchant-cash-advance/b1.png"
                  alt="Merchant cash advance financial growth"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/merchant-cash-advance/b2.png"
                  alt="Same-day business funding"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Same-Day Funding Programs
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Expedited merchant cash advance with same-day funding approval and next-business-day deposit for urgent business financing needs, equipment purchases, inventory expansion, and time-sensitive opportunities.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Seasonal Business Financing
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Specialized cash advance programs for seasonal businesses with flexible repayment schedules that accommodate seasonal sales fluctuations, peak season preparation, and off-season cash flow management.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/merchant-cash-advance/b3.png"
                  alt="Seasonal business financing solutions"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/merchant-cash-advance/b4.png"
                  alt="Multi-location business funding"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Multi-Location Business Funding
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Comprehensive financing solutions for businesses with multiple locations including consolidated applications, unified repayment structures, and scalable funding amounts based on combined processing volume.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
            <a href="/contact" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Apply for business financing now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}