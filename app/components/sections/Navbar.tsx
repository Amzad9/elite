'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
  items?: string[];
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [hash, setHash] = useState('');

  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const SOLUTIONS_ITEMS = [
    'Point of Sale Systems',
    'Online Food Ordering',
    'Level III Merchant Services',
    'Merchant Cash Advance',
    'ATM',
    'Cash Discount Dual Pricing',
    'Integrated Payments',
    'QuickBooks Processing',
    'Political Accounts'
  ];

  const MERCHANTS_ITEMS = [
    'Retail Services',
    'Firearms',
    'Restaurants',
  ];

  const CURRENT_CLIENT_ITEMS = [
    { name: 'Log In to Dashboard', href: 'account-management#logins' },
    { name: 'Current Client Resources', href: 'account-management#resources' },
    { name: 'How to Videos', href: 'how-to-videos' },
    // { name: 'QuickBooks Processing', href: 'quickbooks-processing' },
    // { name: 'Political Accounts', href: 'political-accounts' },
  ];

  const NAV_LINKS: NavLink[] = [
    { name: 'Home', href: '' },
    { name: 'Solutions', href: 'solutions', hasDropdown: true, items: SOLUTIONS_ITEMS },
    { name: 'Merchants', href: 'merchants', hasDropdown: true, items: MERCHANTS_ITEMS },
    { name: 'Current Client', href: 'current-client', hasDropdown: true, items: CURRENT_CLIENT_ITEMS.map(item => item.name) },
    { name: 'ISO Agent Program', href: 'isoagentprogram' },
    { name: 'About', href: 'about' },
    { name: 'Elite Reviews', href: 'elite-reviews' },
    { name: 'Careers', href: 'careers' },
    { name: 'Contact', href: 'contact' },
  ];

  const slugify = (text: string) =>
    text.toLowerCase().replace(/\s+/g, '-');

  const getDropdownHref = (item: string) => {
    const overrides: Record<string, string> = {
      'ATMs': 'seasonal-atms',
      'Firearms': '2a-firearms',
      'Political Accounts': 'political-accounts',
      'QuickBooks Processing': 'quickbooks-processing',
      'Log In to Dashboard': 'account-management#logins',
      'Current Client Resources': 'account-management#resources',
    };
    return overrides[item] ?? slugify(item);
  };

  const isDropdownItemActive = (item: string) => {
    const href = getDropdownHref(item);

    if (href.includes('#')) {
      const [path, itemHash] = href.split('#');
      return pathname === `/${path}` && hash === `#${itemHash}`;
    }

    const basePath = `/${href}`;
    return pathname === basePath || pathname.startsWith(`${basePath}/`);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav ref={navRef} className="sticky top-0 z-50 bg-[#10284D]/95 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">

            <a href="/">
              <Image src="/logo.png" alt="Logo" className="rounded-4xl" width={80} height={80} />
            </a>

            <div className="hidden xl:flex items-center gap-3 xl:gap-5">
              {NAV_LINKS.map(link => (
                <div key={link.name} className="relative">

                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                        className={`relative flex items-center gap-1 text-[14px] 2xl:text-[16px] px-2 py-1 rounded-0 transition-all duration-200
                          ${isDropdownItemActive(link.href)
                            ? 'text-white font-semibold shadow-[0_0_12px_rgba(244,226,143,0.5)]'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'}
                        `}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>

                      {openDropdown === link.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-[#10284D] border border-slate-700 rounded-lg shadow-xl z-50">
                          {link.items?.map(item => (
                            <a
                              key={item}
                              href={`/${getDropdownHref(item)}`}
                              onClick={handleLinkClick}
                              className={`block px-4 py-3 text-[14px] 2xl:text-[16px] xl:text-md rounded-0 transition-colors duration-200
                                ${isDropdownItemActive(item)
                                  ? 'bg-emerald-500/30 text-white font-semibold'
                                  : 'text-slate-400 hover:bg-white/10 hover:text-white'}
                              `}
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={`/${link.href}`}
                      className={`relative text-[14px] 2xl:text-[16px] px-2 py-1 rounded-0 transition-all duration-200
                        ${isDropdownItemActive(link.href)
                          ? 'text-yellow-500 font-semibold border-b-2 border-yellow-500'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'}
                      `}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}

              <a href="/getquote" className="px-5 py-2.5 text-sm font-semibold rounded-full bg-yellow-400 text-slate-900 hover:bg-yellow-300">
                Get A Quote
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="xl:hidden text-white p-2 hover:bg-white/10 rounded-lg"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </nav>

      <div className={`xl:hidden fixed top-0 right-0 h-full w-80 bg-[#10284D] z-50 transform transition-transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-20 space-y-4">

          {NAV_LINKS.map(link => (
            <div key={link.name} className="border-b border-slate-700/50 pb-2">

              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                    className={`flex justify-between w-full py-2 text-sm rounded-full px-2
                      ${isDropdownItemActive(link.href) ? 'text-white font-semibold' : 'text-slate-400'}
                    `}
                  >
                    {link.name}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileDropdown === link.name && (
                    <div className="ml-4 mt-2 space-y-2 pl-3 border-l border-slate-700/50">
                      {link.items?.map(item => (
                        <a
                          key={item}
                          href={`/${getDropdownHref(item)}`}
                          onClick={handleLinkClick}
                          className={`block text-sm py-1.5 rounded
                            ${isDropdownItemActive(item)
                              ? 'bg-emerald-500/30 text-white font-semibold'
                              : 'text-slate-400 hover:text-white'}
                          `}
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={`/${link.href}`}
                  onClick={handleLinkClick}
                  className={`block py-2 text-sm rounded-full px-2
                    ${isDropdownItemActive(link.href) ? 'text-white font-semibold' : 'text-slate-400'}
                  `}
                >
                  {link.name}
                </a>
              )}

            </div>
          ))}

          <a href="/getquote" onClick={handleLinkClick} className="block w-full text-center px-5 py-2.5 text-sm font-semibold rounded-full bg-yellow-400 text-slate-900">
            Get A Quote
          </a>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 xl:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}
    </>
  );
}
