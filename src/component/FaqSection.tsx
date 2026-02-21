import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

type FaqItem = {
  question: string
  answer: string
}

type Props = {
  faqs: FaqItem[]
}

const faqs = [
  {
    question: "What Is This Platform About?",
    answer:
      "This is an online mental wellness platform designed to make professional mental health care accessible, affordable, and personalized. Our licensed providers offer evidence-based support tailored to your needs.\n\nServices include:\n• ADHD Support\n• Anxiety Management\n• Depression Care\n• Sleep-Related Concerns\n• Stress & Burnout Support\n• Obsessive Thought Patterns\n\nYou can connect securely from the comfort of your home and receive ongoing guidance from experienced professionals."
  },
  {
    question: "How Does The Service Work?",
    answer:
      "Getting started is simple and fully online:\n\n1. Choose a time that works for your schedule.\n2. Connect with a licensed mental health provider via secure video session.\n3. Receive a personalized care plan.\n4. Continue follow-ups and track progress over time.\n\nNo clinic visits or complicated paperwork required."
  },
  {
    question: "Where Is The Service Available?",
    answer:
      "Our services are currently available across multiple states. Availability may vary depending on provider licensing and state regulations.\n\nYou can check availability during the booking process or contact support for confirmation in your region."
  },
  {
    question: "What Happens During The First And Follow-Up Sessions?",
    answer:
      "During your first session, your provider will:\n\n• Understand your concerns and goals\n• Review medical and mental health history\n• Discuss symptoms and lifestyle factors\n• Create a personalized care plan\n\nFollow-up sessions focus on tracking progress, adjusting strategies, and ensuring continuous support tailored to your improvement."
  },
  {
    question: "What Are The Pricing Options?",
    answer:
      "We offer transparent and flexible pricing options depending on session type and provider selection.\n\n• Individual therapy sessions\n• Medication management sessions\n• Follow-up consultations\n\nDetailed pricing is shown before booking. No hidden fees."
  },
  {
    question: "Who Provides The Care On This Platform?",
    answer:
      "All care is provided by licensed and experienced mental health professionals, including:\n\n• Psychiatrists\n• Licensed Therapists\n• Nurse Practitioners\n• Clinical Psychologists\n\nEach provider follows evidence-based treatment approaches and ongoing care standards."
  },
  {
    question: "Can Providers Prescribe Medication If Needed?",
    answer:
      "Yes, licensed medical providers on the platform can prescribe medication when clinically appropriate and legally permitted in your state.\n\nMedication management is integrated with your ongoing treatment plan to ensure safe and effective care."
  },
  {
    question: "Why Was My Treatment Different From What I Expected?",
    answer:
      "Mental health care is personalized. Treatment approaches vary depending on your symptoms, goals, history, and progress.\n\nYour provider may adjust your care plan to ensure the most effective and safe outcome tailored specifically to you."
  },
  {
    question: "Is Insurance Accepted?",
    answer:
      "Insurance acceptance depends on provider and state availability.\n\nSome providers may accept select insurance plans, while others operate on a self-pay basis. You can view payment options during scheduling or contact support for assistance."
  },
  {
    question: "Do You Provide Official Letters Or Documentation?",
    answer:
      "Yes, official letters or documentation may be provided when clinically appropriate and permitted by policy.\n\nExamples may include:\n• Work or academic accommodation letters\n• Treatment verification letters\n• Care summaries\n\nRequests are reviewed individually by your provider."
  }
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto lg:px-6 px-3">
        <h2 className="text-center text-4xl font-semibold mb-12 text-[#2F7D7A]">
          FAQs
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition ${
                  isActive
                    ? "border-[#2F7D7A] bg-[#F3F7F6]"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <button
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-medium text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition ${
                      isActive
                        ? "bg-[#2F7D7A] text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isActive ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {isActive && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}