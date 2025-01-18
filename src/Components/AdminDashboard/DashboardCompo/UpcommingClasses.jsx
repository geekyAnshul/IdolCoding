
import React from "react";

const classes = [
  {
    id: 1,
    title: "HTML Basics",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.",
  },
  {
    id: 2,
    title: "HTML Basics",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.",
  },
  {
    id: 3,
    title: "HTML Basics",
    description:
      "HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications.",
  },
];

const UpcommingClasses = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Upcoming Classes</h1>
          <button className="text-blue-500 hover:underline">See all</button>
        </div>
        <div className="space-y-4">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className="bg-green-200 p-4 rounded-lg flex justify-between items-center shadow-md hover:bg-green-300 transition"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-800">{classItem.title}</h2>
                <p className="text-gray-700 text-sm mt-1">{classItem.description}</p>
              </div>
              <button
                className="text-gray-800 text-xl font-semibold hover:text-gray-600"
              >
                &gt;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcommingClasses;
