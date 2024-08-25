import React from "react";

function ChatHistoryArea() {
  return (
    <div>
      <div className="bg-white bg-opacity-60 p-6 rounded-2xl shadow-lg">
        <p className=" font-bold text-lg">Chat History</p>
        <div className="bg-white p-4 rounded-lg shadow-lg w-fit">
          <div className="grid grid-cols-4 gap-4 justify-items-center">
            <button className=" bg-gray-200 bg-opacity-60 rounded-xl">
              + New Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatHistoryArea;
