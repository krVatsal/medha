import React from "react";
import home from "../../public/home.svg";
function Sidebar() {
  return (
    <div className="bg-white h-full border-r border-gray-200 flex flex-col">
      <div className="flex-shrink-0 p-4">
        <h2 className="text-xs font-semibold text-gray-500 mb-4">OVERVIEW</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <nav className="space-y-1 px-4">
          <a href="#" className="flex items-center py-2 text-gray-700">
            <div className="w-5 h-5 mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 18.3334V10.0001H12.5V18.3334M2.5 7.50008L10 1.66675L17.5 7.50008V16.6667C17.5 17.1088 17.3244 17.5327 17.0118 17.8453C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8453C2.67559 17.5327 2.5 17.1088 2.5 16.6667V7.50008Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            Home
          </a>
          <a href="#" className="flex items-center py-2 text-gray-700">
            <div className="w-5 h-5 mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 18.3334V10.0001H12.5V18.3334M2.5 7.50008L10 1.66675L17.5 7.50008V16.6667C17.5 17.1088 17.3244 17.5327 17.0118 17.8453C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8453C2.67559 17.5327 2.5 17.1088 2.5 16.6667V7.50008Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            AI Tools
          </a>
          <a href="#" className="flex items-center py-2 text-gray-700">
            <div className="w-5 h-5 mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 18.3334V10.0001H12.5V18.3334M2.5 7.50008L10 1.66675L17.5 7.50008V16.6667C17.5 17.1088 17.3244 17.5327 17.0118 17.8453C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8453C2.67559 17.5327 2.5 17.1088 2.5 16.6667V7.50008Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            AI Chatbot
          </a>
          <a
            href="#"
            className="flex items-center py-2 text-gray-900 font-semibold"
          >
            <div className="w-5 h-5 mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 18.3334V10.0001H12.5V18.3334M2.5 7.50008L10 1.66675L17.5 7.50008V16.6667C17.5 17.1088 17.3244 17.5327 17.0118 17.8453C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8453C2.67559 17.5327 2.5 17.1088 2.5 16.6667V7.50008Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            Whiteboards
          </a>
          <a href="#" className="flex items-center py-2 text-gray-700">
            <div className="w-5 h-5 mr-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 18.3334V10.0001H12.5V18.3334M2.5 7.50008L10 1.66675L17.5 7.50008V16.6667C17.5 17.1088 17.3244 17.5327 17.0118 17.8453C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8453C2.67559 17.5327 2.5 17.1088 2.5 16.6667V7.50008Z"
                  stroke="#1E1E1E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            Files
          </a>
        </nav>
      </div>
      <div className="flex-shrink-0 p-4 border-t border-gray-200">
        <h2 className="text-xs font-semibold text-gray-500 mb-4">SETTINGS</h2>
        <a href="#" className="flex items-center py-2 text-gray-700">
          <div className="w-5 h-5 mr-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 18.3334V10.0001H12.5V18.3334M2.5 7.50008L10 1.66675L17.5 7.50008V16.6667C17.5 17.1088 17.3244 17.5327 17.0118 17.8453C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8453C2.67559 17.5327 2.5 17.1088 2.5 16.6667V7.50008Z"
                stroke="#1E1E1E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Upgrade Plan
        </a>
        <a href="#" className="flex items-center py-2 text-red-600">
          <div className="w-5 h-5 mr-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 18.3334V10.0001H12.5V18.3334M2.5 7.50008L10 1.66675L17.5 7.50008V16.6667C17.5 17.1088 17.3244 17.5327 17.0118 17.8453C16.6993 18.1578 16.2754 18.3334 15.8333 18.3334H4.16667C3.72464 18.3334 3.30072 18.1578 2.98816 17.8453C2.67559 17.5327 2.5 17.1088 2.5 16.6667V7.50008Z"
                stroke="#1E1E1E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          Log Out
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
