import React, { useState } from "react";
import { CgRemove } from "react-icons/cg";
import { SiYoutubemusic } from "react-icons/si";
import { animateScroll as scroll, Link } from "react-scroll";
const Hero = () => {
  const [popUp, setPopup] = useState(false);
  return (
    <>
      <section name="Home" id="Home">
        <div class="flex sm:flex-row flex-col-reverse sm:justify-between justify-end items-center w-full h-full md:px-[100px] px-0 sm:pb-0 sm:w-[80%]">
          <div class="flex flex-col sm:w-[50%] sm:h-auto w-full sm:px-0 px-2 sm:mt-0 mt-12">
            <h2>
              Welcome to IICMA
              <br /> We are the
              <br />
              Indian Ice-Cream
              <br />
              Manufacturers Association
            </h2>
            <p>
              The Indian Ice-Cream Manufacturers Association was <br /> founded
              in 2011 as the National Association of Ice Cream
              <br />
              Manufacturers.
            </p>
            <div className="w-full flex sm:mx-0 sm:justify-start justify-center">
              <Link
                activeClass="active"
                smooth
                spy
                to="Book"
                duration={500}
                exact="true"
                offset={-70}
              >
                <span className="btn-book-a-table cursor-pointer">
                  Book a Table
                </span>
              </Link>

              <span
                class="flex items-center btn-watch-video"
                onClick={(e) => {
                  e.preventDefault();
                  setPopup(true);
                }}
              >
                <SiYoutubemusic className="mr-2 w-10 h-10 " />
                <span>Watch Video</span>
              </span>
            </div>
          </div>
          <div class="sm:w-[50%] w-full sm:h-full h-[40%] flex justify-center sm:items-center items-start sm:pl-20">
            <img
              src="https://templateiicma.vercel.app/assets/img/ice-cream-img1.png"
              alt=""
              data-aos="zoom-out"
              data-aos-delay="300"
              className="w-[100%] sm:h-[55%] h-full rounded-md"
            />
            {popUp && (
              <div className="fixed z-50 top-0 right-0 h-[100%] w-full bg-black flex justify-center items-center">
                <CgRemove
                  onClick={(e) => {
                    e.preventDefault();
                    setPopup(false);
                  }}
                  className="text-white w-8 h-8 absolute top-[20px] right-[30px] cursor-pointer"
                />

                <iframe
                  src="https://www.youtube.com/embed/UIyNFE_fdts"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="w-[70%] h-[70%]"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
