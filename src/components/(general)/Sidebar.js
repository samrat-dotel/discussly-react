import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [questionsOpen, setQuestionsOpen] = useState(true);
  const [tagsOpen, setTagsOpen] = useState(true);

  const tags = [
    "Electric Machine",
    "Mathematics",
    "Physics",
    "Problem Solving",
    "Programming",
    "Electric Machine",
    "Mathematics",
    "Physics",
    "Problem Solving",
    "Programming",
    "Electric Machine",
  ];

  return (
    <div className="bg-gray-100 pr-20 h-full flex flex-col py-4 px-10">
      <Link
        to="/ask-question"
        className="ml-10 w-max text-2xl bg-[#38B0CC] hover:bg-[#38B0DD] text-white py-3 px-4 rounded-xl transition-all duration-200 mb-6 font-medium "
      >
        Ask a Question
      </Link>

      <nav className="mb-6">
        <ul>
          <li className="mb-2">
            <Link
              to="/"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-blue-50 transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span className="text-xl font-bold">Home</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/profile"
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 py-2 px-3 rounded-md hover:bg-blue-50 transition-all duration-200"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-xl font-bold">User Profile</span>
            </Link>
          </li>
          <li>
            <div
              className="flex items-center justify-between text-gray-700 py-2 px-3 cursor-pointer hover:bg-blue-50 rounded-md transition-all duration-200"
              onClick={() => setQuestionsOpen(!questionsOpen)}
            >
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <span className="text-xl font-bold">Questions</span>
              </div>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  questionsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {questionsOpen && (
              <ul className="pl-8 mt-1">
                <li className="py-1.5 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <button href="#" className="block">
                    New Questions
                  </button>
                </li>
                <li className="py-1.5 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <button href="#" className="block">
                    Popular Questions
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <div className="mt-2">
        <div
          className="flex items-center justify-between text-gray-800 font-medium py-2 px-3 cursor-pointer"
          onClick={() => setTagsOpen(!tagsOpen)}
        >
          <h3 className="text-xl font-bold">Tags</h3>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              tagsOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {tagsOpen && (
          <div className="mt-2 px-3">
            <ul>
              {tags.map((tag, index) => (
                <li
                  key={index}
                  className="py-1.5 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <button className="block text-left w-full">{tag}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
