'use client';

import {
  Lock,
  FileText,
  Phone,
  Facebook,
  Linkedin,
  MessageCircle,
} from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  const linkClass =
    "relative text-sm text-slate-400 hover:text-[#f4e28f] transition-colors duration-300 " +
    "after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full " +
    "after:bg-linear-to-r after:from-[#f4e28f] after:to-[#f4e28f] " +
    "after:scale-x-0 after:origin-left after:transition-transform after:duration-300 " +
    "hover:after:scale-x-100";

  return (
    <footer
      className="w-full bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
      aria-label="Site footer"
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/diagmonds.png')]"></div>

      {/* Decorative blur circles */}
      <div className="absolute top-0 right-20 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"
        style={{ backgroundColor: 'rgba(244, 226, 143, 0.15)' }}
      />
      <div className="absolute bottom-0 left-20 w-80 h-80 rounded-full blur-3xl opacity-20 animate-pulse pointer-events-none"
        style={{ backgroundColor: 'rgba(16, 40, 77, 0.25)', animationDelay: '2s' }}
      />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)' }}
      />

      <div className="container mx-auto px-3 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16 border-b border-slate-800/50">

          {/* About */}
          <div className="space-y-4">
          <a href="/">
              <Image src="/logo.png" alt="Logo" className='rounded-xl' width={120} height={120} />
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mt-2">
              Elite Card Processing was founded on the principles of providing exceptional
              service at a great rate. We bring merchants the latest technology to improve efficiency.
            </p>
          </div>

          {/* Our Solutions */}
          <div className="space-y-4">
            <a href="/getquote" className={`text-xl font-bold relative inline-block ${linkClass}`}>
              Our Solutions
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-[#f4e28f] to-transparent"></span>
            </a>
            <ul className="space-y-3">
              {[
                'Clover',
                'Merchant Cash Advance',
                'Level 3 Processing',
                'ATM Machines',
                'Counter Top Terminals',
                'Merchants',
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className={linkClass}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <a href="/about" className={`text-xl font-bold relative inline-block ${linkClass}`}>
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-[#f4e28f] to-transparent"></span>
            </a>
            <ul className="space-y-3">
              {(
                [

                { name: 'How To Videos', link: '/how-to-videos' },
                { name: 'Elite Reviews', link: '/elite-reviews' },
                { name: 'Careers', link: '/careers' },
                { name: 'Privacy Policy', link: '/privacy-policy' },
                { name: 'Terms & Conditions', link: '/terms-and-conditions' },
                ] as { name: string; link: string; target?: string }[]
              ).map((item, idx) => (
                <li key={idx}>
                  <a href={item.link} target={item?.target} className={linkClass}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4">
            <a href="/contact" className={`text-xl font-bold relative inline-block ${linkClass}`}>
              Connect With Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-linear-to-r from-[#f4e28f] to-transparent"></span>
            </a>

            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <Phone className="w-4 h-4 text-[#f4e28f] mt-0.5" />
                <a href="tel:1-877-415-8627" className={linkClass}>
                  Toll Free: 1-877-415-8627
                </a>
              </div>
              <div className="flex gap-2 items-start">
                <Phone className="w-4 h-4 text-[#f4e28f] mt-0.5" />
                <a href="tel:240-329-9424" className={linkClass}>
                  Local: 240-329-9424
                </a>
              </div>
              <div className="flex gap-2 items-start text-slate-500">
                <FileText className="w-4 h-4 mt-0.5" />
                Fax: 240-319-7353
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4" role="list" aria-label="Social media links">
              <a href="#facebook" className="w-10 h-10 bg-[#f4e28f] rounded-full flex items-center justify-center hover:bg-yellow-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" aria-label="Facebook" role="listitem">
                <span className="text-slate-900 text-lg font-bold" aria-hidden="true">f</span>
              </a>
              <a href="#twitter" className="w-10 h-10 bg-[#f4e28f] rounded-full flex items-center justify-center hover:bg-yellow-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" aria-label="Twitter" role="listitem">
                <span className="text-slate-900 text-lg font-bold" aria-hidden="true">t</span>
              </a>
              <a href="#linkedin" className="w-10 h-10 bg-[#f4e28f] rounded-full flex items-center justify-center hover:bg-yellow-600 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-lg" aria-label="LinkedIn" role="listitem">
                <span className="text-slate-900 text-lg font-bold" aria-hidden="true">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 text-center space-y-3 border-t border-slate-800/50">
          <p className="text-sm text-slate-400">
            Elite Card Processing LLC is a registered ISO of Citizens Bank, Providence, RI.
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Elite Card Processing · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
