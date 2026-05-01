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
          Event Types
        </h2>

        <div className="space-y-12 mb-5">
          {/* Outdoor Festivals and Fairs */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/atm/e1.png" 
                    alt="Outdoor Festivals and Fairs ATM services" 
                    width={200} 
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/Featured-Image.jpg";
                    }}
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Outdoor Festivals and Fairs</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Community Fairs</strong> - Multi-day ATM rental with high-capacity cash management and weather-resistant equipment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Music Festivals</strong> - Strategic ATM placement for large crowds with enhanced security and monitoring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Food Festivals</strong> - ATM services coordinated with vendor needs and customer traffic patterns
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Art and Craft Fairs</strong> - Compact ATM solutions for artisan events and specialty markets
                  </span>
                </li>
              </ul>
           
            </div>
          </div>

          {/* Seasonal Business ATM Rental */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/atm/e2.png" 
                    alt="Seasonal Business ATM Rental" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Seasonal Business ATM Rental</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Summer Camps</strong> - Temporary ATM placement for camp stores and visitor areas during camp seasons
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Tourist Attractions</strong> - Peak season ATM rental for amusement parks, historical sites, and entertainment venues
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Seasonal Retail</strong> - Holiday markets, Christmas tree lots, and temporary seasonal businesses
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Farmers Markets</strong> - Seasonal ATM placement for weekly markets and agricultural events
                  </span>
                </li>
              </ul>
           
            </div>
          </div>

          {/* Holiday and Special Events */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/atm/e3.png" 
                    alt="Holiday and Special Events ATM services" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/Screenshot_29.jpg";
                    }}
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Holiday and Special Events</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Christmas Markets</strong> - Holiday-themed ATM placement for seasonal shopping and gift purchases
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Halloween Events</strong> - Temporary ATM services for haunted attractions and costume events
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Fourth of July Celebrations</strong> - Patriotic ATM placement for community celebrations and fireworks events
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Wedding and Corporate Events</strong> - Private event ATM services for large gatherings and celebrations
                  </span>
                </li>
              </ul>
           
            </div>
          </div>

          {/* Sports and Recreation Events */}
          <div className="card bg-base-100 shadow-xl overflow-hidden group h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative overflow-hidden">
              <div className="relative h-full">
                <figure className="relative h-full">
                  <Image 
                    src="/atm/e4.png" 
                    alt="Sports and Recreation Events ATM services" 
                    width={500} 
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </figure>
              </div>
            </div>
            
            <div className="md:w-1/2 p-3 md:p-12 flex flex-col justify-center bg-linear-to-br from-gray-900 to-gray-800 text-white">
              <h3 className="card-title text-2xl font-bold mb-6">Sports and Recreation Events</h3>
              <ul className="space-y-4 mb-6 pr-2">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Golf Tournaments</strong> - Tournament ATM placement for registration, concessions, and pro shop purchases
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Racing Events</strong> - High-volume ATM services for motorsports and racing competitions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Sporting Competitions</strong> - Temporary ATM placement for athletic events and competitions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 shrink-0"></div>
                  <span className="text-base">
                    <strong>Outdoor Recreation Events</strong> - ATM services for fishing tournaments, hunting events, and outdoor competitions
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center">      
            <a href="/getquote" className="bg-blue-600 text-white px-4 md:px-10 py-5 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-blue-700 transition-all duration-300">
              Schedule event consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
