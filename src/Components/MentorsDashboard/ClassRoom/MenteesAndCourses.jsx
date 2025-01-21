import React from 'react';
import { MoreVertical } from 'lucide-react';

function MenteesAndCourses() {
  const mentees = [
    {
      id: 1,
      name: 'Wade Warren',
      course: 'C and its functions',
      date: '10/02/2024',
      progress: 75,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80'
    },
    {
      id: 2,
      name: 'Wade Warren',
      course: 'C and its functions',
      date: '10/02/2024',
      progress: 45,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&auto=format&q=80'
    }
  ];

  return (
    <div className="py-4 w-full">
      <div className="w-full max-w-2xl bg-white rounded-3xl border-2 border-zinc-200 p-6 pb-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Mentees and Courses</h1>
          <button className="text-gray-600 hover:bg-gray-100 p-2 rounded-full">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Mentee Cards */}
        <div className="space-y-4">
          {mentees.map((mentee) => (
            <div 
              key={mentee.id} 
              className="bg-gray-50 rounded-xl border-2 border-zinc-200 p-4"
            >
              <div className="flex items-start justify-between mb-3">
                {/* Avatar and Info */}
                <div className="flex items-center gap-3">
                  <img 
                    src={mentee.avatar} 
                    alt={mentee.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{mentee.name}</h3>
                    <p className="text-emerald-500 text-sm">{mentee.course}</p>
                  </div>
                </div>
                {/* Date */}
                <span className="text-sm text-gray-600">{mentee.date}</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300"
                  style={{ width: `${mentee.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenteesAndCourses;
