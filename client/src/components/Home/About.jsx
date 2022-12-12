import React from "react";
import { BsCheck2All } from "react-icons/bs";
const About = () => {
  return (
    <>
      <section id="About">
        <div className="about__wrapper">
          <div className="section__header">
            <h1>ABOUT US</h1>
            <span>Learn More</span>
            <span id="two"> About Us </span>
          </div>
          <div className="cont2">
            <div className="cont21">
              <img
                src="https://templateiicma.vercel.app/assets/img/about.jpg"
                alt=""
              />
              <div className="write">
                <h1>Book a table</h1>
                <h1 id="num1">+1 5589 55488 55</h1>
              </div>
            </div>
            <div className="cont22">
              <p id="p1">
                Lorem ipsum dolor sit met consectetur adipisiing elit. Sequi
                repellendus omnis laboriosam cumque obcaecati dolores officiis
                hic ad qui nihil!
              </p>
              <ul>
                <span>
                  <i class="fa-solid fa-check-double"></i>
                </span>

                <li>
                  <BsCheck2All className="icon" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Distinctio!
                  </p>
                </li>

                <li>
                  <BsCheck2All className="icon" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Porro.
                  </p>
                </li>

                <li>
                  <BsCheck2All className="icon" />{" "}
                  {/* not working when p is large -->abir */}
                  <p>
                    Lorem ipsum dolor sit, consectetur adipisicing elit. Quae
                  </p>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Fugiat, porro veniam! Natus laudantium, sit similique animi
              </p>
              <img
                src="https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
