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
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, getProducts } from "../../apiCalls";
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

const Products = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isLoading, productData, userData } = useSelector(
    (state) => state.user
  );

  if (!productData) {
    getProducts(dispatch);
  }

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "username",
      headerName: "User Name",
      flex: 0.5,
    },
    {
      field: "type",
      headerName: "Role",
      flex: 0.5,
    },
  ];


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addProduct({
      title: data.get("title"),
      desc: data.get("desc"),
      file: data.get("img"),
      userId: userData._id,
    });
    setTimeout(() => {
      getProducts(dispatch);
    }, 5000);
  };

  const handleDelete = ({ id }) => {
    deleteProduct({
      userId: userData._id,
      id: id,
    });

    setTimeout(() => {
      getProducts(dispatch);
    }, 5000);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" />
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
            <Header subtitle="Create a Product" />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="title"
                    required
                    fullWidth
                    id="title"
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
                    name="img"
                    label="Image"
                    type="file"
                    inputProps={{ accept: "image/*" }}
                    id="img"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="filename"
                    label="File Name"
                    type="text"
                    id="filename"
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
      <Header subtitle="List of Products" />
      <Box
        mt="40px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          height: "100vh",
          gap: "40px",
          overflowY: "scroll",
        }}
      >
        {productData &&
          productData.map((data) => (
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[60%] relative">
              <img
                class="rounded-t-lg h-[300px] w-[300px]"
                src={data.img}
                alt=""
              />

              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.title}
                </h5>

                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 overflow-hidden">
                  {data.desc}
                </p>
                <p>
                  Date of Release:{" "}
                  <span className="text-red-500">
                    {moment(data.dateOfRelease).utc().format("DD-MM-YYYY")}
                  </span>
                </p>
                <p>
                  Created By:
                  <span className="font-bold ml-2 text-lg text-gray-400">
                    {data.createdBy}
                  </span>
                </p>
                <button
                  className="absolute right-3"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete({ id: data._id });
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
      </Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header subtitle="Delete a Product" />
        {/* <Box component="form" noValidate onSubmit={handleDelete} sx={{ mt: 3 }}>
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
        </Box> */}
      </Box>
    </Box>
  );
};

export default Products;
