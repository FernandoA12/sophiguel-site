import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Benefits } from '../components/Benefits'
import { Warnings } from '../components/Warnings'
import { Footer } from '../components/Footer'
import { Testimonials } from '../components/Testimonials'
import { Contact } from '../components/Contact'

export default function LandingPage() {
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      <Hero />
      <Benefits />
      <Testimonials />
      <Contact />
      <Warnings />
      <Footer />
    </main>
  )
}
