import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import WhatWeBuild from "./components/WhatWeBuild";
import CaseStudies from "./components/CaseStudies";
import WhyRubyKay from "./components/WhyRubyKay";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import SmoothScroll from "./components/animations/SmoothScroll";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the page to render, then scroll to the element
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <WhoWeWorkWith />
      <WhatWeBuild />
      <CaseStudies />
      <WhyRubyKay />
      <Process />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}
