import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { ScheduleSection } from "@/components/schedule-section"
import { PrizesSection } from "@/components/prizes-section"
import { JurySection } from "@/components/jury-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />
      <HeroSection />
      <IntroSection />
      <hr className="rule" />
      <ScheduleSection />
      <hr className="rule" />
      <PrizesSection />
      <hr className="rule" />
      <JurySection />
      <hr className="rule" />
      <EcosystemSection />
      <hr className="rule" />
      <SponsorsSection />
      <hr className="rule" />
      <TeamSection />
      <hr className="rule" />
      <CTASection />
      <Footer />
    </LanguageProvider>
  )
}
