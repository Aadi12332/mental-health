import GradientButton from "../landing/GradientButton";

const words = [
  { text: "Highly recommended", size: "text-xl" },
  { text: "Empathetic", size: "text-3xl font-semibold" },
  { text: "Professional", size: "text-2xl" },
  { text: "Caring", size: "text-4xl font-semibold" },
  { text: "Trustworthy", size: "text-3xl" },
  { text: "Helpful", size: "text-xl" },
  { text: "Friendly", size: "text-xl" },
  { text: "Listens carefully", size: "text-2xl" },
  { text: "Great service", size: "text-xl" },
  { text: "Understanding", size: "text-xl" },
  { text: "Supportive", size: "text-3xl font-semibold" },
  { text: "Patient", size: "text-xl" },
];

export default function PatientWordsSection() {
  return (
    <section className="pt-10 pb-24 bg-white">
      <div className="max-w-[1440px] mx-auto lg:px-6 px-3 text-center">

        <h2 className="text-4xl md:text-5xl font-semibold mb-6 flex items-center gap-3 justify-center">
          <GradientButton fontSize="text-4xl md:text-5xl">How Patients Describe</GradientButton>{" "}
          <span className="text-[#111827]">Our Providers</span>
        </h2>

        <p className="text-xl text-[#6B7280] max-w-[800px] mx-auto mb-16 leading-relaxed">
          We analyzed feedback from thousands of reviews to capture the most
          common words patients use to describe their experience.
        </p>

        <div className="rounded-[24px] bg-[linear-gradient(135deg,#F0FDFA_0%,rgba(240,253,250,0.5)_50%,#ECFDF5_100%)] py-16 px-8 shadow-inner">

          <div className="flex flex-wrap justify-center gap-6 max-w-[1100px] mx-auto">
            {words.map((word, index) => (
              <div
                key={index}
                className={`px-8 py-4 flex items-center rounded-full bg-white shadow-[0px_10px_20px_-10px_rgba(0,0,0,0.2)] text-[#2F7D7A] ${word.size}`}
              >
                {word.text}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}