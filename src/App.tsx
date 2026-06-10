import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Register from "./components/Register";
import WhoWeWorkWith from "./components/WhoWeWorkWith";
import WhatWeBuild from "./components/WhatWeBuild";
import WhyRubyKay from "./components/WhyRubyKay";
import Process from "./components/Process";
import Principal from "./components/Principal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Intro from "./components/Intro";
import ChapterIndicator from "./components/ChapterIndicator";
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
      <Register />
      <WhatWeBuild />
      <WhyRubyKay />
      <Process />
      <Principal />
      <Contact />
    </main>
  );
}

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <SmoothScroll>
          <div className="grain" aria-hidden />
          <Intro onDone={() => setIntroDone(true)} />
          {introDone && (
            <>
              <ScrollToTop />
              <Navigation />
              <ChapterIndicator />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
              </Routes>
              <Footer />
            </>
          )}
        </SmoothScroll>
      </MotionConfig>
    </BrowserRouter>
  );
}
