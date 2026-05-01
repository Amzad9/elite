import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CompleteRestaurant() {
  return (
    <section className="mx-auto py-6 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:p-6 rounded-4xl relative">
        {/* Glow effect on top corners - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-2xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-snug md:leading-tight px-2">
          Advanced Retail Inventory and Customer Management Solutions
        </h2>

        <div className="space-y-8 md:space-y-12 mt-5">
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/ad1.png" 
                    alt="Complete Inventory Management System" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h2
                className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900"
              >
                Complete Inventory Management System
              </h2>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Real-time inventory tracking with barcode scanning, automatic reorder alerts, seasonal inventory planning, and multi-location inventory synchronization. Full integration with your retail POS system and payment processing for accurate stock management.
                </p>
              </div>
           
            </div>
          </div>

          {/* Customer Database and Loyalty Programs - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/ad2.png" 
                    alt="Customer Database and Loyalty Programs" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h2
                className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900"
              >
                Customer Database and Loyalty Programs
              </h2>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Built-in customer management with purchase history, preference tracking, loyalty point programs, and targeted marketing campaigns. Connect customer data across all retail locations with integrated merchant services.
                </p>
              </div>
            
            </div>
          </div>

          {/* Multi-Location Retail Coordination - Image Left, Content Right */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            {/* Image Section - Left */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/ad3.png" 
                    alt="Multi-Location Retail Coordination" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h2
                className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900"
              >
                Multi-Location Retail Coordination
              </h2>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Centralized inventory management, customer database sharing, unified pricing control, and consolidated reporting across multiple retail locations with integrated retail payment processing.
                </p>
              </div>
           
            </div>
          </div>

          {/* Seasonal and Promotional Management - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/ad4.png" 
                    alt="Seasonal and Promotional Management" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h2
                className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900"
              >
                Seasonal and Promotional Management
              </h2>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Advanced promotional pricing, seasonal inventory planning, clearance management, and holiday sales tracking integrated with your retail merchant services platform.
                </p>
              </div>
           
            </div>
          </div>

          <div className="card overflow-hidden group rounded-3xl md:rounded-4xl h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/ad5.png" 
                    alt="Vendor and Supplier Integration" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h2
                className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900"
              >
                Vendor and Supplier Integration
              </h2>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Purchase order management, vendor performance tracking, automatic reordering, and supplier payment coordination connected to your retail credit card processing system.
                </p>
              </div>
            
            </div>
          </div>

          <div className="card overflow-hidden group h-full rounded-3xl md:rounded-4xl flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/retail-services/ad6.png" 
                    alt="Analytics and Business Intelligence" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h2
                className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900"
              >
                Analytics and Business Intelligence
              </h2>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Comprehensive retail analytics including sales trends, customer behavior analysis, inventory performance, profit margin optimization, and growth forecasting through integrated merchant services.
                </p>
              </div>
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
}