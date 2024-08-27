import React from "react";
import Image from "next/image";
function EnterClassroomArea() {
  return (
    <div className="bg-white bg-opacity-60 p-6 rounded-2xl shadow-lg">
      <div className="flex flex-col mb-4">
        <div className="text-lg font-bold">Classroom</div>
        <div className="text-xs text-gray-500">Connect to a Classroom</div>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-sm">
        <div className="grid grid-cols-1 gap-4">
          <form className="flex flex-col space-y-2">
            <label htmlFor="classroom-id" className="font-medium text-sm">
              Enter Classroom ID
            </label>
            <div className="flex items-center space-x-2">
              <input
                id="classroom-id"
                type="text"
                className="flex-grow w-2/3 p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Classroom ID"
              />
              <button
                type="submit"
                className="w-1/3 p-2 bg-red-500 text-white rounded text-sm hover:bg-red-600"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
        <div className="mt-4 flex space-x-4">
          <div className="flex-1 p-3 text-xs font-semibold bg-gray-100 rounded-lg shadow-sm flex items-center">
            <Image
            width={32} height={32}
              src="/Remote_controller.svg"
              alt="Remote Controller"
              className="w-8 h-8 mr-2"
            />
            <div>Remote Controller</div>
          </div>
          <div className="flex-1 p-3 text-xs font-semibold bg-gray-100 rounded-lg shadow-sm flex items-center">
            <Image
            width={32} height={32}
              src="/Drop_in_file.svg"
              alt="Drop in file"
              className="w-8 h-8 mr-2"
            />
            <div>Drop in file</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterClassroomArea;
