import React from "react";
import EnterClassroomArea from "@/components/EnterClassroomArea";
import Image from "next/image";
import MyAppsArea from "@/components/MyAppsArea";
import ChatHistoryArea from "@/components/ChatHistoryArea";
import MedhaTextArea from "@/components/MedhaTextArea";
function Chatbot() {
  return (
    <div>
      <div className="p-8 space-y-6">
        {/* Greeting Section */}

        <div className="text-2xl font-bold">AI Chatbot</div>
        <div className="text-lg text-gray-500">
          Chat with AI Chatbot for needs
        </div>
        <div className="grid grid-cols-3 gap-5">
          <div className=" col-span-1">
            <ChatHistoryArea />
          </div>
          <div className=" col-span-2">
            <MedhaTextArea />
          </div>
        </div>
        {/* Main Content Section */}

        {/* Right Column: My Apps Area */}
      </div>
    </div>
  );
}

export default Chatbot;
