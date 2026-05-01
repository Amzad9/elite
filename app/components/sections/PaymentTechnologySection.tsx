'use client';
import { Monitor, CreditCard, Settings, Smartphone, ArrowUpRight } from 'lucide-react';

export default function PaymentTechnologySection() {
    const technologies = [
        { icon: Monitor, title: "POS Business Solutions", text: "We promise cost-effective payment solutions designed to help you lower expenses and boost profits.", color: "blue" },
        { icon: CreditCard, title: "Processing & Terminals", text: "We promise cost-effective payment solutions designed to help you lower expenses and boost profits.", color: "green" },
        { icon: Settings, title: "Specialized Services", text: "We promise cost-effective payment solutions designed to help you lower expenses and boost profits.", color: "purple" },
        { icon: Smartphone, title: "Account Management", text: "We promise cost-effective payment solutions designed to help you lower expenses and boost profits.", color: "orange" }
    ];

    return (
        <section 
            className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden" 
            style={{ backgroundColor: '#10284D' }} 
            aria-labelledby="payment-tech-heading"
        >
            {/* Blurred Background Image */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920)',
                }}
            ></div>
            
            {/* Professional Dark Blue Overlay with gradient */}
            <div className="absolute inset-0 z-1 bg-linear-to-b from-[#10284D]/95 via-[#1a3a66]/90 to-[#10284D]/95"></div>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 z-1 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]"></div>
           
            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 id="payment-tech-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Advanced Payment Technology Services
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mt-6">
                        Cutting-edge solutions for modern businesses
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {technologies.map((item, idx) => {
                        const Icon = item.icon;
                        const iconColors = {
                            blue: { bg: 'rgba(255, 255, 255, 0.15)', icon: '#ffffff' },
                            green: { bg: 'rgba(255, 255, 255, 0.15)', icon: '#ffffff' },
                            purple: { bg: 'rgba(255, 255, 255, 0.15)', icon: '#ffffff' },
                            orange: { bg: 'rgba(255, 255, 255, 0.15)', icon: '#ffffff' }
                        };
                        const iconColor = iconColors[item.color as keyof typeof iconColors];
                        return (
                            <article 
                                key={idx} 
                                className="group relative p-8 rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border overflow-hidden"
                                style={{ 
                                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                    backdropFilter: 'blur(20px)',
                                    borderColor: 'rgba(244, 226, 143, 0.3)',
                                    boxShadow: '0 8px 32px 0 rgba(16, 40, 77, 0.4)'
                                }}
                            >
                                {/* Glassmorphism gradient overlay */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                                
                                {/* Glass shine effect on hover */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                                
                                {/* Icon Circle */}
                                <div className="mb-4 relative z-10">
                                    <div 
                                        className="w-22 h-22 rounded-full flex items-center justify-center mb-4 shadow-lg"
                                        style={{ background: iconColor.bg }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: iconColor.icon }} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mt-6 mb-4">{item.title}</h3>
                                    <p className="text-sm text-white/90 mb-4 leading-relaxed">{item.text}</p>
                                    
                                    {/* Action Arrow Link */}
                                    <div className="flex justify-end mt-auto">
                                        <a 
                                            href={`/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="group/arrow inline-flex items-center text-white justify-center text-sm py-1 px-2 rounded-full  transition-all duration-300 hover:scale-110"
                                            aria-label={`Learn more about ${item.title}`}
                                        >
                                            Learn More
                                            <ArrowUpRight className="w-5 h-5 group-hover/arrow:translate-x-1 group-hover/arrow:-translate-y-1 transition-transform" style={{ color: '#f4e28f' }} /> 
                                            
                                        </a>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}