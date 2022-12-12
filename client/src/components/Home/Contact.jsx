import React, { useState } from "react";
import { BsFillBookFill, BsShareFill } from "react-icons/bs";
import { MdCall, MdEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postContactUs } from "../../apiCalls";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [data, setData] = useState(initialValues);
  const [show, setShow] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  /* const handleClick = (event) => {
    event.preventDefault();
    
  }; */

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      data.name === "" ||
      data.email === "" ||
      data.message === "" ||
      data.subject === ""
    ) {
      toast.warn("Please fill out all the fields!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    postContactUs(data);
    toast.success("Yay Submitted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setData(initialValues);
    setShow(false);
  };
  return (
    <section id="Contact">
      <div className="contact__wrapper">
        <div className="section__header">
          <h1>CONTACT US</h1>
          <span>Need Help?</span>
          <span id="two"> Contact US</span>
        </div>
        <div className="mb-3 w-full">
          <iframe
            title="Maps"
            className="w-full h-[350px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
            frameborder="0"
          ></iframe>
        </div>
        {show && (
          <>
            <div className="flex sm:flex-wrap contact__3 flex-col">
              <div className="flex justify-between w-full sm:flex-row flex-col">
                <div>
                  <BsFillBookFill className="icon" />
                  <p>
                    Our Address
                    <span>A108 Adam Street, New York, NY 535022</span>
                  </p>{" "}
                </div>
                <div>
                  <MdEmail className="icon" />
                  <p>
                    Email Us
                    <span>contact@example.com</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full sm:flex-row flex-col">
                <div>
                  <MdCall className="icon" />
                  <p>
                    Call Us
                    <span>+1 5589 55488 55</span>
                  </p>
                </div>
                <div>
                  <BsShareFill className="icon" />
                  <p>
                    Opening Hours
                    <span>
                      <strong>Mon-Sat:</strong>11AM-23PM;{" "}
                      <strong>Sunday:</strong>
                      Closed
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <form
              className="flex flex-col w-full items-center bg-white"
              onSubmit={handleSubmit}
            >
              <div className="w-full mb-3 flex justify-between">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[49%]"
                  value={data.name}
                  onChange={handleInputChange}
                  name="name"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-[49%]"
                  value={data.email}
                  onChange={handleInputChange}
                  name="email"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full  mb-3"
                value={data.subject}
                onChange={handleInputChange}
                name="subject"
              />
              <input
                type="text"
                placeholder="Message"
                className="w-full  mb-3 h-32  italic"
                value={data.message}
                onChange={handleInputChange}
                name="message"
              />

              <button
                type="submit"
                className="bg-[#ce1212] sm:w-64 w-full py-[12px] px-[40px] h-16 rounded-full"
              >
                Send Message
              </button>
            </form>
          </>
        )}
        {!show && (
          <div className="flex sm:flex-wrap contact__3 flex-col items-center">
            {" "}
            <img
              src="https://cdn.dribbble.com/users/114484/screenshots/3331928/submitting.gif"
              alt="submitted"
            />
            <p className="text-green-500 font-bold text-xl">
              Thank you for contacting us!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
