import React, { useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import {
  About,
  Member,
  Contact,
  Events,
  Hero,
  Statistics,
  Subgallery,
  TestimonialSection,
  WhyUs,
} from "../components/Home";
const Home = () => {
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

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="home__wrapper">
      <Hero />
      <About />
      <WhyUs />
      <Statistics />
      <Subgallery />
      <TestimonialSection />
      <Events />
      <Member />
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
