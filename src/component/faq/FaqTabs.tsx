import { useState, useRef } from "react";
import { Building2, Calendar, Pill, DollarSign, FileText } from "lucide-react";
import FaqAccordion from "./FaqAccordion";

const medvidiFaqs = [
  {
    question: "What is MEDvidi?",
    paragraphs: [
      "MEDvidi is an online mental health clinic providing professional care for ADHD, anxiety, depression, and related conditions.",
      "We connect patients with licensed providers for secure, convenient, and personalized telehealth treatment.",
    ],
  },
  {
    question: "Which conditions do you treat?",
    paragraphs: ["Our providers specialize in treating:"],
    list: [
      "ADHD (Adult Attention Deficit Hyperactivity Disorder)",
      "Anxiety disorders",
      "Depression",
      "Insomnia",
      "Stress and burnout",
    ],
  },
  {
    question: "Where are services available?",
    paragraphs: [
      "Services are available in multiple U.S. states depending on provider licensing.",
      "Availability may vary, and you can confirm during the booking process.",
    ],
  },
  {
    question: "How does MEDvidi work?",
    list: [
      "Complete a short online assessment.",
      "Schedule a virtual appointment.",
      "Meet with a licensed provider.",
      "Receive a personalized care plan.",
    ],
  },
  {
    question: "What type of providers work with MEDvidi?",
    list: [
      "Board-certified psychiatrists",
      "Licensed nurse practitioners",
      "Licensed therapists",
    ],
    footer: "All providers follow evidence-based clinical guidelines.",
  },
  {
    question: "Do you provide disability letters?",
    paragraphs: [
      "Disability or accommodation letters may be issued when clinically appropriate.",
      "Requests are evaluated individually by your provider.",
    ],
  },
];

const appointmentFaqs = [
  {
    question: "What happens during the first and follow-up visits?",
    paragraphs: [
      "MEDvidi is an online mental health clinic providing professional care for ADHD, anxiety, depression, and related conditions.",
      "We connect patients with licensed providers for secure, convenient, and personalized telehealth treatment.",
    ],
  },
  {
    question: "How do I join my online appointment?",
    paragraphs: ["Our providers specialize in treating:"],
    list: [
      "ADHD (Adult Attention Deficit Hyperactivity Disorder)",
      "Anxiety disorders",
      "Depression",
      "Insomnia",
      "Stress and burnout",
    ],
  },
  {
    question: "What if I miss my appointment?",
    paragraphs: [
      "Services are available in multiple U.S. states depending on provider licensing.",
      "Availability may vary, and you can confirm during the booking process.",
    ],
  },
  {
    question: "How long does diagnosis take?",
    list: [
      "Complete a short online assessment.",
      "Schedule a virtual appointment.",
      "Meet with a licensed provider.",
      "Receive a personalized care plan.",
    ],
  },
  {
    question: "What is included in a treatment plan?",
    list: [
      "Board-certified psychiatrists",
      "Licensed nurse practitioners",
      "Licensed therapists",
    ],
    footer: "All providers follow evidence-based clinical guidelines.",
  },
  {
    question: "Should I book several appointments in advance?",
    paragraphs: [
      "Disability or accommodation letters may be issued when clinically appropriate.",
      "Requests are evaluated individually by your provider.",
    ],
  },
];

const prescriptionFaqs = [
  {
    question: "Can I get a prescription without seeing a provider?",
    paragraphs: [
      "MEDvidi is an online mental health clinic providing professional care for ADHD, anxiety, depression, and related conditions.",
      "We connect patients with licensed providers for secure, convenient, and personalized telehealth treatment.",
    ],
  },
  {
    question: "What medications can be prescribed?",
    paragraphs: ["Our providers specialize in treating:"],
    list: [
      "ADHD (Adult Attention Deficit Hyperactivity Disorder)",
      "Anxiety disorders",
      "Depression",
      "Insomnia",
      "Stress and burnout",
    ],
  },
  {
    question: "Is a prescription guaranteed after booking?",
    paragraphs: [
      "Services are available in multiple U.S. states depending on provider licensing.",
      "Availability may vary, and you can confirm during the booking process.",
    ],
  },
  {
    question: "Why is my prescription different from what I requested?",
    list: [
      "Complete a short online assessment.",
      "Schedule a virtual appointment.",
      "Meet with a licensed provider.",
      "Receive a personalized care plan.",
    ],
  },
  {
    question: "Do you prescribe controlled medications?",
    list: [
      "Board-certified psychiatrists",
      "Licensed nurse practitioners",
      "Licensed therapists",
    ],
    footer: "All providers follow evidence-based clinical guidelines.",
  },
];

