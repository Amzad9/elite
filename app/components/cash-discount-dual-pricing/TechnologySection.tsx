// components/TechnologySection.tsx
export default function TechnologySection() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-tr from-purple-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Advanced Dual Pricing Technology
          </h2>
          <p className="text-2xl text-blue-600 font-medium mb-6">
            Powered By Valor PayTech
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use the same terminal technology that powers major gas station chains across America.
          </p>
        </div>

        {/* Cards Container - Equal Height */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Terminal Models Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Compatible Valor PayTech Terminals
            </h3>
            
            <div className="space-y-6">
              {[
                { name: "VP550", desc: "Most popular countertop terminal" },
                { name: "VP350", desc: "Wireless portable terminal" },
                { name: "VP800", desc: "Advanced POS terminal" },
                { name: "VL550", desc: "PIN pad terminal" },
                { name: "Mobile Pay", desc: "Smartphone processing" }
              ].map((terminal, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="font-bold text-white">
                      {terminal.name.split(' ')[0].charAt(2)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{terminal.name}</h4>
                    <p className="text-gray-600 text-sm">{terminal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Card */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Key Technology Features
            </h3>
            
            <div className="space-y-6">
              {[
                "Automatic Price Calculation - No manual adjustments",
                "Clear Display - Both prices shown to customer",
                "Receipt Clarity - Shows chosen price and method",
                "No Programming Needed - We handle all setup",
                "Real-time Updates - Pricing adjustments instantly"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Bottom Section - Fills remaining space to equalize height */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-lg text-gray-800 leading-relaxed">
                Your customers see exactly what they'll pay before choosing - complete transparency.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <a href="#" className="inline-block relative bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <span>View All Terminal Options</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}