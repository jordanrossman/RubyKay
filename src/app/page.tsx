import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import WhatWeBuild from "@/components/WhatWeBuild";
import CaseStudies from "@/components/CaseStudies";
import WhyRubyKay from "@/components/WhyRubyKay";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhoWeWorkWith />
        <WhatWeBuild />
        <CaseStudies />
        <WhyRubyKay />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
