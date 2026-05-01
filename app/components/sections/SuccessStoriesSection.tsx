'use client';
import { TrendingUp, Users, Award, Zap, ArrowRight } from 'lucide-react';

export default function SuccessStoriesSection() {
    const stats = [
        { icon: Users, value: "10,000+", label: "Most States Businesses" },
        { icon: Award, value: "4.9/5", label: "Average Rating" },
        { icon: Zap, value: "24/7", label: "Support Available" }
    ];

    return (
        <section 
            className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50" 
            aria-labelledby="success-heading"
        >
            {/* Pattern overlay */}
            <div className="absolute inset-0 z-1 opacity-5 "></div>
            
            {/* Elegant blur circles - Light blue/purple tones */}
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse pointer-events-none z-1" style={{ backgroundColor: 'rgba(147, 197, 253, 0.2)' }}></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse pointer-events-none z-1" style={{ backgroundColor: 'rgba(196, 181, 253, 0.15)', animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none z-1" style={{ backgroundColor: 'rgba(165, 243, 252, 0.1)' }}></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-5xl mx-auto">
                    {/* Heading */}
                    <h2 id="success-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                        Join Thousands of Successful Businesses
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div 
                                key={idx} 
                                className="group relative p-8 rounded-xl backdrop-blur-xl border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                style={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                    backdropFilter: 'blur(20px)',
                                    borderColor: 'rgba(59, 130, 246, 0.2)',
                                    boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.15)'
                                }}
                            >
                                {/* Glassmorphism gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/40 via-white/20 to-transparent rounded-xl pointer-events-none"></div>
                                
                                {/* Glass shine effect on hover */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/60 via-transparent to-transparent rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="p-3 rounded-lg bg-blue-50/80 backdrop-blur-sm">
                                            <Icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                    </div>
                                    
                                    <div className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-2 text-center">
                                        {stat.value}
                                    </div>
                                    
                                    <div className="text-center text-sm font-medium text-slate-600">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a href="/getquote" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#206DD1] to-[#1a5bb3] px-10 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(32,109,209,0.4)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(32,109,209,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Today">
                        GET YOUR FREE QUOTE TODAY
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}