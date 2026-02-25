import Button from "../../ui/Button";
import GradientButton from "../landing/GradientButton";

export default function CareerHeroSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto lg:px-6 px-3">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight flex flex-col items-start">
              <GradientButton fontSize="text-4xl md:text-6xl text-start">Build Your Career</GradientButton>{" "}
              <span className="text-[#111827]">While Changing Lives</span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-[600px]">
              Join a purpose-driven digital healthcare company where your work
              makes a real impact on mental wellness across communities.
              Enjoy flexibility, growth, and meaningful connections with
              patients.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="text-base font-normal">
                View Open Position
              </Button>

              <button className="px-8 h-[52px] flex items-center rounded-xl border border-[#E5E7EB] text-base text-[#374151] bg-white">
                Contact us
              </button>
            </div>

          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Career"
              className="w-full h-[500px] object-cover rounded-[24px] shadow-[0px_25px_50px_-12px_#00000040]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}