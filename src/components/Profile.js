import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import Avatar from "react-avatar";
import useGetProfile from "../hooks/useGetProfile";
import { useSelector } from "react-redux";
import Tweets from "./Tweets";

const Profile = () => {
  const { user, profile, tweets } = useSelector((store) => store.user);
  useGetProfile(user?._id);

  return (
    <div className="w-[50%] mt-2">
      <div className="">
        <div className="flex items-center">
          <div>
            <IoMdArrowBack className="text-2xl text-gray-800" />
          </div>
          <div>
            <p className="text-sm text-black font-semibold">
              {profile?.username}
            </p>
            <p className="text-sm text-gray-400">0 posts</p>
          </div>
        </div>
        <img
          src="https://media.licdn.com/dms/image/D5616AQH7JuGR40W2pQ/profile-displaybackgroundimage-shrink_350_1400/0/1709544550781?e=1717632000&v=beta&t=ktUGSeQm15x69LnAQgcZ19YwNVNCYP6kFINXpunX59o"
          alt=""
        />
        <div className=" absolute top-36 ml-2 border-4 border-white rounded-full">
          <Avatar
            src="https://avatars.githubusercontent.com/u/102051680?s=400&u=2b436634eb2c3a96c5d1d80f28001895558f22c5&v=4"
            size="90"
            round={true}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4 mr-4">
        <button className="outline border-blue-600 text-blue-500 rounded-full text-xl">
          <BsThreeDots />
        </button>
      </div>
      <div className="flex flex-col justify-start text-left mt-3 mx-3">
        <h1 className="font-bold text-3xl">{profile?.name}</h1>
        <p className="text-sm text-gray-500 font-medium">
          @{profile?.username}
        </p>
        <p className="text-sm mt-4">
          Passionate web developer turning lines of code into captivating
          digital experiences. HTML, CSS, JavaScript React enthusiast. Building
          the web, one pixel at a time. #CodeLife 🖥️💻✨
        </p>
        <p className="text-gray-500 flex items-center mt-2 text-sm">
          <span>
            <TbBrandGoogleMaps />
          </span>
          Haridwar
        </p>
        <p className="text-gray-500 flex items-center mt-2 text-sm">
          <span className="mr-2">
            <SlCalender />
          </span>
          joined June 2016
        </p>
      </div>
      <div className="flex">
        <h3 className="my-4 mx-2 font-semibold">
          0 <span className="text-gray-500"> followers</span>
        </h3>
        <h3 className="my-4 mx-2 font-semibold">
          0 <span className="text-gray-500"> following</span>
        </h3>
      </div>
      <div className="flex justify-evenly border-b border-gray-200 my-5">
        <h3 className="w-full font-semibold rounded-lg text-blue-600 hover:bg-gray-200 border-b border-blue-600">
          Tweets
        </h3>
        <h3 className="w-full rounded-lg font-semibold text-gray-500 hover:bg-gray-200">
          Tweets & replies
        </h3>
        <h3 className="w-full font-semibold rounded-lg  text-gray-500 hover:bg-gray-200">
          Media
        </h3>
        <h3 className="w-full font-semibold rounded-lg  text-gray-500 hover:bg-gray-200">
          Likes
        </h3>
      </div>
      <div className="border-b border-gray-200 my-5">
        {tweets?.map((tweet) => (
          <Tweets key={tweet?._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
