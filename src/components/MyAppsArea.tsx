import React from "react";

function MyAppsArea() {
  return (
    <div className="bg-white bg-opacity-60 p-10 rounded-2xl shadow-lg">
      <div className="flex flex-col mb-6">
        <div className="text-xl font-bold">My Apps</div>
        <div className="text-sm text-gray-500">
          Explore the variety of useful apps
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-fit">
        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {/* Placeholder for Create Quiz */}
          <div className="flex flex-col items-center space-y-2">
            <img src="/Create_quiz.svg" />
            <div className="text-sm font-semibold">Create Quiz</div>
          </div>

          {/* Placeholder for Summarise PDF */}
          <div className="flex flex-col items-center space-y-2">
            <img src="/Summarize_pdf.svg" />
            <div className="text-sm font-semibold">Summarise PDF</div>
          </div>

          {/* Placeholder for Create PPT */}
          <div className="flex flex-col items-center space-y-2">
            <img src="/Create_ppt.svg" />

            <div className="text-sm font-semibold">Create PPT</div>
          </div>

          {/* Placeholder for Summarise Youtube Video */}
          <div className="flex flex-col items-center space-y-2">
            <img src="/Summarize_yt.svg" />

            <div className="text-sm font-semibold">Summarise Youtube Video</div>
          </div>

          {/* Placeholder for Create Flash Cards */}
          <div className="flex flex-col items-center justify-center space-y-2 col-span-1">
            <img src="/Create_flash_cards.svg" />

            <div className="text-sm font-semibold">Create Flash Cards</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAppsArea;
