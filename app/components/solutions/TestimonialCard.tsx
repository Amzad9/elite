"use client";

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function TestimonialCard() {
  const testimonials = [
    {
      id: 1,
      name: "Multi-Location Retailer",
      quote: "Managing three locations was complicated until we got our integrated merchant services. Now we can see real-time sales, inventory, and performance data from all locations through our payment processing company dashboard.",
      items: [
        "Centralized multi-location management",
        "Real-time reporting across locations",
        "Streamlined operations"
      ],
      location: "Most States"
    },
    {
      id: 2,
      name: "Frederick County Restaurant",
      quote: "Our new Aldelo POS system with integrated payment processing transformed our operations. Orders go directly to the kitchen display, and the merchant services eliminated our credit card processing fees entirely.",
      items: [
        "40% reduction in order errors",
        "Processing fees eliminated",
        "Kitchen efficiency improved"
      ],
      location: "Frederick County"
    },
    {
      id: 3,
      name: "Hagerstown Retail Store",
      quote: "The Clover POS system with integrated merchant services handles our inventory, customer loyalty program, and credit card processing seamlessly.",
      items: [
        "Real-time inventory management",
        "Increased customer retention",
        "Same-day support"
      ],
      location: "Hagerstown"
    },
    {
      id: 4,
      name: "Service Business",
      quote: "The mobile payment processing capabilities let us accept payments on-site at customer locations. The merchant services system integrates with our scheduling software.",
      items: [
        "Mobile payment processing",
        "Automated recurring billing",
        "Complete business management"
      ],
      location: "Washington County"
    },
    {
      id: 5,
      name: "Regional Retailer",
      quote: "Managing multiple stores across most states became effortless with our centralized merchant services. The integrated payment processing gives us complete visibility.",
      items: [
        "Unified merchant services",
        "Centralized dashboard",
        "Cross-location analytics"
      ],
      location: "Statewide Most States"
    }
  ];

  const [isMounted, setIsMounted] = useState(false);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-20 relative overflow-hidden">
        {/* Glass Morphism Background */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-50/20 via-transparent to-purple-50/20 backdrop-blur-3xl"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="animate-pulse space-y-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-64 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-20 relative overflow-hidden">
      <div className='max-w-6xl mx-auto'>
        {/* Glass Morphism Background Layers */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-300/50 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1 w-[500px] h-[500px] bg-gray-300/60 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-sky-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* Header with Glass Effect */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black text-center mb-6 leading-tight">
              All Businesses Thriving with Elite Card Processing Merchant Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Real businesses thriving with our integrated payment processing solutions
            </p>
          </div>

          {/* Swiper Container */}
          <div className="relative">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              pagination={{
                clickable: true,
                el: '.custom-pagination',
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-1"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                         {/* Glass Morphism Card */}
                <div className="h-full min-h-[420px] mt-3">
                  <div className={`
                    h-full bg-white/20 backdrop-blur-xl rounded-2xl border border-blue-400/30 
                    p-7 flex flex-col transition-all duration-500 ease-out
                    ${index === activeIndex 
                      ? 'shadow-2xl shadow-blue-500/10 border-blue-400/30' 
                      : 'shadow-lg shadow-gray-500/5'
                    }
                    hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-400/40
                    hover:transform hover:-translate-y-1
                  `}>
                    {/* Quote Icon with Glass Effect */}
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-white/40 to-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner">
                        <Quote className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    
                    {/* Quote Text */}
                    <div className="flex-grow mb-8">
                      <p className="text-gray-800 leading-relaxed text-lg line-clamp-4">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    {/* Client Info */}
                    <div className="mb-7">
                      <div className="mb-5">
                        <h3 className="font-bold text-xl text-gray-900 mb-2">{testimonial.name}</h3>
                        <div className="text-gray-600">{testimonial.location}</div>
                      </div>
                      
                      {/* Key Items with Glass Effect */}
                      <div className="space-y-3">
                        {testimonial.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex} 
                            className="flex items-center gap-3 px-2 py-3 rounded-xl "
                          >
                            <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 shrink-0"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom Indicator */}
                    <div className="pt-5 border-t border-white/20">
                      <div className="text-xs text-gray-500 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-500 to-purple-500 animate-pulse"></div>
                        Verified Success Story
                      </div>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Controls Container */}
            <div className="flex items-center justify-center mt-6 gap-4">
              {/* Custom Pagination Dots */}
              <div className="custom-pagination flex justify-center gap-2 backdrop-blur-sm bg-white/20 rounded-full px-4 py-2 border border-white/30"></div>
              
              {/* Custom Navigation Buttons */}
              <div className="flex gap-3">
                <button 
                  className="custom-prev w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 hover:border-white/40 transition-all duration-300 active:scale-95 shadow-lg"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                
                <button 
                  className="custom-next w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 hover:border-white/40 transition-all duration-300 active:scale-95 shadow-lg"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Custom CSS to hide default Swiper arrows */}
        <style jsx global>{`
          /* Hide default Swiper navigation arrows */
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
          
          /* Custom pagination styles */
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: rgba(156, 163, 175, 0.5);
            opacity: 1;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(10px);
          }
          .swiper-pagination-bullet-active {
            width: 28px;
            border-radius: 6px;
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
          }
          
          /* Ensure custom pagination container is properly positioned */
          .custom-pagination {
            position: relative !important;
            bottom: 0 !important;
            margin-top: 0;
          }
        `}</style>
      </div>
    </section>
  );
}