import HeroSection from "./component/HeroSection";
import SvgGradientDefs from "./component/Icons";
import Navbar from "./component/Navbar";
import SupportSection from "./component/SupportSection";
import ExpertsSection from "./component/ExpertsSection";
import StepsSection from "./component/StepsSection";
import SuccessStoriesSection from "./component/SuccessStoriesSection";
import FaqSection from "./component/FaqSection";
import CtaSection from "./component/CtaSection";
import FooterSection from "./component/FooterSection";

export default function App() {
  return (
    <div>
      <SvgGradientDefs />
      <Navbar />
      <HeroSection />
      <SupportSection />
      <ExpertsSection />
      <StepsSection />
      <SuccessStoriesSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </div>
  )
}