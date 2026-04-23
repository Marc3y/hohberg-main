import { TopBar } from '@/components/top-bar'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/main/hero-section'
import { SeniorSection } from '@/components/sections/main/senior-section'
import { AmbulantSection } from '@/components/sections/main/ambulant-section'
import { SupportSection } from '@/components/sections/main/support-section'
import { ContactSection } from '@/components/sections/main/contact-section'
import { Footer } from '@/components/footer'
import { BottomBar } from '@/components/bottom-bar'
import { HashScrollHandler } from '@/components/hash-scroll-handler'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <HashScrollHandler />
      <TopBar />
      <Navigation />
      <main>
        <HeroSection />
        <SeniorSection />
        <AmbulantSection />
        <SupportSection />
        <ContactSection />
        <Footer />
        <BottomBar />
      </main>
    </div>
  )
}
