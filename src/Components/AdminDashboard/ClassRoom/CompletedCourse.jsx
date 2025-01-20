import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const courses = [
  {
    id: 1,
    name: 'C Language',
    progress: 91,
    author: 'By Sandra Ray',
    letter: 'C',
  },
  {
    id: 2,
    name: 'Python',
    progress: 81,
    author: 'By Sandra Ray',
    letter: 'P',
  },
  {
    id: 3,
    name: 'Data Management',
    progress: 69,
    author: 'By Sandra Ray',
    letter: 'D',
  },
  {
    id: 4,
    name: 'Java',
    progress: 40,
    author: 'By Sandra Ray',
    letter: 'J',
  },
];

function CompletedCourse() {
  return (
    <div className="p-4 lg:w-[480px] ">
      <div className="w-full max-w-lg bg-white rounded-3xl border-2 border-zinc-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Completed Courses</h2>
          <MoreHorizontal className="w-6 h-6 text-gray-400" />
        </div>

        <div className="space-y-8">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center space-x-6">
              {/* Course Avatar */}
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">{course.letter}</span>
              </div>

              {/* Course Info and Progress Bar */}
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-medium text-gray-900 truncate">{course.name}</h3>
                    <p className="text-sm text-gray-500">{course.author}</p>
                  </div>
                  <span className={`text-lg font-semibold ${
                    course.progress >= 80 ? 'text-emerald-500' : 
                    course.progress >= 60 ? 'text-emerald-600' : 
                    'text-red-500'
                  }`}>
                    {course.progress}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      course.progress >= 80 ? 'bg-emerald-500' : 
                      course.progress >= 60 ? 'bg-emerald-600' : 
                      'bg-red-500'
                    }`}
                    style={{ width: `${course.progress}%` }}
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

export default CompletedCourse;