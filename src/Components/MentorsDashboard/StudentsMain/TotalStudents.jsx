import React from 'react';
import { Clock, Filter, Plus } from 'lucide-react';

function TotalStudents() {
  const students = [
    {
      id: 1,
      name: 'Darrell Steward',
      date: 'Dec 01, 2023',
      course: 'C and its function',
      progress: 91,
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
      courseIcon: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=40&h=40&fit=crop&auto=format&q=80',
    },
    {
      id: 2,
      name: 'Darrell Steward',
      date: 'Dec 01, 2023',
      course: 'C and its function',
      progress: 91,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
      courseIcon: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=40&h=40&fit=crop&auto=format&q=80',
    },
    {
      id: 3,
      name: 'Darrell Steward',
      date: 'Dec 01, 2023',
      course: 'C and its function',
      progress: 91,
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces&auto=format&q=80',
      courseIcon: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=40&h=40&fit=crop&auto=format&q=80',
    },
  ];

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
         <div className="flex justify-between items-center mb-4">
                 <div className="flex items-center gap-2">
                   <span className="text-gray-900 font-medium xs:text-sm lg:text-lg">Dashboard</span>
                   <span className="text-gray-400">/</span>
                   <span className="text-emerald-500 xs:text-sm lg:text-lg">Students</span>
                 </div>
                 <button className="bg-emerald-500 text-white px-2 lg:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
                   <Plus size={20} />
                   Add New
                 </button>
               </div>
        {/* Table Section */}
        <div className="bg-white rounded-2xl  ">
          {/* Table Header */}
          <div className="py-6 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">Total Students</h2>
              <button className="flex items-center gap-2 px-4 py-2 border border-green-500 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-3xl border-2 border-zinc-200">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-zinc-100 border-gray-100">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Name</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Date</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Courses</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-gray-100 last:border-b-0">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={student.avatar}
                          alt={student.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className="font-medium text-gray-900">{student.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-500">{student.date}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <img
                          src={student.courseIcon}
                          alt={student.course}
                          className="w-8 h-8 rounded-lg object-cover"
                        />
                        <span className="text-gray-900">{student.course}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-100 rounded-full h-2 w-32">
                          <div
                            className="bg-emerald-500 h-2 rounded-full"
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-900 font-medium">{student.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <button className="text-emerald-500 font-medium hover:text-emerald-600 transition-colors">
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalStudents;
