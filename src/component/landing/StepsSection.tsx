import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button"

type Step = {
  title: string
  description: string
  image: string
}

type Props = {
  steps: Step[]
}

const step1 = "https://picsum.photos/800/500?random=4"
const step2 = "https://picsum.photos/800/500?random=5"
const step3 = "https://picsum.photos/800/500?random=6"

const steps = [
    {
      title: "Choose A Time That Works For You",
      description: "Book An Appointment In Minutes By Selecting A Time That Fits Your Schedule - No Long Wait Times.",
      image: step1,
    },
    {
      title: "Connect With A Licensed Expert Online",
      description: "Meet One-On-One With A Qualified Provider Through A Secure Video Session, Right From Your Home.",
      image: step2,
    },
    {
      title: "Track Progress And Continue Care",
      description: "Review Improvements, Follow Up With Your Provider, And Adjust Your Care Plan As Needed.",
      image: step3,
    },
  ];

export default function StepsSection() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto lg:px-6 px-3">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold">
            <span className="text-[#2F7D7A]">
              Getting Started Is Simple
            </span>{" "}
            Just Three Easy Steps
          </h2>
          <p className="text-gray-600 mt-4">
            No Clinic Visits. No Complicated Forms. Just Professional Mental Health Care, Designed To Fit Your Routine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="border border-[#CFCBFF] rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="rounded-xl overflow-hidden mb-5">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-56 object-cover"
                />
              </div>

              <h4 className="font-semibold text-lg">
                {step.title}
              </h4>

              <p className="text-gray-600 mt-2 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex justify-center" onClick={()=>navigate("/get-started")}>
          <Button>Schedule Your Appointment →</Button>
        </div>

      </div>
    </section>
  )
}