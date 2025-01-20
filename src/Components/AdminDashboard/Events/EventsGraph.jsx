import React, { useState } from 'react';
import { ChevronDown, Filter, Users } from 'lucide-react';

function EventsGraph() {
  const [selectedMonth, setSelectedMonth] = useState('September');
  
  const timeSlots = [
    '9:00 Am', '10:00 Am', '11:00 Am', '12:00 Pm',
    '01:00 Pm', '02:00 Pm', '03:00 Pm', '04:00 Pm'
  ];

  const events = [
    {
      id: 1,
      title: 'Hackathon',
      startTime: '9:00',
      endTime: '10:30',
      day: 1,
      members: 12,
      isActive: false
    },
    {
      id: 2,
      title: 'Hackathon',
      startTime: '9:00',
      endTime: '10:30',
      day: 3,
      members: 12,
      isActive: true
    },
    {
      id: 3,
      title: 'Workshop',
      startTime: '12:00',
      endTime: '2:30',
      day: 2,
      members: 12,
      isActive: true
    }
  ];

  const getEventPosition = (event) => {
    const startHour = parseInt(event.startTime.split(':')[0]);
    const startMinute = parseInt(event.startTime.split(':')[1] || '0');
    const endHour = parseInt(event.endTime.split(':')[0]);
    const endMinute = parseInt(event.endTime.split(':')[1] || '0');
    
    const top = (startHour - 9) * 30 + startMinute;
    const height = ((endHour - startHour) * 50 + (endMinute - startMinute));
    
    return {
      top: `${top}px`,
      height: `${height}px`,
      left: `${(event.day - 1) * 25}%`,
      width: '20%'
    };
  };

  return (
    <div className=" bg-gray-50 -mt-16 ">
      <div className="w-full max-w-5xl bg-white rounded-2xl h-[500px] px-10 pt-3 border-2 border-zinc-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-900 font-semibold">
              {selectedMonth}
              <ChevronDown className="w-4 h-4" />
            </button>
            <span className="text-gray-400 text-sm">12 Members</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-lg text-gray-500">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-lg text-gray-500">
              Month
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative border border-gray-100 rounded-xl ">
  {/* Days header */}
  <div className="grid grid-cols-4 border-b border-gray-100" style={{ gridTemplateColumns: 'repeat(4, 22%)', gap: '2%' }}>
    {[1, 2, 3, 4].map((day) => (
      <div key={day} className="py-2 text-center text-sm text-gray-500">
        {day}th
      </div>
    ))}
  </div>

  {/* Time slots */}
  <div className="relative h-[380px]">
    {timeSlots.map((time, index) => (
      <div
        key={time}
        className="absolute left-10 w-full border-b border-gray-100 text-xs text-gray-400"
        style={{ top: `${index * 50}px` }}
      >
        <span className="absolute -top-2 -left-16">{time}</span>
      </div>
    ))}

    {/* Events */}
    {events.map((event) => (
      <div
        key={event.id}
        className={`absolute p-2 rounded-lg ${
          event.isActive ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'
        }`}
        style={{
          ...getEventPosition(event),
          left: `${(event.day - 1) * 24}%`, // Adjust left position for smaller grid width
          width: '22%', // Adjust event width
        }}
      >
        <div className="text-sm font-medium mb-1">{event.title}</div>
        <div className="flex items-center gap-1 text-xs opacity-80">
          <Users className="w-3 h-3" />
          <span>{event.members} Members</span>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}

export default EventsGraph;