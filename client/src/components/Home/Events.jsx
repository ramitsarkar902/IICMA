import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { getEvents } from "../../apiCalls";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents(setEvents);
  }, []);

  return (
    <section id="Events">
      <div className="events__wrapper">
        <div className="section__header">
          <h1>EVENTS</h1>
          <span>Visit,</span>
          <span id="two"> Sponsor </span>
          <span>and enjoy</span>
        </div>
        <Carousel interval={4000} className="carousel">
          {events.map((review) => (
            <Carousel.Item key={review.id} className="carousel__item">
              <img src={review.img} alt="image_event" />
              <Carousel.Caption className="caption">
                <h3>{review.title}</h3>
                <p>{review.desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Events;
