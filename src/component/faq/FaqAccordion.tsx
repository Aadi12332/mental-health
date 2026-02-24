import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import GradientButton from "../landing/GradientButton";

type FAQ = {
  question: string;
  paragraphs?: string[];
  list?: string[];
  footer?: string;
};

export default function FaqSection({
  faqs,
  title,
  icon: Icon,
}: {
  faqs: FAQ[];
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className=" bg-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-[linear-gradient(180deg,#456B7A_0%,#5EC9B7_100%)] w-12 h-12 min-w-12 rounded-[10px] flex items-center justify-center">
          <Icon className="text-white w-6 h-6" />
        </div>
        <GradientButton fontSize="font-semibold text-[24px]">
          {title}
        </GradientButton>
      </div>
      <div className="space-y-6">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;

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
                onClick={() => setActiveIndex(isActive ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-lg">{faq.question}</span>

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
          );
        })}
      </div>
    </section>
  );
}
