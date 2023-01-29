import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, pwreset } from "../../apiCalls.js";
import { loginStart } from "../../redux/userSlice";

const Login = () => {
  const [state, setState] = useState({ username: "", password: "" });
  const [message, setmessage] = useState("");
  const [pwReset, setPwReset] = useState(false);
  const { isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginStart());
    login(
      { username: state.username, password: state.password },
      dispatch,
      navigate
    );
  };

  const handlereset = (event) => {
    event.preventDefault();
    pwreset({ username: state.username }, setmessage);

    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  return (
    <div
      className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          "url('https://c4.wallpaperflare.com/wallpaper/946/557/290/ice-cream-food-colorful-wallpaper-preview.jpg')"
      }}
    >
      <div className="w-full p-6 m-auto bg-slate-50 rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-amber-500">
          {!pwReset ? "Sign in" : "Reset Password"}
          {error && (
            <p className="text-red-600 text-sm no-underline mt-3">{error}</p>
          )}
        </h1>
        {!pwReset && (
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                placeholder="Enter Username"
                variant="outlined"
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-amber-500 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <input
                placeholder="Enter password"
                type="password"
                value={state.password}
                onChange={handleChange}
                name="password"
                className="block w-full px-4 py-2 mt-2 text-amber-500 bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-amber-400 focus:outline-none focus:bg-amber-500 flex justify-center items-center"
              >
                {isLoading ? (
                  <>
                    Loading...
                    <HourglassBottomIcon />
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        )}
        {!pwReset && (
          <div className="text-black justify-center flex w-full mt-2">
            <p
              className="hover:text-amber-600 cursor-pointer text-gray-800"
              onClick={() => {
                setPwReset(true);
              }}
            >
              Forgot Password?
            </p>
          </div>
        )}
        {pwReset && (
          <form className="mt-6" onSubmit={handlereset}>
            <div className="mb-2">
              <input
                placeholder="Enter Username"
                variant="outlined"
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-amber-500 bg-white border rounded-md focus:border-amber-300 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600 flex justify-center items-center"
            >
              {isLoading ? (
                <>
                  Loading...
                  <HourglassBottomIcon />
                </>
              ) : (
                "Get Email!"
              )}
            </button>
            <p className="text-black">{message}</p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
