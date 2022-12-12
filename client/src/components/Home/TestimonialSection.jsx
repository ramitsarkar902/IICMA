import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Testimonial from "./Testimonial";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const TestimonialSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="Customers">
      <div className="testimonialSection__wrapper">
        <div className="section__header">
          <h1>Testimonials</h1>
          <span>WHAT ARE THEY</span>
          <span id="two"> SAYING ABOUT US </span>
        </div>
        <Carousel
          interval={4000}
          pause="hover"
          touch={false}
          className="carousel"
        >
          {[1, 2, 3, 4, 5].map((i, idx) => (
            <Carousel.Item>
              <Testimonial />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
