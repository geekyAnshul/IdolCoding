import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PerformanceBarGraph = () => {
  // Data for the performance bar graph
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], // Days of the week
    datasets: [
      {
        label: "Performance (%)",
        data: [70, 85, 90, 60, 75, 80, 95], // Performance percentages for each day
        backgroundColor: "#4caf50", // Green bars
        borderColor: "#388e3c", // Darker green border
        borderWidth: 1,
      },
    ],
  };

  // Configuration options for the bar graph
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#333", font: { size: 12 } },
        title: {
          display: true,
          text: "Days of the Week",
          color: "#555",
          font: { size: 14 },
        },
      },
      y: {
        ticks: { color: "#333", font: { size: 12 } },
        title: {
          display: true,
          text: "Performance (%)",
          color: "#555",
          font: { size: 14 },
        },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="flex flex-col items-center p-2 rounde-lg border-2 border-green-300 bg-white rounded-lg  ">
      <h2 className="text-xl font-semibold text-gray-800">
        Weekly Performance Graph
      </h2>
      <div className="h-80">
        <Bar data={data} options={options} className="w-[700px]  py-10" />
      </div>
    </div>
  );
};

export default PerformanceBarGraph;