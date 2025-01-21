


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
        { id: 1, name: 'Kathryn Murphy', amount: 80000, avatar: 'https://thumbs.dreamstime.com/b/handsome-young-businessman-portrait-his-office-casual-smiling-59688027.jpg' },
        { id: 2, name: 'Kathryn Murphy', amount: 80000, avatar: 'https://img.freepik.com/premium-photo/male-smell-man-holding-bottle-perfumery-mans-perfume-concept-elegant-man-perfume-masculine-pe_265223-59770.jpg' },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-4 ">
            {/* My Cards Section */}
            <div className="bg-gray-50 rounded-lg p-6 flex-1 border-2 border-[#C2B0B0]">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-medium">My Cards</h2>
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

            <div className="flex flex-col gap-4 w-full lg:w-1/3 rounded-3xl text-white border-2 border-[#C2B0B0]">
                <div className="flex justify-between items-center mb-4 bg-[#12B76A] py-4 px-2 rounded-t-2xl">
                    <h2 className="text-lg font-semibold text-white">Receive Amount</h2>
                    <button className="text-white text-4xl hover:text-gray-600">
                        ...
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
