'use client';
import { Phone, MapPin, Mail, ArrowRight } from 'lucide-react';

export default function ContactQuoteSection() {
    return (
        <section 
            className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50" 
            aria-labelledby="contact-quote-heading"
        >
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]"></div>
            
            {/* Elegant blur circles */}
            <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 id="contact-quote-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                    Speak to Our Dedicated Team

                    </h2>
                    <p className="text-lg text-slate-600">
                    Talk directly to our trained, professional support experts for fast, personalized help.
                    </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                    {/* Contact Card 1 */}
                    <div className="group p-8 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden relative"
                        style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(20px)',
                            borderColor: 'rgba(59, 130, 246, 0.2)',
                            boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.1)'
                        }}
                    >
                        {/* Blur circles on card */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                        
                        {/* Glassmorphism overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-white/40 via-white/20 to-transparent rounded-xl pointer-events-none"></div>
                        
                        <div className="relative z-10 text-center">
                            <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                                <Phone className="w-6 h-6" style={{ color: '#3b82f6' }} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Call Us</h3>
                            <div className="space-y-1">
                                <a href="tel:240-329-9424" className="block text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">(240) 329-9424</a>
                                <a href="tel:877-415-8627" className="block text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors">(877) 415-8627</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Card 2 */}
                    <div className="group p-8 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden relative"
                        style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(20px)',
                            borderColor: 'rgba(59, 130, 246, 0.2)',
                            boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.1)'
                        }}
                    >
                        {/* Blur circles on card */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                        
                        {/* Glassmorphism overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-white/40 via-white/20 to-transparent rounded-xl pointer-events-none"></div>
                        
                        <div className="relative z-10 text-center">
                            <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                                <MapPin className="w-6 h-6" style={{ color: '#3b82f6' }} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Visit Us</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                13701 Maugansville Rd<br />Suite 5, Hagerstown, MD
                            </p>
                        </div>
                    </div>

                    {/* Contact Card 3 */}
                    <div className="group p-8 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden relative"
                        style={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            backdropFilter: 'blur(20px)',
                            borderColor: 'rgba(59, 130, 246, 0.2)',
                            boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.1)'
                        }}
                    >
                        {/* Blur circles on card */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'rgba(59, 130, 246, 0.3)' }}></div>
                        <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" style={{ backgroundColor: 'rgba(139, 92, 246, 0.3)' }}></div>
                        
                        {/* Glassmorphism overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-white/40 via-white/20 to-transparent rounded-xl pointer-events-none"></div>
                        
                        <div className="relative z-10 text-center">
                            <div className="inline-flex p-4 rounded-full mb-4" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                                <Mail className="w-6 h-6" style={{ color: '#3b82f6' }} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Contact Us Online</h3>
                            <a
                              href="/contact"
                              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-full bg-linear-to-r from-[#206DD1] to-[#1a5bb3] text-white shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-transform"
                            >
                                Go to Contact Page
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <a href="/contact" className="w-full lg:w-auto inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#206DD1] to-[#1a5bb3] px-10 py-4 text-base font-bold text-white shadow-[0_10px_25px_rgba(32,109,209,0.4)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(32,109,209,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white" aria-label="Get Your Free Quote Now">
                        Get Your Free Quote Now
                        <ArrowRight className="ml-3 h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
