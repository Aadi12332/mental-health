import { useEffect, useRef } from "react"
import Button from "./Button"
import GradientButton from "./GradientButton"

const categories = [
  { title: "ADHD", img: "https://picsum.photos/200?1" },
  { title: "Anxiety", img: "https://picsum.photos/200?2" },
  { title: "Weight Wellness", img: "https://picsum.photos/200?3" },
  { title: "Depression", img: "https://picsum.photos/200?4" },
  { title: "Sleep Issues", img: "https://picsum.photos/200?5" },
  { title: "ADHD", img: "https://picsum.photos/200?1" },
  { title: "Anxiety", img: "https://picsum.photos/200?2" },
  { title: "Weight Wellness", img: "https://picsum.photos/200?3" },
  { title: "Depression", img: "https://picsum.photos/200?4" },
  { title: "Sleep Issues", img: "https://picsum.photos/200?5" },
]

export default function HeroSection() {
    const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationFrame: number
    let scrollAmount = 0

    const animate = () => {
      scrollAmount += 3
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0
        scrollAmount = 0
      } else {
        slider.scrollLeft += 3
      }
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const duplicated = [...categories, ...categories]
  return (
    <section className="mt-7 lg:px-6 px-3">
      <div className="max-w-[1440px] bg-[#2195800D] rounded-[30px] mx-auto pt-[90px] pb-10 px-6 text-center">
        <div className="inline-block bg-white px-2.5 py-[5px] rounded-full text-base text-[#141416] mb-6">
          Welcome To Mental Health Tally
        </div>

        <h1 className="mb-6 leading-tight lg:text-[64px] text-[40px] font-semibold text-center">
          <GradientButton fontSize="lg:text-[64px] text-[40px] font-semibold">
            Care For Your Mind,
          </GradientButton>
          <GradientButton fontSize="lg:text-[64px] text-[40px] font-semibold gap-4">
            From  <span className="text-[#000]">Anywhere</span>
          </GradientButton>
        </h1>

        <p className="text-[#333333] text-[20px] max-w-[553px] mx-auto mb-9">
          Connect With Trusted Mental Health Professionals Online - Care Designed Around You.
        </p>

        <div className="flex gap-6 mb-10 overflow-auto scroll-hide" ref={sliderRef}>
          {duplicated.map((item) => (
            <div
              key={item.title}
              className="bg-[#E2EBEC] rounded-[22px] p-6 relative overflow-hidden min-w-[243px] w-[243px] h-[243px]"
            >
              <div className="bg-[#0084D41C] w-[266px] h-[266px] absolute -top-1/2 -left-1/2 z-0"></div>
              <div className="w-[163px] h-[163px] mx-auto rounded-full overflow-hidden mb-4 relative z-10">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-[20px] text-[#00598D]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <Button className="mx-auto">Book Your Session →</Button>
      </div>
    </section>
  )
}