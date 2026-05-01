// components/HowItWorks.tsx
export default function HowItWorks() {
  return (
    <section className="relative py-24 px-4 md:px-8 overflow-hidden bg-linear-to-b from-white to-gray-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/5 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-linear-to-tr from-emerald-500/5 via-teal-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-10 w-64 h-64 border border-blue-300/20 rounded-full" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
        
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How Dual Pricing Works
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eliminate credit card processing fees with this proven three-step system
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/10 to-blue-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-linear-to-b from-white to-gray-50/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 text-white text-3xl font-bold mb-6 shadow-lg">
                1
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Set Your Cash Price
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                This becomes your base price - what you want to receive after all fees. The amount that goes directly into your pocket.
              </p>
              
              <div className="bg-linear-to-r from-blue-50/80 to-white border border-blue-100 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 font-medium mb-2">Your Desired Profit</div>
                  <div className="text-3xl font-bold text-gray-900">$12.00</div>
                  <div className="text-sm text-gray-500 mt-2">Cash price per item</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-emerald-500/10 to-teal-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-linear-to-b from-white to-gray-50/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-600 text-white text-3xl font-bold mb-6 shadow-lg">
                2
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Terminal Calculates Card Price
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our Valor PayTech terminals automatically add the convenience fee (typically 3-4%) to cover card processing costs.
              </p>
              
              <div className="bg-linear-to-r from-emerald-50/80 to-white border border-emerald-100 rounded-xl p-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500 font-medium mb-2">Automatic Calculation</div>
                  <div className="text-3xl font-bold text-gray-900">$12.48</div>
                  <div className="text-sm text-gray-500 mt-2">Card price (4% fee)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-purple-500/10 to-purple-400/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-linear-to-b from-white to-gray-50/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-purple-600 text-white text-3xl font-bold mb-6 shadow-lg">
                3
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Customer Sees Both Options
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Both prices clearly displayed - customer selects their preferred payment method. No surprises, complete transparency.
              </p>
              
              <div className="bg-linear-to-r from-purple-50/80 to-white border border-purple-100 rounded-xl p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-gray-700">Cash Option</div>
                    <div className="text-2xl font-bold text-gray-900">$12.00</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-700">Card Option</div>
                    <div className="text-2xl font-bold text-gray-900">$12.48</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Example Section */}
        <div className="relative mb-20">
          <div className="absolute -inset-4 bg-linear-to-r from-amber-500/5 to-orange-500/5 rounded-3xl blur-xl" />
          <div className="relative bg-linear-to-b from-white to-amber-50/20 rounded-3xl p-8 md:p-12 border border-amber-100/50 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Real-World Example</h3>
                <p className="text-gray-600">See how the numbers work in practice</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Side - Costs */}
              <div className="space-y-6">
                <div className="bg-linear-to-r from-blue-50/80 to-white border border-blue-100 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Costs & Profit</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Item cost to provide</span>
                      <span className="font-semibold text-gray-900">$10.00</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Your desired profit</span>
                      <span className="font-semibold text-gray-900">$2.00</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-linear-to-r from-green-50 to-emerald-50 rounded-lg px-4">
                      <span className="font-semibold text-gray-900">Cash Price</span>
                      <span className="text-2xl font-bold text-green-600">$12.00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Calculations */}
              <div className="space-y-6">
                <div className="bg-linear-to-r from-emerald-50/80 to-white border border-emerald-100 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Automatic Calculation</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Cash price</span>
                      <span className="font-semibold text-gray-900">$12.00</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600">Convenience fee (4%)</span>
                      <span className="font-semibold text-gray-900">$0.48</span>
                    </div>
                    <div className="flex justify-between items-center py-3 bg-linear-to-r from-gray-50 to-gray-100 rounded-lg px-4">
                      <span className="font-semibold text-gray-900">Card Price</span>
                      <span className="text-2xl font-bold text-gray-900">$12.48</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Result Summary */}
            <div className="mt-8 pt-8 border-t border-amber-100">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-green-50 to-emerald-50 border border-emerald-100 mb-4">
                  <div className="w-2 h-2 bg-linear-to-r from-green-500 to-emerald-500 rounded-full mr-2" />
                  <span className="text-sm font-medium text-emerald-700">KEY TAKEAWAY</span>
                </div>
                <p className="text-xl text-gray-700">
                  <span className="font-bold text-emerald-600">You receive $12 either way</span> - customers choose how to pay, 
                  <span className="font-semibold text-gray-900"> you eliminate processing fees</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
            <a href="#" className="inline-block relative bg-linear-to-r from-blue-600 via-cyan-600 to-indigo-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-blue-500/30 hover:shadow-3xl hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-center gap-3">
                <span>Start Saving with Dual Pricing</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </a>
          </div>
          
          <p className="mt-10 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses already using this proven method to eliminate processing fees and increase profits.
          </p>
        </div>
      </div>
    </section>
  );
}