import React from "react";
import ActivityItem from "./ActivityItem";

const ActivityFeed = ({ activities }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
      </div>

      <div className="divide-y divide-gray-200">
        {activities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>

      {activities.length === 0 && (
        <div className="p-8 text-center text-gray-500">
          No activity to display
        </div>
      )}
    </div>
  );
};

export default ActivityFeed;
