import React from "react";
import { useNavigate } from "react-router-dom";
import questions from "../../data/questions";

const Question = ({ id, date, category, title, votes, views, answerCount }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${id}/answers/`);
  };

  return (
    <div className="w-full bg-white rounded-md overflow-hidden mb-4 transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col mb-5 sm:flex-row">
        <div className="flex flex-row sm:flex-col items-center p-4 sm:p-6">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mb-2 flex-shrink-0">
            <img
              src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center ml-3 sm:ml-0">
            <svg
              className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
            <span className="font-medium text-lg text-gray-700">{votes}</span>{" "}
          </div>
        </div>

        <div className="flex-1 p-4 sm:py-6 border-l border-gray-100">
          <div className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-lg text-gray-500">{date}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-lg text-blue-500 hover:underline cursor-pointer">
                  {category}
                </span>
              </div>
            </div>
            <h3
              className="text-4xl text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
              onClick={handleClick}
            >
              {title}
            </h3>

            <div className="flex flex-wrap items-center justify-between mt-auto">
              <div className="flex items-center space-x-6">
                <div className="flex items-center text-gray-500 text-base">
                  <svg
                    className="w-5 h-5 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>{views} views</span>
                </div>
                <div className="flex items-center text-gray-500 text-base">
                  <svg
                    className="w-5 h-5 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>{answerCount} Answers</span>
                </div>
              </div>
              <button
                onClick={handleClick}
                className="bg-[#38B0CC] hover:bg-[#38B0DD] text-2xl text-white py-2 px-8 rounded-md transition-colors duration-200 mt-2 sm:mt-0"
              >
                VIEW ANSWERS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Questions = () => {
  return (
    <div className="p-4 w-full py-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Latest Questions</h1>
      {questions.map((q) => (
        <Question key={q.id} {...q} />
      ))}
    </div>
  );
};

export default Questions;
