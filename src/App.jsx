import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Booking from './components/Booking'
import Fleet from './components/Fleet'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Booking />
        <Fleet />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
