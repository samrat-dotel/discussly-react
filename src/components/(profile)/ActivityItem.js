import React from "react";
import Tag from "./Tag";
import { Eye, MessageSquare, MessageCircle, HelpCircle } from "lucide-react";

const ActivityItem = ({ activity }) => {
  return (
    <div className="p-4 hover:bg-gray-50 transition-colors duration-150">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          {activity.type === "question" ? (
            <HelpCircle size={20} className="text-purple-600" />
          ) : (
            <MessageCircle size={20} className="text-green-600" />
          )}
        </div>

        <div className="ml-3 flex-grow">
          <div className="text-xs text-gray-500 mb-1">{activity.date}</div>

          <h3 className="text-md font-medium text-gray-800 mb-2 hover:text-purple-700 cursor-pointer">
            {activity.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-2">
            {activity.tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <div className="flex items-center mr-4">
              <Eye size={16} className="mr-1" />
              <span>{activity.views} views</span>
            </div>

            <div className="flex items-center">
              <MessageSquare size={16} className="mr-1" />
              <span>{activity.answers} answers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
