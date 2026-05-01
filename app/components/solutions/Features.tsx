import Image from "next/image";
import Link from "next/link";
import CTA from "./CTA";
import ContactEliteCardProcessing from "./ContactEliteCardProcessing";

export default function Features() {
  return (
    <>
          <section className="py-6 p-3 md:px-6 rounded-2xl">

 
      <div className="container mx-auto space-y-24 p-0  md:p-12 rounded-xl relative">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-230 left-120 w-120 h-120 bg-indigo-400/15 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="space-y-10 text-center max-w-4xl mx-auto lg:text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto text-center font-bold text-black mb-6 leading-tight">
            Advanced Merchant Services Features That Boost Business Performance            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-colors block">
                Complete Credit Card Processing Integration
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
              All POS systems include fully integrated credit card processing with competitive merchant services rates. Add cash discount programs to eliminate processing fees entirely while maintaining seamless payment processing.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/pointsystems/features/f1.png"
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
                  src="/pointsystems/features/f2.png"
                  alt="Modern retail payment terminals comparison"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-colors block">
                All-in-One Payment Management
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Real-time inventory tracking, automatic reorder alerts, product performance analytics, and multi-location synchronization - all integrated with your credit card processing and merchant account services.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-colors block">
                Customer Management and Payment Processing
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
              Built-in customer database with purchase history, loyalty program integration, and targeted marketing capabilities, all connected to your merchant services platform for comprehensive business management.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/pointsystems/features/f3.png"
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
                  src="/pointsystems/features/f4.png"
                  alt="Multi-location warehouse and inventory management dashboard"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 transition-colors block">
                Comprehensive Merchant Services Reporting
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
              Advanced business reporting including sales analytics, employee performance tracking, profit margin analysis, tax reporting, and detailed credit card processing statements from your merchant account provider.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 block">
                Integrated Payment Solutions
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Connect your POS system with e-commerce platforms, online food ordering, social media marketing tools, and complete merchant services for omnichannel payment processing.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/pointsystems/features/f5.png"
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
                  src="/pointsystems/features/f6.png"
                  alt="Multi-location warehouse and inventory management dashboard"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Mobile Payment Processing
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Accept payments anywhere with mobile POS apps, wireless terminals, and tablet-based solutions perfect for food trucks, farmers markets, and off-site events - all with integrated credit card processing.
              </p>
            </div>
          </div>

          
             <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">         
               <a href="/getquote" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 md:px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Get merchant services quote
              </a>
            </div>
        </div>
        </section>
      <ContactEliteCardProcessing />
      <CTA />
    </>
  );
}