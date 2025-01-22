// // import React from 'react'


// // const StudentPerformance = () => {
// //   return (
// //     <div>
// //     </div>
// //   )
// // }

// // export default StudentPerformance


// import React, { useRef, useEffect } from 'react';
// import { Chart, registerables } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { BiCandles } from "react-icons/bi";
// import { RiArrowDropDownLine } from "react-icons/ri";

// Chart.register(...registerables);

// const StudentPerformance = () => {
//   const chartRef = useRef(null);

//   // Chart data and configuration
//   const data = {
//     labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
//     datasets: [
//       {
//         label: 'Performance',
//         data: [90, 75, 85, 95, 100, 80, 85, 90, 75, 95, 70, 85],
//         backgroundColor: (context) => {
//           const chart = context.chart;
//           const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
//           gradient.addColorStop(0, '#22c54a'); // green
//           gradient.addColorStop(1, '#86efac'); // lighter green
//           return gradient;
//         },
//         borderRadius: 6,
//         barPercentage: 0.6,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 100,
//         ticks: {
//           stepSize: 10,
//           callback: (value) => `${value}%`,
//         },
//         grid: {
//           drawBorder: false,
//           color: '#e5e7eb',
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//       },
//     },
//   };

//   return (
//     <div className=" mx-auto p-4 bg-white border-2 border-[#C2B0B0] rounded-xl">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-semibold">Overall Performance</h2>
//         <div className="flex gap-2">
//           <button className="flex items-center px-3 py-1 text-lg border rounded-full border-gray-300">
//             Filter <span className="ml-2">
//               <BiCandles className='text-lg'/>
//             </span>
//           </button>
//           <button className="flex items-center px-3 py-1 text-lg border rounded-full border-gray-300">
//             Year <span className="ml-2">
//               <RiArrowDropDownLine className='text-2xl' />
//             </span>
//           </button>
//         </div>
//       </div>
//       <div className="relative h-80 ">
//         <Bar data={data} options={options} ref={chartRef} />
//       </div>
//     </div>
//   );
// };

// export default StudentPerformance;





import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BiCandles } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useRef, useEffect } from 'react';

Chart.register(...registerables);

const StudentPerformance = () => {
  const chartRef = useRef(null);

  // Chart data and configuration
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: 'Performance',
        data: [90, 75, 85, 95, 100, 80, 85, 90, 75, 95, 70, 85],
        backgroundColor: (context) => {
          const chart = context.chart;
          const gradient = chart.ctx.createLinearGradient(0, 0, 0, chart.height);
          gradient.addColorStop(0, '#22c54a'); // green
          gradient.addColorStop(1, '#86efac'); // lighter green
          return gradient;
        },
        borderRadius: 6,
        barPercentage: 0.6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}%`,
        },
        grid: {
          drawBorder: false,
          color: '#e5e7eb',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white border-2 border-[#C2B0B0] rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h2 className="text-lg font-semibold mb-2 sm:mb-0">Overall Performance</h2>
        <div className="flex gap-2">
          <button className="flex items-center px-3 py-1 text-lg border rounded-full border-gray-300">
            Filter <span className="ml-2">
              <BiCandles className='text-lg' />
            </span>
          </button>
          <button className="flex items-center px-3 py-1 text-lg border rounded-full border-gray-300">
            Year <span className="ml-2">
              <RiArrowDropDownLine className='text-2xl' />
            </span>
          </button>
        </div>
      </div>
      <div className="relative h-80 w-full">
        <Bar data={data} options={options} ref={chartRef} />
      </div>
    </div>
  );
};

export default StudentPerformance;