// components/DualPricingCTA.tsx
export default function DualPricingCTA() {
    const consultationItems = [
      "Current processing cost analysis",
      "Implementation timeline",
      "Dual pricing savings calculation", 
      "Staff training plan",
      "Most states compliance review",
      "Customer communication templates",
      "Terminal recommendation"
    ];
  
    return (
      <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-white to-gray-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-emerald-500/20 via-teal-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-linear-to-tl from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-[300px]" />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Start Eliminating Processing Fees Today
            </h2>
          </div>
  
          <div className="bg-linear-to-b from-white to-gray-50/50 rounded-2xl p-8 border border-gray-200 mb-12">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Free Dual Pricing Consultation Includes:
                </h3>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {consultationItems.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-gray-100 to-gray-200 flex items-center justify-center shrink-0">
                      <span className="font-bold text-gray-600">{index + 1}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">
                        {item}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800">
                    <span className="font-bold text-emerald-700">Most businesses save $1,000-$5,000 monthly.</span>{' '}
                    See your savings in 15 minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="text-center">
            <div className="relative inline-block group mb-6">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <button className="relative bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center gap-3">
                  <span>Get Your Free Consultation</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
            </div>
            
            <p className="text-gray-500 text-sm">
              No cost • No obligation • 15-minute call
            </p>
          </div>
        </div>
      </section>
    );
  }