'use client'
import Image from 'next/image';
import React from 'react';
import courses from "../../../../../public/language.json";
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';

interface CourseCardProps {
  courseName: string;
  courseCategory: string;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({title, description, courseName, courseCategory}) => (
  <div className="flex flex-col h-[23rem] bg-white rounded-lg shadow-md overflow-hidden">
    <div className='w-full h-full relative'>
    <Image
    src="/images/blog/blog-01.png"
    alt="Kobe Steel plant that supplied"
    className="rounded-md object-cover object-center"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    fill
  />
  </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <Link href={`${courseCategory}/${courseName}`}>
      <button className="flex items-center justify-center bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        View More
      </button>
      </Link>
    </div>
  </div>
);

export default function LanguageProgram(){

  const params = useParams();

  const courseCategory = Array.isArray(params.courseCategory) ? params.courseCategory[0] : params.courseCategory ?? '';

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section>
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
          <div className="w-1/2 md:w-1/2 mb-8 md:mb-0 relative" style={{ height: '300px' }}>
  <Image
    src="/images/blog/blog-01.png"
    alt="Kobe Steel plant that supplied"
    className="rounded-md object-cover object-center"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    fill
  />
</div>
            <div className="md:w-1/2 md:pl-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Courses</h1>
              <p className="text-xl mb-6">Discover a world of knowledge and unlock your potential with our comprehensive online courses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Cards Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {courseCategory} {LanguageProgram} */}
          {Object.keys(courses[courseCategory]).map((course, index) => {
            if(course !== 'metadata')
            return (
            <CourseCard key={index} courseCategory={courseCategory} title={courses[courseCategory][course].metadata.title} description={courses[courseCategory][course].metadata.description} courseName={course} />
          )
          })}
        </div>
      </section>
    </div>
  );
}



