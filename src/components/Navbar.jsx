import { Menu, Phone, Car } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-slate-900/70 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 grid place-items-center shadow-lg shadow-blue-500/30">
            <Car className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-semibold text-lg">CabGo</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo("booking")} className="text-slate-200 hover:text-white transition">Book</button>
          <button onClick={() => scrollTo("fleet")} className="text-slate-200 hover:text-white transition">Fleet</button>
          <button onClick={() => scrollTo("features")} className="text-slate-200 hover:text-white transition">Features</button>
          <button onClick={() => scrollTo("contact")} className="text-slate-200 hover:text-white transition">Contact</button>
          <a href="tel:+10000000000" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-lg shadow-blue-500/30">
            <Phone className="w-4 h-4" /> Call us
          </a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white" onClick={() => setOpen((v) => !v)}>
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 py-3 space-y-2 border-t border-white/10 bg-slate-900/90">
          <button onClick={() => scrollTo("booking")} className="block w-full text-left px-3 py-2 rounded-md text-slate-200 hover:bg-white/5">Book</button>
          <button onClick={() => scrollTo("fleet")} className="block w-full text-left px-3 py-2 rounded-md text-slate-200 hover:bg-white/5">Fleet</button>
          <button onClick={() => scrollTo("features")} className="block w-full text-left px-3 py-2 rounded-md text-slate-200 hover:bg-white/5">Features</button>
          <a href="tel:+10000000000" className="block w-full text-left px-3 py-2 rounded-md text-slate-200 hover:bg-white/5">Call us</a>
        </div>
      )}
    </header>
  );
}
