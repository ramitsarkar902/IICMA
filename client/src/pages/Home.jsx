import React, { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Events,
  Hero,
  Member,
  Statistics,
  Subgallery,
  TestimonialSection,
  WhyUs,
  News,
} from "../components/Home";

const Home = () => {
  const location = useLocation();
  const [pop, setPop] = useState(false);
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
      setPop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(function () {
      if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1));
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }, 500);
  }, [location]);

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="home__wrapper block z-0">
      <Hero />
      <About />
      <WhyUs />
      <Statistics />
      <Subgallery />
      <TestimonialSection />
      <Events />
      <Member />
      <News />
      <Contact />

      <BsFillArrowUpCircleFill
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
          setPop(false);
        }}
        className="scrollTopBtn"
        style={{ display: visible ? "inline" : "none" }}
      />
    </div>
  );
};

export default Home;
