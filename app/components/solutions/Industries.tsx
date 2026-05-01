import Image from "next/image";
import ContactEliteCardProcessing from "./ContactEliteCardProcessing";
import CTA from "./CTA";

export default function IndustrySolutions() {
  return (
    <>
    <section className="mx-auto px-0 md:px-4 py-8  md:py-16 bg-gray-100">
      <div className="container mx-auto rounded-3xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Specialized Payment Processing Solutions Designed for Your Industry
        </h2>

        <div className="space-y-12 mb-5">
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/pointsystems/ndustries/in1.png" 
                    alt="Restaurant POS" 
                    width={500} height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Restaurant POS Solutions</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>DinerDaddy POS</strong> - Premier restaurant management with integrated merchant services at dinerdaddy.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Aldelo POS</strong> - Processor-agnostic POS with scalable solutions and non-proprietary hardware for complete restaurant merchant services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Clover POS</strong> - Restaurant POS system for quick service with integrated payment processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Kitchen display systems</strong> with seamless credit card processing and restaurant online ordering
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Online ordering integration</strong> with merchant services and restaurant marketing strategy
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Table management and reservation systems</strong> with payment processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Menu engineering and restaurant menu SEO optimization</strong> through integrated merchant services
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a href="/restaurants" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View Restaurant Solutions
                </a>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/pointsystems/Industries/in2.png" 
                    alt="Clover POS" 
                    width={500} height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Retail & Service Solutions</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Clover POS systems</strong> - Complete retail POS with inventory management and CRM integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Inventory management</strong> with real-time tracking and automated reordering systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Customer Relationship Management (CRM)</strong> with loyalty programs and customer analytics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Fast checkout solutions</strong> with contactless payments and mobile POS capabilities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>E-commerce integration</strong> with synchronized inventory and omnichannel retail solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Appointment scheduling</strong> and service management with integrated payment processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Analytics and reporting</strong> with business insights and performance tracking dashboards
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a href="/retail-services" className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View Retail Solutions
                </a>
              </div>
            </div>
          </div>

          {/* Service Business Payment Processing - Image Left, Content Right */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/pointsystems/Industries/in3.png" 
                    alt="Service Business Payment Processing" 
                    width={500} height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Service Business Payment Processing</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Appointment scheduling integration</strong> with merchant services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Service tracking and time management</strong> with payment processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Recurring billing and subscription</strong> merchant services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Mobile payment acceptance</strong> with integrated credit card processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Customer communication tools</strong> connected to merchant account services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Performance and commission tracking</strong> through payment processing solutions
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <a href="/retail-services" className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View Service Solutions
                </a>
              </div>
            </div>
          </div>

          {/* Specialty Merchant Services - Image Right, Content Left (Reversed) */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/pointsystems/Industries/in4.png" 
                    alt="Specialty Merchant Services" 
                    width={500} height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Specialty Merchant Services</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Firearms merchant accounts</strong> with specialized payment processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Age verification and compliance features</strong> integrated with merchant services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Serial number tracking and reporting</strong> with payment processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Government contractor solutions</strong> with Level III processing merchant services
                  </span>
                </li>
              </ul>
              
              <div className="mt-4">
                <a href="/2a-firearms" className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View Specialty Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactEliteCardProcessing />
    <CTA />
    </>
  );
}