import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="testimonial__item">
      <div className="red__line"></div>
      <div className="flex flex-col sm:w-[40%] w-[80%] h-36 justify-between">
        <p>
          <FaQuoteLeft className="quote__icon-left" />
          Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam
          tempor noster veniam enim culpa labore duis sunt culpa nulla illum
          cillum fugiat legam esse veniam culpa fore nisi cillum quid.
          <FaQuoteRight className="quote__icon-right" />
        </p>
        <h2>Name</h2>
        <span>Profession</span>
      </div>
      <img
        className="sm:w-48 sm:h-48 w-56 h-56 object-cover rounded-full"
        src="https://templateiicma.vercel.app/assets/img/testimonials/testimonials-4.jpg"
        alt=""
      />
    </div>
  );
};

export default Testimonial;
