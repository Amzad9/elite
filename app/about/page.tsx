import React from "react";
import { Building2, MapPin, Globe, Wrench } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-br from-blue-50 via-indigo-50 to-pink-50">

      {/* GLOBAL BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-48 top-32 h-[600px] w-[600px] rounded-full bg-blue-400/30 blur-[160px]" />
        <div className="absolute -right-48 bottom-32 h-[600px] w-[600px] rounded-full bg-purple-400/30 blur-[160px]" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/20 blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative flex h-[350px] sm:h-[400px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1651094856217-6f30970b1521?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        <div className="absolute inset-0 bg-linear-to-br from-[#152E5A]/90 via-[#152E5A]/75 to-[#152E5A]/90" />

        {/* HERO GLOW */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-white/40 blur-[140px]" />
          <div className="absolute right-20 top-16 h-[420px] w-[420px] rounded-full bg-blue-700/30 blur-[160px]" />
          <div className="absolute bottom-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[130px]" />
        </div>

        <div className="relative z-10 px-14 py-12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About Us
          </h1>
          <div className="mx-auto h-1 w-28 rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
        </div>
      </section>

      {/* CONTENT */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16">

        {/* ABOUT */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/30 bg-white/20 p-12 text-center backdrop-blur-2xl ">
          <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-400/30 blur-[140px]" />
          <h2 className="relative z-10 mb-6 text-4xl font-bold text-slate-800">
            About Elite Card Processing
          </h2>
          <p className="relative z-10 mx-auto max-w-4xl text-lg leading-relaxed text-slate-700">
            Elite Card Processing was founded to deliver transparent, reliable,
            and cutting-edge payment solutions to businesses. We bring
            modern technology with real local support.
          </p>
        </div>

        {/* MISSION */}
        <div className="relative mb-20 overflow-hidden rounded-3xl border border-white/30 bg-white/20 p-12 backdrop-blur-2xl shadow-xs">
          <div className="absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-400/30 blur-[160px]" />
          <div className="absolute -left-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-400/20 blur-[160px]" />

          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold text-slate-800">
                Our Mission
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-slate-700">
                To empower businesses with fair pricing, dependable
                payment technology, and personal service that only a local
                provider can offer.
              </p>
            </div>

            <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600"
                alt="Our mission"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-purple-500/20" />
            </div>
          </div>
        </div>

        {/* INFO GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: Building2,
              title: "Founded",
              value: "2016",
              glow: "text-purple-600",
            },
            {
              icon: MapPin,
              title: "Location",
              value: "Hagerstown",
              glow: "text-pink-500",
            },
            {
              icon: Globe,
              title: "Service Area",
              value: "Nationwide",
              glow: "text-cyan-500",
            },
            {
              icon: Wrench,
              title: "Specialization",
              value: "Complete merchant services with local support",
              glow: "text-blue-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/30 bg-white/20 p-8 backdrop-blur-2xl shadow-lg transition-all hover:scale-[1.01] hover:shadow-[0_40px_40px_rgba(99,102,241,0.1)]"
            >
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-indigo-400/30 blur-[120px]" />

              <div className="relative z-10">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-white/30 shadow-lg`}
                >
                  <item.icon className={`h-8 w-8 ${item.glow}`} />
                </div>

                <h3 className={`mb-2 text-xl font-bold text-slate-800`}>
                  {item.title}
                </h3>

                <p className={`text-lg font-medium ${item.glow} text-slate-700`}>
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
