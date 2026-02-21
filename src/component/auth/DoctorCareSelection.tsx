import { useState } from "react";
import { ArrowLeft, ArrowLeftIcon, ArrowRight, ClipboardList, ClipboardPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import GradientButton from "../landing/GradientButton";

export default function DoctorCareSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    {
      label: "New Patient",
      price: 195,
      icon: <ClipboardList size={28} stroke="url(#iconGradient)" />,
    },
    {
      label: "Continue Care Patient",
      price: 159,
      icon: <ClipboardPlus size={28} stroke="url(#iconGradient)" />,
    },
  ];

  return (
    <div className="w-full max-w-[585px] mx-auto">
      <div className="bg-white rounded-3xl p-3 lg:p-6 shadow-[0px_3.9px_5.86px_-3.9px_#0000001A,0px_9.76px_14.64px_-2.93px_#0000001A] border-b border-[#219580]">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center bg-[#2195801A] rounded-full w-9 h-9"
        >
          <ArrowLeftIcon
            size={18}
            stroke="url(#iconGradient)"
            className="text-[#219580]"
          />
        </button>

      <div className="text-center mb-8">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Doctor"
          className="w-[99px] h-[99px] rounded-full mx-auto mb-4 object-cover"
        />

        <h2 className="text-[20px] font-semibold text-[#141416]">
          Dr. Michael Chichak, MD
        </h2>

        <p className="text-[#333333] text-base mb-4">Medical Director</p>

        <p className="text-[#333333] text-lg">
          Hi, I'm David. I Oversee Treatment Of All Our Patients.
        </p>

        <p className="text-[#333333] text-lg mb-6">
          Let's Find The Best Medical Provider For You.
        </p>

        <h3 className="text-[20px] font-semibold text-[#141416]">
          Which Type Of ADHD Care Are You Looking For?
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {options.map((item) => {
          const isActive = selected === item.label;

          return (
            <div
              key={item.label}
              onClick={() => {setSelected(item.label); navigate("/doctor-selection");}}
              className={`cursor-pointer rounded-[10px] bg-[#F4F9F8] p-6 text-center transition-all duration-200 ${
                isActive
                  ? "border-2 border-[#219580]"
                  : "border-2 border-transparent"
              }`}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center bg-[#2195801A] rounded-xl">
                  {item.icon}
                </div>
              </div>

              <p className="text-lg font-semibold mb-2">
                {item.label}
              </p>

              <GradientButton fontSize="text-lg font-semibold">
                ${item.price}
              </GradientButton>

            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}