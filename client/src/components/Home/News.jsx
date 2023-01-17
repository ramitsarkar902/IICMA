import React from 'react';
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
const News = () => {
    const news = [
      {
        id: 1,
        uid: 1001,
        name: "Traffic challenge on Summer Weekends",
        email: "June 24, 2016",
        position:
          "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
      },
      {
        id: 2,
        uid: 1001,
        name: "Traffic challenge on Summer Weekends",
        email: "June 24, 2016",
        position:
          "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
      },
      {
        id: 3,
        uid: 1001,
        name: "Traffic challenge on Summer Weekends",
        email: "June 24, 2016",
        position:
          "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
      },
      {
        id: 4,
        uid: 1001,
        name: "Traffic challenge on Summer Weekends",
        email: "June 24, 2016",
        position:
          "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
      },
      {
        id: 5,
        uid: 1001,
        name: "Traffic challenge on Summer Weekends",
        email: "June 24, 2016",
        position:
          "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
      },
    ];
  return (
    <div className="w-[70vw] mx-auto">
      <section id="Members" className="rounded-md shadow-md shadow-gray-200">
        <div className="book__wrapper sm:w-[80%] w-[90%] flex flex-col items-center">
          <div className="section__header">
            <h1>Latest</h1>
            <span> News and</span>
            <span id="two"> Updates </span>
          </div>
          <Carousel className="w-full h-[300px]">
            {news.map((data, i) => (
              <Carousel.Item className="w-full h-[200px]">
                <div className="flex justify-center items-center">
                  <img
                    src="https://iicma.in/wp-content/uploads/2016/06/road-1453311_1280-299x225.jpg"
                    alt="image_member"
                    className="w-[15rem] h-28 object-cover"
                  />
                </div>
                <Carousel.Caption>
                  <div className="absolute">
                    <h3 className="text-black">{data.name}</h3>
                    <h4 className="text-zinc-400 mt-1">{data.position}</h4>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default News
