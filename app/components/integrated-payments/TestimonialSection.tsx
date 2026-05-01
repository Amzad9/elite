"use client";

export default function TestimonialSection() {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      aria-labelledby="testimonial-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-gray-100/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(212,175,55,0.08),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-300/50 to-transparent" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <header className="mb-14 text-center md:text-left">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#10284D]/5 text-[#10284D] text-sm font-semibold mb-5">
            Customer story
          </span>
          <h2
            id="testimonial-heading"
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mb-4 tracking-tight"
          >
            Proven partner in payments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            See why software vendors and platforms trust us to power their payment experience and grow revenue.
          </p>
        </header>

        {/* Card with advanced styling */}
        <div className="group relative">
          {/* Accent glow */}
          <div className="absolute -inset-px bg-linear-to-br from-[#d4af37]/20 via-transparent to-[#10284D]/10 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-white rounded-2xl border border-gray-200/80 shadow-lg shadow-gray-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/40 hover:border-gray-300/80">
            {/* Gold accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-[#d4af37] to-[#b8962e]" aria-hidden />

            <div className="flex flex-col md:flex-row md:min-h-[280px]">
              {/* Quote visual block */}
              <div className="shrink-0 md:w-36 flex md:flex-col justify-center items-center md:items-start gap-4 md:gap-0 md:py-12 md:pl-12 pr-6 py-10 pl-10">
                <span
                  className="text-7xl md:text-8xl font-serif text-[#d4af37]/25 leading-none select-none drop-shadow-sm"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <span
                  className="hidden md:block text-6xl font-serif text-[#d4af37]/20 leading-none select-none mt-1"
                  aria-hidden
                >
                  &rdquo;
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 px-8 pb-10 md:px-12 md:py-12 md:pr-14">
                <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
                  <p className="mb-6 text-gray-700/95">
                    With our platform, everything is ready to go for our users. They get payments, hardware, and BookedBy software all-in-one to run their business.
                  </p>
                  <p className="mb-0 text-gray-700/95">
                    That&apos;s an experience we couldn&apos;t get with anybody else. Our partner also brings so many other functionalities that help us add additional revenue and serve our customers better.
                  </p>
                </blockquote>

                {/* Author */}
                <footer className="flex flex-wrap items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full bg-linear-to-br from-[#10284D] to-[#1e3a6b] flex items-center justify-center text-white font-bold text-lg shadow-md"
                    aria-hidden
                  >
                    SM
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Sean Maney</p>
                    <p className="text-gray-500 text-base">BookedBy, creator of Salon Ultimate</p>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
