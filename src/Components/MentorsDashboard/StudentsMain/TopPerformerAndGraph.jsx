import React from 'react';

const TopPerformerAndGraph = () => {
  const attendanceData = [60, 80, 50, 70, 90, 100, 85, 75, 95, 60, 70, 80]; // Monthly attendance
  const topPerformers = [
    {
      name: 'Wade Warren',
      date: '10/02/2024',
      progress: 94,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Wade Warren',
      date: '10/02/2024',
      progress: 94,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Wade Warren',
      date: '10/02/2024',
      progress: 94,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ];

  return (
    <div className=" flex flex-col items-center py-4">
      <div className="grid lg:grid-cols-2 gap-6 w-full max-w-7xl">
        {/* Overall Attendance */}
        <div className="bg-white border-2 border-zinc-200 rounded-3xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-medium text-lg">Overall Attendance</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="material-icons text-4xl">...</span>
            </button>
          </div>
          <div className="flex mt-20 items-end justify-between h-40">
            {attendanceData.map((value, index) => (
              <div
                key={index}
                className="rounded-t-full bg-gradient-to-t from-green-300 to-green-500"
                style={{
                  width: '5%',
                  height: `${value}%`,
                  transition: 'height 0.3s',
                }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            {attendanceData.map((_, index) => (
              <span key={index}>{index + 1}</span>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-emerald-100 border-2 border-green-500 rounded-3xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Top Performer</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <span className="material-icons text-4xl">...</span>
            </button>
          </div>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-4 rounded-lg border-2 border-zinc-200"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={performer.avatar}
                    alt={performer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {performer.name}
                    </h3>
                    <p className="text-sm text-gray-400">{performer.date}</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-14 h-14">
                  <svg className="w-full h-full">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="20"
                      className="stroke-gray-200"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="20"
                      className="stroke-emerald-500"
                      strokeWidth="4"
                      strokeDasharray="125"
                      strokeDashoffset={125 - (performer.progress / 100) * 125}
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <span className="absolute text-emerald-500 font-semibold text-sm">
                    {performer.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPerformerAndGraph;
