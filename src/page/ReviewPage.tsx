import SubHeroSection from "../component/faq/SubHeroSection";
import SuccessStoriesSection from "../component/landing/SuccessStoriesSection";
import ExpertsSection from "../component/landing/ExpertsSection";
import PatientWordsSection from "../component/reviews/PatientWordsSection";

export default function ReviewPage() {
  return (
    <>
      <SubHeroSection
        heading="Trusted by Thousands on Their Mental Wellness Journey"  
        content="Real stories from real people. Discover how our care team has helped individuals feel heard, supported, and empowered every day."
        searchbar={false}
        review={true}
      />
      <SuccessStoriesSection bgcolor={true} />
      <PatientWordsSection />
      <ExpertsSection />
    </>
  );
}
