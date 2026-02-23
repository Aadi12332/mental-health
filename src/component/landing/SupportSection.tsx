import { useNavigate } from "react-router-dom";
import { Target, Award, LaptopMinimal } from "lucide-react";
import Button from "../../ui/Button";
import DoctorImage from "../../assets/images/dealingimg.svg";
import MapImage from "../../assets/images/mapimg.svg";
import GradientButton from "./GradientButton";

export default function SupportSection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto lg:px-6 px-3 space-y-24">
        <div className="grid lg:grid-cols-2 gap-5 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="flex items-start flex-col">
                <GradientButton fontSize="lg:text-[42px] text-[32px] font-semibold">
                  Dealing With Anxiety Or ADHD?
                </GradientButton>
                    <GradientButton fontSize="lg:text-[42px] text-[32px] font-semibold gap-4">
                  Real Support <span className="text-black">Is Within Reach.</span>
                </GradientButton>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 min-w-10 flex items-center justify-center rounded-full bg-[#E6F3F2]">
                  <Award className="w-5 h-5 text-[#2F7D7A]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Experienced, Caring Professionals
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Our Qualified Mental Health Experts Take Time To Understand
                    Your Story And Support You With Empathy, Respect, And
                    Professionalism.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 min-w-10 flex items-center justify-center rounded-full bg-[#E6F3F2]">
                  <Target className="w-5 h-5 text-[#2F7D7A]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Care Designed Around Your Life
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Your Treatment Plan Is Customized To Your Symptoms, Goals,
                    And Daily Routine - Because Progress Looks Different For
                    Everyone.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 min-w-10 flex items-center justify-center rounded-full bg-[#E6F3F2]">
                  <LaptopMinimal className="w-5 h-5 text-[#2F7D7A]" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">
                    Online Care With A Human Touch
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Your Treatment Plan Is Customized To Your Symptoms, Goals,
                    And Daily Routine - Because Progress Looks Different For
                    Everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={DoctorImage}
              alt="Doctor Consultation"
              className="relative rounded-3xl w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={MapImage}
              alt="Map"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="space-y-6">
            <h2 className="flex items-start flex-col">
                <GradientButton fontSize="lg:text-[42px] text-[32px] font-semibold">
                  Support That Meets You
                </GradientButton>
                    <GradientButton fontSize="lg:text-[42px] text-[32px] font-semibold gap-4">
                  <span className="text-black">Where You Are</span>
                </GradientButton>
              </h2>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 min-w-10 flex items-center justify-center rounded-full bg-[#E6F3F2]">
                <Target className="w-5 h-5 text-[#2F7D7A]" />
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  Availability Across Multiple States
                </h4>
                <p className="text-gray-600 mt-2">
                  Our Services Are Accessible In Many Regions, Making It Easier
                  To Connect With Licensed Providers Wherever You’re Located.
                </p>
              </div>
            </div>

            <div className="pt-4" onClick={()=>navigate("/get-started")}>
              <Button>Book Your Session →</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
