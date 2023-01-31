import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import moment from "moment";

const Dashboard = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          Welcome{" "}
          <p className="ml-3 text-red-500 font-semibold text-3xl">
            {" "}
            {userData.name}{" "}
          </p>
        </Typography>

        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden shadow-orange-400 shadow-lg"
          >
            <Box
              component="img"
              alt="profile"
              src={
                userData
                  ? userData.img
                  : "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
              }
              height="100%"
              width="100%"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal rounded-lg ml-2 shadow-xl shadow-indigo-500/50">
            <div className="mb-8">
              <p className="text-sm text-gray-600 flex items-center">
               Name: {userData.name}
              </p>
              <div className="text-gray-900 font-bold text-xl mb-2">
               User Name : {userData.username}
              </div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none mb-2 font-bold">Contact - {userData.email}</p>
                <p className="text-gray-900 leading-none font-bold mb-2">Mobile No - {userData.phoneNo}</p>
                <p className="text-gray-600">Created At:  {moment(userData.createdAt).utc().format("DD-MM-YYYY")}</p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Dashboard;
