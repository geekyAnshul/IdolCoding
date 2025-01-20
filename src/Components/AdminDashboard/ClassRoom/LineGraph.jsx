import React from "react";
import { Line } from "react-chartjs-2";
import {  CalendarDays,Clock4 } from 'lucide-react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph() {
  // Data for the graph
  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], // X-axis labels
    datasets: [
      {
        label: "Hours Spent Studying",
        data: [2, 3, 4, 3.5, 5, 6, 4.5], // Example hours data
        borderColor: "#10B981", // Line color (green)
        backgroundColor: "rgba(16, 185, 129, 0.2)", // Fill under the line
        tension: 0.4, // Smooth curve
        pointBorderColor: "#065F46", // Point border color
        pointBackgroundColor: "#10B981", // Point fill color
        pointRadius: 5,
      },
    ],
  };

  // Options for the graph
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#065F46", // Legend text color
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} hours`, // Tooltip format
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on X-axis
        },
        ticks: {
          color: "#065F46", // X-axis label color
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          color: "rgba(6, 95, 70, 0.1)", // Y-axis grid color
        },
        ticks: {
          color: "#065F46", // Y-axis label color
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="p-4 bg-white border-2 border-gray-200 rounded-3xl w-3xl  ">
     <div className="flex justify-between items-center py-2">
     <h2 className="text-xl font-semibold text-green-700 ">
        Hours Spent <span className="block text-xs text-zinc-500  font-light">128 Hours</span>
      </h2>
      <div className="hidden lg:block">
            
              <select
                className="hidden lg:block text-sm text-gray-600 bg-white  rounded-full cursor-pointer"
              >
                <option value="student">Last 7 Days</option>
                <option value="mentor">Previous Month</option>
                <option value="admin">Past 1 Year</option>
              </select>
            </div>
     </div>
      <div className="h-72 bg-green-100 rounded-2xl p-4">
        <Line data={data} options={options} />
      </div>

     <div className="flex xs:flex-col lg:flex-row  justify-between items-center p-4 ">
     <div>
        <div>
           <div className="flex gap-2">
                <CalendarDays className="text-zinc-500 text-sm"/>
                <span className="text-green-500">September, 10th</span>
           </div>
           <div className="flex gap-2 mt-2">
           <Clock4  className="text-zinc-500 text-sm"/>
                <span className="text-green-500">Today, 10:00 Am</span>
           </div>

           
        </div>
       
      </div>

      <div className="flex gap-4 items-center p-2">
            {/* User Image */}
            <img
              src="https://image.freepik.com/free-photo/handsome-man-yellow-background_1368-33382.jpg"
              alt="User"
              className="w-14 h-14 cursor-pointer rounded-full object-cover border-2 border-green-500"
            />

            {/* User Info (Visible on larger screens) */}
            <div className="hidden lg:block">
              <h2 className="text-lg font-medium text-gray-800">Anshul Namdev</h2>
             <p className="text-sm text-zinc-500 ">Mentor</p>
            </div>

            <button className="bg-green-500 text-white px-16 py-2 rounded-xl text-xl">Join </button>



          </div>
    </div>
     </div>
  );
}

export default LineGraph;
