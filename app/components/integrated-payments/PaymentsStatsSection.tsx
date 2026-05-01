export default function PaymentsStatsSection() {
  return (
    <section className="bg-[#020617] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          {/* Large image + headline block */}
          <div className="relative overflow-hidden rounded-2xl min-h-[260px] bg-black">
            <div className="absolute inset-0">
              <img
                src="/payment-integration/e3.png"
                alt="Payment innovation background"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/70 to-black/40" />
            </div>
            <div className="relative h-full flex items-center px-6 py-10 md:px-16">
              <p className="text-xl md:text-2xl lg:text-3xl leading-snug font-semibold max-w-xl">
                A global leader driving payments innovation to power your software
                and grow your business.
              </p>
            </div>
          </div>

          {/* Right-side stats column - Clean, simple layout */}
          <div className="flex flex-col gap-6">
            {/* Stat card 1 */}
            <div className="rounded-2xl bg-black/60 border border-white/10 shadow-lg flex flex-col justify-center px-6 py-8 h-full">
              <p className="text-4xl md:text-5xl font-extrabold text-[#ff6b00] mb-2">
                #1
              </p>
              <p className="text-sm md:text-base text-gray-200">
                Global merchant acquirer
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stat card 2 - Updated to US dollars */}
              <div className="rounded-2xl bg-[#ff6b00] flex flex-col justify-center px-6 py-8 h-full">
                <p className="text-3xl md:text-4xl font-extrabold mb-2">$78B</p>
                <p className="text-sm md:text-base text-white/90">
                  Merchant transactions processed annually
                </p>
              </div>

              {/* Stat card 3 - Simplified to match screenshot */}
              <div className="rounded-2xl bg-[#0f62fe] flex flex-col justify-center px-6 py-8 h-full">
                <p className="text-sm md:text-base text-white/80 mb-1">
                  Nearly
                </p>
                <p className="text-3xl md:text-4xl font-extrabold mb-2">
                  100%
                </p>
                <p className="text-sm md:text-base text-white/90">
                  of U.S. households reached
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}