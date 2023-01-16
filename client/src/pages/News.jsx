import React from "react";

const News = () => {
  const members = [
    {
      id: 1,
      uid: 1001,
      name: "Traffic challenge on Summer Weekends",
      email: "June 24, 2016",
      position:
        "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
    },
    {
      id: 2,
      uid: 1001,
      name: "Traffic challenge on Summer Weekends",
      email: "June 24, 2016",
      position:
        "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
    },
    {
      id: 3,
      uid: 1001,
      name: "Traffic challenge on Summer Weekends",
      email: "June 24, 2016",
      position:
        "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
    },
    {
      id: 4,
      uid: 1001,
      name: "Traffic challenge on Summer Weekends",
      email: "June 24, 2016",
      position:
        "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
    },
    {
      id: 5,
      uid: 1001,
      name: "Traffic challenge on Summer Weekends",
      email: "June 24, 2016",
      position:
        "For Saturday-Monday, July 2-4, free parking availability near the downtown will increase by over 400 spaces with the opening of a parking area just west of U.S. 1 on King St. Located at the...",
    },
  ];

  return (
    <div className="section__header">
      <span>Latest</span>
      <span id="two"> News and Updates</span>
      <hr class="w-[40vw] mx-auto mb-3" />
      <div class="flex justify-center flex-wrap gap-[40px] my-5">
        {members.map((e) => (
          <div className="flex flex-col justify-start w-[30vw] h-[60vh] rounded-lg shadow-gray-400 shadow-md hover:scale-110 cursor-pointer transition-all">
            <img
              className="h-[80%] w-[60%] mx-auto"
              src="https://iicma.in/wp-content/uploads/2016/06/road-1453311_1280-299x225.jpg"
              alt=""
            />
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

export default News;
