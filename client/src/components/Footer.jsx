import React from "react";
import { BiPhoneCall, BiTime } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
const Footer = () => {
  return (
    <div className="footer flex flex-col py-[50px] bg-black text-gray-300 items-center justify-between w-full">
      <div className="flex sm:flex-row flex-col justify-between sm:items-center items-start w-[80%]">
        <div className="flex flex-col sm:mb-0 mb-3">
          <p className="flex items-center mb-2 font-bold">
            <GoLocation className="mr-2 icon" />
            Address
          </p>
          <span>108 Adam Street</span>
          <span>New York,NY 50557-US</span>
        </div>
        <div className="flex flex-col sm:mb-0 mb-3">
          <p className="flex items-center mb-2 font-bold">
            <BiPhoneCall className="mr-2 icon" />
            Reservations
          </p>
          <span>
            <strong>Phone:</strong>+5633536546
          </span>
          <span>
            <strong>Email:</strong>test@gmail.com
          </span>
        </div>
        <div className="flex flex-col sm:mb-0 mb-3">
          <p className="flex items-center mb-2  font-bold">
            <BiTime className="mr-2 icon" />
            Opening Hours
          </p>
          <span>
            <strong>Mon-Sat:</strong>11AM-23PM
          </span>
          <span>
            <strong>Sunday:</strong>Closed
          </span>
        </div>
        <div className="flex flex-col sm:items-center items-start">
          <p className="mb-3  font-bold">Follow Us</p>
          <div className="flex justify-between">
            <BsFacebook className="mr-4 icon" />
            <BsInstagram className="mx-4 icon" />
            <BsTwitter className="mx-4 icon" />
          </div>
        </div>
      </div>
      <div className="flex w-[90%] h-[2px] bg-white my-5"></div>
      <div className="flex justify-center font-bold">
        @2022 IICMA Copyright Reserved
      </div>
    </div>
  );
};

export default Footer;
