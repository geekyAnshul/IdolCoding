
// import React from 'react'

// const Task = () => {
//   return (
//     <div>Task</div>
//   )
// }

// export default Task



// import React from 'react'
// import Comunity from '../../AdminDashboard/Community/Comunity'
// import { Plus } from 'lucide-react'

// const Task = () => {
//   return (
//     <div>
//       <div className="flex pl-64 justify-between items-center mb-4">
//           <div className="flex items-center gap-2">
//             <span className="text-gray-900 font-medium">Dashboard</span>
//             <span className="text-gray-400">/</span>
//             <span className="text-emerald-500">My Task</span>
//           </div>
//           <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
//             <Plus size={20} />
//             Add New
//           </button>
//         </div>
//       <Comunity/>

//     </div>
//   )
// }

// export default Task






// Import necessary React components
import React from 'react';
import { Plus } from 'lucide-react'
import { BsThreeDots } from "react-icons/bs";
import { PiClipboardText } from "react-icons/pi";
import { FaLink } from "react-icons/fa6";
import { LuRedo2 } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import "react-circular-progressbar/dist/styles.css";
import CreateTask from './CreateTask';
const Task = () => {
  // Example course progress data
  const courses = [
    { name: "C Programming and its Basics", progress: 80, color: "#61dafb" }, // Light blue for React
    { name: "Python and its tricks", progress: 60, color: "#68a063" }, // Green for Node.js
    { name: "Python and its tricks", progress: 40, color: "#4db33d" }, // Dark green for MongoDB
  ];
  return (

    <div>

      <div className="flex pl-64 justify-between items-center mb-4 pr-4">
        <div className="flex items-center gap-2 pl-4">
          <span className="text-gray-900 font-medium">Dashboard</span>
          <span className="text-gray-400">/</span>
          <span className="text-emerald-500">Community</span>
        </div>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
          <Plus size={20} />
          Add New
        </button>
      </div>



      <div className="flex flex-col lg:flex-row gap-4 p-4 lg:ml-64">

        {/* Assigned Tasks Section */}
        <div className=" rounded-3xl p-4 flex-1 border-2 border-[#C2B0B0]">
          <div className=' flex border-b border-[#C2B0B0] px-2'>
            <div className=''>
              <h2 className="text-xl font-bold mb-4">Assigned Task</h2>
              <p className="text-gray-500 mb-4">
                Find all the granular tasks that your mentor assigns you to achieve your planned goals! Each task has its own
                resources and notes that your mentor can use to help you.
              </p>
            </div>

            <button className="text-gray-600 text-2xl">
              <BsThreeDots />
            </button>

          </div>

          <div className="space-y-2 mt-4 ">
            {Array(5).fill(null).map((_, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border-[#C2B0B0] p-4 border rounded-lg shadow-sm flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">Task 01: Solve the calculation problem</h3>
                  <div className="flex gap-2 text-2xl">
                    <button
                      onClick={() => alert(`View task ${idx + 1}`)}
                      className="p-2 rounded-full text-green-600 hover:bg-green-200"
                    >
                      <PiClipboardText />
                    </button>
                    <button
                      onClick={() => alert(`Refresh task ${idx + 1}`)}
                      className="p-2 rounded-full text-green-600 hover:bg-green-200"
                    >
                      <FaLink />
                    </button>
                    <button
                      onClick={() => alert(`More options for task ${idx + 1}`)}
                      className="p-2 rounded-full text-green-600 hover:bg-green-200"
                    >
                      <LuRedo2 />
                    </button>
                  </div>

                  <p className="text-sm text-gray-600">Assigned by Mentor: <span className="text-green-500">Jane Copper</span></p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => alert(`View task ${idx + 1}`)}
                    className="p-2 text-2xl rounded-full text-green-600 hover:bg-green-200"
                  >
                    <HiOutlineDotsHorizontal />
                  </button>

                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-4 w-full lg:w-2/5 ">


          {/* Create Task and Top Performance */}
          <div>
            <CreateTask />

          </div>

        </div>
      </div>

    </div>
  );
};

export default Task;
