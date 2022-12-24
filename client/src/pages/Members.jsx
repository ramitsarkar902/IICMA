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
    <>
      <div className="section__header">
        <span>Presenting</span>
        <span id="two"> Our Members</span>
      </div>
      <hr class="w-[40vw] mx-auto mb-3" />
      <div class="flex justify-center my-10">
        <table>
          <tr class="text-center">
            {members.map((e) => {
              return <th class="px-11 py-2 border-2">{e.text}</th>;
            })}
          </tr>
          {members.map((e) => {
            return (
              <tr class="text-center">
                <td class="px-11 py-2 border-2">{e.uid}</td>
                <td class="px-11 py-2 border-2">{e.name}</td>
                <td class="px-11 py-2 border-2">{e.email}</td>
                <td class="px-11 py-2 border-2">{e.position}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Members;
