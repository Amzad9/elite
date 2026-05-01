import Image from "next/image";

export default function IndustrySolutions() {
  return (
    <section className="mx-auto px-0 md:px-4 py-8 md:py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto rounded-3xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Specialized Level III Processing for Government and Corporate Sectors
        </h2>

        <div className="space-y-12 mb-5">
          {/* Federal Government Contractors */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/restaurants/po1.png" 
                    alt="Federal Government Contractors Processing" 
                    width={200} 
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Federal Government Contractors</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>GSA Schedule Contract Compliance</strong> - Level III merchant services for GSA Schedule contracts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Federal Procurement Regulation Adherence</strong> - Full compliance with federal procurement regulations and reporting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>SmartPay Card Processing</strong> - Government SmartPay card processing with detailed line-item capture
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Audit Trail Documentation</strong> - Comprehensive audit trail documentation and compliance reporting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Security Clearance Facility Processing</strong> - Payment processing for security-cleared facilities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>DCAA Compliance Integration</strong> - DCAA compliance and cost accounting system integration
                  </span>
                </li>
              </ul>
           
            </div>
          </div>

          {/* State and Local Government Processing */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/restaurants/po2.png" 
                    alt="State and Local Government Processing" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">State and Local Government Processing</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>State Procurement Compliance</strong> - Level III credit card processing compliant with state procurement regulations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Municipal Purchasing Card Programs</strong> - Municipal purchasing card programs with enhanced controls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Educational Institution Processing</strong> - Payment processing and reporting for educational institutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Healthcare System Purchasing</strong> - Healthcare system purchasing and expense management solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Public Utility Payment Processing</strong> - Public utility payment processing with detailed reporting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Emergency Services Procurement</strong> - Emergency services and public safety procurement processing
                  </span>
                </li>
              </ul>
           
            </div>
          </div>

          {/* Corporate B2B Payment Processing */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/restaurants/po3.png" 
                    alt="Corporate B2B Payment Processing" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Corporate B2B Payment Processing</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Enterprise Purchasing Card Programs</strong> - Level III merchant services for enterprise purchasing card programs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Multi-Location Corporate Processing</strong> - Multi-location corporate payment processing and centralized reporting
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Vendor Payment Automation</strong> - Vendor payment automation and procurement system integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Employee Expense Management</strong> - Employee expense management and control systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Corporate Travel Processing</strong> - Corporate travel and entertainment payment processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Supply Chain Payment Optimization</strong> - Supply chain payment optimization with detailed tracking
                  </span>
                </li>
              </ul>
            
            </div>
          </div>

          {/* Large Ticket Transaction Specialists */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/restaurants/po4.png" 
                    alt="Large Ticket Transaction Specialists" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Large Ticket Transaction Specialists</h3>
              <ul className="space-y-4 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Visa Large Ticket Transactions</strong> - Transactions over $8,000 qualify for additional Level III interchange reductions with rates of 1.45% + $35 for commercial products
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>MasterCard Large Ticket</strong> - Large ticket thresholds vary by card type and program (contact us for current requirements)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Equipment Financing</strong> - Equipment financing and leasing payment processing solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Construction & Manufacturing</strong> - Construction and manufacturing industry payment solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Professional Services</strong> - Professional services and consulting payment processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Technology & Capital Equipment</strong> - Technology, software, and capital equipment payment solutions
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
            <a href="/getquote" className="bg-blue-600 text-white px-4 md:px-10 py-5 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300">
              Schedule corporate consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}