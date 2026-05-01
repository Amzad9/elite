// components/DualPricingIndustries.tsx
export default function DualPricingIndustries() {
    const industries = [
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        ),
        title: "Restaurants & Food Service",
        description: "Protect thin margins while offering customer payment flexibility. Perfect for most states restaurants, cafes, and food trucks.",
        gradient: "from-orange-500 to-red-500"
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        ),
        title: "Retail & Specialty Stores",
        description: "Eliminate processing fees while staying competitive. Ideal for boutiques, hardware stores, and gift shops.",
        gradient: "from-blue-500 to-indigo-500"
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: "Service Businesses",
        description: "Great for contractors, auto repair, salons, and professional services throughout most states.",
        gradient: "from-teal-500 to-emerald-500"
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        ),
        title: "High-Volume Businesses",
        description: "Maximum savings for businesses processing significant monthly volumes. Gas stations, convenience stores, and more.",
        gradient: "from-purple-500 to-pink-500"
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: "Firearms Businesses",
        description: "Firearms dealers welcome - dual pricing perfect for gun stores and shooting ranges.",
        gradient: "from-amber-500 to-orange-500"
      },
      {
        icon: (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: "Government Contractors",
        description: "Maintain compliance while reducing costs for government and utility processing.",
        gradient: "from-gray-600 to-blue-800"
      }
    ];
  
    const counties = [
      { name: "Washington County", city: "Hagerstown", emoji: "🍟" },
      { name: "Frederick County", emoji: "🍟" },
      { name: "Baltimore County & City", emoji: "🍟" },
      { name: "Anne Arundel County", city: "Annapolis", emoji: "🍟" },
      { name: "Montgomery County", emoji: "🍟" }
    ];
  
    return (
      <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-blue-200 via-white to-blue-50">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/20 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-linear-to-tr from-green-500/10 via-emerald-900/5 to-transparent rounded-full blur-[300px]" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Dual Pricing: Perfect For Most States Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored payment solutions designed specifically for every type of business across most states
            </p>
          </div>
  
          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-linear-to-b from-white to-gray-50/80 rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${industry.gradient} flex items-center justify-center shadow-lg`}>
                    <div className="text-white">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {industry.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {industry.description}
                </p>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-r from-blue-100 to-cyan-100 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-600">Perfect for most states businesses</span>
                </div>
              </div>
            ))}
          </div>
  
          {/* Geographic Coverage */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Geographic Coverage</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Serving businesses across most states with comprehensive payment solutions
              </p>
            </div>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {counties.map((county, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{county.emoji}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {county.name}
                      </h3>
                      {county.city && (
                        <p className="text-gray-600 text-sm">
                          {county.city}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-500">Full coverage available</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }