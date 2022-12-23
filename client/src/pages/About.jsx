import React from "react";

const pStyle = "text-gray-400 font-medium text-sm my-3";
const About = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="h-[300px] w-full flex sm:flex-row flex-col justify-center items-center">
        <p
          className="sm:text-8xl text-lg text-red-300"
          style={{
            fontFamily: "Rubik Gemstones",
          }}
        >
          About
        </p>
        <img
          className="sm:w-auto object-cover h-full mx-5"
          src="https://c4.wallpaperflare.com/wallpaper/280/301/81/orange-chocolate-sweet-cream-wallpaper-preview.jpg"
          alt=""
        />
        <p
          className="sm:text-8xl text-lg text-red-300"
          style={{
            fontFamily: "Rubik Gemstones",
          }}
        >
          IICMA
        </p>
      </div>
      <div className="bg-gray-300 w-[70%] h-[2px] sm:mt-6 my-6"></div>
      <div className="flex flex-col w-[70%] sm:h-[100vh]">
        <div className="flex sm:flex-row flex-col justify-between items-center h-[50%] w-full">
          <span
            style={{
              fontFamily: "Poppins",
            }}
            className="flex items-center justify-center sm:w-[40%] w-full sm:text-lg text-gray-700 font-semibold sm:mx-[70px]"
          >
            The Indian Ice-Cream Manufacturers Association was founded in 2011
            as the National Association of Ice Cream Manufacturers. The Idea of
            forming the association at national level was prevailing among the
            most leading Ice Cream manufacturers of India since 2010, which
            finally comes into existence on April-2011.
          </span>
          <img
            className="h-full sm:w-[50%]w-full object-cover sm:my-0 my-3 sm:rounded-lg rounded-full"
            src="https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="flex sm:flex-row-reverse flex-col justify-between items-center sm:h-[50%] w-full">
          <ul
            style={{
              fontFamily: "Poppins",
            }}
            className="flex flex-col items-start justify-center w-full sm:w-[40%] sm:text-lg text-gray-700 font-semibold sm:mx-[70px]"
          >
            <li>Industries policy issues,</li>
            <li>Food safety guidance and compliance,</li>
            <li>Economic analyses and market updates,</li>
            <li>International trade and standards,</li>
            <li>Crisis management,</li>
          </ul>
          <img
            className="h-full sm:w-[51%] w-full object-cover sm:my-0 my-3 sm:rounded-lg rounded-full"
            src="https://images6.alphacoders.com/337/337990.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col w-[70%] mt-[20px]">
        <p
          className={pStyle}
          style={{
            fontFamily: "Poppins",
          }}
        >
          IICMA stays on critical issues that challenge company growth and
          success, provides recommendations on the future direction of the
          industry, network and share ideas, develop business relationships. The
          specific challenges confronted by the industry are apparent, and IICMA
          is proactive in its approach to represent the industry’s best
          interest.
        </p>
        <p
          className={pStyle}
          style={{
            fontFamily: "Poppins",
          }}
        >
          Members amongst the association participate in to provide their
          expertise in reviewing and discussing Ice Cream industry issues and to
          develop guidelines, studies and other materials.
        </p>
        <p
          className={pStyle}
          style={{
            fontFamily: "Poppins",
          }}
        >
          IICMA provides the resources to broaden your knowledge and stay
          abreast of current challenges, as well as opportunities to network
          with a community of professional leading Ice Cream manufacturers from
          India with the same goal to grow the Ice Cream industry.
        </p>
        <span className="font-bold text-xl my-2">Mission & Vision:</span>
        <div className="flex sm:flex-row flex-col justify-between items-start w-[100%] mt-2">
          <div className="flex flex-col sm:w-[40%] justify-start items-start">
            <h4 className="text-xl font-bold">Mission:</h4>
            <p
              className={pStyle}
              style={{
                fontFamily: "Poppins",
              }}
            >
              “Our mission is to become a pioneer non profit association in
              Indian Ice cream Industry by providing best services, knowledge to
              our members and to use our pioneering spirit for growth of Ice
              cream Industry.
            </p>
          </div>
          <div className="flex flex-col sm:w-[40%] justify-start items-start">
            <h4 className="text-xl font-bold">Vision:</h4>
            <p
              className={pStyle}
              style={{
                fontFamily: "Poppins",
              }}
            >
              “We help Ice Cream Manufacturers pan India to have business in
              happier, healthier and profitable way by providing educations,
              updated information through events, seminars & training programs
              on various critical issues of Industry policy, food safety and
              R&D. We provide the platform to grab the opportunities of upcoming
              future, which help its members to grow their business at National
              and International level”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
