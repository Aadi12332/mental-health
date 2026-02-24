import { useMemo } from "react";
import GradientButton from "../landing/GradientButton";

type Doctor = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Michael Chichak, MD",
    description:
      "A Highly Experienced Physician With A Strong Background In Primary Care And Mental Health.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Michael Chichak, MD",
    description:
      "A Highly Experienced Physician With A Strong Background In Primary Care And Mental Health.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Dr. Michael Chichak, MD",
    description:
      "A Highly Experienced Physician With A Strong Background In Primary Care And Mental Health.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    name: "Dr. Michael Chichak, MD",
    description:
      "A Highly Experienced Physician With A Strong Background In Primary Care And Mental Health.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function TrustedCareNetwork() {
  const loopDoctors = useMemo(() => [...doctors, ...doctors], []);

  return (
    <section className="pb-20 pt-10 max-w-[1440px] mx-auto lg:px-6 px-3 overflow-hidden">
      <div className="">

        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 flex items-center gap-3 justify-center">
          <GradientButton fontSize="">Your Trusted</GradientButton>{" "}
          <span className="text-[#111827]">Care Network</span>
        </h2>

        <div className="relative">
          <div className="flex gap-4 animate-scroll w-max mb-8">

            {loopDoctors.map((doc, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[300px] bg-white rounded-2xl border border-[#7F7F7F20] shadow-[0px_1px_2px_-1px_#0000001A] p-4 flex-shrink-0"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-[220px] object-cover rounded-xl mb-4"
                />

                <h3 className="font-semibold text-lg mb-2 text-[#111827]">
                  {doc.name}
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-3">
                  {doc.description}
                </p>
              </div>
            ))}

          </div>
          <div className="flex gap-4 animate-scroll w-max">

            {loopDoctors.map((doc, index) => (
              <div
                key={index}
                className="w-[280px] md:w-[310px] bg-white rounded-2xl border border-[#7F7F7F20] shadow-[0px_1px_2px_-1px_#0000001A] p-3 flex-shrink-0"
              >
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-[220px] object-cover rounded-xl mb-4"
                />

                <h3 className="font-semibold text-lg mb-2 text-[#111827]">
                  {doc.name}
                </h3>

                <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-3">
                  {doc.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-scroll {
            animation: scroll 10s linear infinite;
          }
        `}
      </style>
    </section>
  );
}