'use client';

import { CreditCard, Monitor, DollarSign, Building2, Smartphone, Zap, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: CreditCard,
      title: 'Merchant Accounts & Credit Card Processing',
      text: 'Accept all major credit and debit cards with competitive rates, fast settlements, and reliable processing. We specialize in tailored merchant solutions for businesses of every kind.',
      button: 'Payment Processing',
      href: '/retail-services',
    },
    {
      icon: Monitor,
      title: 'POS Systems & Terminals',
      text: 'Complete hardware solutions featuring Clover POS, Diner Daddy, NCR point of sale systems (ideal for retail & firearms), Greta, plus reliable EMV terminals for all businesses.',
      button: 'Point of Sale Systems',
      href: '/point-of-sale-systems',
    },
    {
      icon: DollarSign,
      title: 'Eliminate Processing Fees',
      text: 'Implement dual pricing & cash discounting compliantly — inspired by gas stations. Show lower cash prices and card prices; transparent setup saves thousands monthly while rewarding cash payers.',
      button: 'Cash Discount and Dual Pricing',
      href: '/cash-discount-dual-pricing',
    },
    {
      icon: Building2,
      title: 'Firearms Dealer Solutions',
      text: 'Specialized merchant accounts & processing for firearms dealers — secure, compliant, and reliable for high-risk retail. Accept cards seamlessly with dedicated support for FFL businesses.',
      button: 'Firearms Solutions',
      href: '/2a-firearms',
    },
    {
      icon: Smartphone,
      title: 'ATM Placement & Processing',
      text: 'Boost revenue with full ATM services — placement, processing, and revenue sharing. Add convenient cash access for your customers and earn passive income monthly with no hassle.',
      button: 'ATM Services',
      href: '/atm',
    },
    {
      icon: Zap,
      title: 'Level III Processing',
      text: 'Unlock lower rates with detailed Level III data processing — ideal for high-value, B2B, or government transactions. Enhanced reporting, reduced fees, and full compliance for your business.',
      button: 'Level III Processing',
      href: '/level-iii-merchant-services',
    },
  ];

  return (
    <section id="solutions" className="w-full bg-linear-to-br bg-white px-4 sm:px-6 lg:px-8 lg:py-2 sm:py-12" aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">Our Services</h2>
      <div className="container mx-auto mt-0 lg:-mt-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8 auto-rows-fr">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <article key={idx} className="relative flex flex-col h-full rounded-3xl p-4 bg-white/20 border border-white/40 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 -rotate-[5deg] bg-[radial-gradient(circle_at_center,rgba(255,255,25,0.9)_0%,rgba(255,255,255,0.1)_20%,rgba(206,216,227,0.80)_55%,rgba(206,216,227,0.35)_100%)] blur-3xl opacity-70"></div>
                <div className="relative z-10 flex flex-col h-full items-start">
                  <div className="w-16 h-16 mb-6">
                    <Icon className="w-full h-full text-yellow-600 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.text}</p>
                  <Link
                    href={service.href}
                    className="mt-auto px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-700 text-sm font-medium rounded-full transition border border-slate-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm"
                  >
                    {service.button}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
