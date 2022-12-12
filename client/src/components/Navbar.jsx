import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useEffect, useState } from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll, Link } from "react-scroll";
import { Logout } from "../apiCalls";
import { logout } from "../redux/userSlice";

const linkSidebarStyle = "my-6 hover:text-black";
const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const [popUp, setPopup] = useState(false);
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  popUp ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div
      className={`flex nav1 items-center justify-between w-[100%] p-2 
      }`}
    >
      <a href="./" class="flex align-items-center sm:w-[10%]">
        <img
          src="https://iicma.in/wp-content/uploads/2021/11/logo-1.png"
          alt=""
          className="object-cover sm:w-24 w-16 sm:block hidden"
        />
        <img
          src="https://media4.giphy.com/media/KasZzipEr3khqtCAIv/giphy.gif"
          alt=""
          className="w-14 h-14 rounded-full  sm:hidden"
        />
      </a>

      <div id="navbar" className="navbar2 w-[40%]">
        <ul className="flex justify-between items-center">
          <li class="relative flex justify-center">
            <p>
              <a href="./">Home</a>{" "}
            </p>
          </li>
          {[
            "About",
            "Gallery",
            "Customers",
            "Events",
            "Members",
            "Contact",
          ].map((i, idx) => (
            <li>
              <Link
                activeClass="active"
                smooth
                spy
                to={i}
                duration={500}
                exact="true"
                offset={-70}
              >
                {i}
              </Link>
            </li>
          ))}

          <li class="relative flex justify-center">
            <p>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  setDrop(!drop);
                }}
              >
                Pages
              </span>{" "}
            </p>

            {drop && (
              <ul className="dropdown absolute z-10 top-[30px] flex flex-col rounded-lg w-[100px] bg-gray-200">
                {["Members", "Events", "Products", "About Us"].map(
                  (number, index) => (
                    <a
                      href={`./${number}`}
                      key={index}
                      className="cursor-pointer py-1 hover:text-gray-500 w-full text-center"
                    >
                      {number}
                    </a>
                  )
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>

      <img
        src="https://media4.giphy.com/media/KasZzipEr3khqtCAIv/giphy.gif"
        alt=""
        className="w-14 h-14 rounded-full hidden sm:block"
      />
      <p className="text-black font-bold text-lg sm:hidden">IICMA</p>
      {!popUp && (
        <HiMenu
          className="text-gray-500 w-6 h-6 sm:hidden block"
          onClick={(e) => {
            e.preventDefault();
            setPopup(true);
          }}
        />
      )}
      {popUp && (
        <div className="p-5 right-0 text-xl font-bold z-50 sm:hidden flex flex-col items-start justify-start sidebar fixed h-[100%] top-0 w-full">
          <div className="h-[5%] w-full relative">
            <MdOutlineCancel
              className="absolute right-[0%] top-[10%] w-10 h-10 text-red"
              onClick={(e) => {
                e.preventDefault();
                setPopup(false);
              }}
            />
          </div>
          <a href="./" className={linkSidebarStyle}>
            Home
          </a>
          <a href="Members" className={linkSidebarStyle}>
            Members
          </a>
          <a href="Events" className={linkSidebarStyle}>
            Events
          </a>
          <a href="About" className={linkSidebarStyle}>
            About Us
          </a>
          <a href="Products" className={linkSidebarStyle}>
            Products
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
