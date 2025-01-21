// import React from 'react'

// const CreateTask = () => {
//   return (
//     <div>CreateTask</div>
//   )
// }

// export default CreateTask


import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";

const performers = [
    { name: "Wade Warren", badge: "Gold Badge", progress: 80, color: "#61dafb", imageUrl: "https://th.bing.com/th/id/OIP.6AzOnlebR9zrmy6v-RAHQgHaKl?w=208&h=297&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Wade Warren", badge: "Silver Badge", progress: 90, color: "#68a063", imageUrl: "https://th.bing.com/th/id/OIP.6AzOnlebR9zrmy6v-RAHQgHaKl?w=208&h=297&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
    { name: "Wade Warren", badge: "Gold Badge", progress: 60, color: "#4db33d", imageUrl: "https://th.bing.com/th/id/OIP.6AzOnlebR9zrmy6v-RAHQgHaKl?w=208&h=297&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
];

const CreateTask = () => {
    return (
        <div className=" min-h-screen space-y-10">
            {/* Create New Task Section */}
            <div className="bg-white p-8 rounded-3xl max-w-md mx-auto border-2 border-[#C2B0B0]">
                <div className='flex justify-between items-center text-3xl'>
                    <h2 className=" font-semibold mb-4">Create New Task</h2>
                    <button>
                        <BsThreeDotsVertical className='mb-4 text-2xl' />
                    </button>
                </div>
                <div className="space-y-6">
                    <select className="w-full p-3 border border-green-300 rounded-lg" placeholder="Mentee List">
                        <option>Select Mentee</option>
                        <option>Mentee 1</option>
                        <option>Mentee 2</option>
                    </select>
                    <select className="w-full p-3 border border-green-300 rounded-lg" placeholder="Problem Statements">
                        <option>Select Problem Statement</option>
                        <option>Problem 1</option>
                        <option>Problem 2</option>
                    </select>
                    <div className="flex  space-x-4">
                        <button className="flex  p-3 px-10 border border-green-300 rounded-lg items-center justify-center">
                            <GrAttachment className=' items-center justify-center '/>
                            <h1>Attach files</h1>
                        </button>
                        <div className="flex space-x-4 bg-black rounded-lg">
                            <button className="p-2 text-white border-gray-300 rounded-lg">🎤</button>
                            <button className="p-2 text-white border-gray-300 rounded-lg">📷</button>
                            <button className="p-2 text-white border-gray-300 rounded-lg">🎥</button>
                        </div>
                    </div>
                    <button className="w-full p-4 bg-green-500 text-white rounded-lg">Assign</button>
                </div>
            </div>

            {/* Top 10 Performers Section */}
            <div className="bg-green-100 p-8 rounded-3xl mt-6 max-w-md mx-auto border-2 border-[#C2B0B0]">
                <div className='flex justify-between items-center text-3xl'>

                <h2 className="text-xl font-semibold mb-4">Top 10 Performers</h2>
                <button>
                        <BsThreeDotsVertical className='mb-4 text-2xl' />
                    </button>
                </div>
                <div className="space-y-7 ">
                    {performers.map((performer, index) => (
                        <div
                            key={index}
                            className="flex items-center p-2 bg-white rounded-lg shadow-sm border-2 border-[#C2B0B0]"
                        >
                            <img
                                src={performer.imageUrl}
                                alt={performer.name}
                                className="w-10 h-10 rounded-full border border-gray-300"
                            />
                            <div className="ml-4 flex-1">
                                <h3 className="text-sm font-semibold">{performer.name}</h3>
                                <p className="text-xs text-gray-500">{performer.badge}</p>
                            </div>
                            <div className="flex items-center justify-center w-12 h-12 rounded-full">
                                <div className=" gap-6 justify-center space-y-4">

                                    <div className="w-14 h-14">
                                        <CircularProgressbar
                                            value={performer.progress}
                                            text={`${performer.progress}%`}
                                            styles={buildStyles({
                                                pathColor: performer.color,
                                                textColor: "#333",
                                                trailColor: "#e5e5e5",
                                                textSize: "16px",
                                            })}
                                        />
                                    </div>

                                </div>


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreateTask;

