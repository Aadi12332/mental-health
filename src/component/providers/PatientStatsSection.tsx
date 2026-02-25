import GradientButton from "../landing/GradientButton";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    value: "4.9/5",
    label: "Average Provider Rating",
  },
  {
    value: "90%+",
    label: "Patients Report Excellent Care",
  },
  {
    value: "30,000+",
    label: "Completed Appointments",
  },
];

export default function PatientStatsSection() {
  return (
    <section className="pb-20 pt-10">
      <div className="max-w-[1440px] mx-auto lg:px-6 px-3">

        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 flex items-center gap-3 justify-center">
          <GradientButton fontSize="text-4xl md:text-5xl font-semibold">What Our</GradientButton>{" "}
          <span className="text-[#111827]">Patients Says</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-3xl py-14 px-8 text-center text-white 
              bg-[linear-gradient(180deg,#456B7A_0%,#5EC9B7_100%)]
              shadow-[0px_15px_30px_-10px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-5xl font-semibold mb-6">
                {stat.value}
              </h3>

              <p className="text-xl opacity-90">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}