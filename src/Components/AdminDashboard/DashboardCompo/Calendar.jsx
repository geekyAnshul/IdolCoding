import React, { useState } from "react";

const Calendar = () => {
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
    <div className="flex flex-col items-center p-4    max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Prev
        </button>
        <h2 className="text-xl font-semibold">
          {months[month]} {year}
        </h2>
        <button
          onClick={() => changeMonth(1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Next
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 w-full text-center font-bold text-gray-700">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-1 w-full text-center mt-2">
        {days.map(({ date, isCurrentMonth }, index) => (
          <div
            key={index}
            className={`p-1 rounded-full cursor-pointer ${isCurrentMonth ? "bg-white" : "bg-gray-200 text-gray-400"
              } hover:bg-green-200`}
            onClick={() => alert(`You clicked on ${date.toDateString()}`)}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;