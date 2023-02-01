import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useEffect, useState } from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll, Link } from "react-scroll";
import { Logout } from "../apiCalls";
import { logout } from "../redux/userSlice";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const linkSidebarStyle = "my-6 hover:text-black";
const Navbar = () => {
  const pathName = useLocation().pathname;
  const [location, setLocation] = useState(false);
  const [drop, setDrop] = useState(false);
  const [popUp, setPopup] = useState(false);
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleClick = () => {
    setPopup(!popUp);
  };
  popUp ? disableBodyScroll(document) : enableBodyScroll(document);
  useEffect(() => {
    if (pathName === "/") {
      setLocation(true);
    }
  }, []);
  return (
    <section className="flex nav1 items-center justify-between w-[100%]">
      <div
        id="navbar"
        className="hidden justify-between align-middle items-center md:flex w-[100%] px-2"
      >
        <a href="./">
          <img
            src="https://iicma.in/wp-content/uploads/2021/11/logo-1.png"
            alt=""
            className="object-cover w-24 md:block hidden"
          />
        </a>

        <ul>
          {[
            "Home",
            "About",
            "Gallery",
            "Customers",
            "Events",
            "Members",
            "Contact",
          ].map((i, idx) => (
            <li>
              {(() => {
                if (location) {
                  return (
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
                  );
                } else {
                  return <a href={`./#${i}`}>{i}</a>;
                }
              })()}
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
              </span>
            </p>
            {drop && (
              <ul
                className="dropdown absolute z-10 top-[30px] flex flex-col rounded-lg w-[100px] bg-gray-200"
                onMouseLeave={(e) => {
                  e.preventDefault();
                  setDrop(!drop);
                }}
              >
                {["Members", "Events", "Products", "AboutUs", "News"].map(
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

        <img
          src="https://media4.giphy.com/media/KasZzipEr3khqtCAIv/giphy.gif"
          alt=""
          className="w-14 h-14 rounded-full"
        />
      </div>

      <div className="flex justify-between w-full items-center md:hidden">
        <a href="./">
          <img
            src="https://media4.giphy.com/media/KasZzipEr3khqtCAIv/giphy.gif"
            alt=""
            className="w-14 h-14 rounded-full md:hidden"
          />
        </a>
        <p className="text-black font-bold text-lg md:hidden">IICMA</p>
        {!popUp && (
          <FaBars
            className="text-gray-500 w-6 h-6 md:hidden block"
            onClick={(e) => {
              e.preventDefault();
              setPopup(true);
            }}
          />
        )}
        {popUp && (
          <div className="p-5 right-0 text-xl font-bold z-50 md:hidden flex flex-col items-start justify-start sidebar fixed h-[100%] top-0 w-full">
            <div className="h-[5%] w-full relative">
              <FaTimes
                className="absolute right-[0%] top-[0%] w-10 h-10 text-red scale-90"
                onClick={(e) => {
                  e.preventDefault();
                  setPopup(false);
                }}
              />
            </div>
            {["Home", "About", "Events", "Members"].map((i, idx) =>
              (() => {
                if (location) {
                  return (
                    <Link
                      activeClass="active"
                      smooth
                      spy
                      to={i}
                      duration={500}
                      exact="true"
                      offset={-70}
                      onClick={handleClick}
                      className={linkSidebarStyle}
                    >
                      {i}
                    </Link>
                  );
                } else {
                  return (
                    <a className={linkSidebarStyle} href={`./#${i}`}>
                      {i}
                    </a>
                  );
                }
              })()
            )}
            <a href="Products" className={linkSidebarStyle}>
              Products
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
