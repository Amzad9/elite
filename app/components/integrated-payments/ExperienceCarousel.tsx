"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CARDS = [
  {
    title: "Use cases",
    description:
      "See how integrated payments differentiate your software, add value across industries, and open new revenue streams.",
    image: "/payment-integration/c1.png",
  },
  {
    title: "Partner support",
    description:
      "Work with a dedicated partner team and portfolio tools that help you launch, optimize, and grow efficiently.",
    image: "/payment-integration/c2.png",
  },
  {
    title: "In-person payments",
    description:
      "Design seamless in-person payment experiences on modern devices with one simple, secure integration.",
    image: "/payment-integration/c3.png",
  },
  {
    title: "Online payments",
    description:
      "Create frictionless online checkout flows that streamline transactions and improve the customer experience.",
    image: "/payment-integration/c4.png",
  },
  {
    title: "Implementation guidance",
    description:
      "Follow clear implementation paths, best practices, and sample flows to reduce complexity and accelerate go-live.",
    image: "/payment-integration/c5.png",
  },
  {
    title: "Revenue optimization",
    description:
      "Leverage data, pricing options, and program design to maximize payment revenue from your software platform.",
    image: "/payment-integration/c6.png",
  },
  {
    title: "Customer experience",
    description:
      "Deliver consistent payment experiences across every channel, keeping your users and their customers satisfied.",
    image: "/payment-integration/c7.png",
  },
];

export default function ExperienceCarousel() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
            Deliver a seamless payment experience
          </h2>
          <div className="h-80 md:h-96 bg-gray-100 rounded-2xl animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-12">
          Deliver a seamless payment experience
        </h2>
        <div className="relative mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerGroup={1}
            breakpoints={{
              640: { 
                slidesPerView: 2, 
                slidesPerGroup: 2,
                spaceBetween: 20
              },
              1024: { 
                slidesPerView: 3, 
                slidesPerGroup: 3,
                spaceBetween: 24
              },
              1280: { 
                slidesPerView: 4, 
                slidesPerGroup: 4,
                spaceBetween: 24
              },
            }}
            navigation={{
              prevEl: ".experience-carousel-prev",
              nextEl: ".experience-carousel-next",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            className="pb-12 md:pb-14"
          >
            {CARDS.map((card, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden shrink-0">
                    <img
                      src={card.image}
                      alt=""
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1 min-h-[120px] sm:min-h-[140px]">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1 line-clamp-3 sm:line-clamp-3">
                      {card.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation buttons - hidden on mobile */}
          <button
            type="button"
            className="experience-carousel-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#d4af37] hover:bg-gray-50 transition-colors hidden sm:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            type="button"
            className="experience-carousel-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#d4af37] hover:bg-gray-50 transition-colors hidden sm:flex"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>
        
        <style jsx global>{`
          .swiper-pagination {
            position: relative !important;
            bottom: 0 !important;
            margin-top: 24px !important;
            display: flex !important;
            justify-content: center !important;
            gap: 8px !important;
          }
          
          .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #d1d5db;
            opacity: 0.7;
            transition: all 0.3s ease;
          }
          
          .swiper-pagination-bullet-active {
            background: #d4af37;
            width: 24px;
            border-radius: 4px;
            opacity: 1;
          }
          
          /* Mobile pagination adjustments */
          @media (max-width: 640px) {
            .swiper-pagination {
              margin-top: 16px !important;
            }
            
            .swiper-pagination-bullet {
              width: 6px;
              height: 6px;
            }
            
            .swiper-pagination-bullet-active {
              width: 18px;
            }
          }
          
          /* Dynamic pagination styling */
          .swiper-pagination-bullet-active-prev,
          .swiper-pagination-bullet-active-next {
            transform: scale(0.8);
            opacity: 0.5;
          }
          
          .swiper-pagination-bullet-active-prev-prev,
          .swiper-pagination-bullet-active-next-next {
            transform: scale(0.6);
            opacity: 0.3;
          }

          /* Pause autoplay on hover */
          .swiper:hover {
            .swiper-wrapper {
              animation-play-state: paused;
            }
          }
        `}</style>
      </div>
    </section>
  );
}