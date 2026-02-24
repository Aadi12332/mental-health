import SubHeroSection from "../component/faq/SubHeroSection";
import FaqTabs from "../component/faq/FaqTabs";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

export default function FaqPage() {
  const navigate = useNavigate();
  return (
    <>
      <SubHeroSection
        title="FAQ's"
        heading="Frequently"
        subheading="Asked Questions"
        content="Find answers to common questions about our services"
      />
      <FaqTabs />
      <div className="flex justify-center mt-10 mb-20" onClick={() => navigate("/contact-us")}>
        <Button>Contact Us →</Button>
      </div>
    </>
  );
}
