// components/PricingComparison.tsx
export default function PricingComparison() {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/50 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-linear-to-tr from-indigo-500/50 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] bg-linear-to-tl from-blue-500/30 via-sky-500/5 to-transparent rounded-full blur-3xl" />
      
      <div className="absolute top-10 right-10 w-64 h-64 border border-blue-300/20 rounded-full" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-cyan-300/20 rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
        
          
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            You've Seen This At  Every Gas Station
          </h2>
          
          <p className="text-2xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            This same <span className="font-semibold text-blue-600">dual-pricing strategy</span> that saves drivers money can eliminate your processing fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20 relative z-10">
          <div className="relative group transform transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-400/30 via-cyan-400/30 to-blue-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-linear-to-r from-blue-400/20 to-cyan-400/20 rounded-3xl p-px">
              <div className="absolute inset-0 bg-white rounded-3xl" />
            </div>
            
            <div className="relative bg-linear-to-b from-white to-gray-50/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl shadow-blue-100/50">
              <div className="text-center mb-8">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 rounded-2xl blur-md opacity-50" />
                  <div className="relative w-20 h-20 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Gas Station</h3>
                <p className="text-gray-600 font-medium">Regular Unleaded</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                  <span className="text-sm font-medium text-blue-700">4% Savings</span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-blue-50/80 to-white border border-blue-100 p-6 group/pricing">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-blue-500/10 to-transparent rounded-full -translate-y-12 translate-x-12" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-linear-to-r from-green-500 to-emerald-500 rounded-full" />
                        <span className="text-lg font-semibold text-gray-800">Cash Price</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">No processing fees</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$3.45</div>
                      <span className="text-sm text-gray-500">per gallon</span>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-gray-50/80 to-white border border-gray-200 p-6 group/pricing">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-gray-500/10 to-transparent rounded-full -translate-y-12 translate-x-12" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-linear-to-r from-gray-600 to-gray-800 rounded-full" />
                        <span className="text-lg font-semibold text-gray-800">Card Price</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">Includes 4% fee</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$3.59</div>
                      <span className="text-sm text-gray-500">per gallon</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group transform transition-all duration-500 hover:-translate-y-2">
            <div className="absolute -inset-1 bg-linear-to-r from-emerald-400/30 via-teal-400/30 to-emerald-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute inset-0 bg-linear-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl p-px">
              <div className="absolute inset-0 bg-white rounded-3xl" />
            </div>
            
            <div className="relative bg-linear-to-b from-white to-gray-50/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl shadow-emerald-100/50">
              <div className="text-center mb-8">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-500 to-teal-500 rounded-2xl blur-md opacity-50" />
                  <div className="relative w-20 h-20 bg-linear-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fine Dining</h3>
                <p className="text-gray-600 font-medium">Premium Burger</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
                  <span className="text-sm font-medium text-emerald-700">4% Savings</span>
                </div>
              </div>

              <div className="space-y-5">
                <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-emerald-50/80 to-white border border-emerald-100 p-6 group/pricing">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-emerald-500/10 to-transparent rounded-full -translate-y-12 translate-x-12" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-linear-to-r from-green-500 to-emerald-500 rounded-full" />
                        <span className="text-lg font-semibold text-gray-800">Cash Price</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">No processing fees</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$12.00</div>
                      <span className="text-sm text-gray-500">per burger</span>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-gray-50/80 to-white border border-gray-200 p-6 group/pricing">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-gray-500/10 to-transparent rounded-full -translate-y-12 translate-x-12" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-linear-to-r from-gray-600 to-gray-800 rounded-full" />
                        <span className="text-lg font-semibold text-gray-800">Card Price</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">Includes 4% fee</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$12.48</div>
                      <span className="text-sm text-gray-500">per burger</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Retail Store Card */}
          <div className="relative group transform transition-all duration-500 hover:-translate-y-2">
            {/* Card Glow Effect */}
            <div className="absolute -inset-1 bg-linear-to-r from-purple-400/30 via-pink-400/30 to-purple-400/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Card Border Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-purple-400/20 to-pink-400/20 rounded-3xl p-px">
              <div className="absolute inset-0 bg-white rounded-3xl" />
            </div>
            
            <div className="relative bg-linear-to-b from-white to-gray-50/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-2xl shadow-purple-100/50">
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl blur-md opacity-50" />
                  <div className="relative w-20 h-20 bg-linear-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Retail Store</h3>
                <p className="text-gray-600 font-medium">Featured Product</p>
                <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
                  <span className="text-sm font-medium text-purple-700">3.5% Savings</span>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="space-y-5">
                <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-purple-50/80 to-white border border-purple-100 p-6 group/pricing">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-purple-500/10 to-transparent rounded-full -translate-y-12 translate-x-12" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-linear-to-r from-green-500 to-emerald-500 rounded-full" />
                        <span className="text-lg font-semibold text-gray-800">Cash Price</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">No processing fees</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$50.00</div>
                      <span className="text-sm text-gray-500">per item</span>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-gray-50/80 to-white border border-gray-200 p-6 group/pricing">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-gray-500/10 to-transparent rounded-full -translate-y-12 translate-x-12" />
                  <div className="flex justify-between items-center relative">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-linear-to-r from-gray-600 to-gray-800 rounded-full" />
                        <span className="text-lg font-semibold text-gray-800">Card Price</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">Includes 3.5% fee</span>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">$51.75</div>
                      <span className="text-sm text-gray-500">per item</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center relative z-10">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
              <a href="#" className="inline-block relative bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-14 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <span>Eliminate Your Processing Fees</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          </div>
          
          <p className="mt-10 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <span className="font-semibold text-blue-600">Decades of customer acceptance</span> means you can implement this strategy today and start saving immediately.
          </p>
        </div>
      </div>
    </section>
  );
}