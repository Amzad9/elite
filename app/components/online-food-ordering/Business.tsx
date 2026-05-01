// components/Features.tsx
import Image from "next/image";
import NoviEatsOnlineOrdering from "./NoviEatsOnlineOrdering";

export default function Business() {
  return (
    <>
      <section className="md:py-6 px-2 md:px-6 rounded-2xl">
        <div className="container mx-auto space-y-24 rounded-xl relative">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-230 left-120 w-120 h-120 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="space-y-10 text-center max-w-4xl mx-auto lg:text-center mb-16 mt-8">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            Complete Restaurant Merchant Services with Novi Eats Online Ordering
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Integrated Online Payment Processing</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              Seamless merchant services integration with competitive restaurant processing rates, transparent pricing, and complete online payment acceptance through your Novi Eats platform. Accept all major credit cards, debit cards, and digital payments.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/onlinefoodordering/on1.png"
                  alt="Tablet POS system on restaurant counter"
                  width={500}
                  height={500}
                  className="object-cover w-full h-120 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/onlinefoodordering/on2.png"
                  alt="Modern retail payment terminals comparison"
                  width={500}
                  height={500}
                  className="object-cover w-full h-120 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Secure Online Transaction Processing</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              Advanced security features including SSL encryption, PCI DSS compliance, fraud protection, and secure payment processing designed to protect your restaurant and customers during online ordering.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Mobile Payment Integration</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              Complete mobile payment support including Apple Pay, Google Pay, Samsung Pay, and other digital wallet options providing convenient and secure payment methods for online food ordering customers.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/onlinefoodordering/on3.png"
                  alt="iPad POS system for service businesses"
                  width={500}
                  height={500}
                  className="object-cover w-full h-120 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/onlinefoodordering/on4.png"
                  alt="Multi-location warehouse and inventory management dashboard"
                  width={500}
                  height={500}
                  className="object-cover w-full h-120 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Real-Time Payment Authorization</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                 Instant payment authorization, real-time transaction processing, immediate order confirmation, and automated receipt delivery through your integrated Novi Eats and merchant services solution.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Restaurant-Specific Payment Features</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              Tip processing for delivery orders, tax calculation, promotional pricing, discount codes, and flexible payment options all processed through your integrated Novi Eats online ordering platform.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/onlinefoodordering/on5.png"
                  alt="iPad POS system for service businesses"
                  width={500}
                  height={500}
                  className="object-cover w-full h-120 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>


          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/onlinefoodordering/on6.png"
                  alt="Multi-location warehouse and inventory management dashboard"
                  width={500}
                  height={500}
                  className="object-cover w-full h-120 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Comprehensive Transaction Reporting</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Detailed payment reporting, online sales analytics, transaction tracking, and comprehensive financial reporting integrated with your restaurant POS and merchant services account.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
            <a href="#" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Get processing rate quote          
            </a>
          </div>
        </div>
      </section>

      {/* Professional Restaurant Online Ordering Platform Section */}
      <section className="md:py-12 px-2  rounded-2xl bg-gray-50">
        <div className="container mx-auto rounded-xl relative">
          <div className="space-y-10 text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
              Professional Restaurant Online Ordering Platform For Every Restaurant Type
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Novi Eats Website Integration</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete online food ordering system with seamless website integration, custom branding, mobile-responsive design, and professional appearance that matches your restaurant&apos;s brand and customer experience.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Mobile-Friendly Online Ordering</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized mobile ordering experience with fast loading times, intuitive navigation, easy menu browsing, and streamlined checkout process designed for smartphone and tablet users.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Advanced Menu Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive menu management system with real-time updates, modifier options, combo meals, daily specials, and inventory synchronization to ensure accurate online ordering availability.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrated Payment Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure online payment processing with credit card acceptance, digital wallet support, and integrated merchant services providing competitive rates and seamless transaction processing.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          
            <a href="/contact" className="group inline-block items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
              Schedule online ordering demonstration
            </a>
          </div>
        </div>
      </section>
    </>
  );
}