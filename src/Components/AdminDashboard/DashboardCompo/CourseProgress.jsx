import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CourseProgress = () => {
  // Example course progress data
  const courses = [
    { name: "React", progress: 80, color: "#61dafb" }, // Light blue for React
    { name: "Node.js", progress: 60, color: "#68a063" }, // Green for Node.js
    { name: "MongoDB", progress: 40, color: "#4db33d" }, // Dark green for MongoDB
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">
        Course Progress
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg"
          >
            <div className="w-24 h-24">
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
            <p className="mt-4 text-lg font-medium text-gray-700">{course.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseProgress;