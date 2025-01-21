
import React from 'react';

function MainAdminNotification() {
  return (
    <div className="lg:pl-4 xs:mt-4 lg:mt-0">
      <div className="bg-stone-100 rounded-lg border-2 border-zinc-200 w-full max-w-[800px] p-6 pb-8 space-y-4">
        {/* Main Notifications Section */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-800">Notifications</h2>
          <p className="text-gray-500 text-sm">
            Get Notification What happen right now. You can turn off right now at any time
          </p>
        </div>

        {/* Email Notifications Section */}
        <div className="space-y-4 p-4 rounded-xl bg-white border-2 border-zinc-200">
          <h3 className="font-medium text-gray-800">Email Notification</h3>
          <p className="text-gray-500 text-sm">
            Substances can send you email notification for any new direct message.
          </p>

          <div className="space-y-3 ">
            <NotificationOption
              title="News and Update Settings"
              description="The Latest News about the Latest Features and Software update System"
            />
            <NotificationOption
              title="Tips and Tutorials"
              description="The Latest News about the Latest Features and Software update System"
            />
            <NotificationOption
              title="Offers and Promotions"
              description="The Latest News about the Latest Features and Software update System"
            />
          </div>
        </div>

        {/* More Activity Section */}
        <div className="space-y-4 p-4 rounded-xl bg-white border-2 border-zinc-200">
          <h3 className="font-medium text-gray-800">More Activity</h3>
          <p className="text-gray-500 text-sm">
            Substances can send you email notification for any new direct message.
          </p>

          <div className="space-y-3">
            <NotificationOption
              title="All Reminders and Activity"
              description="The Latest News about the Latest Features and Software update System"
            />
            <NotificationOption
              title="Activity Only"
              description="The Latest News about the Latest Features and Software update System"
            />
            <NotificationOption
              title="Important Reminders only"
              description="The Latest News about the Latest Features and Software update System"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationOption({ title, description }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 pt-1">
        <div className="w-5 h-5 rounded border border-emerald-500 flex items-center justify-center cursor-pointer hover:bg-emerald-50">
          <div className="w-3 h-3 rounded-sm bg-emerald-500 hidden"></div>
        </div>
      </div>
      <div className="flex-grow">
        <h4 className="text-gray-800 font-medium">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default MainAdminNotification;