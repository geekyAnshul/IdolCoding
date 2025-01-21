import React, { useState, useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const RevenueGraph = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Month');
    const chartRef = useRef(null); // Ref to hold the chart instance
    const [gradient, setGradient] = useState(null); // State to store gradient

   

    const revenueData = {
        labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
        datasets: [
            {
                label: 'Earning',
                data: [800000, 600000, 800000, 900000],
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
                borderRadius: 0, 
                
                borderSkipped: false, 
                // hoverBackgroundColor: '#12B76A',
            },
            {
                label: 'Expenses',
                data: [400000, 300000, 600000, 500000],
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
          
                    if (!chartArea) {
                      return null; // Return default color before the chart is fully initialized
                    }
          
                    const gradient = ctx.createLinearGradient(
                      0, chartArea.top, 0, chartArea.bottom
                    );
                    gradient.addColorStop(0, '#DE3432'); // green-500
                    gradient.addColorStop(1, '#781C1B'); // darker green
          
                    return gradient;
                  },
                borderRadius: 0,
                borderSkipped: false,
            },
        ],
    };

    const revenueOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 12,
                    },
                },
                barPercentage: 0.5, // Adjusts the bar width
                categoryPercentage: 0.8, // Adjusts the spacing between bars
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `${value / 1000}k`,
                },
            },
        },
    };

    return (
        <div className="bg-white p-6 mt-4 rounded-3xl border-2 border-[#C2B0B0]">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-medium">Revenue</h2>
                    <select
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                        className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="Month">Month</option>
                        <option value="Week">Week</option>
                        <option value="Year">Year</option>
                    </select>
                </div>
                <div className="flex gap-2">
                    <button className="border px-4 py-2 rounded-md text-sm hover:bg-gray-100">Filter</button>
                </div>
            </div>
            <Bar ref={chartRef} data={revenueData} options={revenueOptions} />
        </div>
    );
};

export default RevenueGraph;
