import Image from "next/image";
import EnterClassroomArea from "@/components/EnterClassroomArea";
import MyAppsArea from "@/components/MyAppsArea";

export default function Home() {
  return (
    <div className="p-8 space-y-6">
      {/* Greeting Section */}
      <div className="text-2xl font-bold">Good Morning Aditya!</div>
      <div className="text-lg text-gray-500">
        Let&apos;s make this day productive
      </div>

      {/* Main Content Section */}
      <div className="flex space-x-5">
        {/* Left Column: Classroom and Assignment Buttons */}
        <div className="flex-1 flex flex-col space-y-5">
          <EnterClassroomArea />

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 text-base font-bold rounded-lg shadow-sm text-center flex flex-col items-center">
              <Image
                src="/Create_assignment.svg"
                width={32}
                height={32}
                alt="Create Assignment"
                className="mb-2" // Margin bottom to create space between image and text
              />
              <div className="flex-grow flex items-end">Create Assignment</div>
            </div>
            <div className="bg-white p-4 text-base font-bold rounded-lg shadow-sm text-center flex flex-col items-center">
              <Image
                src="/Create_lesson.svg"
                width={32}
                height={32}
                alt="Create Lesson"
                className="mb-2" // Margin bottom to create space between image and text
              />
              <div className="flex-grow flex items-end">Create lesson</div>
            </div>
            <div className="bg-white p-4 text-base font-bold rounded-lg shadow-sm text-center flex flex-col items-center">
              <Image
                src="/Create_homework.svg"
                width={32}
                height={32}
                alt="Create Homework"
                className="mb-2" // Margin bottom to create space between image and text
              />
              <div className="flex-grow flex items-end">Create homework</div>
            </div>
          </div>
        </div>

        {/* Right Column: My Apps Area */}
        <div className="flex-1 flex items-start justify-center">
          <MyAppsArea />
        </div>
      </div>
    </div>
  );
}
