import { useState } from 'react';
import { Calendar, MapPin, Clock, Car } from 'lucide-react';

export default function Booking() {
  const [form, setForm] = useState({ pickup: '', drop: '', date: '', time: '' });
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setStatus('Booking confirmed! We\'ll contact you shortly.');
  };

  return (
    <section id="booking" className="relative py-20 bg-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]"></div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Book your ride</h2>
            <p className="mt-2 text-slate-300">Instant confirmation. No hidden charges.</p>

            <form onSubmit={submit} className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input value={form.pickup} onChange={(e)=>setForm({...form,pickup:e.target.value})} placeholder="Pickup location" className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-800/60 text-white placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input value={form.drop} onChange={(e)=>setForm({...form,drop:e.target.value})} placeholder="Drop location" className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-800/60 text-white placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input type="date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-800/60 text-white placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input type="time" value={form.time} onChange={(e)=>setForm({...form,time:e.target.value})} className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-800/60 text-white placeholder:text-slate-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
                <Car className="w-5 h-5" /> Confirm Booking
              </button>
              {status && <p className="mt-3 text-emerald-400 text-sm">{status}</p>}
            </form>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
            <h3 className="text-white font-semibold mb-3">Why ride with us?</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Professional drivers</li>
              <li>• Clean, well-maintained cars</li>
              <li>• Live tracking and support</li>
              <li>• Transparent pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
