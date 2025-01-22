

import React, { useState } from 'react';
import { MoreHorizontal, Search, Calendar, Clock } from 'lucide-react';

const EventsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const events = [
    {
      id: 1,
      title: 'Meeting with Mr John Doe',
      date: 'Sept. 8th',
      time: '10:00 Am',
      isToday: true
    },
    {
      id: 2,
      title: 'Lunch with Mr Smith',
      date: 'Sept. 9th',
      time: '12:00 Pm',
      isToday: false
    },
    {
      id: 3,
      title: 'Conference with Mr Alex',
      date: 'Sept. 10th',
      time: '10:00 Am',
      isToday: false
    },
    {
      id: 4,
      title: 'Workshop with Mr Jimmy Paul about the Coding basics',
      date: 'Sept. 10th',
      time: '10:00 Am',
      isToday: false
    }
  ];

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const todayEvents = filteredEvents.filter(event => event.isToday);
  const upcomingEvents = filteredEvents.filter(event => !event.isToday);

  return (
    <div className="w-full px-4 md:px-4">
      <div className="w-full max-w-lg mx-auto bg-white rounded-2xl p-6 border-2 border-zinc-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Event List</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Events"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {todayEvents.length > 0 && (
          <>
            <h3 className="text-sm font-medium text-gray-600 mb-5">Today</h3>
            {todayEvents.map((event) => (
              <div key={event.id} className="bg-green-500 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                  <Clock className="w-4 h-4 ml-2" />
                  <span>{event.time}</span>
                </div>
                <p className="text-white px-4 py-4 bg-green-400 rounded-lg">{event.title}</p>
              </div>
            ))}
          </>
        )}

        {upcomingEvents.length > 0 && (
          <>
            <h3 className="text-sm font-medium text-gray-600 mb-5 ">Upcoming</h3>
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border-2 border-green-500 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 ml-2" />
                    <span>{event.time}</span>
                  </div>
                  <p className="text-white px-4 py-4 bg-green-500 rounded-lg">{event.title}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default EventsList;