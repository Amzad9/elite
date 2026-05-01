// components/LegalCompliance.tsx
export default function LegalCompliance() {
  return (
    <section className="relative py-16 px-4 md:px-8 overflow-hidden bg-linear-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-linear-to-br from-emerald-500/5 to-teal-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-linear-to-tl from-green-500/5 to-emerald-500/3 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-100 mb-4">
            <span className="text-sm font-medium text-emerald-700">FULLY COMPLIANT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            100% Legal in Most States
          </h2>
          <p className="text-2xl text-emerald-600 font-medium mb-8">
            Full Compliance Guaranteed
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Requirements */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Most States Requirements Met
              </h3>
              
              <div className="space-y-4">
                {[
                  "Proper Signage - Clear cash/card pricing displayed",
                  "Point of Sale Disclosure - Prices shown before payment",
                  "No Payment Discrimination - All payment types accepted",
                  "Consumer Protection Compliance - Most States AG approved",
                  "Network Rule Compliance - Visa/Mastercard certified"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Comparison */}
          <div className="bg-linear-to-br from-blue-50/30 to-cyan-50/20 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Dual Pricing Wins
            </h3>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Unlike surcharging (which has restrictions), dual pricing is legal nationwide 
              and fully accepted by all card networks.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Works in all 50 states</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">No network restrictions</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium text-gray-900">Full card network support</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <a href="#" className="inline-block relative bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <span>Choose the Better Solution</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          </div>
          
          <p className="mt-8 text-gray-600 text-lg">
            Join most states businesses with guaranteed legal compliance
          </p>
        </div>
      </div>
    </section>
  );
}