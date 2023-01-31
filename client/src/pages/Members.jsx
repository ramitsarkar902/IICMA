import React, { useEffect, useState } from "react";
import { getAllMembers } from "../apiCalls.js";

const Members = () => {
  const [m, setMembers] = useState([]);

  useEffect(() => {
    getAllMembers(setMembers);
  }, []);

  const members = [
    {
      id: 1,
      uid: 1001,
      name: "Rajesh Gandhi",
      email: "a.b@gmail.com",
      position: "Chairman (Non Executive)",
    },
    {
      id: 2,
      uid: 1002,
      name: "Rajesh Gandhi",
      email: "a.b@gmail.com",
      position: "Chairman (Non Executive)",
    },
    {
      id: 3,
      uid: 1003,
      name: "Rajesh Gandhi",
      email: "a.b@gmail.com",
      position: "Chairman (Non Executive)",
    },
    {
      id: 4,
      uid: 1004,
      name: "Rajesh Gandhi",
      email: "a.b@gmail.com",
      position: "Chairman (Non Executive)",
    },
    {
      id: 5,
      uid: 1005,
      name: "Rajesh Gandhi",
      email: "a.b@gmail.com",
      position: "Chairman (Non Executive)",
    },
  ];
  return (
    <div className="section__header">
      <span>Presenting</span>
      <span id="two"> Our Members</span>
      <hr class="w-[40vw] mx-auto mb-3" />
      <div class="flex justify-center flex-wrap gap-[30px] my-5">
        {m &&
          m.map((e) => (
            <div className="flex flex-col justify-start w-[20vw] h-[45vh] rounded-lg shadow-gray-400 shadow-md hover:scale-110 cursor-pointer transition-all">
              <img className="h-[80%] w-[60%] mx-auto" src={e.img} alt="" />
              <div
                className="px-3 flex flex-col items-center w-full h-[60%]"
                style={{
                  borderTop: "0.5px dotted gray",
                }}
              >
                <p className="mt-3 text-base font-bold">{e.name}</p>
                <p className="my-2 text-gray-400">{e.email}</p>
                <p className="font-semibold">{e.position}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Members;
