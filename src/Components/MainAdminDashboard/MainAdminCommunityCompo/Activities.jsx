

import React from "react";

const Activities = () => {
    const posts = [
        {
            id: 1,
            name: "Shiv Shastri",
            role: "Mentee",
            time: "43min ago",
            text: "Excited to have the badge. I am doing all my hard work for the last 7 days",
            image: "https://th.bing.com/th/id/OIP.zI-hfcUXnrffkj-E3_kXrwHaGX?rs=1&pid=ImgDetMain", // Replace with actual image URL
            likes: 1,
            comments: 2,
        },
        {
            id: 2,
            name: "Shiv Shastri",
            role: "Mentee",
            time: "43min ago",
            text: "Excited to have the badge. I am doing all my hard work for the last 7 days",
            image: "https://th.bing.com/th/id/OIP.zI-hfcUXnrffkj-E3_kXrwHaGX?rs=1&pid=ImgDetMain", // Replace with actual image URL
            likes: 1,
            comments: 2,
        },
        // Add more posts if needed
    ];

    return (
        <div className="p-2">
            <div className="lg:max-w-4xl mx-auto">
                {/* Header */}
                <h2 className="text-2xl font-bold text-gray-800">Activities</h2>
                <p className="text-gray-600 mt-1">
                    Stay informed about the latest happenings within the Preplaced Mentee
                    Community, including latest badge achievements, LTM purchases,
                    referrals, placements, and many more.
                </p>

                {/* Posts */}
                <div className="mt-2">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="rounded-lg mb-6 p-4 bg-gray-100"
                        >
                            {/* Post Header */}
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://th.bing.com/th/id/OIP.zI-hfcUXnrffkj-E3_kXrwHaGX?rs=1&pid=ImgDetMain" // Replace with user's avatar URL
                                    alt="User avatar"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div className="ml-3">
                                    <p className="font-bold text-gray-800">{post.name}</p>
                                    <p className="text-sm text-gray-500">{post.role}</p>
                                    <p className="text-xs text-gray-400">{post.time}</p>
                                </div>
                            </div>

                            {/* Post Content */}
                            <p className="text-gray-800 mb-4">{post.text}</p>
                            <img
                                src={post.image}
                                alt="Badge"
                                className="w-full h-64 rounded-lg object-cover object-top"
                            />

                            {/* Post Footer */}
                            <div className="flex items-center justify-between mt-4 text-gray-500">
                                <div className="flex items-center">
                                    <span className="mr-1">❤️</span>
                                    <p>{post.likes} Likes</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-1">💬</span>
                                    <p>{post.comments} Comment{post.comments > 1 ? "s" : ""}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Activities;