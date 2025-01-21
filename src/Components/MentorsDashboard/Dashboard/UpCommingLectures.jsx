import React from 'react';
import { Clock, MoreVertical } from 'lucide-react';

const lectures = [
  {
    id: 1,
    title: "C and its functions",
    time: "10:00 Am - 12:00pm",
    duration: "in 2hr, 35 mins",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Python and programming",
    time: "10:00 Am - 12:00pm",
    duration: "in 2hr, 35 mins",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Digital Marketing",
    time: "10:00 Am - 12:00pm",
    duration: "in 2hr, 35 mins",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=60"
  }
];

function UpCommingLectures() {
  return (
    <div className=" py-4">
      <div className=" bg-emerald-200 rounded-xl border-2 border-zinc-200 overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-medium text-gray-900">Upcoming Lectures</h2>
          <button className="text-gray-500 hover:text-gray-700">
            <MoreVertical size={20} />
          </button>
        </div>
        
        <div className="max-h-[600px] overflow-y-auto p-4 rounded-3xl">
          {lectures.map((lecture) => (
            <div 
              key={lecture.id}
              className="p-4 hover:bg-gray-50 rounded-xl border-2 border-zinc-200 mt-2 bg-white transition-colors border-b last:border-b-0"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={lecture.image} 
                    alt={lecture.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-gray-900 mb-1">
                    {lecture.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock size={14} />
                    <span>{lecture.time}</span>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <span className="text-emerald-500 text-sm font-medium">
                    {lecture.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UpCommingLectures;