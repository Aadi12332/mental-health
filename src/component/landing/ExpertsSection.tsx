import { Check } from "lucide-react"
import Button from "../../ui/Button"
import { useEffect, useRef } from "react"

 const doctors = [
    {
      name: "Dr. Michael Chichak, MD",
      description: "A Highly Experienced Physician With A Strong Background In Primary Care And Mental Health.",
      image: "https://picsum.photos/600/600?random=1",
    },
    {
      name: "Dr. Sarah Williams, MD",
      description: "Specializing In Anxiety, ADHD And Holistic Treatment Plans.",
      image: "https://picsum.photos/600/600?random=2",
    },
    {
      name: "Dr. Emily Brown, MD",
      description: "Dedicated To Long-Term Mental Wellness And Personalized Care.",
      image: "https://picsum.photos/600/600?random=3",
    },
  ];

export default function ExpertsSection() {
      const sliderRef = useRef<HTMLDivElement>(null)
  
    useEffect(() => {
      const slider = sliderRef.current
      if (!slider) return
  
      let animationFrame: number
      let scrollAmount = 0
  
      const animate = () => {
        scrollAmount += 2
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0
          scrollAmount = 0
        } else {
          slider.scrollLeft += 2
        }
        animationFrame = requestAnimationFrame(animate)
      }
  
      animationFrame = requestAnimationFrame(animate)
  
      return () => cancelAnimationFrame(animationFrame)
    }, [])
  
    const duplicated = [...doctors, ...doctors]
  return (
    <section className="bg-[#F3F7F6] py-20">
      <div className="max-w-[1440px] mx-auto lg:px-6 px-3">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold">
            <span className="text-[#2F7D7A]">Meet The Experts</span>{" "}
            Behind Your Care
          </h2>
          <p className="text-gray-600 mt-4">
            Our Mental Health Specialists Are Dedicated To Understanding Your Needs And Supporting You With Thoughtful, Professional Care At Every Step.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-10 items-center">

          <div className="space-y-5">
            {[
              "Proven, Research-Backed Care Approaches",
              "Providers Who Track And Support Your Progress",
              "Customized, Whole-Person Treatment Plans",
              "Ongoing Patient Support When You Need It",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
              >
                <div className="bg-[linear-gradient(245.9deg,#219580_14.52%,#346079_84.54%)] rounded-full p-1 min-w-6 w-6 h-6 flex items-center justify-center">

                <Check className="w-3 h-3 text-white" />
                </div>
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}

            <div className="pt-4">
              <Button>Explore Our Care Team →</Button>
            </div>
          </div>

          <div className="flex gap-6 overflow-auto scroll-hide w-full col-span-3" ref={sliderRef}>
            {duplicated.map((doctor) => (
              <div
                key={doctor.name}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition min-w-[300px]"
              >
                <div className="rounded-xl overflow-hidden mb-4">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-60 object-cover"
                  />
                </div>

                <h4 className="font-semibold text-lg">
                  {doctor.name}
                </h4>

                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {doctor.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}