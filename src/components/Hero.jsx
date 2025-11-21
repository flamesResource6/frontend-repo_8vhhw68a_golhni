import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs ring-1 ring-white/15 mb-4 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Live 24/7 city rides
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
            Hassle‑free cab booking for your city rides
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-xl">
            Book reliable cabs in seconds. Transparent pricing, clean vehicles, and pro drivers. Airport transfers, daily commute, and outstation made easy.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#booking" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">Book a Cab</a>
            <a href="#fleet" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">View Fleet</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/60 to-slate-900"></div>
    </section>
  );
}
