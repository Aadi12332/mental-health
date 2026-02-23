import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GradientButton from "../landing/GradientButton";
import BackArrow from "../../assets/images/backArrow.svg";

type Props = {
  title?: string;
  options: string[];
  onBackPath?: string;
  onContinuePath?: string;
};

export default function TreatmentSelectionCard({
  title = "What Do You Need Help With Today?",
  options,
  onContinuePath = "/next-step",
}: Props) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full max-w-[585px] mx-auto">
      <div className="bg-white rounded-3xl p-3 lg:p-6 shadow-[0px_3.9px_5.86px_-3.9px_#0000001A,0px_9.76px_14.64px_-2.93px_#0000001A] border-b border-[#219580]">
        <button
          onClick={() => navigate("/")}
          className="flex items-center justify-center mb-8 bg-[#2195801A] rounded-full w-9 h-9"
        >
          <img src={BackArrow} alt="Back" />
        </button>

        <div>
          <GradientButton fontSize="text-2xl md:text-3xl font-semibold text-center mb-10">
            {title}
          </GradientButton>

          <div className="space-y-4 mb-8">
            {options.map((item) => {
              const isActive = selected === item;

              return (
                <div
                  key={item}
                  onClick={() => setSelected(item)}
                  className={`cursor-pointer rounded-[10px] border p-4 h-12 flex items-center gap-4 transition-all duration-200 ${
                    isActive
                      ? "border-[#219580] bg-gray-50 shadow-md"
                      : "border-[#D9D9D9] hover:border-[#D9D9D9]"
                  }`}
                >
                  <div
                    className={`w-[18px] h-[18px] rounded-[4px] border flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? "bg-[linear-gradient(245.9deg,#219580_14.52%,#346079_84.54%)] border-transparent shadow-sm"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    {isActive && (
                      <Check size={12} className="text-white stroke-[3]" />
                    )}
                  </div>

                  <span className="font-semibold text-sm">{item}</span>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => {
              if (!selected) return;
              navigate("/doctor-selection");
            }}
            disabled={!selected}
            className={`w-full h-[52px] rounded-[10px] text-white font-semibold text-lg bg-[linear-gradient(256.76deg,#219580_18.35%,#346079_55.12%)] shadow-lg flex items-center justify-center gap-2 transition ${
              !selected ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Continue
            <ArrowRight size={20} />
          </button>

          <p className="text-center mt-6 text-[#A4A4A4] text-[20px] flex items-center justify-center gap-2">
            Already Have An Account?{" "}
            <div className="" onClick={() => navigate("/signin")}>
              <GradientButton fontSize="text-[20px] cursor-pointer">
                Sign In
              </GradientButton>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
