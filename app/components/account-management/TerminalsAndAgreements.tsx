// components/TerminalsAndAgreements.tsx
export default function TerminalsAndAgreements() {
    return (
      <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-linear-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[300px]" />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Merchant Agreement Documents and Regulatory Information
            </h2>
          </div>
  
          {/* Two Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Merchant Agreement Documentation */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Merchant Agreement Documentation</h2>
              </div>
              
              <p className="text-gray-700 mb-8">
                Access complete merchant agreement terms and conditions, processing guidelines, and comprehensive merchant services documentation.
              </p>
  
              {/* Month-to-Month Agreement Terms */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Month-to-Month Agreement Terms:</h3>
                <div className="space-y-3">
                  {[
                    { label: "M2M Terms & Conditions", href: "https://elitecardprocessing.com/wp-content/uploads/2023/10/Nov-2023-ELITE-NTI-Citizens-Merchant-Agreement-Terms-M2M.pdf" },
                    { label: "3-Year Terms & Conditions", href: "https://elitecardprocessing.com/wp-content/uploads/2023/10/Nov-2023-ELITE-NTI-Citizens-Merchant-Agreement-Terms-3YR.pdf" }
                  ].map((item, index) => (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 group">
                      <div className="w-6 h-6 rounded-full bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-blue-600 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-blue-700">{item.label}</span>
                    </a>
                  ))}
                </div>
              </div>
  
            
            </div>
  
            {/* Card 2: Regulatory Information */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Regulatory Information</h2>
              </div>
              
              <div className="mb-8">
                <p className="text-gray-700 mb-6">
                  Elite Card Processing LLC is a registered ISO of Citizens Bank, Providence, RI, ensuring complete regulatory compliance and industry standard merchant services.
                </p>
                
                <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-100">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Fully Compliant & Registered</h4>
                      <p className="text-sm text-gray-600">Industry standard merchant services provider</p>
                    </div>
                  </div>
                </div>
                  {/* Privacy Policy */}
              <div className="mt-4">
                <a href="https://elitecardprocessing.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="block bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-3 border border-emerald-100 hover:from-emerald-100 hover:to-teal-100 transition-all duration-200 group">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-emerald-700">Elite Card Processing Privacy Policy</h4>
                    </div>
                  </div>
                </a>
              </div>
              </div>
  
              {/* Divider */}
              <div className="flex items-center my-3">
                <div className="flex-1 border-t border-gray-200"></div>
              </div>
  
              {/* Additional Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-linear-to-r from-gray-50 to-gray-100/50 border border-gray-200">
                  <div className="w-6 h-6 rounded-full bg-linear-to-br from-blue-100 to-blue-200 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Registered ISO of Citizens Bank, Providence, RI</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-linear-to-r from-gray-50 to-gray-100/50 border border-gray-200">
                  <div className="w-6 h-6 rounded-full bg-linear-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Complete regulatory compliance</span>
                </div>
              </div>
            </div>
          </div>
  
         
        </div>
      </section>
    );
  }