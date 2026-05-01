'use client';
import { Package, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function RetailInventorySection() {
    return (
        <section 
            className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50" 
            aria-labelledby="retail-inventory-heading"
        >
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]"></div>
            
            {/* Elegant blur circles */}
            <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-30" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}></div>

            <div className="container mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                     
                        
                        {/* Heading */}
                        <h2 id="retail-inventory-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            Advanced Retail Inventory Management
                        </h2>
                        
                        {/* Description */}
                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            Complete inventory tracking and customer management solutions for retail businesses.
                        </p>
                        
                     
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a href='/retail-services' className="w-full lg:w-auto inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#206DD1] to-[#1a5bb3] px-10 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(32,109,209,0.4)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(32,109,209,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Learn More">
                                Learn More
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </a>
                         
                        </div>
                    </div>
                    
                    {/* Right Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
                            <Image
                                src="/industry/inventory.jpg"
                                alt="Retail inventory management system"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover rounded-2xl"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        
                        {/* Decorative element */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-50 pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-2xl opacity-30 pointer-events-none" style={{ backgroundColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}