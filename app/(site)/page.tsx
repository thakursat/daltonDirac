import About from "@/components/About";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dalton Dirac",
  description: "Learn tech here!",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <FunFact />
      <Blog />
      <CTA />
      <About />
      {/* <Brands /> */}
      {/* <Feature /> */}
      {/* <FeaturesTab /> */}
      {/* <Integration /> */}
      <Testimonial />
      {/* <Pricing /> */}
      
    </main>
  );
}
