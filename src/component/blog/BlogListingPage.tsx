import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import GradientButton from "../landing/GradientButton";

type Blog = {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
};

const blogs: Blog[] = Array.from({ length: 50 }).map((_, i) => ({
  id: i + 1,
  title: "Sample Blog Title " + (i + 1),
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  category: ["Anxiety", "ADHD", "Mental Wellness", "Depression", "Medications", "Sleep Health", "Stress Management"][i % 7],
  date: "January " + (24 - i) + ", 2026",
  image: `https://picsum.photos/600/400?random=${i + 1}`,
}));

export default function BlogListingPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-24 bg-[#F8FAFB]">
      <div className="max-w-[1320px] mx-auto px-6">

        <h2 className="text-[32px] lg:text-[42px] font-semibold flex items-center gap-3 justify-center text-center mb-14">
          <GradientButton fontSize="text-[32px] lg:text-[42px] font-semibold">Latest</GradientButton> Article
        </h2>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-8">
          {currentBlogs.map((blog) => (
            <div
              key={blog.id}
              className="max-w-[405px] w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[230px] object-cover"
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-sm rounded-full bg-[#E6F4F1] text-[#2F7D7A]">
                    {blog.category}
                  </span>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    {blog.date}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-[#1F2937]">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>


<div className="flex justify-center items-center gap-4 mt-14">

  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage((p) => p - 1)}
    className="w-12 h-12 rounded-xl border border-[#C9D4E0] bg-white flex items-center justify-center disabled:opacity-40 transition"
  >
    <ChevronLeft className="w-5 text-[#456B7A]" />
  </button>

  {Array.from({ length: totalPages }).map((_, i) => {
    const page = i + 1;
    const isActive = page === currentPage;

    if (
      page !== 1 &&
      page !== totalPages &&
      Math.abs(page - currentPage) > 1
    ) {
      if (page === 2 || page === totalPages - 1) {
        return (
          <span key={page} className="px-2 text-[#94A3B8]">
            ...
          </span>
        );
      }
      return null;
    }

    return (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`w-12 h-12 rounded-xl border flex items-center justify-center transition
          ${
            isActive
              ? "bg-[linear-gradient(180deg,#456B7A_0%,#5EC9B7_100%)] text-white border-transparent shadow-[0px_10px_20px_-5px_rgba(94,201,183,0.6)]"
              : "bg-white border-[#C9D4E0] text-[#456B7A]"
          }
        `}
      >
        {page}
      </button>
    );
  })}

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage((p) => p + 1)}
    className="w-12 h-12 rounded-xl border border-[#C9D4E0] bg-white flex items-center justify-center disabled:opacity-40 transition"
  >
    <ChevronRight className="w-5 text-[#456B7A]" />
  </button>

</div>

      </div>
    </section>
  );
}