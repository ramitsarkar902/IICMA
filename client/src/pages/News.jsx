import moment from "moment";
import React, { useEffect, useState } from "react";
import { getNews } from "../apiCalls";
const News = () => {
  const [n, setNews] = useState([]);

  useEffect(() => {
    getNews(setNews);
  }, []);

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
        {/*  {n &&
          n.map((e) => (
            <div className="flex flex-col justify-start w-[30vw] h-[60vh] rounded-lg shadow-gray-400 shadow-md hover:scale-110 cursor-pointer transition-all">
              <img className="h-[80%] w-[60%] mx-auto" src={e.img} alt="" />
              <div
                className="px-3 flex flex-col items-center w-full h-[60%]"
                style={{
                  borderTop: "0.5px dotted gray",
                }}
              >
                <p className="mt-3 text-base font-bold">{e.title}</p>
                <p className="my-2 text-gray-400">{e.desc}</p>
                <p className="font-semibold flex items-center">
                  By -{"  "} <p className="text-gray-400 font-bold">{e.createdBy}</p>{" "}
                </p>
                <p className="font-semibold flex items-center">
                  {" "}
                  Created On :
                  <p className="text-red-400">
                    {moment(e.createdAt).utc().format("DD-MM-YYYY")}
                  </p>
                </p>
              </div>
            </div>
          ))} */}
        <a
          href="https://www.prnewswire.com/in/news-releases/indian-ice-cream-manufacturers-association-iicma-met-with-finance-minister-nirmala-sitharaman-to-discuss-gst-rates-on-supply-of-ice-cream-by-ice-cream-parlours-in-india-895453785.html"
          className="flex flex-col justify-start w-[30vw] h-[auto] rounded-lg shadow-gray-400 shadow-md hover:scale-110 cursor-pointer transition-all"
        >
          {/*  <img className="h-[80%] w-[60%] mx-auto" src="" alt="" /> */}
          <div
            className="px-3 flex flex-col items-center w-full h-[60%]"
            style={{
              borderTop: "0.5px dotted gray",
            }}
          >
            <p className="mt-3 text-base font-bold">
              Meeting with Finance Minister
            </p>
            <p className="my-2 text-gray-400">
              Indian Ice-Cream Manufacturers' Association (IICMA) met with
              Finance Minister Nirmala Sitharaman to discuss GST rates on supply
              of ice cream by ice cream parlours in India{" "}
            </p>
            {/* <p className="font-semibold flex items-center">
                  By -{"  "} <p className="text-gray-400 font-bold">{e.createdBy}</p>{" "}
                </p> */}
            {/* <p className="font-semibold flex items-center">
                  {" "}
                  Created On :
                  <p className="text-red-400">
                    {moment(e.createdAt).utc().format("DD-MM-YYYY")}
                  </p>
                </p> */}
          </div>
        </a>
        <a
          href="https://telanganatoday.com/hyderabad-indian-ice-cream-expo-from-tomorrow"
          className="flex flex-col justify-start w-[30vw] h-[auto] rounded-lg shadow-gray-400 shadow-md hover:scale-110 cursor-pointer transition-all"
        >
          {/*  <img className="h-[80%] w-[60%] mx-auto" src="" alt="" /> */}
          <div
            className="px-3 flex flex-col items-center w-full h-[60%]"
            style={{
              borderTop: "0.5px dotted gray",
            }}
          >
            <p className="mt-3 text-base font-bold">
              Hyderabad: Indian Ice-Cream Expo from tomorrow
            </p>
            <p className="my-2 text-gray-400">
              Hyderabad: Industry body Indian Ice Cream Manufacturers’
              Association (IICMA) is organising the Indian Ice-Cream Expo 2022
              from October 10 to 12 at Hitex. It will showcase ice cream and
              cone machines, printing and packaging materials, flavours,
              fragrances and colours, food ingredients, and others. Sudhir Shah,
              IICMA president and managing director of Scoops Ice Cream
              (Hyderabad){" "}
            </p>
            {/* <p className="font-semibold flex items-center">
                  By -{"  "} <p className="text-gray-400 font-bold">{e.createdBy}</p>{" "}
                </p> */}
            {/* <p className="font-semibold flex items-center">
                  {" "}
                  Created On :
                  <p className="text-red-400">
                    {moment(e.createdAt).utc().format("DD-MM-YYYY")}
                  </p>
                </p> */}
          </div>
        </a>
      </div>
    </div>
  );
};

export default News;
