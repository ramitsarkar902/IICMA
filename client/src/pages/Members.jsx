import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      text: "U.Id",
      uid: 1001,
      name: "lorem1",
      email: "a.b@gmail.com",
      position: "head",
    },
    {
      id: 2,
      text: "Name",
      uid: 1002,
      name: "lorem2",
      email: "a.b@gmail.com",
      position: "head",
    },
    {
      id: 3,
      text: "Email",
      uid: 1003,
      name: "lorem3",
      email: "a.b@gmail.com",
      position: "head",
    },
    {
      id: 4,
      text: "Position",
      uid: 1004,
      name: "lorem4",
      email: "a.b@gmail.com",
      position: "head",
    },
  ];
  return (
    <div className="section__header">
      <span>Presenting</span>
      <span id="two"> Our Members</span>
      <hr class="w-[40vw] mx-auto mb-3" />
      <div class="flex justify-center flex-wrap gap-[30px] my-5">
        {members.map((e) => (
          <div className="flex flex-col justify-start w-[350px] rounded-lg h-[230px] shadow-gray-400 shadow-md hover:scale-110 cursor-pointer transition-all">
            <img
              className="h-[40%]"
              src="https://static9.depositphotos.com/1074452/1099/i/600/depositphotos_10999898-stock-photo-member-stamp-shows-membership-registration.jpg"
              alt=""
            />
            <div
              className="px-3 flex flex-col items-start w-full h-[60%]"
              style={{
                borderTop: "0.5px dotted gray",
              }}
            >
              <p className="mt-3 text-base font-bold">{e.name}</p>
              <p className="my-1 text-gray-400">{e.email}</p>
              <p className="font-semibold">Desc</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
