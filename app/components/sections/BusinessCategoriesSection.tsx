'use client';
import { Utensils, ShoppingBag, Briefcase, Shield, Building2, Zap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BusinessCategoriesSection() {
    const categories = [
        { icon: Utensils, title: "Restaurants & Food", text: "Aldelo POS, Clover POS, and Novi Eats ordering solutions.", image: "/industry/ins1.png", href: "/getquote" },
        { icon: ShoppingBag, title: "Retail & E-Commerce", text: "POS systems, hardware, and ATM placement services.", image: "/industry/ins2.png", href: "/getquote" },
        { icon: Briefcase, title: "Service Businesses", text: "Mobile processing and recurring billing solutions.", image: "/industry/ins3.png", href: "/getquote" },
        { icon: Shield, title: "Firearms", text: "Firearms dealer accounts with cash discount programs.", image: "/industry/ins4.png", href: "/about" },
        { icon: Building2, title: "Government & Utilities", text: "Level III processing with full compliance support.", image: "/industry/ins5.png", href: "/about" },
        { icon: Zap, title: "Political Accounts", text: "Secure credit card processing for campaigns & political entities — dedicated compliance & expert help.", image: "/industry/ins6.png", href: "/about" }
    ];

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden bg-primary-500" aria-labelledby="business-categories-heading">
            {/* Elegant Blur Circles - Soft Purple and Blue */}
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse pointer-events-none z-1" style={{ backgroundColor: 'rgba(147, 51, 234, 0.15)' }}></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse pointer-events-none z-1" style={{ backgroundColor: 'rgba(59, 130, 246, 0.12)', animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none z-1" style={{ backgroundColor: 'rgba(168, 85, 247, 0.08)' }}></div>
            
            {/* Animated gradient orbs - Purple and Blue Gradient */}
            <div className="absolute top-0 right-1/4 w-32 h-32 rounded-full blur-2xl pointer-events-none z-1 animate-pulse" style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.25), rgba(59, 130, 246, 0.25))', animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full blur-2xl pointer-events-none z-1 animate-pulse" style={{ backgroundColor: 'rgba(99, 102, 241, 0.15)', animationDelay: '3s' }}></div>
            <div className="absolute top-1/3 right-0 w-48 h-48 rounded-full blur-2xl pointer-events-none z-1 animate-pulse" style={{ backgroundColor: 'rgba(168, 85, 247, 0.1)', animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full blur-2xl pointer-events-none z-1 animate-pulse" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', animationDelay: '2.5s' }}></div>

            <div className="container mx-auto  relative z-10">
                <div className="text-center mb-16">
                    <h2 id="business-categories-heading" className="text-4xl sm:text-5xl font-bold text-primary mb-4 relative inline-block">
                        Industry Solutions
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(244,226,143,0.8) 50%, transparent 100%)' }}></span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-6">
                        Tailored payment processing solutions for every business type
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={idx}
                                href={item.href}
                                className="group relative block overflow-hidden rounded-2xl border border-white/40 backdrop-blur-xl bg-white/40 hover:bg-white/60 transition-all duration-300 shadow-lg hover:shadow-2xl -translate-y-1 hover:-translate-y-2"
                            >
                                {/* Pattern overlay */}
                                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] rounded-2xl pointer-events-none"></div>

                                {/* Glassmorphism background */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/60 via-white/40 to-white/20 rounded-2xl pointer-events-none"></div>

                                {/* Subtle grid pattern */}
                                <div className="absolute inset-0 opacity-[0.03] rounded-2xl pointer-events-none" style={{
                                    backgroundImage: 'linear-gradient(rgba(16,40,77,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,40,77,0.1) 1px, transparent 1px)',
                                    backgroundSize: '20px 20px'
                                }}></div>

                                {/* Image background with overlay - Visible by default */}
                                <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500 rounded-2xl overflow-hidden pointer-events-none">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover blur-md scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Elegant blur circles in card - Purple and Blue */}
                                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-30 group-hover:opacity-100 group-hover:top-auto group-hover:right-auto group-hover:-bottom-6 group-hover:-left-6 group-hover:scale-150 transition-all duration-500 ease-out z-0" style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))' }}></div>
                                
                                {/* Additional blur circles in card */}
                                <div className="absolute top-1/4 -left-8 w-24 h-24 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0" style={{ backgroundColor: 'rgba(168, 85, 247, 0.2)' }}></div>
                                <div className="absolute bottom-1/4 -right-8 w-28 h-28 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-0" style={{ backgroundColor: 'rgba(59, 130, 246, 0.2)' }}></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity duration-500 z-0" style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(99, 102, 241, 0.15))' }}></div>

                                <div className="relative z-20 p-8 flex flex-col h-full">
                                    <div className="flex flex-col items-center text-center mb-6 grow">
                                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 shadow-lg group-hover:scale-110 transition-all">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                sizes="96px"
                                            />
                                        </div>
                                        <span className="relative z-30 text-xl font-bold text-slate-900 mb-2 group-hover:text-black transition-colors">
                                            {item.title}
                                        </span>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                                    </div>
                                    {/* Get Quote - Show on hover, bottom right */}
                                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end">
                                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                                            Get Quote
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}