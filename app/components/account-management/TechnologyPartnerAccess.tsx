// components/TechnologyPartnerAccess.tsx
export default function TechnologyPartnerAccess() {
  const SUPPORT_PHONE = "240-329-9424";

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-linear-to-tr from-teal-500/10 via-emerald-500/5 to-transparent rounded-full blur-[300px]" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 mb-4">
            Technology Partner Account Access and Support
          </h2>
        </div>

        {/* Three Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1: Valor PayTech Technology Solutions */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Valor PayTech Technology Solutions</h2>
            </div>
            
            <p className="text-gray-700">
              We proudly install Valor PayTech to almost all of our merchants. The product is great, and being able to support it is even better! Easy to use products and our fully trained staff are able to help you with any question or concern.
            </p>
          </div>

          {/* Card 2: Virtual Terminal Solutions */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Virtual Terminal Solutions</h2>
            </div>
            
            <p className="text-gray-700">
              For merchants that utilize virtual terminals or gateways, such as Accept Blue, Authorize.Net, we have knowledge and expertise in helping our merchants be successful. If you need support with any of the ones we work with, our support team is ready to help.
            </p>
          </div>

          {/* Card 3: Technology Support Partner */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Technology Support Partner</h2>
            </div>
            
            <p className="text-gray-700">
              As your technology support partner, we have hired the best to help with our client needs. Whether you need support for a credit card terminal on the counter, or your virtual terminal, our experienced staff is ready to help.
            </p>
          </div>
        </div>

        {/* Need Support Block */}
        <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            <span className="text-gray-800 text-lg">
              Need support? Call this number: <a href={`tel:${SUPPORT_PHONE.replace(/-/g, '')}`} className="text-blue-600 hover:text-blue-700 font-semibold">{SUPPORT_PHONE}</a>
            </span>
            <a href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shrink-0">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
