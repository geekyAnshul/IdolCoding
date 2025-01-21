import React from 'react';
import { Clock, MoreHorizontal, Plus } from 'lucide-react';

const classes = [
  {
    id: 1,
    title: "C and its functions",
    time: "10:00 Am - 12:00pm",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "C and its functions",
    time: "10:00 Am - 12:00pm",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "C and its functions",
    time: "10:00 Am - 12:00pm",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60"
  }
];

const assignments = [
  {
    id: 1,
    name: "Wade Warren",
    status: "Completed Today Class",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Wade Warren",
    status: "Completed Today Class",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Wade Warren",
    status: "Completed Today Class",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
  }
];

function ClassesAndAssignments() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-900 font-medium">Dashboard</span>
            <span className="text-gray-400">/</span>
            <span className="text-emerald-500">Classroom</span>
          </div>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-emerald-600 transition-colors">
            <Plus size={20} />
            Add Class
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Today Classes */}
          <div className="bg-white rounded-2xl  p-6 border-2 border-green-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Today Classes</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {classes.map((classItem) => (
                <div key={classItem.id} className="flex items-center gap-4 p-3 bg-white border rounded-xl">
                  <img 
                    src={classItem.image} 
                    alt={classItem.title}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {classItem.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock size={14} />
                      <span>{classItem.time}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-1.5 text-emerald-500 border border-emerald-500 rounded-lg text-sm hover:bg-emerald-50">
                      More Info
                    </button>
                    <button className="px-4 py-1.5 bg-emerald-500 text-white rounded-lg text-sm hover:bg-emerald-600">
                      Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assigned Assignment */}
          <div className="bg-white rounded-2xl p-6 border-2 border-zinc-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium text-gray-900">Assigned Assignment</h2>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="space-y-4">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center gap-4 p-3 bg-white border rounded-xl">
                  <img 
                    src={assignment.image} 
                    alt={assignment.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {assignment.name}
                    </h3>
                    <p className="text-emerald-500 text-sm">
                      {assignment.status}
                    </p>
                  </div>
                  <button className="px-4 py-1.5 bg-emerald-500 text-white rounded-lg text-sm hover:bg-emerald-600">
                    Assign
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassesAndAssignments;