import React from 'react';
import StudentsBox from './StudentsBox';
import {
  Bar,
  Line
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import RevenueGraph from './RevenueGraph';
// import App from './StudentsBox';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MainAdminDashboardPage = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Earnings',
        data: [8, 14, 12, 18, 14, 19 , 15, 20 ],
        // backgroundColor: '#34D399',
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null; // Return default color before the chart is fully initialized
          }

          const gradient = ctx.createLinearGradient(
            0, chartArea.top, 0, chartArea.bottom
          );
          gradient.addColorStop(0, '#12B76A'); // green-500
          gradient.addColorStop(1, '#08512F'); // darker green

          return gradient;
        },
        borderRadius: 50,
      },
    ],
  };

  const areaData1 = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: 'Students',
        data: [10, 20, 15, 25, 20, 30],
        backgroundColor: 'rgba(52, 211, 153, 0.2)',
        borderColor: '#34D399',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const areaData2 = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
      {
        label: 'Mentors',
        data: [15, 10, 20, 15, 25, 20],
        backgroundColor: 'rgba(52, 211, 153, 0.2)',
        borderColor: '#34D399',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="lg:pl-64">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl font-medium mb-4">Hi, <span className="text-green-500">Albert</span>! Good Morning</h1>
        <p className="text-gray-800 font-medium mb-8"><span className='text-green-500'>12 new </span>student enrolled, <span className='text-green-500'>3 new</span> mentors appointed.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Earnings Chart */}
          <div className="bg-white border-2 border-green-500 rounded-3xl p-6">
            <h2 className="text-gray-800 font-medium text-sm mb-2">Total Earning</h2>
            <h3 className="text-2xl font-medium text-green-500">1,20,000.00</h3>
            <Bar data={barData} options={{ plugins: { legend: { display: false } } }} />
          </div>

          {/* Total Enrolled Students Chart */}
          <div className="bg-white border-2 border-green-500 rounded-3xl p-6">
            <h2 className="text-gray-800 font-medium text-sm mb-2">Total Enrolled Students</h2>
            <h3 className="text-2xl font-medium text-green-500">2346</h3>
            <Line data={areaData1} options={{ plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }} />
          </div>

          {/* Total Mentors Chart */}
          <div className="bg-white  border-2 border-green-500 rounded-3xl p-6">
            <h2 className="text-gray-800 font-medium  text-sm mb-2">Total Mentors</h2>
            <h3 className="text-2xl font-medium text-green-500">276</h3>
            <Line data={areaData2} options={{ plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }} />
          </div>
        </div>
      </div>
    <div className='flex flex-col lg:flex-row'>
    <div className='xs:w-[100%] lg:w-[60%]'>
     <RevenueGraph/>
     </div>
     <div className='xs:w-[100%] lg:w-[40%]'>
     <StudentsBox />
     </div>
    
    </div>
    </div>
  );
};

export default MainAdminDashboardPage;
