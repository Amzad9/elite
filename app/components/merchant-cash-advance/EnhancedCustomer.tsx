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
          Free Business Financing Consultation for Businesses
        </h2>

        <div className="space-y-12 mt-5">
          {/* FIRST CARD: Funding Needs Assessment */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image
                    src="/diner.png"
                    alt="Funding Needs Assessment"
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
                Funding Needs Assessment
              </h3>

              <p className="text-gray-700 mb-6">
                Comprehensive evaluation of your business financing needs including capital requirements, timing considerations, repayment capacity analysis, and funding program recommendations based on your specific situation.
              </p>

              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Evaluation Includes:</span>
                      Capital requirements, timing considerations, repayment capacity analysis
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Key Features:</span>
                        Comprehensive business analysis, personalized funding recommendations, strategic planning
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Designed For:</span>
                         businesses seeking optimal financing solutions tailored to their unique needs
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Funding Assessment">
                  Learn about Funding Assessment
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/clover.jpg"
                    alt="Processing Volume Analysis"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Processing Volume Analysis</h3>
              <p className="text-gray-700 mb-6">
                Detailed review of your credit card processing history, monthly volume trends, seasonal patterns, and qualification assessment for merchant cash advance programs.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Businesses seeking merchant cash advance qualification
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Detailed processing history review, Monthly trend analysis, Seasonal pattern assessment
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Accurate qualification assessment, Understanding of funding capacity, Insight into business patterns
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Processing Analysis">
                  Learn more about Volume Analysis
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Funding Amount Estimation */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/aldeiro.webp"
                    alt="Funding Amount Estimation"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Funding Amount Estimation</h3>
              <p className="text-gray-700 mb-6">
                Professional funding amount estimation based on your processing volume, business performance, and financing needs with transparent factor rate and repayment projections.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Businesses needing clear funding expectations
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Professional funding estimation, Transparent factor rates, Repayment projections
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Clear funding expectations, No hidden costs, Informed decision making
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Funding Estimation">
                  Learn more about Funding Estimation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Application Assistance */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/mobilepayment.jpg"
                    alt="Application Assistance"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Application Assistance</h3>
              <p className="text-gray-700 mb-6">
                Complete application support including documentation preparation, submission assistance, and communication with funding partners throughout the approval process.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Businesses seeking streamlined application process
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Documentation preparation, Submission assistance, Partner communication
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Streamlined application process, Expert guidance, Faster approval times
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Application Assistance">
                  Learn more about Application Assistance
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Repayment Planning */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/diner.png"
                    alt="Repayment Planning"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Repayment Planning</h3>
              <p className="text-gray-700 mb-6">
                Comprehensive repayment planning including daily percentage calculations, cash flow impact analysis, and repayment timeline projections based on your business sales patterns.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Best for:</span>
                      Businesses needing sustainable repayment strategies
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Daily percentage calculations, Cash flow analysis, Timeline projections
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Sustainable repayment plans, Cash flow protection, Business stability
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn more about Repayment Planning">
                  Learn more about Repayment Planning
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Alternative Financing Options */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image
                    src="/clover.jpg"
                    alt="Alternative Financing Options"
                    height={500}
                    width={500}
                    className="w-full h-full rounded-4xl object-cover"
                  />
                </figure>
              </div>
            </div>

            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-2xl font-bold mb-6 text-gray-900">Alternative Financing Options</h3>
              <p className="text-gray-700 mb-6">
                Evaluation of alternative business financing options including equipment financing, business lines of credit, and traditional lending programs if merchant cash advance is not the optimal solution.
              </p>
              <div className="space-y-4 mb-6">
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-gray-700 ml-3">
                      <span className="font-semibold text-gray-900 min-w-24">Evaluation Includes:</span>
                      Equipment financing, business lines of credit, traditional lending programs
                    </span>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Features:</span>
                        Comprehensive option analysis, Program comparison, Optimal solution identification
                      </li>
                    </ul>
                  </li>
                  <li className="flex">
                    <ul className="text-gray-700 ml-3 space-y-1">
                      <li>
                        <span className="font-semibold text-gray-900 min-w-24">Benefits:</span>
                        Access to best-fit financing, Multiple solution paths, Strategic financial planning
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="text-left mt-4">
                <a href="#" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-bold text-black transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-400 ring-2 ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn about Alternative Options">
                  Learn about Alternative Options
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
                <span className="text-lg">Start application process</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}