export default function Footer(){
  return (
    <footer id="contact" className="py-10 bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} CabGo. All rights reserved.</p>
        <div className="text-slate-400 text-sm">
          <a href="mailto:hello@cabgo.app" className="hover:text-white">hello@cabgo.app</a>
          <span className="mx-2">•</span>
          <a href="tel:+10000000000" className="hover:text-white">+1 000 000 0000</a>
        </div>
      </div>
    </footer>
  )
}
