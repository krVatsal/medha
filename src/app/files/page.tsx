import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <h1 className="pt-8 text-black text-3xl font-bold">Files</h1>
          <div className="pt-2 text-[#696969]">Manage all the files</div>
        </div>
        <div className="flex items-center">
        <Image
      width={32} height={32} alt=""
      src="/Search.svg"
    />
                {/* <img className="relative z-10 left-48" src="/Search.svg" width={32} height={32} alt="" /> */}
          <input
            className="h-[40px] w-[215px] rounded-full placeholder-gray-900 pl-4 "
            type="text"
            placeholder="Search"
            style={{ textAlign: "left", color: "black"}}
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
         
        </div>

      </div>
      <div className=" relative pt-16 pl-10">
      <Image
      width={32} height={32} alt=""
      src="/Plus circle.svg"
    />
        {/* <img  className="absolute pl-4 pt-5" src="/Plus circle.svg" width={32} height={32} alt="" /> */}
        <a href="#">
        <button className="h-[65px] w-[267px] bg-white rounded-2xl font-bold">Upload a new file</button>
        </a>
        </div>
    </div>

 
  );
};

export default page;
