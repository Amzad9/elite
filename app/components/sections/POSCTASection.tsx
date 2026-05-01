import { ArrowRight } from 'lucide-react';

export default function POSCTASection() {
    return (
        <section className="bg-linear-to-b from-blue-50 to-white px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="pos-cta-heading">
            <div className="mx-auto max-w-7xl">
                <div className="relative bg-white/70 backdrop-blur-md rounded-3xl shadow-2xs p-8 lg:p-12 grid gap-6 grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center">
                    <div className="col-span-12 lg:col-span-4 order-2 lg:order-1 flex justify-center lg:justify-start">
                        <a href="/point-of-sale-systems" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#206DD1] to-[#1a5bb3] px-10 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(32,109,209,0.4)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(32,109,209,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Explore Point of Sale Systems">
                            Point Of Sale Systems
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </a>
                    </div>
                    <div className="col-span-12 lg:col-span-8 order-1 lg:order-2">
                        <h2 id="pos-cta-heading" className="text-3xl sm:text-4xl font-body font-semibold leading-tight text-slate-900">
                        Experience the Future of Payments
                        </h2>
                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                            Discover how our cutting-edge technology and local expertise can transform your business operations and boost your bottom line. From seamless transactions to powerful analytics, we provide all the tools you need to scale your business effortlessly.
                        </p>
                    </div>
                    <div className="hidden lg:block absolute -top-16 right-8 w-32 h-32 bg-blue-200/50 rounded-full blur-3xl animate-pulse-slow"></div>
                </div>
            </div>
        </section>
    );
}
