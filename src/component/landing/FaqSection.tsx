import { useState } from "react"
import { ChevronRight, ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What Is This Platform About?",
    paragraphs: [
      "This is an online mental wellness platform designed to make professional mental health care accessible, affordable, and personalized.",
      "You can connect securely from the comfort of your home and receive ongoing guidance from experienced professionals."
    ],
    list: [
      "ADHD Support",
      "Anxiety Management",
      "Depression Care",
      "Sleep-Related Concerns",
      "Stress & Burnout Support",
      "Obsessive Thought Patterns"
    ]
  },
  {
    question: "How Does The Service Work?",
    paragraphs: [
      "Getting started is simple and fully online:"
    ],
    list: [
      "Choose a time that works for your schedule.",
      "Connect with a licensed mental health provider via secure video session.",
      "Receive a personalized care plan.",
      "Continue follow-ups and track progress over time."
    ],
    footer: "No clinic visits or complicated paperwork required."
  },
  {
    question: "Where Is The Service Available?",
    paragraphs: [
      "Our services are currently available across multiple states.",
      "Availability may vary depending on provider licensing and state regulations."
    ],
    footer:
      "You can check availability during the booking process or contact support for confirmation in your region."
  },
  {
    question: "What Happens During The First And Follow-Up Sessions?",
    paragraphs: [
      "During your first session, your provider will:"
    ],
    list: [
      "Understand your concerns and goals",
      "Review medical and mental health history",
      "Discuss symptoms and lifestyle factors",
      "Create a personalized care plan"
    ],
    footer:
      "Follow-up sessions focus on tracking progress, adjusting strategies, and ensuring continuous support tailored to your improvement."
  },
  {
    question: "What Are The Pricing Options?",
    paragraphs: [
      "We offer transparent and flexible pricing options depending on session type and provider selection."
    ],
    list: [
      "Individual therapy sessions",
      "Medication management sessions",
      "Follow-up consultations"
    ],
    footer: "Detailed pricing is shown before booking. No hidden fees."
  },
  {
    question: "Who Provides The Care On This Platform?",
    paragraphs: [
      "All care is provided by licensed and experienced mental health professionals, including:"
    ],
    list: [
      "Psychiatrists",
      "Licensed Therapists",
      "Nurse Practitioners",
      "Clinical Psychologists"
    ],
    footer:
      "Each provider follows evidence-based treatment approaches and ongoing care standards."
  },
  {
    question: "Can Providers Prescribe Medication If Needed?",
    paragraphs: [
      "Yes, licensed medical providers on the platform can prescribe medication when clinically appropriate and legally permitted in your state."
    ],
    footer:
      "Medication management is integrated with your ongoing treatment plan to ensure safe and effective care."
  },
  {
    question: "Why Was My Treatment Different From What I Expected?",
    paragraphs: [
      "Mental health care is personalized.",
      "Treatment approaches vary depending on your symptoms, goals, history, and progress."
    ],
    footer:
      "Your provider may adjust your care plan to ensure the most effective and safe outcome tailored specifically to you."
  },
  {
    question: "Is Insurance Accepted?",
    paragraphs: [
      "Insurance acceptance depends on provider and state availability."
    ],
    footer:
      "Some providers may accept select insurance plans, while others operate on a self-pay basis. You can view payment options during scheduling or contact support for assistance."
  },
  {
    question: "Do You Provide Official Letters Or Documentation?",
    paragraphs: [
      "Yes, official letters or documentation may be provided when clinically appropriate and permitted by policy.",
      "Examples may include:"
    ],
    list: [
      "Work or academic accommodation letters",
      "Treatment verification letters",
      "Care summaries"
    ],
    footer: "Requests are reviewed individually by your provider."
  }
];

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
  <div className="px-6 pb-6 text-gray-600 leading-relaxed space-y-4">
    {faq.paragraphs?.map((p, i) => (
      <p key={i}>{p}</p>
    ))}

    {faq.list && (
      <ul className="list-disc pl-5 space-y-2">
        {faq.list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}

    {faq.footer && <p>{faq.footer}</p>}
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