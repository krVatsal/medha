import Image from "next/image";
import EnterClassroomArea from "@/components/EnterClassroomArea";
import MyAppsArea from "@/components/MyAppsArea";

export default function Home() {
  return (
    <div className="p-10 space-y-5">
      {/* Greeting Section */}
      <div className="text-3xl font-bold">Good Morning Aditya!</div>
      <div className="text-xl text-gray-500">
        Let's make this day productive
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-2 gap-5">
        {/* Left Column: Classroom and Assignment Buttons */}
        <div className="flex flex-col space-y-5">
          <EnterClassroomArea />

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 text-base font-bold rounded-lg shadow-sm text-center flex flex-col items-center">
              <Image
                src="/Create_assignment.svg"
                width={48}
                height={48}
                alt="Create Assignment"
              />
              <div>Create Assignment</div>
            </div>
            <div className="bg-white p-4 text-base font-bold rounded-lg shadow-sm text-center flex flex-col items-center">
              <Image
                src="/Create_lesson.svg"
                width={48}
                height={48}
                alt="Create Lesson"
              />
              <div>Create lesson</div>
            </div>
            <div className="bg-white p-4 text-base font-bold rounded-lg shadow-sm text-center flex flex-col items-center">
              <Image
                src="/Create_homework.svg"
                width={48}
                height={48}
                alt="Create Homework"
              />
              <div>Create homework</div>
            </div>
          </div>
        </div>

        {/* Right Column: My Apps Area */}
        <div className="flex items-center justify-center">
          <MyAppsArea />
        </div>
      </div>
    </div>
  );
}
