import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess, logout } from "./redux/userSlice";

import axios from "axios";
import storage from "redux-persist/lib/storage";

/* export const LoginUser = async ({ username, password }, dispatch) => {
  try {
    setTimeout(async () => {
      const res = await axios.post("auth/signin", { username, password });
      dispatch(loginSuccess(res.data));
    }, 2000);
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const Logout = async (dispatch) => {
  try {
    const res = await axios.post("auth/logout");
    console.log(res.data);
    dispatch(logout());
  } catch (err) {
    console.log(err);
  }
};
 */
export const getProducts = async (setProducts) => {
  try {
    const res = await axios.get("product/all/products");
    setProducts(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getEvents = async (setEvents) => {
  try {
    const res = await axios.get("event/all/events");
    setEvents(res.data);
  } catch (err) {
    console.log(err);
  }
};

export const getAllMembers = async (setMembers) => {
  try {
    const res = await axios.get("users/all/users");
    let r = [];
    res.data.forEach((element) => {
      if (element.type === "member") r.push(element);
    });

    setMembers(r);
  } catch (error) {
    console.log(error);
  }
};

export const postContactUs = async (data) => {
  try {
    console.log(data);
    await axios.post("contact/create", data);
  } catch (error) {
    console.log(error);
  }
};

export const addParticipant = async ({ formData, id }) => {
  try {
    await axios.post(`event/addparticipant/${id}`, formData);
  } catch (error) {
    console.log(error);
  }
};

export const addSponsors = async ({ formData, id }) => {
  try {
    await axios.post(`event/addsponsor/${id}`, formData);
  } catch (error) {
    console.log(error);
  }
};
