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
              Advanced Level III Credit Card Processing Features
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Complete Line-Item Detail Capture</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Comprehensive Level III data collection including item part numbers, descriptions, quantities, unit of measure, pricing, tax amounts, and freight charges - all integrated with your merchant services platform for maximum interchange savings.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/cardproceesing.jpg"
                  alt="Credit card processing terminal with detailed transaction data"
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
                  alt="Government compliance documentation and reporting"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Government Compliance and Reporting</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                GSA SmartPay compliance, federal procurement regulations adherence, and detailed transaction reporting required for government contracts and audits through specialized merchant services.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Corporate Purchasing Integration</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Integration with corporate purchasing systems, accounting software, and expense management platforms for seamless B2B payment processing and automated reconciliation.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1594025742030-8702f7ec0fe1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Corporate purchasing system integration dashboard"
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
                  src="/Interchange.jpeg"
                  alt="Interchange rate optimization analytics dashboard"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Interchange Rate Optimization</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Automatic qualification for lowest Level III interchange rates with proper data submission, saving significant processing costs compared to Level I and Level II transactions.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Enhanced Security and Controls</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Advanced fraud protection, spending controls, employee authorization levels, and transaction monitoring specifically designed for government and corporate Level III processing.
              </p>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="absolute -inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-3xl rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                <Image
                  src="/Enhanced.webp"
                  alt="Enhanced security monitoring and fraud protection system"
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
                  src="/detailedanalytics.jpg"
                  alt="Detailed analytics and reporting dashboard"
                  width={500}
                  height={500}
                  className="object-cover w-full h-96 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Detailed Analytics and Reporting</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Comprehensive reporting including spending analysis, vendor performance tracking, budget monitoring, and compliance reporting for government contractors and corporate clients.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
           
            <a href="/getquote" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 md:px-10 py-5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
              Get government processing quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}