import { Star } from "lucide-react"
import GradientButton from "./GradientButton"

type Story = {
  name: string
  country: string
  image: string
  review: string
}

const stories: Story[] = [
    {
      name: "John Deo",
      country: "United States",
      image: "https://picsum.photos/100?1",
      review:
        "I wanted a natural solution without harsh side effects, and this capsule delivered! Within a week, I felt more energized, and my stamina improved. Definitely worth it!",
    },
    {
      name: "Kiana Curtis",
      country: "United States",
      image: "https://picsum.photos/100?2",
      review:
        "This product has completely changed my intimate life. I feel more passionate and confident, and the effects last for hours. I never expected such a huge difference!",
    },
    {
      name: "Corey Bergson",
      country: "United States",
      image: "https://picsum.photos/100?3",
      review:
        "I was struggling with low energy and performance issues, but after using [Product Name] for a month, I feel like I’m in my 20s again! My confidence is back",
    },
  ]

export default function SuccessStoriesSection({provider}: {provider?: boolean}) {
  return (
    <section className={`${!provider ? "bg-[#F3F7F6] py-20" : "py-0 pb-20"}`}>
      <div className="max-w-[1440px] mx-auto lg:px-6 px-3">
        {
          !provider && (
            <h2 className="text-center text-4xl lg:text-5xl font-semibold mb-16 flex items-center gap-3 justify-center">
              <GradientButton fontSize="text-center text-4xl lg:text-5xl font-semibold">Success</GradientButton> Stories
            </h2>
          )
        }

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story: Story) => (
            <div
              key={story.name}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-[18px] text-[#000000]">{story.name}</h4>
                    <p className="text-base text-[#00000099]">
                      {story.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-lg text-[#000000]">
                  5.0
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <p className="text-[#00000099] text-base leading-relaxed lg:max-w-[80%]">
                {story.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}