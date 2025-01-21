import React from "react";

const StudentsBox = () => {
  const students = [
    {
      name: "Floyd Miles",
      date: "10/02/24",
      mentor: "Darrell Steward",
      progress: 92,
      studentImg: "https://img.freepik.com/premium-photo/confident-young-indian-man-standing-with-folded-arms-yellow-background_116547-74626.jpg", // Ensure the URL is correct or replace with another image URL
      mentorImg: "https://www.shutterstock.com/image-photo/photo-smart-brunet-millennial-guy-600nw-2208181829.jpg", // Ensure the URL is correct or replace with another image URL
    },
    {
      name: "Floyd Miles",
      date: "10/02/24",
      mentor: "Darrell Steward",
      progress: 92,
      studentImg: "https://img.freepik.com/premium-photo/stylish-modern-millennial-man-wearing-casual-style-outfit_274222-16502.jpg", // Ensure the URL is correct or replace with another image URL
      mentorImg: "https://th.bing.com/th/id/OIP.0F_6tNB1uULYRW2ftaYN0gHaE7?w=626&h=417&rs=1&pid=ImgDetMain", // Ensure the URL is correct or replace with another image URL
    },
    {
      name: "Floyd Miles",
      date: "10/02/24",
      mentor: "Darrell Steward",
      progress: 92,
      studentImg: "https://th.bing.com/th/id/OIP.m-U8ZNig5JpbpBWoZgYLaQHaE8?w=1600&h=1067&rs=1&pid=ImgDetMain", // Ensure the URL is correct or replace with another image URL
      mentorImg: "https://img.freepik.com/premium-photo/man-with-beard-green-shirt-keeping-arms-crossed-while-smiling_1368-34114.jpg", // Ensure the URL is correct or replace with another image URL
    },
  ];

  return (
    <div className="py-4 lg:px-4">
      <div className="bg-white border-2 border-[#C2B0B0] rounded-3xl max-w-3xl mx-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-medium">Students</h2>
          <button className="flex items-center text-sm text-green-600 hover:text-green-800">
            Filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.75h16.5m-16.5 6.5h16.5m-16.5 6.5h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          {students.map((student, index) => (
            <div
              key={index}
              className=""
            >
            <div className="flex justify-between  items-center w-full bg-gray-50 rounded-lg p-3 mb-3 shadow-sm">
            <div className="flex">
             <img
                src={student.studentImg}
                alt="Student"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-4">
                <p className="text-sm font-semibold">{student.name}</p>
                <p className="text-xs text-gray-500">{student.date}</p>
              </div>
             </div>
              <div className="ml-auto flex items-center">
                <img
                  src={student.mentorImg}
                  alt="Mentor"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-2">
                  <p className="text-sm font-semibold">{student.mentor}</p>
                  <p className="text-xs text-green-600">Mentor</p>
                </div>
              </div>
            </div>
              <div className="ml-4 max-w-4xl">
                <div className="relative">
                  <div className="h-5 bg-gray-300 rounded-full">
                    <div
                      className="h-5 bg-gradient-to-r from-[#12B76A] via-green-500 to-[#08512F] rounded-full"
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-right mt-1">
                  {student.progress}%
                </p>
              </div>
              
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default StudentsBox;
