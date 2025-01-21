import React from 'react';
import { ChevronDown, ChevronDown as WeekIcon } from 'lucide-react';

function AreaGraph() {
  // Sample data for the graph
  const performanceData = [70, 45, 75, 65, 85, 75, 90];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Find max value for scaling
  const maxValue = Math.max(...performanceData);

  return (
    <div className=" py-4">
      <div className="bg-white rounded-3xl border-2 border-zinc-200  p-6 w-full max-w-3xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-gray-800">Pratik Pradhan</h2>
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </div>
          <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-full text-sm">
            Week
            <WeekIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Performance Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-sm text-gray-600">Performance</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              <span className="text-sm text-gray-600">Student Performance</span>
            </div>
          </div>

          {/* Graph */}
          <div className="relative h-64">
            {/* Y-axis labels */}
            <div className="absolute left-0 h-full flex flex-col justify-between text-xs text-gray-400">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            {/* Graph Area */}
            <div className="ml-12 h-full relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-b border-gray-100 w-full h-0"></div>
                ))}
              </div>

              {/* Line Graph */}
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <path
                  d={`M ${performanceData
                    .map((value, index) =>
                      `${(index * 100) / (performanceData.length - 1)}% ${100 - (value / maxValue) * 100}%`
                    )
                    .join(' L ')}`}
                  fill="none"
                  stroke="#34D399"
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Data points */}
                {performanceData.map((value, index) => (
                  <circle
                    key={index}
                    cx={`${(index * 100) / (performanceData.length - 1)}%`}
                    cy={`${100 - (value / maxValue) * 100}%`}
                    r="4"
                    fill="#34D399"
                    className="transition-all duration-300 hover:r-6"
                  />
                ))}
              </svg>

              {/* X-axis labels */}
              <div className="absolute bottom-0 w-full flex justify-between transform translate-y-6">
                {days.map((day, index) => (
                  <span key={index} className="text-xs text-gray-400 -rotate-45 origin-top-left">
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AreaGraph;
