// components/Features.tsx
import Image from "next/image";

export default function Features() {
  return (
    <>
      <section className="py-6 p-3 md:px-6 rounded-2xl">
        <div className="container mx-auto space-y-24 p-3 rounded-xl relative">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-230 left-120 w-120 h-120 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

          <div className="space-y-10 text-center max-w-4xl mx-auto lg:text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto text-center font-bold text-black mb-6 leading-tight">
              Advanced Online Food Ordering Features for Restaurant Success
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Real-Time Menu Synchronization</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Dynamic menu updates with real-time inventory management, automatic item availability, modifier tracking, and pricing synchronization between your restaurant POS and online ordering platform.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/cardproceesing.jpg"
                  alt="Tablet POS system on restaurant counter"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div className="relative group">
              <div className="absolute -inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/mobilepayment.jpg"
                  alt="Modern retail payment terminals comparison"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Customer Order Management</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Comprehensive order management system with order tracking, customer notifications, preparation time estimates, pickup scheduling, and delivery coordination integrated with your restaurant operations.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">	Restaurant Branding and Customization</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Custom website design, logo integration, brand color schemes, promotional banners, and personalized customer experience that maintains your restaurant's unique identity and marketing message.              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1594025742030-8702f7ec0fe1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="iPad POS system for service businesses"
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
                  src="https://plus.unsplash.com/premium_photo-1667518228939-5d897e4fce81?q=80&w=2657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Multi-location warehouse and inventory management dashboard"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Order Analytics and Reporting</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Detailed online ordering analytics including customer behavior tracking, popular menu items, order timing patterns, and comprehensive reporting to optimize your restaurant's online sales performance.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Customer Database Management</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Advanced customer relationship management with order history, preferences, contact information, loyalty program integration, and targeted marketing capabilities for repeat customer engagement.              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/terminals.webp"
                  alt="iPad POS system for service businesses"
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
                  src="/customerpaying.jpg"
                  alt="Multi-location warehouse and inventory management dashboard"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Multi-Location Restaurant Support</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Centralized online ordering management for restaurant chains and franchises with location-specific menus, unified branding, consistent customer experience, and consolidated reporting across all locations.              </p>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
            <a href="#" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 md:px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Get online ordering pricing
            </a>
          </div>
        </div>
      </section>
    </>
  );
}