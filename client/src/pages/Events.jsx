import React, { useEffect, useState } from "react";
import { getEvents } from "../apiCalls";
import Event from "../components/Events/Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents(setEvents);
  }, []);

  return (
    <>
      <div className="section__header">
        <span>Presenting</span>
        <span id="two"> Our Events</span>
      </div>
      <div className="event">
        <div className="event__wrapper">
          {events.map((e, index) => (
            <Event data={e} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
