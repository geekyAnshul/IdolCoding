import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const InvoiceTable = () => {
    const invoices = [
        {
            id: "01",
            date: "Dec 01, 2023",
            amount: "₹ 20,000.00",
            status: "Paid",
        },
        {
            id: "01",
            date: "Dec 01, 2023",
            amount: "₹ 20,000.00",
            status: "Paid",
        },
        {
            id: "01",
            date: "Dec 01, 2023",
            amount: "₹ 20,000.00",
            status: "Paid",
        },
        {
            id: "03",
            date: "Oct 02, 2023",
            amount: "₹ 20,000.00",
            status: "Due",
        },
        {
            id: "01",
            date: "Dec 01, 2023",
            amount: "₹ 20,000.00",
            status: "Paid",
        },
    ];

    return (
        <div className="p-8 lg:pl-64 overflow-y-auto ">

            <div className=" flex bg-white justify-between shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4">Invoices</h2>
                <div className="flex justify-between items-center gap-4">
                    <button
                        onClick={() => alert('Filter clicked!')}
                        className="flex items-center gap-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200"
                    >
                        Filter
                        <span className="text-lg">⚙️</span>
                    </button>
                    <button
                        onClick={() => alert('Download All clicked!')}
                        className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                        Download All
                        <span className="text-lg"> <MdOutlineFileDownload className="text-2xl" /> </span>
                    </button>
                </div>
            </div>



            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Invoices</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Amount</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((invoice, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2 flex items-center gap-2">
                                <span className="text-blue-500">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 10.5v7.875A2.625 2.625 0 0116.875 21h-9.75A2.625 2.625 0 014.5 18.375V5.625A2.625 2.625 0 017.125 3h5.25M19.5 10.5V5.625A2.625 2.625 0 0016.875 3H13.5m6 7.5h-6m0 0l-2.25 2.25M13.5 10.5l-2.25-2.25"
                                        />
                                    </svg>
                                </span>
                                Invoices #{invoice.id}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{invoice.date}</td>
                            <td className="border border-gray-300 px-4 py-2">{invoice.amount}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <span
                                    className={`px-3 py-1 rounded text-white ${invoice.status === "Paid" ? "bg-green-500" : "bg-red-500"
                                        }`}
                                >
                                    {invoice.status}
                                </span>
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2">
                                    Download

                                    <MdOutlineFileDownload className="text-2xl" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceTable;
