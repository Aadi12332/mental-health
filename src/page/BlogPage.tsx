import SubHeroSection from "../component/faq/SubHeroSection";
import BlogListingPage from "../component/blog/BlogListingPage";

export default function BlogPage() {
  return (
    <>
      <SubHeroSection
        heading="Insights for a Healthier Mind"  
        content="Explore expert-written articles on mental wellness, treatments, and everyday strategies to support your emotional well-being."
        searchbar={false}
        blogFilter={true}
      />
      <BlogListingPage />
    </>
  );
}
