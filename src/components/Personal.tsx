import React from "react";
import Image from "next/image";
function Personal() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div>
          <Image width={32} height={32} src="/bell.svg" alt="" />
        </div>

        <div>
          <Image width={32} height={32} src="/bell.svg" alt="" />
        </div>

        <div className="flex items-center justify-center text-gray-500 text-2xl">
          |
        </div>

        <div className="flex flex-row items-center">
          <Image
            width={32} height={32} src="/Screenshot_2024-08-17_at_8.13.58_AM-removebg-preview 3.png"
            alt=""
          />
          {/* <span className="w-12 h-12 bg-black rounded-full block mr-2"></span> */}
          <div className="flex flex-col">
            <div className="text-black text-base font-bold">Your Name</div>
            <div className="text-xs text-gray-800">Your role</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
