'use client';
import { Building2, Clock, Phone, Handshake, Shield, Star } from 'lucide-react';

export default function WhyChooseUsSection() {
    const features = [
        { 
            icon: Building2,
            title: "Local Most States Company", 
            description: "We are your Hagerstown neighbors offering local support, not offshore call centers."
        },
        { 
            icon: Clock,
            title: "Same-Day Support", 
            description: "Replacement terminals within hours when you need them most."
        },
        // { 
        //     icon: Phone,
        //     title: "Direct Access", 
        //     description: "Call (240) 329-9424 - talk directly to Josh or Jacque."
        // },
        { 
            icon: Handshake,
            title: "All Businesses Welcome", 
            description: "We serve businesses others won't touch, including firearms dealer accounts."
        },
        { 
            icon: Shield,
            title: "Proven Experience", 
            description: "Deep understanding of local business needs and regulations."
        },
        { 
            icon: Star,
            title: "Guaranteed Results", 
            description: "4.9-star reviews and thousands of satisfied most states merchants."
        }
    ];

    return (
        <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden" aria-labelledby="why-choose-heading">
            {/* Pattern Background */}
            <div className="absolute inset-0 opacity-[0.6] bg-[url('/pointsystems/whychooseus/whychooseus1.png')]"></div>
            
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ backgroundColor: 'rgba(20, 184, 166, 0.15)' }}></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ backgroundColor: 'rgba(251, 113, 133, 0.12)', animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none" style={{ backgroundColor: 'rgba(20, 184, 166, 0.08)' }}></div>
            
            {/* Animated gradient orbs - Teal and Coral */}
            <div className="absolute top-0 right-1/4 w-32 h-32 rounded-full blur-2xl pointer-events-none animate-pulse" style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.25), rgba(6, 182, 212, 0.25))', animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full blur-2xl pointer-events-none animate-pulse" style={{ backgroundColor: 'rgba(251, 113, 133, 0.15)', animationDelay: '3s' }}></div>
            <div className="absolute top-1/3 right-0 w-48 h-48 rounded-full blur-2xl pointer-events-none animate-pulse" style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-0 left-1/3 w-56 h-56 rounded-full blur-2xl pointer-events-none animate-pulse" style={{ backgroundColor: 'rgba(251, 113, 133, 0.1)', animationDelay: '2.5s' }}></div>

            <div className="container mx-auto  relative z-10">
                <div className="text-center mb-16">
                    <h2 id="why-choose-heading" className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 relative inline-block">
                        Why Choose Elite Card Processing
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-[linear-gradient(90deg,transparent_0%,rgba(244,226,143,0.8)_50%,transparent_100%)]"></span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-6">
                        Trusted by most states businesses for reliable payment processing solutions
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <article 
                                key={idx} 
                                className="group relative p-8 rounded-2xl border border-white/40 backdrop-blur-xl bg-white/40 hover:bg-white/60 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden shadow-lg"
                            >
                                {/* Pattern overlay on card */}
                                <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')] rounded-2xl pointer-events-none"></div>
                                
                                {/* Glassmorphism background gradient */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/60 via-white/40 to-white/20 rounded-2xl pointer-events-none"></div>
                                
                                {/* Subtle grid pattern overlay */}
                                <div className="absolute inset-0 opacity-[0.03] rounded-2xl pointer-events-none" style={{
                                    backgroundImage: 'linear-gradient(rgba(16,40,77,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16,40,77,0.1) 1px, transparent 1px)',
                                    backgroundSize: '20px 20px'
                                }}></div>
                                
                                {/* Shine effect on hover with theme colors */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(244,226,143,0.1) 50%, transparent 100%)' }}></div>
                                
                                {/* Elegant blur circles in card - Teal and Coral */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl group-hover:blur-2xl group-hover:scale-150 transition-all duration-500 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.3), rgba(251, 113, 133, 0.3))' }}></div>
                                
                                {/* Additional blur circles in card */}
                                <div className="absolute top-1/4 -left-6 w-20 h-20 rounded-full blur-xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundColor: 'rgba(6, 182, 212, 0.2)' }}></div>
                                <div className="absolute bottom-1/4 -right-6 w-24 h-24 rounded-full blur-xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundColor: 'rgba(251, 113, 133, 0.2)' }}></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-5 group-hover:opacity-10 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.15), rgba(251, 113, 133, 0.15))' }}></div>
                                
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-all border-2 border-primary mb-4 group-hover:bg-[#10284D]">
                                        <Icon className="w-12 h-12 text-slate-900 group-hover:text-white stroke-2 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
