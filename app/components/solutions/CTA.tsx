"use client";

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="contact" className="relative py-20 md:py-24 overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-white to-purple-50/20"></div>
            
            {/* Blurred background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-r from-blue-100/20 to-purple-100/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-r from-emerald-100/10 to-cyan-100/10 rounded-full blur-3xl"></div>

            {/* Subtle decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-300/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-purple-300/20 rounded-full animate-pulse delay-700"></div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Glass morphism container with blur overlay */}
                <div className="relative bg-white/40 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl shadow-blue-500/5 p-8 md:p-12 transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                    
                    {/* Blur Overlay Layer */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/50 to-white/10 backdrop-blur-md rounded-2xl -z-10"></div>
                    
                    {/* Frosted Glass Effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/30 via-transparent to-white/10 rounded-2xl backdrop-blur-sm -z-10"></div>
                    
                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-2xl border border-white/50 shadow-inner"></div>

                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        
                        {/* Heading */}
                        <div className="mb-10">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                                Ready to Elevate Your Business?
                            </h2>
                            
                            <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
                                Looking to grow your business but need capital to take that next step? 
                                Elite Card Processing offers tailored financing solutions to help you achieve your goals.
                            </p>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-12">
                            <div className="mb-10">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                                    Get Your Free Quote Today
                                </h3>
                                <p className="text-gray-500 text-sm">
                                    No commitment, just a conversation about your business needs
                                </p>
                            </div>
                            
                            {/* CTA Button */}
                            <div className="flex flex-col items-center space-y-4">
                                <a
                                    href="/contact"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    className="group relative inline-flex items-center justify-center py-3.5 px-10 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-[0.98] overflow-hidden"
                                >
                                    {/* Button shine effect */}
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    
                                    <span className="text-base relative z-10">Start Your Application</span>
                                    <ArrowRight className={`w-4 h-4 ml-3 relative z-10 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                                </a>
                                
                                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                                    Quick and easy process. Get pre-approved in minutes.
                                </p>
                            </div>

                         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}