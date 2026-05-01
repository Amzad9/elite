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
          Specialized Online Food Ordering for Restaurant Types
        </h2>

        <div className="space-y-12 mb-5">
          {/* Pizza Restaurant Online Ordering */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/onlinefoodordering/s1.png" 
                    alt="Pizza Restaurant Online Ordering" 
                    width={200} 
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Pizza Restaurant Online Ordering</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Complex Pizza Combinations</strong> - Advanced modifier system for toppings, sizes, crusts, and specialty pizzas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Delivery Zone Management</strong> - Geographic delivery areas, minimum orders, and delivery fee calculation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Large Order Management</strong> - Catering orders, party packages, and advance scheduling capabilities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Italian Restaurant Features</strong> - Wine pairings, appetizer combinations, and authentic Italian menu presentation
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex gap-4 flex-wrap">
                <a href="/restaurants" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore restaurant-specific solutions
                </a>
              </div>
            </div>
          </div>

          {/* Chinese Restaurant Online Ordering */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/onlinefoodordering/s2.png" 
                    alt="Chinese Restaurant Online Ordering" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Chinese Restaurant Online Ordering</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Traditional Menu Management</strong> - Authentic dish names, ingredient descriptions, and cultural menu organization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Family Meal Combinations</strong> - Multi-person meals, sharing platters, and traditional Chinese dining options
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Dietary Preferences</strong> - Vegetarian options, spice levels, and ingredient customization for dietary restrictions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Cultural Presentation</strong> - Traditional menu layout, authentic photography, and cultural dining experience
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex gap-4 flex-wrap">
                <a href="/restaurants" className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore restaurant-specific solutions
                </a>
            
              </div>
            </div>
          </div>

          {/* American Restaurant Online Ordering */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/onlinefoodordering/s3.png" 
                    alt="American Restaurant Online Ordering" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">American Restaurant Online Ordering</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Burger and Sandwich Customization</strong> - Extensive modifier options for burgers, sandwiches, and American classics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Combo Meal Management</strong> - Value meals, side combinations, and upselling opportunities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Breakfast Menu Integration</strong> - All-day breakfast options, morning specials, and time-based menu availability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Family Restaurant Features</strong> - Kids menus, family packages, and casual dining presentation
                  </span>
                </li>
              </ul>
              <div className="mt-4 flex gap-4 flex-wrap">
                <a href="/restaurants" className="px-6 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore restaurant-specific solutions
                </a>
              </div>
            </div>
          </div>

          {/* Fine Dining Online Ordering */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/onlinefoodordering/s4.png" 
                    alt="Fine Dining Online Ordering" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Fine Dining Online Ordering</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Elegant Menu Presentation</strong> - Sophisticated design, detailed descriptions, and premium dining experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Wine and Beverage Pairing</strong> - Integrated wine selection, cocktail menus, and beverage recommendations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Special Occasion Ordering</strong> - Holiday menus, celebration packages, and premium dining options
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base">
                    <strong>Upscale Customer Experience</strong> - White-glove service presentation and premium online ordering experience
                  </span>
                </li>
              </ul>
              
              <div className="mt-4 flex gap-4 flex-wrap">
                <a href="/restaurants" className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore restaurant-specific solutions
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">
             <a href="/getquote" className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 md:px-10 py-5 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-white/90 transition-all duration-300">
                Schedule restaurant consultation             
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}