import React from "react";

function EnterClassroomArea() {
  return (
    <div className="bg-white bg-opacity-60 p-10 rounded-2xl shadow-lg">
      <div className="flex flex-col mb-6">
        <div className="text-xl font-bold">Classroom</div>
        <div className="text-sm text-gray-500">Connect to a Classroom</div>
      </div>
      <div className="p-6 bg-white rounded-xl shadow-sm">
        <div className="grid grid-cols-1 gap-4">
          <form className="flex flex-col space-y-2">
            <label htmlFor="classroom-id" className="font-medium">
              Enter Classroom ID
            </label>
            <div className="flex items-center space-x-2">
              <input
                id="classroom-id"
                type="text"
                className="flex-grow w-2/3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Classroom ID"
              />
              <button
                type="submit"
                className="w-1/3 p-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6 flex space-x-4">
          <div className="flex-1 p-4 text-base font-bold bg-gray-100 rounded-lg shadow-sm">
            Remote Controller
          </div>
          <div className="flex-1 p-4 text-base font-bold bg-gray-100 rounded-lg shadow-sm">
            Drop in File
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterClassroomArea;
