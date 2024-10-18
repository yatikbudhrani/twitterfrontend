import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_ENDPOINT } from "../utilities/constant";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getUser, getMyProfile, getOtherUsers } from "../redux/userSlice";

const LeftSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_ENDPOINT}/logout`);
      dispatch(getUser(null));
      dispatch(getMyProfile(null));
      dispatch(getOtherUsers(null));
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[20%] mt-2">
      <div>
        <div>
          <img
            className="w-12 ml-2"
            src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?w=740&t=st=1711900195~exp=1711900795~hmac=bac301e018a84f7190c845c594ff40136484cfc110e814932537874fdbe40e4a"
            alt=" twitter-logo"
          />
        </div>
        <div className="mt-4 mb-4">
          <Link to="/">
            <div className="flex items-center mb-4 hover:bg-gray-100 cursor-pointer duration-300">
              <MdHomeFilled />
              <h3 className="font-bold text-lg ml-2">Home</h3>
            </div>
          </Link>
          <div className="flex items-center mb-4 hover:bg-gray-100 cursor-pointer duration-300">
            <IoIosSearch />
            <h3 className=" text-lg ml-2">Explore</h3>
          </div>
          <div className="flex items-center mb-4 hover:bg-gray-100 cursor-pointer duration-300">
            <FiMessageCircle />
            <h3 className=" text-lg ml-2">Messages</h3>
          </div>
          <div className="flex items-center mb-4 hover:bg-gray-100 cursor-pointer duration-300">
            <IoIosNotificationsOutline />
            <h3 className=" text-lg ml-2">Notifications</h3>
          </div>
          <Link to="/profile">
            <div className="flex items-center mb-4 hover:bg-gray-100 cursor-pointer duration-300">
              <CgProfile />
              <h3 className=" text-lg ml-2">Profile</h3>
            </div>
          </Link>
          <div
            onClick={logoutHandler}
            className="flex items-center mb-4 hover:bg-gray-100 cursor-pointer duration-300"
          >
            <AiOutlineLogout />
            <h3 className="font-bold text-red-700 text-lg ml-2">Logout</h3>
          </div>
          <button className="w-48 h-10 text-white font-semibold bg-blue-500 rounded-3xl">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
