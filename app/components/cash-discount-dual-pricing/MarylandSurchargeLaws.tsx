// components/MarylandSurchargeLaws.tsx
export default function MarylandSurchargeLaws() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-url['https://images.pexels.com/photos/5060979/pexels-photo-5060979.jpeg'] bg-cover bg-no-repeat">
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/50 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-linear-to-tr from-gray-500/90 via-green-900/30 to-transparent rounded-full blur-[300px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-12">  
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Most States Surcharge Laws
            <span className="block text-2xl md:text-3xl font-normal text-gray-600 mt-2">
              Legal But Complex vs. Simple Dual Pricing
            </span>
          </h2>
        </div>

        {/* Quick Status */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-b from-emerald-50 to-white rounded-2xl p-6 border border-emerald-100 text-center">
            <div className="text-3xl font-bold text-emerald-600 mb-2">✓</div>
            <h4 className="font-bold text-gray-900 mb-1">Legal Status</h4>
            <p className="text-gray-600 text-sm">Surcharging is permitted</p>
          </div>
          
          <div className="bg-linear-to-b from-amber-50 to-white rounded-2xl p-6 border border-amber-100 text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">⚠</div>
            <h4 className="font-bold text-gray-900 mb-1">Debit Cards</h4>
            <p className="text-gray-600 text-sm">Cannot surcharge</p>
          </div>
          
          <div className="bg-linear-to-b from-red-50 to-white rounded-2xl p-6 border border-red-100 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">📝</div>
            <h4 className="font-bold text-gray-900 mb-1">Registration</h4>
            <p className="text-gray-600 text-sm">Required with networks</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Surcharge Complexities */}
          <div className="bg-linear-to-b from-white to-red-50/10 rounded-2xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-red-500 to-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.884-.833-2.654 0L4.285 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Surcharge Complexities</h3>
            </div>
            
            <div className="space-y-4">
              {[
                "30-day network registration",
                "Cannot surcharge debit cards",
                "Complex signage requirements",
                "Separate receipt formatting"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-b from-white to-emerald-50/10 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dual Pricing Simplicity</h3>
            </div>
            
            <div className="space-y-4">
              {[
                "No registration required",
                "Works with all payment types",
                "Simple, clear signage",
                "Standard receipts work"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white/30 rounded-xl">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Same Savings</h4>
            <p className="text-gray-600 text-sm">Eliminate fees with less complexity</p>
          </div>

          <div className="text-center p-6 bg-white/30 rounded-xl">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">90% Less Work</h4>
            <p className="text-gray-600 text-sm">Minimal compliance requirements</p>
          </div>

          <div className="text-center p-6 bg-white/30 rounded-xl">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Better Acceptance</h4>
            <p className="text-gray-600 text-sm">Customers prefer transparency</p>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 text-center mb-12">
          <p className="text-xl text-gray-800 leading-relaxed">
            While surcharging is legal in most states, dual pricing offers the same savings with 
            <span className="font-bold text-blue-600"> much less complexity</span> and 
            <span className="font-bold text-emerald-600"> better customer acceptance</span>.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <a href="#" className="inline-block relative bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <span>Choose the Simpler Solution</span>
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