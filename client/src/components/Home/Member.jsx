import React, { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import { getAllMembers } from "../../apiCalls";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
const Member = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getAllMembers(setMembers);
  }, []);

  return (
    <section id="Members">
      <div className="book__wrapper sm:w-[80%] w-[90%] flex flex-col items-center">
        <div className="section__header">
          <h1>Our Members</h1>
          <span>Have a look at our</span>
          <span id="two"> Members </span>
        </div>
        <Carousel className="w-full h-[240px]">
          {members.map((data, i) => (
            <Carousel.Item className="w-full h-[180px]">
              <div className="flex flex-col">
                <div className="flex justify-center items-center">
                  <img
                    src="https://iicma.in/wp-content/uploads/2021/11/1462860314-4672.jpg"
                    alt="image_member"
                    className="w-20 h-25 rounded-full object-cover"
                  />
                </div>

                <Carousel.Caption className="flex justify-center">
                  <div className="absolute">
                    <h3 className="text-black">Rajesh Gandhi</h3>
                    <h4 className="text-zinc-400">Chairman (Non Executive)</h4>
                  </div>
                </Carousel.Caption>

              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Member;
