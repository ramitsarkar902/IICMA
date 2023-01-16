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
import { addNews, deleteNews, getNews } from "../../apiCalls";
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

const News = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { newsData, isLoading } = useSelector((state) => state.user);

  if (!newsData) {
    getNews(dispatch);
  }

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "title",
      headerName: "Title",
      flex: 0.5,
    },
    {
      field: "desc",
      headerName: "Desc",
      flex: 1,
    },
    {
      field: "createdBy",
      headerName: "CreatedBy",
      flex: 0.5,
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addNews({
      desc: data.get("desc"),
      title: data.get("title"),
      img: data.get("image"),
    });
    setTimeout(() => {
      getNews(dispatch);
    }, 2000);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    deleteNews({
      id: data.get("id"),
    });

    setTimeout(() => {
      getNews(dispatch);
    }, 2000);
  };

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="NEWS" />
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
            <Header subtitle="Create a News" />
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-title"
                    name="title"
                    required
                    fullWidth
                    id="title"
                    type="text"
                    label="Title"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="desc"
                    label="Description Of News"
                    name="desc"
                    type="text"
                    autoComplete="text"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="image"
                    label="News Image Url"
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
      <Header subtitle="List of News" />
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
          loading={isLoading || !newsData}
          getRowId={(row) => row._id}
          rows={newsData || []}
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
        <Header subtitle="Delete a News" />
        <Box component="form" noValidate onSubmit={handleDelete} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="id"
                label="Id"
                type="text"
                id="id"
                autoComplete="new-text"
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

export default News;
