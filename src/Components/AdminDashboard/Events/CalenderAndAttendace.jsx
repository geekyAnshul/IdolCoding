import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Calendar from '../DashboardCompo/Calendar'

function CalenderAndAttendace() {
  const [selectedMonth, setSelectedMonth] = useState('JULY 2021');
  
  // Attendance data for pie chart
  const attendance = {
    present: 70,
    absent: 30
  };

  
  const currentMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const activeEvents = [8, 13, 18, 23]; // Days with events

//   // Calculate pie chart segments
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const presentOffset = (attendance.present / 100) * circumference;
  const absentOffset = circumference - presentOffset;
const [selectedDate, setSelectedDate] = useState(new Date());
// const [selectedDate, setSelectedDate] = useState(new Date());
 const [currentDate, setCurrentDate] = useState(new Date());

  // Helper to get all days of a month
  const getDaysInMonth = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const days = [];

    // Fill days from the previous month
    const firstDayWeekday = firstDayOfMonth.getDay();
    for (let i = firstDayWeekday - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false });
    }

    // Fill days of the current month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push({ date: new Date(year, month, i), isCurrentMonth: true });
    }

    // Fill days of the next month
    const lastDayWeekday = lastDayOfMonth.getDay();
    for (let i = 1; i < 7 - lastDayWeekday; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({ date: nextDate, isCurrentMonth: false });
    }

    return days;
  };

  // Navigate between months
  const changeMonth = (step) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + step, 1)
    );
  };

  // Formatters for display
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const days = getDaysInMonth(year, month);


  return (
    <div className=" pt-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        {/* Attendance Card */}
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 flex-1">
          <h2 className="text-gray-800 text-lg font-semibold mb-6">Event Attendance</h2>
          
          <div className="relative w-48 h-48 mx-auto">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
              {/* Present segment (green) */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#10B981"
                strokeWidth="24"
                strokeDasharray={`${presentOffset} ${circumference}`}
              />
              {/* Absent segment (red) */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#EF4444"
                strokeWidth="24"
                strokeDasharray={`${absentOffset} ${circumference}`}
                strokeDashoffset={-presentOffset}
              />
            </svg>
          </div>

          <div className="flex justify-center gap-8 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Present {attendance.present}%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Absent {attendance.absent}%</span>
            </div>
          </div>
        </div>

        {/* Calendar Card */}
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 flex-1">
       <Calendar/>
       </div>
      </div>
    </div>
  );
}

export default CalenderAndAttendace;