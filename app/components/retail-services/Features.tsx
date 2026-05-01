// components/Features.tsx
import Image from "next/image";
import Link from "next/link";

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
              Advanced Retail POS System Features That Boost Retail Performance
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800"
              >
                Complete Retail Credit Card Processing Integration
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                All retail POS systems include fully integrated retail payment processing with competitive merchant services rates. Add cash discount programs to eliminate retail processing fees entirely.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/retail-services/Complete.png"
                  alt="Retail POS system with integrated credit card processing"
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
                  src="/retail-services/Inventory.png"
                  alt="Inventory management and barcode scanning in retail"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800"
              >
                Inventory Management and Barcode Scanning
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Real-time inventory tracking, barcode scanning, automatic reorder alerts, product performance analytics, and seasonal inventory management - all integrated with your retail credit card processing and merchant services platform.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800"
              >
                Customer Management and Loyalty Programs
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Built-in customer database with purchase history, loyalty program integration, targeted marketing capabilities, and customer retention strategies connected to your retail merchant services.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/retail-services/Customer.png"
                  alt="Customer management and loyalty program dashboard"
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
                  src="/retail-services/Sales.png"
                  alt="Sales reporting and analytics dashboard"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800"
              >
                Sales Reporting and Analytics
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Comprehensive retail business reporting including sales analytics, employee performance tracking, profit margin analysis, inventory turnover reports, and detailed retail credit card processing statements.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800"
              >
                Multi-Location Retail Management
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Centralized management for multiple retail locations with real-time inventory synchronization, unified customer databases, and consolidated retail payment processing reporting.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/retail-services/Multi-location.png"
                  alt="Multi-location retail management system"
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
                  src="/retail-services/commerce.png"
                  alt="E-commerce integration with retail POS"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl font-bold text-gray-800"
              >
                E-commerce Integration
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Connect your retail POS system with online stores, marketplaces, social media selling, and complete retail merchant services for omnichannel retail payment processing.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
          
            <a href="/getquote" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 md:px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Get retail merchant services quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}