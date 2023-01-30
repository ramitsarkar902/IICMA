import { useState } from "react";
import { useSelector } from "react-redux";
import { updatePassword, updateUserdetails } from "../../apiCalls";

const Updateuser = () => {
  const [formData, setFormData] = useState({});
  const [userformData, setUserFormData] = useState({});
  const [time, setTime] = useState(false);
  const [userTime, setUsertime] = useState(false);
  const { userData } = useSelector((state) => state.user);
  const [formValue, setFormValue] = useState({
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  });
  const [userformValue, setUserFormValue] = useState({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
  });
  const [wrong, setWrong] = useState(false);
  const [message, setMessage] = useState("");
  const [userMessage, setuserMessage] = useState("");

  const handleUsersubmit = (e) => {
    e.preventDefault();
    let email = userformData.email;
    let phoneNo = userformData.phonenumber;
    if (email.length > 0 && phoneNo.length === 10) console.log("yes");
    /* updateUserdetails(
      {
        username: userData.username,
        userid: userData._id,
        password: userformData.password,
        name: userformData.name,
        email: userformData.email,
        phonenumber: userformData.phonenumber,
      },
      setuserMessage
    ); */
    setUsertime(true);
    setTimeout(() => {
      setUsertime(false);
    }, 3000);
    setUserFormValue({
      name: "",
      email: "",
      phonenumber: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newpassword !== formData.confirmpassword) {
      setWrong(true);
      setFormValue({
        newpassword: "",
        confirmpassword: "",
      });
    } else {
      updatePassword(
        {
          username: userData.username,
          userid: userData._id,
          currentpassword: formData.currentpassword,
          newpassword: formData.newpassword,
        },
        setMessage
      );
      setTime(true);
      setTimeout(() => {
        setTime(false);
      }, 3000);
      setWrong(false);
      setFormValue({
        currentpassword: "",
        newpassword: "",
        confirmpassword: "",
      });
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setFormValue({
      [event.target.name]: event.target.value,
    });
  };

  const handleUserchange = (event) => {
    setUserFormData({
      ...userformData,
      [event.target.name]: event.target.value,
    });
    setUserFormValue({
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <div className="container flex mt-[5rem] items-center justify-around">
        <div className="container1 h-[50vh] flex flex-col justify-around">
          <h1 className="text-4xl font-semibold text-center text-slate-50">
            Update Password
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                placeholder="Enter current password"
                variant="outlined"
                type="password"
                name="currentpassword"
                value={formValue.currentpassword}
                onChange={handleChange}
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Enter new password"
                type="password"
                name="newpassword"
                value={formValue.newpassword}
                onChange={handleChange}
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Re-enter new password"
                type="password"
                name="confirmpassword"
                value={formValue.confirmpassword}
                onChange={handleChange}
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-slate-50 transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-800 flex justify-center items-center"
              >
                Update
              </button>
            </div>
            {wrong && (
              <div className="wrong w-[20rem] mt-5">
                <p className="text-red-500 text-xs">
                  The passwords dont match. Re-enter the passwords.
                </p>
              </div>
            )}
            {time && message}
          </form>
        </div>
        <div className="container2 h-[50vh] flex flex-col justify-around p-3">
          <h1 className="text-4xl font-semibold text-center text-slate-50">
            Update Other Details
          </h1>
          <form className="mt-6" onSubmit={handleUsersubmit}>
            <div className="mb-4">
              <input
                placeholder="Update name"
                variant="outlined"
                type="text"
                name="name"
                value={userformValue.name}
                onChange={handleUserchange}
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Update email"
                type="email"
                name="email"
                id="email"
                value={userformValue.email}
                onChange={handleUserchange}
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Update phone number"
                type="text"
                name="phonenumber"
                value={userformValue.phonenumber}
                onChange={handleUserchange}
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Enter password"
                type="password"
                name="password"
                required
                value={userformValue.password}
                onChange={handleUserchange}
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-[20rem] px-4 py-2 tracking-wide text-slate-50 transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-800 flex justify-center items-center"
              >
                Update
              </button>
              <div className="flex justify-center mt-3">
                {userTime && userMessage}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updateuser;
