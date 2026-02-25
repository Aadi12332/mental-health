import { Heart, Globe, Users, Sparkles } from "lucide-react";
import GradientButton from "../landing/GradientButton";

export default function MissionSection() {
  const features = [
    {
      title: "Patient-First",
      desc: "Everything we do starts with empathy and care.",
      icon: Heart,
      bg: "bg-gradient-to-br from-[#D1FAE5] to-[#A7F3D0]",
    },
    {
      title: "Nationwide",
      desc: "Serving communities across the country.",
      icon: Globe,
      bg: "bg-gradient-to-br from-[#DBEAFE] to-[#BFDBFE]",
    },
    {
      title: "Community",
      desc: "Building connections that matter.",
      icon: Users,
      bg: "bg-gradient-to-br from-[#DCFCE7] to-[#BBF7D0]",
    },
    {
      title: "Innovation",
      desc: "Leading with technology and creativity.",
      icon: Sparkles,
      bg: "bg-gradient-to-br from-[#E0E7FF] to-[#C7D2FE]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto lg:px-6 px-3 grid lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-semibold leading-tight">
            <GradientButton fontSize="text-[32px] md:text-[42px] font-semibold text-start">
              Simplifying Mental Healthcare Through
            </GradientButton>{" "}
            <span className="text-[#111827]">
              Technology & Compassion
            </span>
          </h2>

          <p className="text-lg text-[#6B7280] leading-relaxed">
            Our mission is to simplify access to mental healthcare through
            technology and compassion. We aim to remove barriers by offering
            flexible, affordable, and patient-focused services that empower
            both professionals and patients.
          </p>

          <p className="text-lg text-[#6B7280] leading-relaxed">
            We believe mental wellness should be treated with the same priority
            as physical health, guided by trust, innovation, and community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`rounded-[30px] p-8 ${item.bg} shadow-[0px_25px_50px_-12px_#00000020]`}
              >
                <div className="w-14 h-14 rounded-xl bg-[linear-gradient(180deg,#456B7A_0%,#5EC9B7_100%)] flex items-center justify-center mb-6">
                  <Icon className="w-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-[#111827] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#6B7280] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}