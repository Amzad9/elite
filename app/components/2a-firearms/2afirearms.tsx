 "use client";

import { useState } from 'react';
import Image from 'next/image';
import { Phone, MapPin, Shield, Target, Zap, CheckCircle2, ChevronRight, Star, Award, Users, Globe, Badge } from 'lucide-react';

const FIREARMS_IMAGES = [
  { src: '/2a-firearms/Picture1.jpg', label: 'Firearms Collection', alt: 'Firearms collection' },
  { src: '/2a-firearms/Picture2.jpg', label: 'Gun Store', alt: 'Gun store display' },
  { src: '/2a-firearms/Picture3.jpg', label: 'Semi-Auto Pistol', alt: 'Semi-automatic pistol' },
  { src: '/2a-firearms/Picture4.jpg', label: 'Revolver', alt: 'Revolver' },
  { src: '/2a-firearms/Picture5.jpg', label: 'Rifle', alt: 'Rifle' },
  { src: '/2a-firearms/Picture6.jpg', label: 'Ammunition', alt: 'Ammunition' },
  { src: '/2a-firearms/Picture7.jpg', label: 'Retail Display', alt: 'Firearms retail display' },
  { src: '/2a-firearms/Picture8.jpg', label: 'Online Sales', alt: 'Online firearm sales' },
];

