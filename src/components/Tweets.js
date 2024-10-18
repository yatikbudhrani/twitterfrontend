import React from "react";
import Avatar from "react-avatar";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import useGetProfile from "../hooks/useGetProfile";
import { useSelector } from "react-redux";

const Tweets = ({ tweet }) => {
  const { user, profile } = useSelector((store) => store.user);
  useGetProfile(user?._id);

  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4">
          <Avatar
            src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4"
            size="30"
            round={true}
          />
          <div className="ml-2">
            <div className="flex items-center">
              <h3 className="font-semibold">{profile?.name}</h3>
              <p className="text-gray-500 text-sm ml-1">@{profile?.username}</p>
            </div>
            <div className="text-left my-2">
              <p>{tweet?.description}</p>
            </div>
            <div className="flex justify-evenly mt-3">
              <p className="flex items-center ml-5 mr-14">
                <AiOutlineLike /> 0
              </p>
              <p className="flex items-center mx-14">
                <FaRegCommentAlt /> 0
              </p>
              <p className="flex items-center mx-14">
                <FaRegShareSquare /> 0
              </p>
              <p className="flex items-center ml-14 mr-5">
                <FaRegBookmark /> 0
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweets;
