import SubHeroSection from "../component/faq/SubHeroSection";
import CommitmentSection from "../component/providers/CommitmentSection";
import TrustedCareNetwork from "../component/providers/TrustedCareNetwork";
import ReviewSection from "../component/landing/SuccessStoriesSection";
import PatientStatsSection from "../component/providers/PatientStatsSection";
import FaqSection from "../component/landing/FaqSection";

export default function ProviderPage() {
  return (
    <>
      <SubHeroSection
        heading="Meet Our Dedicated Medical Professionals"  
        content="Your journey toward better mental health begins with trusted experts. Our intake process helps us understand your needs and connect you with the right provider for personalized care."
        searchbar={false}
      />
      <CommitmentSection />
      <TrustedCareNetwork />
      <PatientStatsSection />
      <ReviewSection provider={true} />
      <FaqSection />
    </>
  );
}
