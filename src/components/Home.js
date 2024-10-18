import React, { useEffect } from "react";
import LeftSidebar from "./LeftSidebar";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import useGetTweets from "../hooks/useGetTweets";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);
  useGetTweets(user?._id);

  return (
    <div className="flex justify-between  w-[80%] mx-auto mt-2">
      <LeftSidebar />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Home;