function ConsultationSection() {
  const consultationItems = [
    "Current Processing Cost Analysis",
    "Firearms Account Qualification Review",
    "Equipment And Technology Recommendations",
    "Cash Discount Program Eligibility",
    "Same-Day Quote And Rapid Approval"
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50/30"></div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#10284D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-linear-to-r from-blue-50/50 via-slate-50/30 to-indigo-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Get Your Firearms
            <span className="block text-[#10284D] mt-2">
              Merchant Account Today
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-12">
            Specialized payment processing solutions designed specifically for firearms businesses
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#10284D] flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#10284D]/10 border border-[#10284D]/20 mb-2">
                  <Star className="w-3 h-3 text-[#10284D]" />
                  <span className="text-xs font-semibold text-[#10284D]">FREE CONSULTATION</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Free Firearms Business Consultation
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {consultationItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#10284D]/30 hover:bg-slate-100 transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#10284D]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#10284D]"></div>
                  </div>
                  <span className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="/contact" className="group inline-flex items-center justify-center relative overflow-hidden bg-[#10284D] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:bg-[#152E5A] transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                <div className="relative flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5" />
                  <span>Start Your Free Consultation</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyApplySection() {

  const contactInfo = [
    { type: "Phone", phone: "(240) 329-9424", icon: Phone },
    { type: "Toll-Free", phone: "(877) 415-8627", icon: Phone },
    { type: "Visit", address: "13701 Maugansville Rd #5, Hagerstown, MD 21740", icon: MapPin }
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-br from-slate-50 to-white">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#10284D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Apply <span className="text-[#10284D]">Today</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Join firearms businesses who choose reliable payment processing without discrimination
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-linear-to-br from-slate-50 to-blue-50/30 rounded-3xl border border-slate-200 p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-[#10284D]" />
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Firearms businesses deserve reliable payment processing without discrimination. Join the growing number of Second Amendment businesses choosing Elite Card Processing for competitive rates and dedicated support.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#10284D]/5 border border-[#10284D]/20">
                  <CheckCircle2 className="w-6 h-6 text-[#10284D] shrink-0" />
                  <span className="text-gray-800 font-medium">No discrimination against legitimate firearms businesses</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#10284D]/5 border border-[#10284D]/20">
                  <Shield className="w-6 h-6 text-[#10284D] shrink-0" />
                  <span className="text-gray-800 font-medium">Competitive rates and dedicated support guaranteed</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#10284D]/5 border border-[#10284D]/20">
                  <CheckCircle2 className="w-6 h-6 text-[#10284D] shrink-0" />
                  <span className="text-gray-800 font-medium">Compatible with Gun Broker</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#10284D]/5 border border-[#10284D]/20">
                  <CheckCircle2 className="w-6 h-6 text-[#10284D] shrink-0" />
                  <span className="text-gray-800 font-medium">Compatible with GunsAmerica</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/30 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#10284D]/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#10284D]/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#10284D]" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-600 mb-1">{item.type}</p>
                          <p className="text-gray-900 text-lg font-medium">
                            {item.phone || item.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <a href="/contact" className="group flex items-center justify-center gap-3 bg-[#10284D] text-white font-bold text-lg px-6 py-4 rounded-2xl shadow-xl hover:bg-[#152E5A] transition-all duration-300">
                <Zap className="w-5 h-5" />
                <span>Get Firearms Quote Now</span>
              </a>
              <a href="tel:+12403299424" className="group flex items-center justify-center gap-3 bg-slate-100 border border-slate-300 text-gray-900 font-bold text-lg px-6 py-4 rounded-2xl hover:border-[#10284D]/30 hover:bg-slate-200 transition-all duration-300">
                <Phone className="w-5 h-5" />
                <span>Call (240) 329-9424</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorizedGatewaysSection() {
  const gateways = [
    "Authorize.net",
    "Usaepay",
    "NMI (Network Merchants)",
    "Eprocessing Network"
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-white">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl max-w-3xl mx-auto font-bold text-gray-900 mb-4">
            Authorized Resellers of Gateways <span className="text-[#10284D]">Compatible with Firearms</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Payment gateways fully compatible with firearms merchant accounts
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gateways.map((name, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#10284D]/30 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#10284D]/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-[#10284D]" />
              </div>
              <p className="font-bold text-gray-900">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipsSection() {
  const industryPartnerships = {
    title: "Industry Partnerships",
    description: "Proud member of NRABA and supporter of NSSF initiatives.",
    nra: { title: "NRA Business Alliance", tagline: "\"The Business of Freedom.\"" }
  };

  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-linear-to-br from-slate-50 to-white">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10284D]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10284D]/10 border border-[#10284D]/20 mb-6">
            <Badge className="w-4 h-4 text-[#10284D]" />
            <span className="text-sm font-medium text-[#10284D]">TRUSTED INDUSTRY PARTNER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry <span className="text-[#10284D]">Partnerships</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Aligned with leading organizations dedicated to supporting the firearms industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-[#10284D]" />
                  <h3 className="text-2xl font-bold text-gray-900">{industryPartnerships.title}</h3>
                </div>
                <p className="text-gray-700 text-lg mb-8">{industryPartnerships.description}</p>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-lg font-semibold text-[#10284D] mb-2">NRABA Member</h4>
                    <p className="text-gray-700">National Rifle Association Business Alliance</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                    <h4 className="text-lg font-semibold text-[#10284D] mb-2">NSSF Supporter</h4>
                    <p className="text-gray-700">National Shooting Sports Foundation Initiatives</p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="relative p-8 rounded-3xl bg-slate-100 border border-slate-200">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-[#10284D] border-4 border-white flex items-center justify-center shadow-lg">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="mb-6 pt-4">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">{industryPartnerships.nra.title}</h4>
                    <p className="text-gray-600 italic text-lg">{industryPartnerships.nra.tagline}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10284D]/10 border border-[#10284D]/20">
                    <div className="w-2 h-2 rounded-full bg-[#10284D]"></div>
                    <span className="text-[#10284D] font-medium">Official Partner</span>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#10284D]/10 border border-[#10284D]/20">
                    <Shield className="w-4 h-4 text-[#10284D]" />
                    <span className="text-sm text-[#10284D]">Trusted by Firearms Businesses Nationwide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-[#10284D] text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:bg-[#152E5A] transition-all duration-300">
                <Users className="w-5 h-5" />
                <span>Join Our Network of Trusted Partners</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TwoAProcessorIntroSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50/30" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-wider text-[#10284D] font-semibold mb-4">
          The 2A Friendly Payment Processor Built for Firearms & Ammo
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          2A Friendly <span className="text-[#10284D]">Payment Processor</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Accept credit cards for firearms and ammunition online without the hassle of getting shut down by payment processors.
        </p>
      </div>
    </section>
  );
}

function FirearmTypesSection() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden bg-white">
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Firearms We <span className="text-[#10284D]">Support</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Payment processing for all types of firearms and ammunition
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {FIREARMS_IMAGES.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-bold text-gray-900">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FirearmsMerchantAccount() {
  return (
    <div className="relative">
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#10284D]/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <TwoAProcessorIntroSection />
      <FirearmTypesSection />
      <ConsultationSection />
      <WhyApplySection />
      <AuthorizedGatewaysSection />
      <PartnershipsSection />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
      `}</style>
    </div>
  );
}