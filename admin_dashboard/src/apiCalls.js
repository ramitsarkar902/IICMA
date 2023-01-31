import axios from "axios";

import {
  adminFetchSuccess,
  customerFetchSuccess,
  fetchFailure,
  fetchStart,
  loginFailure,
  loginSuccess,
  newsFetchSuccess,
  productFetchSuccess,
  salesFetchSuccess,
  userLogin,
} from "./redux/userSlice";

//  main url+ https://iicmaserver-production.up.railway.app
/* const base_url = "http://localhost:9000/api/"; */

export const getUser = async (dispatch, userId) => {
  try {
    const user = await axios.post(`auth/signin/`, {
      username: "hawk",
      password: "welcome",
    });
    dispatch(userLogin(user.data));
  } catch (err) {
    dispatch(loginFailure(err.message));
  }
};

export const addProduct = async ({ title, file, desc, userId }) => {
  try {
    await axios.post(
      `upload/product/${userId}`,
      {
        title: title,
        desc: desc,
        file: file,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async (dispatch) => {
  try {
    dispatch(fetchStart());
    setTimeout(async () => {
      const res = await axios.get(`product/all/products`);
      dispatch(productFetchSuccess(res.data));
    }, 2000);
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};

export const deleteProduct = async ({ userId, id }) => {
  try {
    await axios.delete(`product/${userId}`, { data: { id: id } });
  } catch (error) {
    console.log(error);
  }
};

export const getCustomers = async (dispatch) => {
  try {
    dispatch(fetchStart());
    setTimeout(async () => {
      const res = await axios.get(`users/all/members`);
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
      const res = await axios.get(`sales`);
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
      const res = await axios.get(`management/admins`);
      dispatch(adminFetchSuccess(res.data));
    }, 2000);
  } catch (error) {
    dispatch(fetchFailure(error.message));
  }
};

export const addMember = async ({ username, email, name, img }) => {
  try {
    await axios.post(`users/add/635846fdc9c208c9445c7c43`, {
      username: username,
      email: email,
      name: name,
      img: img,
    });
  } catch (error) {
    dispatchEvent(fetchFailure(error.message));
  }
};

export const deleteMember = async ({ username }) => {
  try {
    await axios.post(`users/635846fdc9c208c9445c7c43`, {
      username: username,
    });
  } catch (error) {
    dispatchEvent(fetchFailure(error.message));
  }
};

export const getNews = async (dispatch) => {
  console.log("start");
  try {
    dispatch(fetchStart());
    setTimeout(async () => {
      const res = await axios.get(`news/all/news`);
      dispatch(newsFetchSuccess(res.data));
    }, 2000);
  } catch (error) {
    dispatchEvent(fetchFailure(error.message));
  }
};

export const addNews = async ({ img, desc, title }) => {
  try {
    await axios.post(`news/create/635846fdc9c208c9445c7c43`, {
      title: title,
      desc: desc,
      img: img,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteNews = async ({ id }) => {
  try {
    await axios.post(`news/${id}`, {
      id: "635846fdc9c208c9445c7c43",
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const login = async ({ username, password }, dispatch, navigate) => {
  setTimeout(async () => {
    try {
      const res = await axios.post(`auth/signin`, {
        username: username,
        password: password,
      });
      if (res.status === 200) {
        dispatch(loginSuccess(res.data));
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      dispatch(loginFailure(err.response.data));
    }
  }, 2000);
};

export const pwreset = async ({ username }, setmessage) => {
  try {
    const res = await axios.post(`auth/forgotpassword`, {
      username: username,
    });

    setmessage(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const updatePassword = async (
  { username, userid, currentpassword, newpassword },
  setMessage
) => {
  try {
    const res = await axios.put(`users/${userid}`, {
      username: username,
      currentpassword: currentpassword,
      newpassword: newpassword,
    });
    if (res.status === 200) {
      setMessage("Successfully Changed Password");
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateUserdetails = async (
  { username, userid, password, name, email, phonenumber },
  setuserMessage
) => {
  try {
    const res = await axios.put(`users/${userid}`, {
      username: username,
      password: password,
      name: name,
      email: email,
      phoneNo: phonenumber,
    });
    if (res.status === 200) {
      console.log("Successfully changed details");
      setuserMessage("Successfully Updated Details");
    }
  } catch (err) {
    console.log(err);
  }
};