const pricingFaqs = [
  {
    question: "How much do services cost?",
    paragraphs: [
      "MEDvidi is an online mental health clinic providing professional care for ADHD, anxiety, depression, and related conditions.",
      "We connect patients with licensed providers for secure, convenient, and personalized telehealth treatment.",
    ],
  },
  {
    question: "Are there extra charges for prescriptions?",
    paragraphs: ["Our providers specialize in treating:"],
    list: [
      "ADHD (Adult Attention Deficit Hyperactivity Disorder)",
      "Anxiety disorders",
      "Depression",
      "Insomnia",
      "Stress and burnout",
    ],
  },
  {
    question: "Do I need insurance?",
    paragraphs: [
      "Services are available in multiple U.S. states depending on provider licensing.",
      "Availability may vary, and you can confirm during the booking process.",
    ],
  },
  {
    question: "Does MEDvidi accept insurance?",
    list: [
      "Complete a short online assessment.",
      "Schedule a virtual appointment.",
      "Meet with a licensed provider.",
      "Receive a personalized care plan.",
    ],
  },
];

const deafUpdateFaqs = [
  {
    question: "Have telehealth prescribing rules been extended to 2026?",
    paragraphs: [
      "MEDvidi is an online mental health clinic providing professional care for ADHD, anxiety, depression, and related conditions.",
      "We connect patients with licensed providers for secure, convenient, and personalized telehealth treatment.",
    ],
  },
  {
    question: "What is a controlled substance?",
    paragraphs: ["Our providers specialize in treating:"],
    list: [
      "ADHD (Adult Attention Deficit Hyperactivity Disorder)",
      "Anxiety disorders",
      "Depression",
      "Insomnia",
      "Stress and burnout",
    ],
  },
];

export default function FaqTabs() {
  const [active, setActive] = useState("About MEDvidi");

  const tabs = [
    { label: "About MEDvidi", icon: Building2 },
    { label: "Appointments", icon: Calendar },
    { label: "Prescription", icon: Pill },
    { label: "Pricing", icon: DollarSign },
    { label: "DEA Update", icon: FileText },
  ];

  const sectionRefs = {
    "About MEDvidi": useRef<HTMLDivElement>(null),
    Appointments: useRef<HTMLDivElement>(null),
    Prescription: useRef<HTMLDivElement>(null),
    Pricing: useRef<HTMLDivElement>(null),
    "DEA Update": useRef<HTMLDivElement>(null),
  };

  return (
    <div className="max-w-[892px] mx-auto px-3">
      <div className="flex justify-between gap-8 min-h-[60px] mt-3 items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.label;

          return (
            <button
              key={tab.label}
              onClick={() => {
                setActive(tab.label);

                sectionRefs[
                  tab.label as keyof typeof sectionRefs
                ]?.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={`flex items-center gap-2 pb-4 text-[16px] font-medium transition ${
                isActive
                  ? "border-b-2 border-[#5EC9B7]"
                  : "border-b-2 border-transparent"
              }`}
            >
              <Icon className="w-5 text-[#456B7A]" strokeWidth={1.8} />
              <span className="text-[#456B7A]">{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="space-y-20 mt-20">
        <div ref={sectionRefs["About MEDvidi"]}>
          <FaqAccordion
            faqs={medvidiFaqs}
            title="About MEDvidi"
            icon={Building2}
          />
        </div>

        <div ref={sectionRefs["Appointments"]}>
          <FaqAccordion
            faqs={appointmentFaqs}
            title="Appointments"
            icon={Calendar}
          />
        </div>

        <div ref={sectionRefs["Prescription"]}>
          <FaqAccordion
            faqs={prescriptionFaqs}
            title="Prescription"
            icon={Pill}
          />
        </div>

        <div ref={sectionRefs["Pricing"]}>
          <FaqAccordion faqs={pricingFaqs} title="Pricing" icon={DollarSign} />
        </div>

        <div ref={sectionRefs["DEA Update"]}>
          <FaqAccordion
            faqs={deafUpdateFaqs}
            title="DEA Update"
            icon={FileText}
          />
        </div>
      </div>
    </div>
  );
}
