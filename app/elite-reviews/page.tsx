'use client';
import React from "react";
import { Star, Award, Users } from "lucide-react";
import Image from "next/image";
export default function ReviewsPage() {
  const reviews = [
    {
      name: "Phil Hott",
      time: "4 years ago",
      rating: 5,
      text: "Josh is the reason our business will NEVER change credit card processors.",
      avatar: "https://lh3.googleusercontent.com/a-/AOh14GjxgEm2930L_mvsEXJdDRPU4BK262yDVuFCGSp1Ew=w40-h40-c-c-rp-w40-h40-mo-br100",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Eugene Martin",
      time: "4 years ago",
      rating: 5,
      text: "I have used Josh for years and he has always been great to work with. Quick, local service if you ever have a problem or question, and rates are great!",
      avatar: "https://lh3.googleusercontent.com/a-/AOh14GhWU5WHWx0dEay-N7i2Eux0LiZZqTybihoYyQ24dg=w40-h40-c-c-rp-w40-h40-mo-ba2-br100",
      color: "from-violet-500 to-purple-500",
    },
    {
      name: "Dustin Stottlemyer",
      time: "4 years ago",
      rating: 5,
      text: "Great company and very professional customer service. Best rates I have found and there machines and equipment works flawlessly. Highly recommend josh and elite card processing.",
      avatar: "https://lh3.googleusercontent.com/a-/AOh14Gj3fL--l9pBZv1ZWg0Y-fh6lxGWEUSoiXLTooNPjDA=w40-h40-c-c-rp-w40-h40-mo-br100",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Cristy Tritle",
      time: "7 years ago",
      rating: 5,
      text: "Josh has gone above and beyond any customer service expectations. He responds back to you promptly when you contact him. Thank you for always having your local business's backs!",
      avatar: "https://lh3.googleusercontent.com/a-/AOh14GjDlFksOUwwoYAJBon6CweOf_7Stuacll_vnJ9k8g=w40-h40-c-c-rp-w40-h40-mo-br100",
      color: "from-pink-500 to-rose-500",
    },
    {
        name: "Kevin Cassidy",
        time: "7 years ago",
        rating: 3,
        text: "Customer Service: NONPAREIL!!!! Josh knows how to establish customer loyalty!",
        avatar: "",
        color: "from-pink-500 to-rose-500",
      },
      {
        name: "Tawnya Tracey",
        time: "7 years ago",
        rating: 5,
        text: "Josh is so dependable and helpful! I was very apprehensive about getting card services and he has taken care of all of my concerns.",
        avatar: "",
        color: "from-pink-500 to-rose-500",
      },
      {
        name: "Vinnys Dispatch",
        time: "7 years ago",
        rating: 5,
        text: "The staff at Elite Card is always available to help us if we have any problems. They are local and real easy to get a hold of. We really appreciate the fast and reliable help that is hard to get from others.",
        avatar: "https://lh3.googleusercontent.com/a/AATXAJwBe7Yh1I0VIkrCo9Plw5XPCWPi5HI-Jhu2Uh4H=w40-h40-c-c-rp-w40-h40-mo-br100",
        color: "from-pink-500 to-rose-500",
      },
      {
        name: "ALLAN BACON",
        time: "7 years ago",
        rating: 5,
        text: "Josh is definitely a asset to ELITE...he always available to answer any questions or even take care of the problem immediately....GO JOSH...Shelby",
        avatar: "https://lh3.googleusercontent.com/a/AATXAJwBe7Yh1I0VIkrCo9Plw5XPCWPi5HI-Jhu2Uh4H=w40-h40-c-c-rp-w40-h40-mo-br100",
        color: "from-pink-500 to-rose-500",
      },
      {
        name: "Mary Anne Burke",
        time: "7 years ago",
        rating: 5,
        text: "WCAC is a relatively new client. Josh has been responsive and made the transition to Elite easy. No question goes unanswered.",
        avatar: "https://lh3.googleusercontent.com/a-/AOh14GiED_D3MXOZcgx_Th0l5KtN8-0JMB2fL2cdVjJn=w40-h40-c-c-rp-w40-h40-mo-br100",
        color: "from-pink-500 to-rose-500",
      },
  ];

  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Star, label: "Average Rating", value: "4.9" },
    { icon: Award, label: "Years Experience", value: "10+" },
  ];

  const glass = "bg-white/5 backdrop-blur-xl border border-white/30 shadow-[0_5px_40px_rgba(0,0,0,0.1)]";

  return (
    <div className="min-h-screen bg-white/50">
      {/* HERO */}
      <section className="relative h-[350px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/banner/review.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#152E5A]/90 via-[#152E5A]/75 to-[#152E5A]/90" />

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Customer Reviews
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Trusted by hundreds of businesses
          </p>
          <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />

        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 relative">
        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className={`${glass} relative overflow-hidden rounded-3xl p-6`}>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-400/40 rounded-full blur-3xl" />
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-purple-400/40 rounded-full blur-3xl" />

              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/30 hover:bg-green-500/30 transition-all duration-300 flex items-center justify-center ring-2 ring-white/40">
                  <stat.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm sm:text-base text-gray-700">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* REVIEWS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`${glass} relative overflow-hidden rounded-3xl p-6 md:p-8 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1`}
            >
              {/* Glow */}
              <div className="absolute -top-14 -right-14 w-36 h-36 md:w-48 md:h-48 bg-pink-400/30 rounded-full blur-[200px]" />
              <div className="absolute -bottom-14 -left-14 w-40 h-40 md:w-56 md:h-56 bg-blue-400/30 rounded-full blur-[120px]" />
              <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent pointer-events-none" />

              {/* Stars */}
              <div className="relative z-10 flex gap-1 mb-4 md:mb-6">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="relative z-10 text-gray-800 text-base sm:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
                "{review.text.length > 120 ? review.text.substring(0, 120) + '...' : review.text}"
              </p>

              {/* Author */}
              <div className="relative z-10 flex items-center gap-3 md:gap-4 pt-4 mt-auto border-t border-white/40">
                {review.avatar ? (
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={40}
                    height={40}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white/40"
                  />
                ) : (
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-linear-to-br ${review.color} flex items-center justify-center text-white font-bold ring-2 ring-white/40`}
                  >
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">{review.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{review.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-56 h-56 md:w-72 md:h-72 bg-purple-500/40 blur-[140px]" />
          <div className="bg-white/20 rounded-3xl p-8 md:p-12 text-center relative z-10">
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-2 md:mb-4">4.9</div>
            <div className="flex justify-center gap-1 mb-2 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
              Based on <span className="font-bold">35 Google Reviews</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
