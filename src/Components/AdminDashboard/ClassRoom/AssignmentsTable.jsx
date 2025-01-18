import React from 'react';
import { ChevronRight } from 'lucide-react';

function AssignmentsTable() {
  const assignments = [
    {
      title: "Converting Hex code",
      progress: 61,
    },
    {
      title: "Finding Unique Number",
      progress: 81,
    },
    {
      title: "Calculation Prime Number",
      progress: 45,
    },
  ];

  return (
    <div className=" bg-transparent  p-4">
      <div className="bg-green-50 rounded-2xl border-2 border-gray-200 p-6 w-full max-w-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Assignments</h2>
          <button className="text-gray-500 hover:text-gray-700">
            {/* Options Icon */}
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <circle cx="12" cy="4" r="2" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="20" r="2" fill="currentColor" />
            </svg>
          </button>
        </div>

        {/* Assignments List */}
        <div className="space-y-4">
          {assignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 border-2 border-green-500 transition-shadow"
            >
              {/* Assignment Title */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-gray-800">{assignment.title}</h3>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>

              {/* Progress Bar */}
              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-emerald-600">
                    {assignment.progress}%
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded-full bg-emerald-100 mt-1">
                  <div
                    style={{ width: `${assignment.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AssignmentsTable;
