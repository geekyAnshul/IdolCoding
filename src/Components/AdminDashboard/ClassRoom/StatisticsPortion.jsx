import React from 'react';
import { MoreHorizontal } from 'lucide-react';

function StatisticsPortion() {
  return (
    <div className="  p-4">
      <div className="w-full max-w-sm space-y-4">
        {/* Statistics Card */}
        <div className="bg-white rounded-3xl border-2 border-zinc-200 px-6 py-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Statistics</h2>
            <MoreHorizontal className="w-6 h-6 text-gray-400" />
          </div>

          {/* Progress Bars */}
          <div className="space-y-4 mb-4">
            <div className="flex h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-[21%] bg-emerald-500" />
              <div className="w-[21%] bg-red-500" />
              <div className="w-[21%] bg-gray-800" />
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2" />
                <span className="text-gray-600">Completed</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                <span className="text-gray-600">Start</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gray-800 mr-2" />
                <span className="text-gray-600">In Progress</span>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-600">
            <span className="font-medium">15</span> course
          </div>
        </div>

        {/* Attendance Card */}
        <div className="bg-white rounded-3xl border-2 border-gray-200 px-4 py-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Attendance</h2>
            <MoreHorizontal className="w-6 h-6 text-gray-400" />
          </div>

          {/* Pie Chart */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#10B981"
                strokeWidth="3"
                strokeDasharray="70, 100"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="flex justify-center space-x-8">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2" />
              <span className="text-gray-600">Present</span>
              <span className="ml-2 font-medium">70%</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
              <span className="text-gray-600">Absent</span>
              <span className="ml-2 font-medium">30%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsPortion;