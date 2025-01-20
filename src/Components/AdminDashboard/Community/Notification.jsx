

import React, { useState } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: "Jane Cooper",
      action: "send the follow request",
      image: "https://th.bing.com/th/id/OIP.PoFmgWG0dZXmssCtCiBk9QHaLH?rs=1&pid=ImgDetMain",
      type: "followRequest",
    },
    {
      id: 2,
      name: "Programer",
      action: "send the follow request",
      image: "https://th.bing.com/th/id/OIP.PoFmgWG0dZXmssCtCiBk9QHaLH?rs=1&pid=ImgDetMain",
      type: "followRequest",
    },
    {
      id: 4,
      name: "Braily",
      action: "likes your post and comment also",
      image: "https://th.bing.com/th/id/OIP.PoFmgWG0dZXmssCtCiBk9QHaLH?rs=1&pid=ImgDetMain",
      type: "likeComment",
    },
    {
      id: 3,
      name: "Braily",
      action: "likes your post and comment also",
      image: "https://th.bing.com/th/id/OIP.PoFmgWG0dZXmssCtCiBk9QHaLH?rs=1&pid=ImgDetMain",
      type: "likeComment",
    },
  ]);

  const handleAccept = (id) => {
    console.log(`Accepted request with id: ${id}`);
    // Logic to handle accept
  };

  const handleDeny = (id) => {
    console.log(`Denied request with id: ${id}`);
    // Logic to handle deny
  };

  return (
    <div className="lg:max-w-md w-full bg-white rounded-3xl border-2 border-[#C2B0B0] p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Notification</h2>
        <button className="text-sm text-green-600">Mark all as read</button>
      </div>

      <div className="flex space-x-8 border-b mb-4">
        <button className="text-green-500 border-b-2 border-green-500 pb-1">All</button>
        <button className="text-gray-500">Following</button>
        <button className="text-gray-500">Activities</button>
      </div>

      <div className="space-y-10 mt-10">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-start space-x-4 border-b pb-4">
            <img
              src={notification.image}
              alt={notification.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">{notification.name}</span> {notification.action}
              </p>
              {notification.type === "followRequest" && (
                <div className="mt-2 space-x-2">
                  <button
                    onClick={() => handleAccept(notification.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDeny(notification.id)}
                    className="px-3 py-1 bg-black text-white rounded-lg"
                  >
                    Deny
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
