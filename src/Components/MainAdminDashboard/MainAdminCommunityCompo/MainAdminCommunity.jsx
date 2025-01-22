

import React from "react";
import Notification from "./Notification";
import Activities from "./Activities";
import { Plus } from 'lucide-react';

const MainAdminCommunity = () => {
    return (


        <div>

            <div className="lg:pl-64 flex justify-between items-center mb-4 px-6">
                <div className="flex items-center gap-2 px-4">
                    <span className="text-gray-900 font-medium">Dashboard</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-emerald-500">Community</span>
                </div>
                <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
                    <Plus size={20} />
                    Add Class
                </button>
            </div>
            <div className=" flex flex-col lg:flex-row gap-4 p-4 lg:ml-64 ">


                <div className="rounded-3xl p-4 flex-1 border-2 border-[#C2B0B0]">

                    {/* Main Container */}
                    <Activities />
                </div>


                <div>
                    <Notification />
                    {/* Post Creation */}
                    <div className="lg:max-w-md w-full bg-[#B4E9D1] rounded-3xl border-2 border-[#C2B0B0] mt-6 p-6">
                        <h2 className="text-3xl font-bold p-4">Create a Post</h2>
                        <textarea
                            placeholder="Write Something"
                            className="w-full h-40 mt-4 border p-2 rounded-lg text-black "
                        ></textarea>
                        <input
                            type="text"
                            placeholder="Add Tags"
                            className="w-full h-20 mt-4 border p-2 rounded-lg text-black"
                        />
                        <div className="mt-10 flex items-center justify-between">
                            <button className="px-4 py-2 bg-black text-white rounded-lg">Add Image</button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainAdminCommunity;
