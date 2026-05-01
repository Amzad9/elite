import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactEliteCardProcessing from "./ContactEliteCardProcessing";
import CTA from "./CTA";

export default function PaymentProcessingHardware() {
  return (
    <>
    <section className="mx-auto py-8 md:py-16 bg-white">
      <div className="container mx-auto p-3 md:p-6 rounded-4xl relative">
        {/* Glow effect on top corners */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-tight">
          Professional Payment Processing Hardware and All-in-One Payment Systems
        </h2>

        <div className="space-y-12 mt-5">
          <div className="card overflow-hidden  rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/pointsystems/hardware/h1.png" 
                    alt="Complete Merchant Services Terminals" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h2 className="card-title text-3xl font-bold mb-6 text-gray-900 block">
                Complete Merchant Services Terminals
              </h2>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  All-in-one payment systems with integrated credit card processing, receipt printing, and cash drawer connectivity.
                </p>
              </div> 
            </div>
          </div>

          {/* Tablet-Based Payment Processing Systems - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/pointsystems/hardware/h2.png" 
                    alt="Tablet-Based Payment Processing Systems" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center  text-gray-900">
              <h2 className="card-title text-3xl font-bold mb-6 text-gray-900 block">
                Tablet-Based Payment Processing Systems
              </h2>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  iPad and Android tablet POS solutions with secure payment attachments and integrated merchant services.
                </p>
              </div>
            </div>
          </div>

          {/* Integrated Payment Terminals - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/pointsystems/hardware/h3.png" 
                    alt="Integrated Payment Terminals" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h2 className="card-title text-3xl font-bold mb-6 text-gray-900">
                Integrated Payment Terminals
              </h2>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  EMV chip card terminals, contactless payment readers, and mobile card processing devices fully integrated with your merchant services.
                </p>
              </div>
            </div>
          </div>

          {/* Complete Payment Processing Peripherals - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative">
                  <Image 
                    src="/pointsystems/hardware/h4.png" 
                    alt="Complete Payment Processing Peripherals" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h2 className="card-title text-3xl font-bold mb-6 text-gray-900">
                Complete Payment Processing Peripherals
              </h2>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Receipt printers, cash drawers, barcode scanners, kitchen display monitors, and customer-facing displays to complete your payment system.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Merchant Services Solutions - Image Left, Content Right */}
          <div className="card overflow-hidden group rounded-4xl h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative">
                <figure className="relative h-full">
                  <Image 
                     src="/pointsystems/hardware/h5.png" 
                    alt="Mobile Merchant Services Solutions" 
                    width={500} height={200}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center text-gray-900">
              <h2 className="card-title text-3xl font-bold mb-6 text-gray-900 block">
                Mobile Merchant Services Solutions
              </h2>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Wireless terminals, smartphone card readers, and portable payment processing systems for businesses on the go.
                </p>
              </div>
              
            </div>
          </div>

          {/* Professional Installation and Merchant Services Setup - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden group h-full rounded-4xl flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/pointsystems/hardware/h6.png" 
                    alt="Professional Installation and Setup" 
                    width={500} height={500}
                    className="w-full h-full rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-4 md:p-12 flex flex-col justify-center  text-gray-900">
              <h2 className="card-title text-3xl font-bold mb-6 text-gray-900">
                Professional Installation and Setup
              </h2>
              <div className="space-y-4 mb-6 pr-2">
                <p className="text-base leading-relaxed text-gray-700">
                  Professional installation and setup included with all payment processing systems. Our most states-based merchant services technicians handle everything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CTA />
        </>
  );
}