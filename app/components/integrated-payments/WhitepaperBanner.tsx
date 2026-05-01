import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

function DecorativeBackground() {
  const orbs = [
    { size: 64, x: "10%", y: "20%", opacity: 0.12 },
    { size: 96, x: "5%", y: "60%", opacity: 0.08 },
    { size: 48, x: "25%", y: "80%", opacity: 0.15 },
    { size: 80, x: "18%", y: "40%", opacity: 0.06 },
  ];
  return (
    <div className="absolute inset-0 left-0 top-0 w-full md:w-2/5 max-w-xl pointer-events-none overflow-hidden">
      {/* Soft glowing orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white blur-2xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            opacity: orb.opacity,
          }}
          aria-hidden
        />
      ))}
      {/* Connection grid: dots + subtle lines */}
      <div className="absolute inset-0 flex flex-col justify-center gap-8 py-16 pl-8 md:pl-12">
        {[0, 1, 2].map((row) => (
          <div key={row} className="flex items-center gap-6">
            {[0, 1, 2, 3, 4].map((col) => (
              <div key={col} className="flex items-center gap-2">
                <span
                  className="rounded-full bg-white/20"
                  style={{ width: 6 + (row + col) % 3, height: 6 + (row + col) % 3 }}
                />
                {col < 4 && (
                  <span
                    className="bg-white/10 rounded-full"
                    style={{ width: 24 + (row * 8), height: 1 }}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Single accent ring */}
      <div
        className="absolute rounded-full border border-white/15"
        style={{ width: 280, height: 280, left: "-8%", top: "50%", transform: "translateY(-50%)" }}
        aria-hidden
      />
      <div
        className="absolute rounded-full border border-white/10"
        style={{ width: 340, height: 340, left: "-12%", top: "50%", transform: "translateY(-50%)" }}
        aria-hidden
      />
    </div>
  );
}

export default function WhitepaperBanner() {
  return (
    <section className="relative bg-[#10284D] py-20 md:py-24 overflow-hidden" aria-labelledby="whitepaper-heading">
      <DecorativeBackground />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10284D] via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div className="md:max-w-2xl">
          <span className="inline-flex items-center gap-2 text-white/80 text-sm font-medium uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4" aria-hidden />
            Resource
          </span>
          <h2 id="whitepaper-heading" className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight">
            Learn how integrated payments have emerged as a front-line growth engine for software vendors.
          </h2>
          <p className="text-white/80 mt-5 text-lg max-w-xl">
            Discover strategies to embed payments into your platform, unlock new revenue streams, and accelerate growth—backed by data and best practices.
          </p>
        </div>
        <Link
          href="/contact"
          className="group shrink-0 inline-flex items-center gap-3 px-6 py-4 rounded-lg bg-black text-white font-semibold hover:bg-gray-800 transition-colors shadow-lg"
          aria-label="Read the whitepaper"
        >
          <span>Read the whitepaper</span>
          <span className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
