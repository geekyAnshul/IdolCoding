import React from 'react';
import { ChevronRight } from 'lucide-react';
// import UpcommingClasses from '../DashboardCompo/UpcommingClasses';

function UpcommingClasses() {
  const classes = [
    {
      title: "HTML Basics",
      description: "HTML (Hypertext Markup Language) is the standard markup language for creating..."
    },
    {
      title: "CSS Cascading StyleSheets",
      description: "HTML (Hypertext Markup Language) is the standard markup language for creating..."
    },
    {
      title: "JavaScript",
      description: "HTML (Hypertext Markup Language) is the standard markup language for creating..."
    }
  ];

  return (
   
      <div className="bg-green-100 rounded-3xl border-2 border-zinc-200 p-6 pb-16 -mt-10 ">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Upcoming Classes</h2>
          <button className="text-emerald-500 text-sm font-medium hover:text-emerald-600">
            See all
          </button>
        </div>

        {/* Classes List */}
        <div className="space-y-5">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 hover:shadow-md transition-all duration-300 ${
                index === 1 ? 'bg-white border border-green-500' : 'bg-white'
              }`}
            >
              {/* Class Details */}
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 mb-1">
                    {classItem.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {classItem.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default UpcommingClasses;
