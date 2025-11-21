import { Shield, BadgeCheck, CreditCard, MapPin } from 'lucide-react';

export default function Features() {
  const items = [
    { icon: Shield, title: 'Safe & Secure', desc: 'Verified drivers, SOS button, and 24/7 support.' },
    { icon: BadgeCheck, title: 'On-time Guarantee', desc: 'Real-time tracking and punctual pickups.' },
    { icon: CreditCard, title: 'Easy Payments', desc: 'Cashless and cash options with invoices.' },
    { icon: MapPin, title: 'Everywhere You Are', desc: 'City rides, airport transfers, and outstation.' },
  ];

  return (
    <section id="features" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Ride better</h2>
        <p className="text-slate-300 text-center mt-2">Modern features to keep your journey smooth.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-slate-300 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
