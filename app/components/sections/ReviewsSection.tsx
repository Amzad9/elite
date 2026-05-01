import Image from "next/image";
export default function ReviewsSection() {
    return (
        <section id="reviews" className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className="sr-only">Customer Testimonials</h2>
            <div className="container mx-auto">
                <div className="grid md:grid-cols-1 xl:grid-cols-12 gap-8">
                    <div
                        className="
    relative
    col-span-12 md:col-span-5
    w-full
    overflow-hidden
    rounded-3xl
    shadow-2xl
    aspect-4/5
    sm:aspect-video
    md:aspect-auto
    md:h-full
    min-h-[260px]
  "
                    >
                        <Image
                            src="/industry/ins5.png"
                            alt="Business team"
                            fill
                            priority
                            sizes="
      (max-width: 640px) 100vw,
      (max-width: 1024px) 100vw,
      40vw
    "
                            className="object-cover"
                        />
                    </div>
                    <div className="bg-linear-to-br col-span-12 md:col-span-7 bg-[#10284D] backdrop-blur-xl rounded-3xl px-8 py-24 border border-slate-700/30 shadow-2xl">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:gap-6 gap-24 lg:gap-6 text-center">
                            <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">
                                <div className="relative inline-block mb-4 -mt-16">
                                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1 shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]">
                                        <Image src="https://lh3.googleusercontent.com/a-/AOh14GjxgEm2930L_mvsEXJdDRPU4BK262yDVuFCGSp1Ew=w40-h40-c-c-rp-w40-h40-mo-br100" height={96} width={96} className="w-full h-full object-cover rounded-full" alt="Sarah J." />
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                    "Josh is the reason our business will NEVER change credit card processors."
                                    </p>
                                </blockquote>
                                <div>
                                    <p className="text-white font-semibold text-sm">Phil Hott</p>

                                    <p className="text-slate-400 text-xs">4 years ago</p>
                                </div>
                            </article>

                            <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">
                                <div className="relative inline-block mb-4 -mt-16">
                                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1 shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]">
                                        <Image src="https://lh3.googleusercontent.com/a-/AOh14GhWU5WHWx0dEay-N7i2Eux0LiZZqTybihoYyQ24dg=w40-h40-c-c-rp-w40-h40-mo-ba2-br100" height={96} width={96} className="w-full h-full object-cover rounded-full" alt="Michael B." />
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                    "I have used Josh for years and he has always been great to work with. Quick, local service if you ever have a problem or question, and rates are great!"
                                    </p>
                                </blockquote>
                                <div>
                                    <p className="text-white font-semibold text-sm">Eugene Martin</p>

                                    <p className="text-slate-400 text-xs">4 years ago</p>
                                </div>
                            </article>

                            <article className="relative rounded-3xl p-3 border border-slate-700/30 shadow-2xl bg-[linear-gradient(45deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.15)_8%,rgba(16,40,77,0.95)_22%,rgba(16,40,77,1)_100%)]">
                                <div className="relative inline-block mb-4 -mt-16">
                                    <div className="w-24 h-24 rounded-full bg-linear-to-br from-yellow-400 to-yellow-600 p-1 shadow-[0_0_30px_rgba(255,215,100,0.65),0_0_60px_rgba(255,255,255,0.25)]">
                                        <Image src="https://lh3.googleusercontent.com/a-/AOh14Gj3fL--l9pBZv1ZWg0Y-fh6lxGWEUSoiXLTooNPjDA=w40-h40-c-c-rp-w40-h40-mo-br100" height={96} width={96} className="w-full h-full object-cover rounded-full" alt="David L." />
                                    </div>
                                </div>
                                <blockquote>
                                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                                      "Great company and very professional customer service. Best rates I have found and there machines and equipment works flawlessly. Highly recommend josh and elite card processing."
                                    </p>
                                </blockquote>
                                <div>
                                    <p className="text-white font-semibold text-sm">Dustin Stottlemyer</p>
                                    <p className="text-slate-400 text-xs">4 years ago</p>
                                </div>
                            </article>

                        </div>

                      
                    </div>
                </div>
            </div>
        </section>
    );
}
