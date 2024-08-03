import { Blog } from "@/types/blog";
import Link from "next/link";


const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: "/images/blog/blog-01.png",
    title: "Language Programs",
    link: './',
    metadata:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-02.png",
    title: "ERP Programs",
    metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    link: ""
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-03.png",
    title: "Data Science Program",
    metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    link: ""
  },
  {
    _id: 1,
    mainImage: "/images/blog/blog-03.png",
    title: "Content Writing",
    metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    link: ""
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-04.png",
    title: "Project Management",
    metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    link: ""
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-01.png",
    title: "Cloud Programs.",
    metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    link: ""
  },
  {
    _id: 2,
    mainImage: "/images/blog/blog-01.png",
    title: "Career Accelerate Program.",
    metadata: "Lorem ipsum dolor sit amet, consectetur adipiscing elit convallis tortor.",
    link: ""
  },
];

export default BlogData;
