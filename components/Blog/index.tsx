import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import courses from "../../public/language.json";

const Blog = async () => {
  return (
    <section className=" ">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Explore Our Programs`,
              description: `Explore our carefully curated programs, each designed to provide you with the skills and knowledge needed to excel in your career.`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
        {Object.keys(courses).map((post, key) => (
              <BlogItem key={key} categoryName={post} mainImage={courses[post].metadata.mainImage} metadata={courses[post].metadata}  />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
