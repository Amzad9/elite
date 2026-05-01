import Image from "next/image";

export default function IndustrySolutions() {
  return (
    <section className="mx-auto px-0 md:px-4 py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto rounded-3xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          How Businesses Use Merchant Cash Advance Funding
        </h2>

        <div className="space-y-12 mb-5">
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image
                    src="/merchant-cash-advance/m1.png" 
                    alt="Business Expansion and Growth" 
                    width={200} 
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Business Expansion and Growth</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>New Location Funding</strong> - Capital for opening additional business locations, lease deposits, and expansion costs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Equipment Purchases</strong> - Financing for new equipment, technology upgrades, and operational improvements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Renovation and Improvements</strong> - Funding for store renovations, facility improvements, and modernization projects
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Franchise Opportunities</strong> - Capital for franchise fees, initial inventory, and startup costs
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex gap-4 flex-wrap">
                <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore expansion funding
                </a>
              </div>
            </div>
          </div>

          {/* Inventory and Operations */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/merchant-cash-advance/m2.png" 
                    alt="Inventory and Operations" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Inventory and Operations</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Inventory Expansion</strong> - Funding for increased inventory, seasonal stock, and bulk purchasing opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Seasonal Preparation</strong> - Capital for peak season inventory, staffing, and operational scaling
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Supply Chain Management</strong> - Financing for supplier payments, bulk orders, and inventory optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Working Capital</strong> - Cash flow support for daily operations, vendor payments, and business expenses
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex gap-4 flex-wrap">
                <a href="#" className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore operations funding
                </a>
              </div>
            </div>
          </div>

          {/* Marketing and Technology */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/merchant-cash-advance/m3.png" 
                    alt="Marketing and Technology" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Marketing and Technology</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Marketing Campaigns</strong> - Funding for advertising, promotional campaigns, and customer acquisition initiatives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Technology Upgrades</strong> - Capital for POS systems, software, website development, and digital transformation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Online Presence</strong> - Financing for e-commerce development, digital marketing, and online business expansion
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Professional Services</strong> - Funding for consultants, legal services, and professional business development
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex gap-4 flex-wrap">
                <a href="#" className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore marketing funding
                </a>
              </div>
            </div>
          </div>

          {/* Emergency and Opportunity Funding */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/merchant-cash-advance/m4.png" 
                    alt="Emergency and Opportunity Funding" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Emergency and Opportunity Funding</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Emergency Repairs</strong> - Immediate capital for equipment repairs, facility issues, and unexpected expenses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Tax Payments</strong> - Funding for business tax obligations, quarterly payments, and compliance requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Payroll Support</strong> - Capital for payroll, employee benefits, and staffing during growth periods
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Time-Sensitive Opportunities</strong> - Quick funding for limited-time business opportunities and investments
                  </span>
                </li>
              </ul>
              
              <div className="mt-4 flex gap-4 flex-wrap">
                <a href="#" className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore emergency funding
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-4 md:px-10 py-5 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300 text-center"
            >
              Apply for Business Financing Now
            </a>
            <a
              href="/contact"
              className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 md:px-10 py-5 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300 text-center"
            >
              Check Qualification Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}