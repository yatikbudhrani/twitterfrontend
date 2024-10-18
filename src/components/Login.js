import React, { useState } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utilities/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userSlice";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (login) {
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}/login`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        dispatch(getUser(res?.data?.user));
        console.log(res);
        if (res.data.success) {
          navigate("/");
          toast.success(res.data.message);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    } else {
      try {
        const res = await axios.post(
          `${USER_API_ENDPOINT}/register`,
          { name, username, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
          setLogin(true);
        }
      } catch (error) {
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
  };

  const logintoggle = () => {
    setLogin(!login);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-evenly w-[80%]">
        <div>
          <img
            className="ml-5"
            width={"300px"}
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1711900195~exp=1711900795~hmac=bac301e018a84f7190c845c594ff40136484cfc110e814932537874fdbe40e4a"
            alt=""
          />
        </div>
        <div>
          <div className=" my-6">
            <h1 className="font-bold text-5xl">Happening now</h1>
          </div>
          <h1 className="text-2xl font-semibold text-left my-3">
            Login/Signup
          </h1>
          <form onSubmit={submitHandler} className=" flex flex-col">
            {!login && (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  className="outline-green-500 border border-gray-500 rounded-full my-3 px-3 h-8"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="@username"
                  className="outline-green-500 border border-gray-500 rounded-full my-3 px-3 h-8"
                />
              </>
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              className="outline-green-500 border border-gray-500 rounded-full my-3 px-3 h-8"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="outline-green-500 border border-gray-500 rounded-full my-3 px-3 h-8"
            />
            <button className="bg-blue-500 w-96 h-10 rounded-full my-5 text-white font-semibold text-lg">
              {login ? "Login" : "Signup"}
            </button>
            <p>
              {login ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                onClick={logintoggle}
                className="text-blue-600 text-sm underline cursor-pointer font-medium"
              >
                {login ? "Register" : "Login"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
