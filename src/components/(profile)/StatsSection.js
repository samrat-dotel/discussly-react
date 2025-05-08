import React from "react";
import { Award, MessageCircle, HelpCircle } from "lucide-react";

const StatsSection = ({
  status,
  reputationPoints,
  answersGiven,
  questionsAsked,
}) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
        <div className="p-6 text-center">
          <h3 className="text-gray-700 font-semibold text-lg mb-2">{status}</h3>
          <div className="flex items-center justify-center">
            <Award className="text-yellow-500 mr-2" size={24} />
            <span className="text-4xl font-bold text-gray-800">
              {reputationPoints}
            </span>
          </div>
          <div className="text-gray-600 text-sm mt-2">Reputation Points</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="text-[#38B0CC]-100 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
          <div className="p-4 text-center">
            <div className="text-[#38B0CC] font-medium text-sm mb-1">
              Answers Given
            </div>
            <div className="flex items-center justify-center">
              <MessageCircle className="text-[#38B0CC] mr-1" size={16} />
              <span className="text-3xl font-bold text-[#38B0CC]">
                {answersGiven}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-[#38B0CC] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
          <div className="p-4 text-center">
            <div className="text-purple-100 font-medium text-sm mb-1">
              Questions Asked
            </div>
            <div className="flex items-center justify-center">
              <HelpCircle className="text-white mr-1" size={16} />
              <span className="text-3xl font-bold text-white">
                {questionsAsked}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
