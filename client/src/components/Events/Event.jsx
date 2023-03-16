import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { addParticipant, addSponsors } from "../../apiCalls";

const initialValues = {
  name: "",
  email: "",
  phoneNo: "",
  company: "",
  desc: "",
  amount: "",
};

const Event = ({ data }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [formData, setFormData] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleParticipateSubmit = (event) => {
    event.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phoneNo === ""
    ) {
      toast.warn("Please fill out name,email and phone number fields!", {
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
    if (formData.phoneNo.length > 10 || formData.phoneNo.length < 10) {
      toast.warn("Invalid Phone No!", {
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
    if (show === true) {
      addParticipant({ formData: formData, id: data._id });
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
    }
    if (show2 === true) {
      addSponsors({ formData: formData, id: data._id });
      toast.success("Welcome new Sponsor!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    setFormData(initialValues);
  };

  return (
    <>
      <div className={`event1 ${show || show2 ? "h-auto" : "h-[78vh]"}`}>
        <div className="contai1">
          <div className="eimg1">
            <img src="iicma_event.jpeg" alt="Eventimage" className="h-[20rem] w-full object-cover"/>
          </div>
        </div>
        <div className="contai2">
          <div className="title">{data.title}</div>
          <div className="date">{data.organizingDate}</div>
          <div className="nop flex items-center">
            More than
            <p className="text-red-500 mx-1">{data.participants.length}</p>
            people have registered already!
          </div>
          <div className="desc">{data.desc}</div>
        </div>
        <div className="contai3">
          <button
            className="participate"
            onClick={(e) => {
              e.preventDefault();
              setShow(!show);
              if (show2) {
                setShow2(!show2);
              }
            }}
          >
            Participate
          </button>
          <button
            className="sponsor"
            onClick={(e) => {
              e.preventDefault();
              setShow2(!show2);
              if (show) {
                setShow(!show);
              }
            }}
          >
            Sponsor
          </button>
        </div>
        <div className="form">
          {(show || show2) && (
            <Form onSubmit={handleParticipateSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your phone number"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  name="phoneNo"
                />
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your company"
                    value={formData.company}
                    onChange={handleInputChange}
                    name="company"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter desc"
                    value={formData.desc}
                    onChange={handleInputChange}
                    name="desc"
                  />
                </Form.Group>
              </Form.Group>
              {show2 && (
                <Form.Group className="mb-3" controlId="formBasicNumber">
                  <Form.Label>Sponsor Amount</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter the amount you want to sponsor!"
                    value={formData.amount}
                    onChange={handleInputChange}
                    name="amount"
                  />
                </Form.Group>
              )}
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button className="sbmt" type="submit">
                {show2 ? "Pay" : "Submit"}
              </Button>
            </Form>
          )}
        </div>
      </div>
    </>
  );
};
export default Event;
