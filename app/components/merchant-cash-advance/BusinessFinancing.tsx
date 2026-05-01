'use client'
import {
    ArrowRight,
    DollarSign,
    Clock,
    Zap,
    Calendar,
    FileCheck,
    CreditCard,
    CheckCircle,
    Building2,
    TrendingUp,
    Sparkles,
    LineChart
} from "lucide-react";
import { useEffect, useState } from 'react';

export default function BusinessFinancingCards() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            {/* Subtle Background Glow Effects - Adjusted for mobile */}
            <div className="absolute top-0 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-green-600/50 rounded-full blur-[100px] sm:blur-[150px] md:blur-[200px] -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-purple-200/90 rounded-full blur-[100px] sm:blur-[150px] md:blur-[200px]"></div>
            <div className="absolute bottom-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-blue-900/20 rounded-full blur-[100px] sm:blur-[150px] md:blur-[200px] translate-y-1/2"></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-flex items-center justify-center p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 border border-gray-200 shadow-sm">
                        <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 -ml-2" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
                        Professional Business Financing
                    </h2>

                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                        Elite Card Processing partners with Fundomate to offer competitive funding programs,
                        fast approval processes, and flexible repayment options for Most States businesses.
                    </p>
                </div>

                {/* Two Cards Grid with Equal Height */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Card 1: Funding Program Features - Light Blue Theme */}
                    <div className="relative group flex flex-col h-full">
                        {/* Card glow effect */}
                        <div className="absolute -inset-0.5 bg-linear-to-r from-blue-100 to-blue-50 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-500"></div>

                        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 sm:gap-4 mb-6 md:mb-8">
                                <div className="p-2 sm:p-3 bg-linear-to-br from-blue-100 to-blue-50 rounded-lg sm:rounded-xl border border-blue-200">
                                    <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Funding Program Features</h2>
                            </div>

                            <div className="space-y-3 sm:space-y-4 md:space-y-5 flex-1">
                                {[
                                    {
                                        icon: <DollarSign className="w-5 h-5" />,
                                        title: "Advance Amounts",
                                        description: "$5,000 to $250,000 based on monthly processing volume",
                                        color: "text-blue-500"
                                    },
                                    {
                                        icon: <Clock className="w-5 h-5" />,
                                        title: "Approval Timeline",
                                        description: "Same-day to 48-hour approval decisions",
                                        color: "text-blue-500"
                                    },
                                    {
                                        icon: <Zap className="w-5 h-5" />,
                                        title: "Funding Speed",
                                        description: "1-3 business day funding, same-day available",
                                        color: "text-blue-500"
                                    },
                                    {
                                        icon: <Calendar className="w-5 h-5" />,
                                        title: "Repayment Terms",
                                        description: "Automated daily percentage of credit card sales",
                                        color: "text-blue-500"
                                    },
                                    {
                                        icon: <FileCheck className="w-5 h-5" />,
                                        title: "Documentation",
                                        description: "Minimal paperwork and documentation requirements",
                                        color: "text-blue-500"
                                    },
                                    {
                                        icon: <CreditCard className="w-5 h-5" />,
                                        title: "Credit Requirements",
                                        description: "Based on processing history, not personal credit scores",
                                        color: "text-blue-500"
                                    }
                                ].map((feature, index) => (
                                    <div key={index} className="group/item flex items-start gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-blue-50/50 transition-all duration-200">
                                        <div className={`p-1.5 sm:p-2 rounded-lg bg-blue-50 ${feature.color} flex-shrink-0`}>
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base group-hover/item:text-blue-600 transition-colors">{feature.title}</h4>
                                            <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Qualification Requirements - Light Green Theme */}
                    <div className="relative group flex flex-col h-full">
                        {/* Card glow effect */}
                        <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-100 to-emerald-50 rounded-2xl blur opacity-60 group-hover:opacity-80 transition duration-500"></div>

                        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 sm:gap-4 mb-6 md:mb-8">
                                <div className="p-2 sm:p-3 bg-linear-to-br from-emerald-100 to-emerald-50 rounded-lg sm:rounded-xl border border-emerald-200">
                                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Qualification Requirements</h2>
                            </div>

                            <div className="space-y-3 sm:space-y-4 flex-1">
                                {[
                                    "Minimum $5,000 monthly credit card processing volume",
                                    "Business operating for at least 6 months",
                                    "Consistent credit card processing history",
                                    "Valid business bank account and processing statements",
                                    "No recent bankruptcies or outstanding tax liens",
                                    "Established business with regular customer transactions"
                                ].map((requirement, index) => (
                                    <div key={index} className="group/item flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-emerald-50/50 transition-all duration-200">
                                        <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 bg-emerald-100 rounded-full flex items-center justify-center border border-emerald-200 mt-0.5">
                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full"></div>
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-700 group-hover/item:text-emerald-700 transition-colors">{requirement}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-emerald-100">
                                <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-emerald-50/50 rounded-lg border border-emerald-100">
                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-xs sm:text-sm text-gray-600">
                                        <span className="font-semibold text-gray-900">Note:</span> Qualifications are
                                        subject to verification based on individual business circumstances.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Card */}
                <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-1 sm:-inset-2 bg-linear-to-r from-indigo-100/50 to-green-100/50 rounded-2xl blur-lg"></div>

                    <div className="relative bg-linear-to-r from-indigo-50/80 via-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="max-w-3xl mx-auto">
                            <div className="flex flex-col items-center gap-6 md:gap-8">
                                <div className="w-full text-center">
                                    <div className="mb-4 sm:mb-6">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Smart Repayment Structure</h3>
                                        <p className="text-sm sm:text-base text-gray-600 px-2">
                                            Automated daily repayment ranging from <span className="font-bold text-purple-600">10-20%</span> of daily
                                            credit card sales, ensuring payments adjust with your business cash flow.
                                        </p>
                                    </div>
                                </div>

                                <div className="w-full">
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center">
                                        <a href="/contact" className="bg-linear-to-r from-blue-600 to-cyan-600 text-white px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-300/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                                        Check qualification requirements
                                        </a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}