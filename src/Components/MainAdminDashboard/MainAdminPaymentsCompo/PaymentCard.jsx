


// Import necessary React components
import React from 'react';

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

    const receiveAmounts = [
        { id: 1, name: 'Kathryn Murphy', amount: 80000, avatar: 'https://via.placeholder.com/40' },
        { id: 2, name: 'Kathryn Murphy', amount: 80000, avatar: 'https://via.placeholder.com/40' },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-4 ">
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
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Receive Amount</h2>
                    <button className="text-gray-400 hover:text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6.75 12h10.5m-5.25-5.25V12m0 0v5.25"
                            />
                        </svg>
                    </button>
                </div>
                <ul className="space-y-4">
                    {receiveAmounts.map((item) => (
                        <li
                            key={item.id}
                            className="flex justify-between items-center border rounded-lg p-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.avatar}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-medium">{item.name}</p>
                                    <p className="text-sm text-green-600 font-semibold">
                                        ₹ {item.amount.toLocaleString('en-IN')}
                                    </p>
                                </div>
                            </div>
                            <button className="bg-green-100 text-green-600 px-4 py-2 rounded-md text-sm hover:bg-green-200">
                                View Details
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default PaymentCard;
