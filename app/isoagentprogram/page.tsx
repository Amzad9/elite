'use client'
import Image from "next/image"
import {
    TrendingUp,
    Users,
    MonitorSmartphone,
    ShieldCheck,
    DollarSign, Headset,
    Check,
    ChevronDown,
    ArrowRight,
    Zap,
    Building
} from "lucide-react";
import { useState } from "react";

export default function page() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <section className="
        relative
        flex
        items-center
        py-16
        md:py-20
        lg:py-32
        justify-center
        overflow-hidden
        bg-[url('https://images.pexels.com/photos/8297044/pexels-photo-8297044.jpeg')]
        bg-cover
        bg-center
        px-4
        sm:px-6
      ">
                <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-br from-[#152E5A]/85 via-[#152E5A]/70 to-[#152E5A]/85"></div>
                <div className='container mx-auto px-4'>
                    <div className="max-w-6xl mx-auto">
                        <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.15)] text-center mb-6 md:mb-8">
                            Maximize Earnings with Our Industry Best ISO Program
                        </h1>
                    </div>
                </div>
            </section>
            <section className="relative py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden bg-linear-to-b from-gray-200 to-white">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-linear-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-linear-to-tr from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-[200px] md:blur-[300px]" />

                <div className="relative container mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 px-4">
                            Custom Solutions for
                            your ISO/Agent Business
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 px-4 sm:px-0">

                        {/* Card */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 flex flex-col">

                            {/* Icon */}
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 md:mb-6 bg-linear-to-br from-blue-200 to-indigo-100 flex items-center justify-center">
                                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-indigo-700" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center space-y-3 md:space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                    Supercharge Your Growth
                                </h2>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose">
                                    The ECP team will customize solutions and revenue generating opportunities
                                    to take your agency to the next level.
                                </p>
                            </div>

                          
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 flex flex-col">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 md:mb-6 bg-linear-to-br from-blue-200 to-indigo-100 flex items-center justify-center">
                                <Users className="w-8 h-8 md:w-10 md:h-10 text-indigo-700" />
                            </div>

                            <div className="flex-1 text-center space-y-3 md:space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                    In-House CRM Access
                                </h2>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose">
                                    Track and grow your merchant pipeline with ECP built-in sales CRM.
                                </p>
                            </div>

                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 flex flex-col">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 md:mb-6 bg-linear-to-br from-blue-200 to-indigo-100 flex items-center justify-center">
                                <MonitorSmartphone className="w-8 h-8 md:w-10 md:h-10 text-indigo-700" />
                            </div>

                            <div className="flex-1 text-center space-y-3 md:space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                    Equipment Solutions
                                </h2>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose">
                                    POS, terminals and equipment for every merchant and industry.
                                </p>
                            </div>

                          
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-200 flex flex-col">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-4 md:mb-6 bg-linear-to-br from-blue-200 to-indigo-100 flex items-center justify-center">
                                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-indigo-700" />
                            </div>

                            <div className="flex-1 text-center space-y-3 md:space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                    High-Risk Processing
                                </h2>

                                <p className="text-gray-700 text-sm md:text-base leading-relaxed md:leading-loose">
                                    Multiple platforms including high-risk merchant solutions, with a full support team as backup.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* ISO Careers CTA moved below cards */}
                    <div className="text-center relative z-20 mt-4 md:mt-6">
                        <a
                            href="/careers"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-xl  transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Begin the journey today
                            <Zap className="w-5 h-5" />
                        </a>
                    </div>

                </div>
            </section>
            <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-linear-to-br from-[#0a1445] via-[#0b2f6a] to-[#0e4b87] text-white">

                {/* Subtle background curve */}
                <div className="absolute right-0 top-0 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-white/5 rounded-full blur-[80px] md:blur-[120px]" />

                <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className="px-4 md:px-0">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 md:mb-8">
                            Unlock Your Profit Potential <br className="hidden md:block" />
                            With The ECP ISO – Agent <br className="hidden md:block" />
                            Benefits
                        </h2>

                        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl">
                            ECP gives you the{" "}
                            <span className="font-semibold text-white">tools, support, and revenue opportunities</span>{" "}
                            that help ISO agents close more deals and earn more — consistently.
                        </p>

                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 mt-8 md:mt-10 px-6 py-3 md:px-8 md:py-4 rounded-lg md:rounded-xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold text-base md:text-lg shadow-lg hover:opacity-90 transition"
                        >
                            Speak To ECP Today →
                        </a>
                    </div>

                    {/* RIGHT LIST */}
                    <div className="space-y-3 md:space-y-4 px-4 md:px-0">
                        {[
                            "Personalized sales support to help you close more deals",
                            "US-based support that keeps merchants satisfied and retained",
                            "Fast, in-house terminal deployments so merchants get up and running quickly",
                            "Financing options to grow your portfolio without upfront capital",
                            "Earn upfront bonuses when you bring in new merchants",
                            "Track leads, deals, and commissions in one easy dashboard",
                            "Equipment leasing that generates upfront revenue for you",
                            "Payroll services that help merchants stay—and keep you earning",
                            "Ongoing perks and monthly bonuses as your portfolio grows",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 md:gap-4 pb-3 md:pb-4 border-b border-emerald-400/30"
                            >
                                <Check className="w-5 h-5 md:w-6 md:h-6 text-emerald-400 shrink-0 mt-1" />
                                <p className="text-sm md:text-lg text-white/90">{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="pt-8 md:pt-6 px-4 sm:px-6 md:px-8 pb-12 md:pb-16 rounded-2xl overflow-hidden">
                <div className="container mx-auto space-y-16 md:space-y-24 rounded-xl relative">
                    <div className="absolute -top-16 -left-16 w-48 h-48 md:w-72 md:h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 -right-16 w-48 h-48 md:w-72 md:h-72 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

                    {/* Strategic Partners Section */}
                    <div className="space-y-6 md:space-y-10 text-center max-w-4xl mx-auto px-4 mb-12 md:mb-16 mt-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6 leading-tight">
                            Strategic Partners
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            ECP Payment Systems has programs for everyone, learn how to leverage your existing business relationships into a profitable hands-off revenue channel with our Strategic Partnership Program.
                        </p>
                    </div>

                    {/* Detailed Content Section */}
                    <div id="detailed-content" className={`space-y-16 md:space-y-24`}>

                        {/* You Own the Sale - agents handle the full sales process */}
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="space-y-5 md:space-y-7 order-2 lg:order-1 px-4 md:px-0">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                                    You Own the Sale
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose">
                                    As an agent, you run the full sales process from start to finish. We provide the platform, pricing, and back-office support—you own the relationship and close the deal.
                                </p>

                                {/* Simple Read More Button that redirects */}
                                <div className="mt-6">
                                    <a
                                        href="/careers"
                                        className="inline-flex items-center gap-2 px-0 py-3  text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300 group"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                            <div className="relative group order-1 lg:order-2">
                                <div className="absolute -inset-3 md:-inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-2xl md:blur-3xl rounded-2xl md:rounded-3xl" />
                                <div className="relative rounded-xl md:rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                                    <Image
                                        src="/isoagentprogram/is1.png"
                                        alt="Payment terminals and tools for independent sales agents"
                                        width={500}
                                        height={500}
                                        className="object-cover h-110 w-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center bg-gray-100 rounded-3xl">
                            <div className="relative group">
                                <div className="absolute -inset-3 md:-inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-2xl md:blur-3xl rounded-2xl md:rounded-3xl" />
                                <div className="relative rounded-xl md:rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                                    <Image
                                        src="/isoagentprogram/is2.png"
                                        alt="Agent closing a sale with a merchant"
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-110 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-5 md:space-y-7 px-4 md:px-0">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                                    Your Deal, Your Responsibility
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose">
                                    The sales process is yours from first contact to close. You qualify leads, present solutions, and onboard merchants—with our tools and pricing behind you every step of the way.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="/careers"
                                        className="inline-flex items-center gap-2 px-0 py-3  text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300 group"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="relative group order-1 lg:order-2">
                                <div className="absolute -inset-3 md:-inset-6 bg-linear-to-r from-blue-300 to-cyan-300 opacity-20 blur-2xl md:blur-3xl rounded-2xl md:rounded-3xl" />
                                <div className="relative rounded-xl md:rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                                    <Image
                                        src="/isoagentprogram/is3.png"
                                        alt="Multi-location retail processing"
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-110 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-5 md:space-y-7 order-2 lg:order-1 px-4 md:px-0">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                                    Recurring Revenue
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose">
                                    Enjoy the benefits of recurring revenue as your clients continue to utilize our services.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="/careers"
                                        className="inline-flex items-center gap-2 px-0 py-3  text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300 group"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center bg-gray-100 rounded-3xl">
                            <div className="relative group">
                                <div className="absolute -inset-3 md:-inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-2xl md:blur-3xl rounded-2xl md:rounded-3xl" />
                                <div className="relative rounded-xl md:rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                                    <Image
                                        src="/isoagentprogram/is4.png"
                                        alt="Payment and point-of-sale platforms for agents"
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-110 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-5 md:space-y-7 px-4 md:px-0">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                                    Access to All of Our Platforms
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose">
                                    Unlock access to our comprehensive suite of platforms, offering a wide range of payment processing solutions tailored to diverse business needs.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="/careers"
                                        className="inline-flex items-center gap-2 px-0 py-3  text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300 group"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="space-y-5 md:space-y-7 px-4 md:px-0">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                                    Suitable for All Business Types
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose">
                                    Whether your contacts operate online, over the phone, or in person, ECP has solutions to meet their payment processing requirements.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="/careers"
                                        className="inline-flex items-center gap-2 px-0 py-3  text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300 group"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-3 md:-inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-2xl md:blur-3xl rounded-2xl md:rounded-3xl" />
                                <div className="relative rounded-xl md:rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                                    <Image
                                        src="/isoagentprogram/is5.png"
                                        alt="Diverse business types supported by ECP payment solutions"
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-110 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center bg-gray-100 rounded-3xl">
                            <div className="relative group">
                                <div className="absolute -inset-3 md:-inset-6 bg-linear-to-r from-cyan-300 to-blue-300 opacity-20 blur-2xl md:blur-3xl rounded-2xl md:rounded-3xl" />
                                <div className="relative rounded-xl md:rounded-3xl overflow-hidden border border-blue-100 shadow-xl bg-white/60 backdrop-blur-sm">
                                    <Image
                                        src="/isoagentprogram/is6.png"
                                        alt="Ongoing income from your merchant portfolio"
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-110 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-5 md:space-y-7 px-4 md:px-0">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                                    Passive Income Opportunity
                                </h3>
                                <p className="text-gray-600 text-base md:text-lg leading-relaxed md:leading-loose">
                                    Build ongoing income as the merchants you bring on continue to use our services. Your portfolio grows with every deal you close.
                                </p>
                                <div className="mt-6">
                                    <a
                                        href="/careers"
                                        className="inline-flex items-center gap-2 px-0 py-3  text-black font-medium rounded-lg hover:opacity-90 transition-all duration-300 group"
                                    >
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-12 md:mb-14 px-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                            Built to Reward & Support Top Producers
                        </h2>
                        <p className="text-gray-600 mt-3 md:mt-4 text-sm md:text-base">
                            Competitive earnings and world-class support to help you scale faster
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">

                        <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-6 md:p-10 flex flex-col">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-linear-to-br from-emerald-100 to-teal-100 flex items-center justify-center mb-4 md:mb-6">
                                <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-emerald-700" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                Lifetime Residual Income
                            </h3>

                            <p className="text-gray-700 text-base md:text-lg">
                                Earn <span className="font-semibold">lifetime residuals</span> with
                                aggressive splits and upfront bonuses designed to maximize your revenue
                                from day one.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl md:rounded-2xl border border-gray-200 p-6 md:p-10 flex flex-col">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4 md:mb-6">
                                <Headset className="w-6 h-6 md:w-8 md:h-8 text-indigo-700" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                US-Based Sales Support
                            </h3>

                            <p className="text-gray-700 text-base md:text-lg">
                            Get access to <span className="font-semibold">US-based customer service </span>{""}
                                and a dedicated sales concierge team built to support top producers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-linear-to-br from-emerald-600 via-teal-600 to-cyan-600">
                <div className="absolute -top-16 -right-16 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-16 -left-16 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl" />

                <div className="relative max-w-4xl mx-auto text-center text-white px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
                    Join our ISO program & take your agency to new heights
                    </h2>

                    <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 md:mb-10">
                        As an agent, you run direct sales and own the relationship with your merchants.
                        We provide the platform, pricing, and support—you close the deals.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="/careers"
                            className="inline-flex items-center justify-center px-8 py-3 md:px-10 md:py-4 rounded-lg md:rounded-xl bg-white text-emerald-700 font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            Get Started Today
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}