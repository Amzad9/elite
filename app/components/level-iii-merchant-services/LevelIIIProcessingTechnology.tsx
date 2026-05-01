import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function MarylandBusiness() {
  return (
    <section className="mx-auto px-2 md:px-4 py-8 md:py-16 bg-white">
      <div className="container mx-auto rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Advanced Level III Credit Card Processing Technology and Integration
        </h2>

        <div className="space-y-12 mt-5">
          {/* FIRST CARD: Specialized Level III Processing Platforms Introduction */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/diner.png"
                    alt="Specialized Level III Processing Platforms"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">
                Specialized Level III Processing Platforms
              </h3>

              <p className="text-gray-700 mb-6">
                Professional Level III credit card processing through our certified technology partners including Accept.Blue, USAePay, NMI, and Valor PayTech - all designed specifically for Level III data capture with automatic prompts for line-item details, tax amounts, freight charges, and government compliance fields.
              </p>

              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Platforms Include:</span>
                      Accept.Blue, USAePay, NMI, and Valor PayTech
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Key Features:</span>
                        Automatic Level III data capture, Government compliance prompts, Line-item detail tracking
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Designed For:</span>
                        Corporate, government, and large-scale transaction processing with enhanced data requirements
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Level III Platforms">
                  Learn about Level III Platforms
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Accept.Blue Level III Gateway */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/clover.jpg"
                    alt="Accept.Blue Level III Gateway"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Accept.Blue Level III Gateway</h3>
              <p className="text-gray-700 mb-6">
                Advanced Level III processing platform with automatic data capture, government compliance features, and optimized interchange rate qualification for corporate and government transactions.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Corporate and government transactions requiring Level III data
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Automatic data capture, Government compliance, Optimized interchange rates
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Reduced interchange fees, Automated compliance, Enhanced reporting
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Accept.Blue Gateway">
                  Learn more about Accept.Blue
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* USAePay Level III Solutions */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/aldeiro.webp"
                    alt="USAePay Level III Solutions"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">USAePay Level III Solutions</h3>
              <p className="text-gray-700 mb-6">
                Comprehensive Level III credit card processing with detailed reporting, corporate purchasing integration, and automated compliance documentation for government contractors.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Government contractors and corporate purchasing
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Detailed reporting, Corporate purchasing integration, Automated compliance
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Streamlined government processes, Enhanced data accuracy, Automated documentation
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about USAePay Solutions">
                  Learn more about USAePay
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* NMI Level III Processing */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/mobilepayment.jpg"
                    alt="NMI Level III Processing"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">NMI Level III Processing</h3>
              <p className="text-gray-700 mb-6">
                Robust Level III merchant services platform with advanced data capture, interchange optimization, and seamless integration with accounting and procurement systems.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Enterprise businesses with accounting system integration
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Advanced data capture, Interchange optimization, System integration
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Seamless integration, Comprehensive compliance, Enterprise-level reporting
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about NMI Processing">
                  Learn more about NMI
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Valor PayTech Level III Equipment */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/diner.png"
                    alt="Valor PayTech Level III Equipment"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Valor PayTech Level III Equipment</h3>
              <p className="text-gray-700 mb-6">
                Professional payment terminals and equipment designed specifically for Level III data capture with government compliance features and corporate purchasing optimization.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Businesses requiring specialized payment hardware
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Government compliance features, Corporate purchasing optimization, Secure hardware
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Enhanced data security, Compliance-ready equipment, Improved transaction efficiency
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Valor PayTech">
                  Learn more about Valor PayTech
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* NEW CARD: Accounting System Integration */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/clover.jpg"
                    alt="Accounting System Integration"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Accounting System Integration</h3>
              <p className="text-gray-700 mb-6">
                Direct integration with QuickBooks, SAP, Oracle, and other accounting systems for automatic Level III data population and seamless reconciliation of government and corporate transactions through all our processing platforms.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Integration With:</span>
                      QuickBooks, SAP, Oracle, and other accounting systems
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Automatic Level III data population, Seamless transaction reconciliation, Cross-platform compatibility
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Automated data entry, Reduced manual errors, Streamlined financial reporting
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Accounting Integration">
                  Learn about Accounting Integration
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* NEW CARD: Procurement Software Connectivity */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/aldeiro.webp"
                    alt="Procurement Software Connectivity"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Procurement Software Connectivity</h3>
              <p className="text-gray-700 mb-6">
                Integration with procurement platforms, purchase order systems, and vendor management software for automated Level III data capture and processing workflow optimization across all technology partners.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Integration With:</span>
                      Procurement platforms, purchase order systems, vendor management software
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Automated Level III data capture, Processing workflow optimization, Cross-platform compatibility
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Streamlined procurement processes, Automated compliance, Enhanced vendor management
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Procurement Connectivity">
                  Learn about Procurement Connectivity
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* NEW CARD: Mobile Level III Processing */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/Level-3-Processing-scaled.jpg"
                    alt="Mobile Level III Processing"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Mobile Level III Processing</h3>
              <p className="text-gray-700 mb-6">
                Portable Level III credit card processing solutions for field operations, construction sites, and remote government facilities with full data capture capabilities through our mobile-enabled platforms.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Ideal For:</span>
                      Field operations, construction sites, remote government facilities
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Portable solutions, Full Level III data capture, Mobile-enabled platforms
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Process payments anywhere, Maintain compliance on-site, Real-time data capture
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Mobile Processing">
                  Learn about Mobile Processing
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* NEW CARD: API and Custom Integration */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/api-developments.webp"
                    alt="API and Custom Integration"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">API and Custom Integration</h3>
              <p className="text-gray-700 mb-6">
                Custom API integration for specialized government and corporate systems requiring unique Level III processing workflows and compliance reporting requirements across all our technology partners.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Designed For:</span>
                      Specialized government and corporate systems
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Custom API integration, Unique workflow design, Cross-platform compatibility
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Tailored solutions, Automated compliance reporting, Seamless system integration
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about API Integration">
                  Learn about API Integration
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons Section */}
          <div className="text-center mt-16 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/getquote"
                className="group flex items-center gap-3 px-4 md:px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl shadow-2xl shadow-emerald-500/30 hover:shadow-3xl hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              >
                <span className="text-lg">Get integration consultation
                </span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}