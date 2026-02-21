import HeroSection from "../component/landing/HeroSection"
import SupportSection from "../component/landing/SupportSection"
import ExpertsSection from "../component/landing/ExpertsSection"
import StepsSection from "../component/landing/StepsSection"
import SuccessStoriesSection from "../component/landing/SuccessStoriesSection"
import FaqSection from "../component/landing/FaqSection"
import CtaSection from "../component/landing/CtaSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SupportSection />
      <ExpertsSection />
      <StepsSection />
      <SuccessStoriesSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}