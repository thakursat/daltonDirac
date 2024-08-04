import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import courses from "../../../public/language.json";

export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
};

const BlogPage = async () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {Object.keys(courses).map((post, key) => (
              <BlogItem key={key} categoryName={post} mainImage={courses[post].metadata.mainImage} metadata={courses[post].metadata}  />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
