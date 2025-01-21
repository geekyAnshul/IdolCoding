import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Example Data for Attendance
  const attendanceData = {
    present: 25, // Number of students present
    absent: 5,   // Number of students absent
  };

  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [attendanceData.present, attendanceData.absent],
        backgroundColor: ["#4caf50", "#f44336"], // Green for Present, Red for Absent
        hoverBackgroundColor: ["#45a049", "#d32f2f"], // Darker shades for hover
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#333",
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const percentage = (
              (context.raw / (attendanceData.present + attendanceData.absent)) *
              100
            ).toFixed(1);
            return `${context.label}: ${context.raw} (${percentage}%)`;
          },
        },
      },
    },
    responsive: true,
  };

  return (
    <div className="flex flex-col items-center justify-center  border-2 py-6 border-zinc-200 rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Student Attendance
      </h2>
      <div className="w-full px-20">
        <Pie data={data} options={options}  />
      </div>
    </div>
  );
};

export default PieChart;