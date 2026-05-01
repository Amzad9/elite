import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CompleteRestaurant() {
  return (
    <section className="mx-auto py-6 md:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:p-6 rounded-4xl relative">
        <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-2xl md:text-5xl font-serif max-w-5xl mx-auto text-center font-bold text-black mb-6 leading-snug md:leading-tight px-2">
          Restaurant Online Ordering and Digital Marketing Solutions
        </h2>
        <div className="space-y-8 md:space-y-12 mt-5">
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/restaurants/dm1.png" 
                    alt="Complete Restaurant Online Ordering Platform" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center bg-white text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Complete Restaurant Online Ordering Platform</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Integrated restaurant online ordering system with Novi Eats featuring custom restaurant websites, mobile apps, and delivery management. Full integration with your restaurant POS system and payment processing for seamless order management.
                </p>
              </div>
            
            </div>
          </div>

          {/* Restaurant Marketing Strategy and SEO - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/restaurants/dm2.png" 
                    alt="Restaurant Marketing Strategy and SEO" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Left */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Restaurant Marketing Strategy and SEO</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Restaurant SEO services to improve online visibility, Google My Business optimization, and restaurant marketing strategy integration with your restaurant merchant services platform.
                </p>
              </div>
            
            </div>
          </div>

          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/restaurants/dm3.png" 
                    alt="Restaurant Menu SEO and Optimization" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            {/* Content Section - Right */}
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Restaurant Menu SEO and Optimization</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Menu engineering services including item profitability analysis, pricing optimization, seasonal menu management, and restaurant menu SEO to improve online ordering and search visibility.
                </p>
              </div>
            
            </div>
          </div>

          {/* Customer Loyalty and Retention Programs - Image Right, Content Left (Reversed) */}
          <div className="card overflow-hidden rounded-3xl md:rounded-4xl group h-full flex flex-col md:flex-row-reverse">
            {/* Image Section - Right */}
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/restaurants/dm4.png" 
                    alt="Customer Loyalty and Retention Programs" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Customer Loyalty and Retention Programs</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Built-in customer loyalty programs, email marketing integration, SMS marketing campaigns, and customer retention strategies connected to your restaurant POS system and payment processing data.
                </p>
              </div>
            
            </div>
          </div>

          <div className="card overflow-hidden group rounded-3xl md:rounded-4xl h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/restaurants/dm5.png" 
                    alt="Delivery and Third-Party Integration" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Delivery and Third-Party Integration</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Seamless integration with DoorDash, Uber Eats, Grubhub, and other delivery platforms while maintaining control of customer data and reducing commission fees through direct restaurant online ordering.
                </p>
              </div>
            
            </div>
          </div>

          <div className="card overflow-hidden group h-full rounded-3xl md:rounded-4xl flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full min-h-[300px] md:min-h-[500px]">
                  <Image 
                    src="/restaurants/dm6.png" 
                    alt="Restaurant Online Ordering and Marketing" 
                    width={500} 
                    height={500}
                    className="w-full h-110 rounded-3xl md:rounded-4xl object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center text-gray-900">
              <h3 className="card-title text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">Complete Restaurant Solutions</h3>
              <div className="space-y-3 md:space-y-4 mb-4 md:mb-6 md:pr-2">
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Get everything you need to succeed in today's digital restaurant landscape - from online ordering and marketing to loyalty programs and delivery integration.
                </p>
              </div>
            
            </div>
          </div>    
        </div>
      </div>
    </section>
  );
}