import SubHeroSection from "../component/faq/SubHeroSection";
import FaqTabs from "../component/faq/FaqTabs";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import ContactSupportForm from "../component/contact/ContactSupportForm";
import { SupportInfoSection } from "../component/contact/SupportInfoSection";

export default function ContactUsPage() {
  const navigate = useNavigate();
  return (
    <>
      <SubHeroSection
        title="Contact Us"
        subheading="We're Here to Support You"
        searchbar={false}
      />
      <ContactSupportForm />
      <SupportInfoSection />

    </>
  );
}
