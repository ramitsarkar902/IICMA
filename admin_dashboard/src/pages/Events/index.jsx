import DeleteIcon from "@mui/icons-material/Delete";
import { Box, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addEvent,
  addMember,
  deleteEvent,
  deleteMember,
  getEvents,
} from "../../apiCalls";
import Header from "../../components/Header";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Events = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { eventData, isLoading, userData } = useSelector((state) => state.user);

  if (!eventData) {
    getEvents(dispatch);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addEvent({
      title: data.get("title"),
      desc: data.get("desc"),
      organizingDate: data.get("ogDate"),
      img: data.get("image"),
      userId: userData._id,
    });
    setTimeout(() => {
      getEvents(dispatch);
    }, 2000);
  };

  const handleDelete = ({ eventId, id }) => {
    deleteEvent({
      eventId,
      id,
    });

    setTimeout(() => {
      getEvents(dispatch);
    }, 2000);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="EVENTS" />
      <Box>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <Header subtitle="Create a Event" />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="desc"
                    label="Description"
                    name="desc"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="ogDate"
                    label="Oranizing Date(DD-MM-YYY)"
                    type="text"
                    id="ogDate"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="image"
                    label="Event Image Url"
                    type="text"
                    id="image"
                    autoComplete="new-image"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      <Header subtitle="List of Events" />
      <Box mt="40px" height="auto">
        {eventData.map((e) => (
          <div className="mx-auto bg-gray-700 h-auto py-5 flex flex-wrap items-center justify-center px-8">
            <div className="flex flex-col w-full bg-white rounded shadow-lg sm:w-3/4 md:w-1/2 lg:w-3/5">
              <img
                className="w-full h-64 bg-top bg-cover rounded-t"
                src={e.img}
                alt="event"
              />
              <div className="flex flex-col w-full md:flex-row">
                <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                  <div className="md:text-3xl">Event On:</div>

                  <div className="md:text-xl">{e.organizingDate}</div>
                </div>
                <div className="p-4 font-normal text-gray-800 md:w-3/4 relative">
                  <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                    {e.title}
                  </h1>
                  <p className="leading-normal">{e.desc}</p>
                  <div className="flex flex-col items-start mt-4 text-gray-700">
                    <div className="w-1/2 flex items-center">
                      Collected Amount:{" "}
                      <p className="text-red-400 font-semibold text-md ml-1">
                        Rs {e.donation}
                      </p>
                    </div>
                    <div className="w-1/2 flex items-center">
                      No Of Participants:{" "}
                      <p className="text-red-400 font-semibold text-md ml-1">
                        {e.participants.length}
                      </p>
                    </div>
                    <div className="w-1/2 flex items-center">
                      No Of Sponsors:{" "}
                      <p className="text-red-400 font-semibold text-md ml-1">
                        {e.sponsors.length}
                      </p>
                    </div>
                  </div>
                  <button
                    className="absolute right-3 bottom-5"
                    onClick={(event) => {
                      event.preventDefault();
                      handleDelete({ id: userData._id, eventId: e._id });
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Box>
      {/* <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header subtitle="Delete a Member" />
        <Box component="form" noValidate onSubmit={handleDelete} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="username"
                label="UserName"
                type="text"
                id="username"
                autoComplete="new-username"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Delete
          </Button>
        </Box>
      </Box> */}
      addparticipants data
    </Box>
  );
};

export default Events;
