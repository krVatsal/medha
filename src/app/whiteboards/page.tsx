import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <h1 className="pt-8 text-black text-3xl font-bold">Whiteboards</h1>
          <div className="pt-2 text-[#696969]">Create a whiteboard for you</div>
        </div>
        <div className="flex items-center">
          <Image className="relative z-10 left-48" src="/Search.svg" width={32} height={32} alt="" />
          <input
            className="h-[40px] w-[215px] rounded-full placeholder-gray-900 pl-4 "
            type="text"
            placeholder="Search"
            style={{ textAlign: "left", color: "black" }}
          />

          <select className="h-[40px] w-[156px] rounded-full ml-4 pl-4 placeholder-gray-900">
            <option value="" disabled selected>
              Last Modified
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <select className="h-[40px] w-[106px] rounded-full ml-4 pl-4 placeholder-gray-900">
            <option value="" disabled selected>
              All Files
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
          <div className="relative">
            <Image className="absolute pl-5 pt-2.5" src="/Plus.svg" width={32} height={32} alt="" />
            <button className="h-[40px] w-[155px] rounded-full ml-4 bg-white text-gray-900">
              Create Folder
            </button>
          </div>
        </div>
      </div>
      <div className=" relative pt-16 pl-10">
        <Image className="absolute pl-4 pt-5" src="/Plus circle.svg" width={32} height={32} alt="" />
        <a href="/whiteboard">
          <button className="h-[65px] w-[267px] bg-white rounded-2xl font-bold">
            New Whiteboard
          </button>
        </a>
      </div>
    </div>
  );
};

export default page;
