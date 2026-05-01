import { ExternalLink, Shield, User } from "lucide-react";

export default function AccountPortalLoginThreeCards() {
  const features = [
    "Monthly statement access and download",
    "Real-time batch reporting and transaction viewing",
    "Payment history and settlement tracking",
    "Account information and contact details",
  ];

  const securityFeatures = [
    "Secure login credentials",
    "Encrypted data transmission",
    "Comprehensive account protection"
  ];

  return (
    <>
      <section id="logins" className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-linear-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[300px]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Account Logins
            </h2>





          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-2xl border border-white/30 bg-linear-to-br from-blue-50 to-indigo-50 p-6 backdrop-blur-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-400/20 blur-[80px]" />
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white border border-blue-200 shadow-sm">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">Iris Login</h4>
                    <p className="text-slate-600 text-sm">CRM Dashboard</p>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <a
                href="https://elitecard.iriscrm.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              >
                <span className="sr-only">Access Iris Login</span>
              </a>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-white/30 bg-linear-to-br from-green-50 to-emerald-50 p-6 backdrop-blur-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-green-400/20 blur-[80px]" />
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white border border-green-200 shadow-sm">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">Merchant Dashboard</h4>
                    <p className="text-slate-600 text-sm">Nuvei Platform</p>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
              </div>
              <a
                href="https://merchantdashboard.nuvei.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              >
                <span className="sr-only">Access Merchant Dashboard</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="gateways" className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        <div className="relative mb-16 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Gateway Logins
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Secure access to your payment processing dashboards and gateways
            </p>
            <div className="mx-auto h-1 w-20 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 mt-4" />
          </div>


          {/* GATEWAY LOGINS */}
          <div>


            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Accept Blue",
                  url: "https://accept.blue",
                  description: "Payment Gateway",
                  color: "from-purple-50 to-violet-50",
                  iconColor: "text-purple-600",
                  borderColor: "border-purple-200",
                  glowColor: "bg-purple-400/20"
                },
                {
                  name: "NMI Gateway",
                  url: "https://secure.nmi.com",
                  description: "Gateway Login",
                  color: "from-amber-50 to-orange-50",
                  iconColor: "text-amber-600",
                  borderColor: "border-amber-200",
                  glowColor: "bg-amber-400/20"
                },
                {
                  name: "Authorize.Net",
                  url: "https://account.authorize.net",
                  description: "Merchant Interface",
                  color: "from-cyan-50 to-blue-50",
                  iconColor: "text-cyan-600",
                  borderColor: "border-cyan-200",
                  glowColor: "bg-cyan-400/20"
                }
              ].map((gateway, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/30 bg-linear-to-br p-6 backdrop-blur-2xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
                  style={{ background: gateway.color }}
                >
                  <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full ${gateway.glowColor} blur-[80px]`} />
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-white border ${gateway.borderColor} shadow-sm`}>
                        <Shield className={`h-6 w-6 ${gateway.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-1">{gateway.name}</h4>
                        <p className="text-slate-600 text-sm">{gateway.description}</p>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-purple-500 transition-colors" />
                  </div>
                  <a
                    href={gateway.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                  >
                    <span className="sr-only">Access {gateway.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-b from-gray-50 to-white">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-linear-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[300px]" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Secure Merchant Services Account Portal
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Access your Elite Card Processing merchant services account through our secure Iris CRM portal for comprehensive account management, statements, and transaction reporting.
            </p>
            <div className="mb-4">
              <a href="#" className=" items-center justify-center gap-2 mt-4 text-gray-600 hover:text-gray-800 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Need Login Assistance?</span>
              </a>
            </div>

            {/* <a href="#" className="inline-flex items-center justify-center gap-3 p-4 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 text-white font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 border border-blue-600 hover:border-blue-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>Access Your Account Portal</span>
          </a> */}

          </div>

          {/* Two Cards Grid - Centered */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {/* Card 1: Account Portal Features */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Account Portal Features</h2>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-linear-to-r from-gray-50 to-gray-100/50 border border-gray-100 hover:bg-linear-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-200">
                    <div className="w-8 h-8 rounded-lg bg-linear-to-br from-emerald-100 to-emerald-200 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Account Security */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Account Security</h2>
              </div>

              <p className="text-gray-700 mb-6">
                Advanced security measures including secure login credentials, encrypted data transmission, and comprehensive account protection to safeguard your merchant services information.
              </p>

              <div className="space-y-3">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-linear-to-r from-amber-50 to-yellow-50 border border-amber-100">
                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-amber-100 to-amber-200 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}