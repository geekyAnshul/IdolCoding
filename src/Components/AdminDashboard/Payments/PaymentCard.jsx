

// Import necessary React components
import React from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import InvoiceTable from './InvoiceTable';

const PaymentCard = () => {
    const cardsData = [
        {
            balance: "₹ 83,7,927.00",
            cardNumber: "**** **** **** 2482",
            expiry: "21/09",
            type: "VISA",
        },
        {
            balance: "₹ 83,7,927.00",
            cardNumber: "**** **** **** 2482",
            expiry: "21/09",
            type: "VISA",
        },
    ];

    const dueAmounts = [80000.00, 80000.00];

    return (
        <div className="flex flex-col lg:flex-row gap-4 p-4 lg:pl-64 ">
            {/* My Cards Section */}
            <div className="bg-gray-50 rounded-lg p-6 flex-1 border border-[#C2B0B0]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">My Cards</h2>
                    <button
                        onClick={() => alert('Add More clicked!')}
                        className="text-green-600 hover:underline"
                    >
                        Add More
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-white">
                    {cardsData.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-green-500 p-4 rounded-lg shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <p className="">Total Balance</p>
                                <h3 className="text-2xl font-bold">{card.balance}</h3>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <p className="">{card.cardNumber}</p>
                                <span className="text-lg font-semibold">{card.type}</span>
                            </div>
                            <div className="mt-4">
                                <p className="">{card.expiry}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="flex flex-col gap-4 w-full lg:w-1/3 rounded-xl text-white border border-[#C2B0B0]">
                {/* Due Amounts */}
                <div className="bg-green-500   border-b rounded-lg p-4">
                    <div className="flex justify-between items-center m-4">
                        <h2 className="text-xl font-bold">Due Amounts</h2>
                        <button
                            onClick={() => alert('More options clicked!')}
                            className="text-gray-black hover:text-gray-700"
                        >
                            <HiOutlineDotsVertical className='text-2xl' />
                        </button>
                    </div>

                </div>

                <div className='rounded-lg p-4 '>

                    <div className="space-y-4  ">
                        {dueAmounts.map((amount, idx) => (
                            <div key={idx} className="flex justify-between items-center border border-[#12B76A] rounded-2xl p-4">
                                <p className="text-lg font-bold text-green-800">₹ {amount.toLocaleString()}</p>
                                <button
                                    onClick={() => alert(`Pay ₹${amount} clicked!`)}
                                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                                >
                                    Pay
                                </button>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Invoices */}
                {/* <div className="bg-white shadow-md rounded-lg p-4">
                    <h2 className="text-xl font-bold mb-4">Invoices</h2>
                    <div className="flex justify-between items-center">
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
                            <span className="text-lg">⬇️</span>
                        </button>
                    </div>
                </div> */}
            </div>

        </div>
    );
};

export default PaymentCard;
