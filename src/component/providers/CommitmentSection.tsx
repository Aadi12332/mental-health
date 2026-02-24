import { Award, TrendingUp, Shield } from "lucide-react";

const commitments = [
  {
    title: "Trusted Experience",
    description:
      "All our providers bring years of hands-on clinical experience and specialized training in mental healthcare.",
    icon: Award,
  },
  {
    title: "Continuous Growth",
    description:
      "Our clinicians regularly participate in performance reviews, patient feedback sessions, and professional development programs.",
    icon: TrendingUp,
  },
  {
    title: "Careful Selection",
    description:
      "Each provider goes through a rigorous screening and credentialing process to ensure compassionate and evidence-based treatment.",
    icon: Shield,
  },
];

export default function CommitmentSection() {
  return (
    <section className="py-20 max-w-[1440px] mx-auto lg:px-6 px-3">
      <div className="">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">
          <span className="text-[#456B7A]">Our Commitment</span>{" "}
          <span className="text-[#111827]">To Excellence</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-lg lg:rounded-[24px] lg:p-8 p-3 max-w-[405px] w-full shadow-[0px_1px_2px_-1px_#0000001A] hover:shadow-sm transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C8EDE8] flex items-center justify-center mb-8">
                  <Icon className="w-8 h-8 text-[#456B7A]" strokeWidth={2} />
                </div>

                <h3 className="text-[20px] mb-4 text-[#101828]">
                  {item.title}
                </h3>

                <p className="text-[#364153] text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}