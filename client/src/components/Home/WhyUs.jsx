import React from "react";
import { BsClipboardData, BsFillInboxesFill, BsGem } from "react-icons/bs";
const WhyUs = () => {
  return (
    <>
      <section id="WhyUs">
        <div className="conta h-full">
          <div className="conta__wrapper">
            <div className="conta1">
              <h1>Why Choose IICMA?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                esse beatae recusandae impedit voluptatum eius tempore
                accusantium expedita molestiae optio, inventore laudantium
                distinctio autem soluta unde dolorum sed dicta! Assumenda?
              </p>
              <button>Learn More</button>
            </div>
            <div className="conta2">
              <span>
                <BsClipboardData className="icon" />
              </span>
              <p id="one">Lorem ipsum dolor sit</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                sed.
              </p>
            </div>
            <div className="conta3">
              <span>
                <BsGem className="icon" />
              </span>
              <p id="one">Lorem ipsum dolor sit</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                sed.
              </p>
            </div>
            <div className="conta4">
              <span>
                <BsFillInboxesFill className="icon" />
              </span>
              <p id="one">Lorem ipsum dolor sit</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                sed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
