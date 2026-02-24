import { useState } from "react";
import GradientButton from "../landing/GradientButton";
import HeroReact from "../../assets/images/herorectangle.svg";
import SearchBar from "../../ui/SearchBar";

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

export default function SubHeroSection({ title, heading, subheading, content, searchbar=true, blogFilter=false }: { title?: string, heading?: string, subheading?: string, content?: string, searchbar?: boolean, blogFilter?: boolean }) {
const [active, setActive] = useState("Mental Wellness");
  return (
    <section className="mt-7 lg:px-6 px-3 max-w-[1440px] mx-auto">
      <div className={`rounded-[30px] pt-20 px-6 text-center relative pb-20 bg-[#F3FEFB] min-h-[500px] flex flex-col justify-center items-center`}>
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
        {title &&
        <div className={`inline-block px-5 py-[5px] rounded-full text-sm mb-5 z-10 relative min-w-[213px] bg-[#CBFBF1] !text-[#00786F]`}>
            {title}
          </div>
        }

        <h1 className={`max-w-[953px] mx-auto leading-tight lg:text-[64px] text-[40px] font-semibold text-center z-10 relative ${searchbar ? "mb-6" : ""}`}>
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

        {searchbar && <div className="mt-5 max-w-[672px] w-full mx-auto">
          <SearchBar />
        </div>}
        {blogFilter &&     <div className="flex flex-wrap justify-center gap-4 py-6">
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
    </div>}
      </div>
    </section>
  );
}
