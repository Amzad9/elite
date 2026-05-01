export default function HeroSection() {
    return (
        <section className="text-center bg-[#10284D] px-4 relative sm:h-[800px] md:h-auto sm:px-6 lg:px-8 py-12 md:pb-40 sm:py-16 lg:pt-32 lg:pb-60 overflow-hidden" aria-labelledby="hero-heading">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] rounded-full bg-blue-500/20 blur-[120px]"></div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#112240]/50 to-[#0a192f]"></div>
                <div className="absolute inset-0 opacity-10 bg-[url('/bg.jpg')] bg-cover bg-center"></div>
            </div>
            <div className="relative z-40">
                <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Merchant Services & Credit Card Processing
                </h1>
                <p className="text-base sm:text-lg text-slate-300 max-w-4xl mx-auto mb-10 px-4 leading-relaxed">
                    Complete payment processing solutions for businesses of all types. From restaurants to retail,
                    government to firearms dealers — we deliver advanced technology and dedicated support to help your business thrive.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
                    <a
                        href="/getquote"
                        className="px-5 py-4 text-sm font-semibold rounded-full text-slate-900 bg-[linear-gradient(90deg,#f4e28f,#f1d86a,#d4af37,#c9a227,#f4e28f)] bg-size-[300%_100%] animate-[gradientMove_4s_ease_infinite] shadow-[0_0_20px_#d4af3744] hover:shadow-[0_0_30px_#d4af3766] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-slate-900"
                        aria-label="Get free quote now"
                    >
                        Get Your Free Quote
                    </a>
                    <a href="tel:+12403299424" className="w-full sm:w-auto px-8 py-3.5 border-2 border-slate-400 text-white font-semibold rounded-full hover:bg-slate-700/50 hover:border-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 text-base" aria-label="Call us now">
                      Call Now
                    </a>
                </div>
            </div>
        </section>
    );
}
