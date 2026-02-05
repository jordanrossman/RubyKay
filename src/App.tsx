import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import WhatWeBuild from "./components/WhatWeBuild";
import CaseStudies from "./components/CaseStudies";
import WhyRubyKay from "./components/WhyRubyKay";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SmoothScroll from "./components/animations/SmoothScroll";

export default function App() {
  return (
    <SmoothScroll>
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
    </SmoothScroll>
  );
}
