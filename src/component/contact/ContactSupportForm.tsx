import { useState } from "react";
import GradientButton from "../landing/GradientButton";

export default function ContactSupportForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="py-20 flex justify-center">
      <div className="w-full max-w-[672px] bg-white rounded-[24px] shadow-[0px_20px_40px_rgba(0,0,0,0.08)] px-3 sm:px-6 md:px-12 py-12">
        <h2 className="text-center text-[32px] md:text-[42px] font-semibold leading-tight mb-12">
          <GradientButton fontSize="text-[32px] md:text-[42px]">
            Connect With Our
          </GradientButton>
          <span className="text-[#111827]">
            Support Team
          </span>
        </h2>

        <div className="space-y-6">
          
          <div>
            <label className="block mb-2 text-[16px] font-medium">
              Full Name *
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 outline-none focus:border-[#5EC9B7] transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-[16px] font-medium">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 outline-none focus:border-[#5EC9B7] transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-[16px] font-medium">
              Subject
            </label>
            <input
              type="text"
              placeholder="Brief topic of inquiry"
              className="w-full h-[52px] rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 outline-none focus:border-[#5EC9B7] transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-[16px] font-medium">
              How can we assist you? *
            </label>
            <textarea
              placeholder="Share your thoughts, questions, or concerns with us..."
              className="w-full min-h-[160px] rounded-[12px] border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-4 outline-none resize-none focus:border-[#5EC9B7] transition"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="w-5 h-5 accent-[#5EC9B7]"
            />
            <p className="text-[14px] text-gray-600">
              I agree to the{" "}
              <span className="text-[#5EC9B7] cursor-pointer">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#5EC9B7] cursor-pointer">
                Privacy Policy
              </span>
              .
            </p>
          </div>

          <button
            disabled={!agreed}
            className={`w-full h-[56px] rounded-[12px] text-white text-[16px] font-medium transition ${
              agreed
                ? "bg-gradient-to-b from-[#456B7A] to-[#5EC9B7]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Send Message
          </button>

        </div>
      </div>
    </section>
  );
}