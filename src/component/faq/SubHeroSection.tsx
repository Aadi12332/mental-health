import { useState } from "react";
import GradientButton from "../landing/GradientButton";
import HeroReact from "../../assets/images/herorectangle.svg";
import SearchBar from "../../ui/SearchBar";
import { Star, ShieldCheck, BadgeCheck, ThumbsUp, Users } from "lucide-react";

const topBadges = [
  {
    icon: Star,
    title: "4.6/5",
    subtitle: "Average Rating",
    type: "rating",
  },
  {
    icon: ShieldCheck,
    title: "Accredited",
    subtitle: "Healthcare Provider",
  },
  {
    icon: BadgeCheck,
    title: "Verified",
    subtitle: "Reviews",
  },
];

const stats = [
  {
    icon: Star,
    value: "4.9 / 5",
    label: "Average provider satisfaction score",
  },
  {
    icon: ThumbsUp,
    value: "92%",
    label: "of patients rate their experience as excellent",
  },
  {
    icon: Users,
    value: "35,000+",
    label: "successful consultations completed",
  },
];

type Props = {
  categories: string[];
  onChange?: (category: string) => void;
};

const categories = [
  "ADHD",
  "Anxiety",
  "Depression",
  "Sleep Health",
  "Medications",
  "Mental Wellness",
  "OCD",
  "Phobias",
  "Stress Management",
  "Weight Care",
];

export default function SubHeroSection({
  title,
  heading,
  subheading,
  content,
  searchbar = true,
  blogFilter = false,
  review = false,
}: {
  title?: string;
  heading?: string;
  subheading?: string;
  content?: string;
  searchbar?: boolean;
  blogFilter?: boolean;
  review?: boolean;
}) {
  const [active, setActive] = useState("Mental Wellness");
  return (
    <section className="mt-7 lg:px-6 px-3 max-w-[1440px] mx-auto">
      <div
        className={`rounded-[30px] pt-20 px-6 text-center relative pb-20 bg-[#F3FEFB] min-h-[500px] flex flex-col justify-center items-center`}
      >
        <img
          src={HeroReact}
          alt=""
          className="absolute top-[90px] lg:left-[20%] left-[5%] z-0 object-cover"
        />
        <img
          src={HeroReact}
          alt=""
          className="absolute top-[90px] lg:right-[20%] right-[5%] z-0 object-cover"
        />
        <img
          src={HeroReact}
          alt=""
          className="absolute top-[250px] left-6 z-0 object-cover opacity-50"
        />
        <img
          src={HeroReact}
          alt=""
          className="absolute top-[250px] right-6 z-0 object-cover opacity-50"
        />
        {title && (
          <div
            className={`inline-block px-5 py-[5px] rounded-full text-sm mb-5 z-10 relative min-w-[213px] bg-[#CBFBF1] !text-[#00786F]`}
          >
            {title}
          </div>
        )}

        <h1
          className={`max-w-[953px] mx-auto leading-tight lg:text-[64px] text-[40px] font-semibold text-center z-10 relative ${searchbar ? "mb-6" : ""}`}
        >
          <GradientButton fontSize="lg:text-[64px] text-[40px] font-semibold">
            {heading}
          </GradientButton>
          <span className="lg:text-[64px] text-[40px] font-semibold gap-4">
            <span className="text-[#000]">{subheading}</span>
          </span>
        </h1>

        <p className={`text-[#333333] text-[20px] max-w-[953px] mx-auto`}>
          {content}
        </p>

        {searchbar && (
          <div className="mt-5 max-w-[672px] w-full mx-auto">
            <SearchBar />
          </div>
        )}
        {blogFilter && (
          <div className="flex flex-wrap justify-center gap-4 py-6">
            {categories.map((category) => {
              const isActive = active === category;

              return (
                <button
                  key={category}
                  onClick={() => {
                    setActive(category);
                  }}
                  className={`px-6 h-[48px] rounded-full text-[16px] transition-all duration-300 border
              ${
                isActive
                  ? "bg-[linear-gradient(180deg,#456B7A_0%,#5EC9B7_100%)] text-white shadow-[0px_10px_25px_-5px_rgba(94,201,183,0.6)]"
                  : "bg-white text-[#314158] border-[#E5E7EB] hover:border-[#C7D2FE]"
              }
            `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}
        {review && (
          <section className="pt-8">
            <div className="px-6">
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                {topBadges.map((badge, i) => {
                  const Icon = badge.icon;

                  return (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-[0px_4px_10px_-3px_rgba(0,0,0,0.15)]"
                    >
                      {badge.type === "rating" ? (
                        <div className="flex gap-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              fill="#FACC15"
                              stroke="none"
                            />
                          ))}
                        </div>
                      ) : (
                        <Icon className="w-6 h-6 text-[#2F7D7A]" />
                      )}

                      <div>
                        <p className="text-base text-start font-bold text-[#101828]">
                          {badge.title}
                        </p>
                        <p className="text-sm text-start text-[#6A7282]">
                          {badge.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-3 gap-10">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={i}
                      className="bg-white rounded-3xl p-12 text-center shadow-[0px_15px_30px_-10px_rgba(0,0,0,0.2)]"
                    >
                      <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-[#F0FDFA] flex items-center justify-center">
                        <Icon
                          className="w-8 h-8 text-[#2F7D7A]"
                          strokeWidth={1.8}
                        />
                      </div>

                      <GradientButton fontSize="text-[32px] lg:text-[48px] font-semibold mb-2">
                        {stat.value}
                      </GradientButton>

                      <p className="text-base text-[#4A5565] max-w-[320px] mx-auto">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
