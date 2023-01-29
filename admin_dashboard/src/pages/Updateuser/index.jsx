import React from "react";
import { useState } from "react";

const Updateuser = () => {
  const state = useState({currentpassword:"",newpassword:"",confirmpassword:""});
  // const handleClick =()=>{
  //   console.log(state.currentpassword);
  //   console.log(state.newpassword);
  //   console.log(state.confirmpassword);
  // }
  return (
    <div>
      <div className="container flex mt-[5rem] items-center justify-around">
        <div className="container1 h-[50vh] flex flex-col justify-around">
          <h1 className="text-4xl font-semibold text-center text-slate-50">
            Update Password
          </h1>
          <form className="mt-6">
            <div className="mb-4">
              <input
                placeholder="Enter current password"
                variant="outlined"
                type="text"
                // value={state.currentpassword}
                name="username"
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Enter new password"
                type="password"
                name="password"
                // value={state.newpassword}
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Re-enter new password"
                type="password"
                name="password"
                // value={state.confirmpassword}
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-slate-50 transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-800 flex justify-center items-center"
                // onclick={()=>{
                //   handleClick()
                // }}
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div className="container2 h-[50vh] flex flex-col justify-around p-3">
          <h1 className="text-4xl font-semibold text-center text-slate-50">
            Update Other Details
          </h1>
          <form className="mt-6">
            <div className="mb-4">
              <input
                placeholder="Update name"
                variant="outlined"
                type="text"
                name="username"
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Update email"
                type="email"
                name="email"
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Update phone number"
                type="number"
                name="number"
                className="block w-[20rem] px-4 py-2 mt-2 placeholder-slate-50 text-white bg-blue-900 border border-blue-600 rounded-md focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-4">
              <input
                placeholder="Upload new image url"
                type="text"
                name="password"
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updateuser;
