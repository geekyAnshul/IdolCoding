

import React, { useState } from 'react';
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

const PaymentChart = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('Month');

    // Payment data for Chart.js
    const paymentData = {
        labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
        datasets: [
            {
                label: 'Payments',
                data: [500000, 400000, 900000, 300000],
                backgroundColor: '#12B76A',
                borderRadius: 25,
            },
        ],
    };

    const paymentOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `${value / 1000}k`,
                },
            },
        },
    };

    // Revenue data for Chart.js
    const revenueData = {
        labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
        datasets: [
            {
                label: 'Earning',
                data: [800000, 600000, 1000000, 900000],
                backgroundColor: '#22c55e',
                borderRadius: 5,
            },
            {
                label: 'Expenses',
                data: [400000, 300000, 600000, 500000],
                backgroundColor: '#ef4444',
                borderRadius: 5,
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
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value) => `${value / 1000}k`,
                },
            },
        },
    };

    // Invoice data
    const invoices = [
        { id: 1, number: '01, 10,2023', amount: 90000 },
        { id: 2, number: '01, 10,2023', amount: 90000 },
        { id: 3, number: '01, 10,2023', amount: 90000 },
    ];

    return (
        <div className="flex flex-col gap-6 py-6">
            {/* Payments Section */}
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/3 bg-white border-2 border-[#C2B0B0] rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Payments</h2>
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
                    <Bar data={paymentData} options={paymentOptions} />
                </div>

                {/* Invoices Section */}
                <div className="w-full md:w-1/3 bg-white border-2 border-[#C2B0B0] rounded-lg p-6 xs:flex-col">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Invoices</h2>
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
                    <ul className="space-y-4">
                        {invoices.map((invoice) => (
                            <li
                                key={invoice.id}
                                className="flex justify-between items-center border-2 border-[#C2B0B0] rounded-lg p-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-white p-3 border-green-500 border-2 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6 text-blue-500"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 6.75h7.5M8.25 9.75h4.5m-4.5 6h7.5m-7.5-3h4.5M9 17.25h6m2.25 3H6.75A2.25 2.25 0 014.5 18V6A2.25 2.25 0 016.75 3h10.5A2.25 2.25 0 0119.5 6v12a2.25 2.25 0 01-2.25 2.25z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Invoice #{invoice.number}</p>
                                        <p className="text-sm text-green-600 font-semibold">
                                            ₹ {invoice.amount.toLocaleString('en-IN')}
                                        </p>
                                    </div>
                                </div>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
                                    Download
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default PaymentChart;


