import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Benefits from '@/components/sections/Benefits'
import ServicesPreview from '@/components/sections/ServicesPreview'
import SoftwareHighlight from '@/components/sections/SoftwareHighlight'
import CasesPreview from '@/components/sections/CasesPreview'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ServicesPreview />
        <SoftwareHighlight />
        <CasesPreview />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}