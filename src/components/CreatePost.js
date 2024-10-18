import React, { useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { PiSmiley } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_ENDPOINT } from "../utilities/constant";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { getRefresh } from "../redux/tweetSlice";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${TWEET_API_ENDPOINT}/create`,
        { description, id: user?._id },
        {
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setDescription("");
  };

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <div className=" w-full cursor-pointer hover:bg-gray-200 rounded-lg">
          <h3 className="font-semibold">For you</h3>
        </div>
        <div className=" w-full cursor-pointer hover:bg-gray-200 rounded-lg">
          <h3>Following</h3>
        </div>
      </div>
      <div>
        <div className="flex items-center mt-4">
          <Avatar
            src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4"
            size="40"
            round={true}
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-lg w-full outline-none border-none ml-2"
            type="text"
            placeholder="What is happening?"
          />
        </div>
        <div className="flex items-center justify-between my-4 border-b border-gray-300 p-1">
          <div className="flex">
            <PiSmiley className=" mx-8" />
            <CiLocationOn className="mx-8" />
            <CiVideoOn className="mx-8" />
            <CiImageOn className="mx-8" />
          </div>
          <button
            onClick={submitHandler}
            className="bg-blue-500 rounded-full w-16 h-8 text-white"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
