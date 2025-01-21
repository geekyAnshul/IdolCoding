

// Import necessary React components
import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { PiClipboardText } from "react-icons/pi";
import { FaLink } from "react-icons/fa6";
import { LuRedo2 } from "react-icons/lu";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Ask from '../../../assets/Askmentor.png'
import { HiOutlineDotsVertical } from "react-icons/hi";
const Task = () => {
    // Example course progress data
    const courses = [
        { name: "C Programming and its Basics", progress: 80, color: "#61dafb" }, // Light blue for React
        { name: "Python and its tricks", progress: 60, color: "#68a063" }, // Green for Node.js
        { name: "Python and its tricks", progress: 40, color: "#4db33d" }, // Dark green for MongoDB
    ];
    return (
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
                {/* Completed Tasks */}
                <div className=" bg-green-100 rounded-3xl p-4 border-2 border-[#C2B0B0]">
                    <div className='flex justify-between'>
                        <h2 className="text-xl font-bold mb-4">Completed Task</h2>
                        <button> <HiOutlineDotsVertical className='text-2xl' /> </button>
                    </div>

                    <div className=" gap-6 justify-center space-y-4">
                        {courses.map((course, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-6 space-y-2 justify-start border border-[#C2B0B0] bg-white p-4 rounded-lg"
                            >
                                <div className="w-14 h-14">
                                    <CircularProgressbar
                                        value={course.progress}
                                        text={`${course.progress}%`}
                                        styles={buildStyles({
                                            pathColor: course.color,
                                            textColor: "#333",
                                            trailColor: "#e5e5e5",
                                            textSize: "16px",
                                        })}
                                    />
                                </div>
                                <p className="mt-8 justify-center text-sm font-medium text-gray-700">{course.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Help Section */}
                <div className="bg-white rounded-3xl p-6 border-2 border-[#C2B0B0] flex flex-col items-center text-center max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl text-green-600 font-bold mb-4">
                        Are you Feeling Stuck?
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 mb-6">
                        Are you stuck on a task for some time and need help? Your mentor is only a message away!
                    </p>
                    <img
                        src={Ask}
                        alt="Illustration"
                        className="w-3/4 md:w-1/2 my-6"
                    />
                    <button
                        onClick={() => alert('Ask Mentor clicked!')}
                        className="border-2 border-green-600 text-green-500 py-3 px-8 md:px-16 lg:px-20 rounded-3xl hover:bg-green-600 hover:text-white transition"
                    >
                        Ask Mentor
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Task;
