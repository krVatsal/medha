import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <h1 className="pt-8 text-black text-3xl font-bold">AI Tools</h1>
          <div className="pt-2 text-[#696969]">
            A small description of AI Tools
          </div>
        </div>
        <div className="flex items-center">
        <Image
        width={32} height={32}
      alt=""
      src="/Search.svg"
    />
          {/* <img className="relative z-10 left-60" src="/Search.svg" alt="" /> */}
          <input
            className="h-[40px] w-[255px] rounded-full placeholder-gray-900 pl-4 "
            type="text"
            placeholder="Search"
            style={{ textAlign: "left", color: "black" }}
          />

          <select className="h-[40px] w-[156px] rounded-full ml-4 pl-4 placeholder-gray-900">
            <option value="" disabled selected>
              Most Popular
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default page;
