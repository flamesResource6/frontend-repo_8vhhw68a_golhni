import { Car, ShieldCheck, Gauge, BatteryCharging } from 'lucide-react';

const cars = [
  { name: 'City Mini', type: 'Hatchback', badge: 'Best for Solo', color: 'from-blue-500 to-cyan-400' },
  { name: 'Urban Go', type: 'Sedan', badge: 'Family Choice', color: 'from-violet-500 to-fuchsia-400' },
  { name: 'Eco Move', type: 'EV', badge: 'Eco Friendly', color: 'from-emerald-500 to-teal-400' },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Fleet</h2>
            <p className="text-slate-300 mt-2">Choose the ride that fits your need and budget.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((c) => (
            <div key={c.name} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition overflow-hidden">
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${c.color} opacity-20 group-hover:opacity-30 transition`}></div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs ring-1 ring-white/15 mb-4">
                  <ShieldCheck className="w-4 h-4" /> {c.badge}
                </div>
                <h3 className="text-white text-xl font-semibold">{c.name}</h3>
                <p className="text-slate-300 text-sm">{c.type}</p>

                <div className="mt-6 grid grid-cols-3 gap-3 text-slate-300 text-xs">
                  <div className="flex items-center gap-2"><Gauge className="w-4 h-4" /> AC</div>
                  <div className="flex items-center gap-2"><Car className="w-4 h-4" /> 4 seats</div>
                  <div className="flex items-center gap-2"><BatteryCharging className="w-4 h-4" /> Fast</div>
                </div>

                <button className="mt-6 w-full px-4 py-2 rounded-lg bg-blue-500/90 text-white hover:bg-blue-600 transition">Select</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
