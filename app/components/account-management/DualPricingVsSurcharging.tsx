// components/AccountInformation.tsx
export default function AccountInformation() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-linear-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[300px]" />
      
      <div className="relative container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Account Information Available to You
          </h2>
        </div>

        {/* Three Cards Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Card 1: Monthly Statement Access */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Monthly Statement Access</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Download and view comprehensive monthly statements including transaction summaries, processing fees, batch reports, and detailed account activity through your secure portal.
            </p>

          </div>

          {/* Card 2: Transaction Reporting */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Transaction Reporting</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Access real-time transaction data, daily batch reports, settlement information, and comprehensive processing analytics for complete account visibility.
            </p>

           
          </div>

          {/* Card 3: Account Management Tools */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Account Management Tools</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
              Update business information, contact details, and account preferences through your merchant services portal with secure access and immediate updates.
            </p>
          </div>
               <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Processing History</h2>
            </div>
            
            <p className="text-gray-700 mb-8">
            Complete processing history with transaction tracking, payment records, and detailed account activity for accounting, reconciliation, and business analysis.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}