


import React from "react";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const MentorsCard = () => {
    const students = [
        { name: "Kathryn Murphy", role: "Mentees", score: 18 },
        { name: "Dianne Russell", role: "Mentees", score: 18 },
        { name: "Jerome Bell", role: "Mentees", score: 18 },
    ];

    return (
        <div className="max-w-xl mx-auto p-2 space-y-2 border-2 border-[#C2B0B0] rounded-xl">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold"> Mentors</h2>
                <BsThreeDots className="text-2xl mr-4"/>
            </div>
            {students.map((student, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between border p-2 rounded-lg shadow-sm"
                >
                    <div className="flex items-center space-x-4">
                        <div className=" bg-gray-200 rounded-full flex items-center justify-center">
                            {/* Placeholder for profile image */}
                            <img src="https://th.bing.com/th?id=OIP.PoFmgWG0dZXmssCtCiBk9QHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" className="rounded-full h-12 w-12 object-cover object-top" />
                        </div>
                        <div>
                            <h3 className="font-medium">{student.name}</h3>
                            <p className="text-sm text-gray-500">{student.role}</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center text-green-600 text-lg font-semibold gap-4">
                            <p>4.5</p>
                            <FaStar className="text-yellow-500"/>

                        </div>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                            View Profile
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MentorsCard;
