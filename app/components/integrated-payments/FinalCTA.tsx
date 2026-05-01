import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

function DecorativeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Diagonal stripes */}
      <div className="absolute left-0 top-0 bottom-0 w-2/5 max-w-md">
        <div className="absolute inset-0 flex flex-col gap-4 justify-center -rotate-12 origin-center">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-px bg-white rounded-full"
              style={{ width: `${30 + (i % 5) * 15}%`, marginLeft: `${(i % 3) * 8}%`, opacity: 0.06 + (i % 4) * 0.03 }}
              aria-hidden
            />
          ))}
        </div>
      </div>
      {/* Soft gradient orbs */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/5 blur-3xl -translate-x-1/4" aria-hidden />
      <div className="absolute left-1/4 bottom-0 w-48 h-48 rounded-full bg-[#d4af37]/10 blur-2xl translate-y-1/2" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10284D] via-transparent to-transparent" aria-hidden />
    </div>
  );
}

export default function FinalCTA() {
  return (
    <section
      className="relative bg-[#10284D] py-20 md:py-24 overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      <DecorativeBackground />
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-white/70 text-sm font-medium uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" aria-hidden />
            Get started
          </span>
          <h2 id="final-cta-heading" className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight">
            Ready to enhance your software with innovative payments technology?
          </h2>
          <p className="text-white/80 mt-5 text-lg">
            Connect with our team to integrate payments into your platform and unlock new growth.
          </p>
        </div>
        <Link
          href="/contact"
          className="group shrink-0 inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors shadow-lg"
          aria-label="Connect with us"
        >
          <span>Connect with us</span>
          <span className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
