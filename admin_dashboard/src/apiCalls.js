import axios from "axios";

import {
  adminFetchSuccess,
  customerFetchSuccess,
  fetchFailure,
  fetchStart,
  loginFailure,
  newsFetchSuccess,
  productFetchSuccess,
  salesFetchSuccess,
  userLogin,
} from "./redux/userSlice";

export const getUser = async (dispatch, userId) => {
  try {
    const user = await axios.post(`http://localhost:9000/api/auth/signin/`, {
      username: "hawk",
      password: "welcome",
    });

    dispatch(userLogin(user.data));
  } catch (err) {
    dispatch(loginFailure(err.message));
  }
};

export const getProducts = async (dispatch) => {
  try {
    dispatch(fetchStart());
    setTimeout(async () => {
      const res = await axios.get("http://localhost:10000/api/client/products");
      dispatch(productFetchSuccess(res.data));
    }, 2000);
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};

export const getCustomers = async (dispatch) => {
  try {
    dispatch(fetchStart());
    setTimeout(async () => {
      const res = await axios.get(
        "http://localhost:9000/api/users/all/members"
      );
      dispatch(customerFetchSuccess(res.data));
    }, 2000);
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};

export const getSales = async (dispatch) => {
  try {
    dispatch(fetchStart());
    setTimeout(async () => {
      const res = await axios.get("http://localhost:10000/api/sales");
      dispatch(salesFetchSuccess(res.data));
    }, 2000);
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};

export const getAdmins = async (dispatch) => {
  try {
    dispatch(fetchStart());
    setTimeout(async () => {
      const res = await axios.get(
        "http://localhost:10000/api/management/admins"
      );
      dispatch(adminFetchSuccess(res.data));
    }, 2000);
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};

export const addMember = async ({ username, email, name, img }) => {
  try {
    await axios.post(
      `http://localhost:9000/api/users/add/635846fdc9c208c9445c7c43`,
      {
        username: username,
        email: email,
        name: name,
        img: img,
      }
    );
  } catch (error) {
    dispatchEvent(fetchFailure(error.message));
  }
};

export const deleteMember = async ({ username }) => {
  try {
    await axios.post(
      `http://localhost:9000/api/users/635846fdc9c208c9445c7c43`,
      {
        username: username,
      }
    );
  } catch (error) {
    dispatchEvent(fetchFailure(error.message));
  }
};

export const getNews = async (dispatch) => {
  console.log("start");
  try {
    dispatch(fetchStart());
    setTimeout(async () => {
      const res = await axios.get(`http://localhost:9000/api/news/all/news`);
      dispatch(newsFetchSuccess(res.data));
    }, 2000);
  } catch (error) {
    dispatchEvent(fetchFailure(error.message));
  }
};

export const addNews = async ({ img, desc, title }) => {
  try {
    await axios.post(
      `http://localhost:9000/api/news/create/635846fdc9c208c9445c7c43`,
      {
        title: title,
        desc: desc,
        img: img,
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteNews = async ({ id }) => {
  try {
    await axios.delete(`http://localhost:9000/api/news/${id}`, {
      id: "635846fdc9c208c9445c7c43",
    });
  } catch (error) {
    console.log(error.message);
  }
};
