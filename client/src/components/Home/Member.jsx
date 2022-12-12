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
        <Carousel  className="w-full h-[200px]">
          {members.map((data, i) => (
            <Carousel.Item key={data.id} className="w-full h-[180px]">
              <div className="flex justify-center items-center">
                <img
                  src={data.img}
                  alt="image_member"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>

              <Carousel.Caption className="absolute bottom-0">
                <h3 className="text-black">{data.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Member;
