import { ArrowRight } from "lucide-react"
import LeftCta from "../../assets/images/leftcta.svg"
import RightCta from "../../assets/images/rightcta.svg"


export default function CtaSection() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-[1440px] lg:px-6 px-3 mx-auto">
        <div className="rounded-[32px] bg-[linear-gradient(90deg,#346079,#219580)] px-8 py-16 text-center text-white relative overflow-hidden">
            <img src={LeftCta} className="absolute bottom-0 left-0" alt="" />
            <img src={RightCta} className="absolute bottom-0 right-0" alt="" />
          
          <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold mb-6">
            Take A Step Toward Feeling Better Today
          </h2>

          <p className="max-w-3xl mx-auto text-[20px] text-[#CACACA] mb-10">
            Connect With A Licensed Provider Online To Understand Your Symptoms And Explore The Right Treatment Options For You.
          </p>

          <div className="flex justify-center">
            <button className="bg-white text-[#2F7D7A] font-semibold text-lg px-8 h-[52px] rounded-xl flex items-center gap-2">
              Schedule Your Visit
              <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}