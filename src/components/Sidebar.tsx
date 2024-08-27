import React from "react";
import home from "../../public/home.svg";
import Image from "next/image";
function Sidebar() {
  return (
    <div className="bg-white h-full border-r border-gray-200 flex flex-col">
      <div className="flex-shrink-0 pt-10">
        <h2 className="text-xs font-semibold text-gray-500 mb-2 pl-4 ">
          OVERVIEW
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="space-y-1 px-4">
          <a
            href="/"
            className="flex items-center py-2 text-gray-900 font-semibold"
          >
            <div className="w-5 h-5 mr-3">
              <Image width={32} height={32} src="/home.svg" alt="" />
            </div>
            Home
          </a>
          <a
            href="aiTools"
            className="flex items-center py-2 text-gray-900 font-semibold"
          >
            <div className="w-5 h-5 mr-3">
              <Image width={32} height={32} src="/add_circle.svg" alt="" />
            </div>
            AI Tools
          </a>
          <a
            href="aiChatbots"
            className="flex items-center py-2 text-gray-900 font-semibold"
          >
            <div className="w-5 h-5 mr-3">
              <Image width={32} height={32} src="/Message square.svg" alt="" />
            </div>
            AI Chatbot
          </a>
          <a
            href="whiteboards"
            className="flex items-center py-2 text-gray-900 font-semibold"
          >
            <div className="w-5 h-5 mr-3">
              <Image width={32} height={32} src="/Edit.svg" alt="" />
            </div>
            Whiteboards
          </a>
          <a
            href="files"
            className="flex items-center py-2 text-gray-900 font-semibold"
          >
            <div className="w-5 h-5 mr-3">
              <Image width={32} height={32} src="/Folder.svg" alt="" />
            </div>
            Files
          </a>
        </nav>
      </div>
      <div className="flex-shrink-0 p-4 border-t  border-gray-200">
        <h2 className="text-xs font-semibold text-gray-500 mb-3">SETTINGS</h2>
        <a
          href="upgrade"
          className="flex items-center py-2 text-gray-900 font-semibold"
        >
          <div className="w-5 h-5 mr-3">
            <Image width={32} height={32} src="/Arrow up-circle.svg" alt="" />
          </div>
          Upgrade Plan
        </a>
        <a href="logout" className="flex items-center py-2 text-red-600">
          <div className="w-5 h-5 mr-3">
            <Image width={32} height={32} src="/Log out.svg" alt="" />
          </div>
          Log Out
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
