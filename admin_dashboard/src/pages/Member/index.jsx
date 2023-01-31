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
import { addMember, deleteMember, getCustomers } from "../../apiCalls";
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

const Member = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { customerData, isLoading } = useSelector((state) => state.user);

  if (!customerData) {
    getCustomers(dispatch);
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
      field: "position",
      headerName: "Position",
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
    addMember({
      email: data.get("email"),
      username: data.get("username"),
      name: data.get("name"),
      img: data.get("image"),
      position: data.get("position"),
    });
    setTimeout(() => {
      getCustomers(dispatch);
    }, 2000);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    deleteMember({
      username: data.get("username"),
    });

    setTimeout(() => {
      getCustomers(dispatch);
    }, 2000);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="MEMBERS" />
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
            <Header subtitle="Create a Member" />
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
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
                    autoComplete="email"
                  />
                </Grid>
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
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="image"
                    label="User Image Url"
                    type="text"
                    id="image"
                    autoComplete="new-image"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="position"
                    label="Member Position"
                    type="text"
                    id="position"
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
      <Header subtitle="List of Members" />
      <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !customerData}
          getRowId={(row) => row._id}
          rows={customerData || []}
          columns={columns}
        />
      </Box>
      <Box
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
      </Box>
    </Box>
  );
};

export default Member;
