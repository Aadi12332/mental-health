import bgImage from "../../assets/images/bgimg.svg";
import Logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import TreatmentSelectionCard from "./TreatmentSelectionCard";

export default function GetStartedPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-[linear-gradient(180deg,#F0F9F7_0%,#E8F4F8_100%)] h-screen w-full">
      <div
        className="h-screen bg-cover bg-center flex flex-col items-center lg:px-6 px-3 w-full py-10 overflow-auto scroll-hide"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          className="flex items-center gap-3 mb-[40px] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={Logo} alt="Logo" className="h-[50px]" />
        </div>
        <TreatmentSelectionCard
          options={[
            "ADHD / ADD Treatment",
            "Anxiety Treatment",
            "Depression Treatment",
            "Insomnia Treatment",
            "Weight Loss",
            "Emotional Support Animal Letter",
            "OCD Treatment",
          ]}
          onContinuePath="/patient-details"
        />
      </div>
    </div>
  );
}
