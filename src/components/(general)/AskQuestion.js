import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../(layout)/Navbar";
import Sidebar from "./Sidebar";

const AskQuestionPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description && tags) {
      alert("Question Submitted Successfully!");
      navigate("/");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <main>
      <Navbar />
      <div className="flex">
        <div className="flex w-full justify-center">
          <Sidebar />
          <div className="container max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Ask a Question
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-xl font-medium text-gray-700"
                >
                  Question Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-2 px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the title of your question"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-xl font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full mt-2 px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Describe your question in detail"
                  rows="6"
                />
              </div>

              <div>
                <label
                  htmlFor="tags"
                  className="block text-xl font-medium text-gray-700"
                >
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full mt-2 px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter tags for your question"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#38B0CC] text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-200"
                >
                  Submit Question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AskQuestionPage;
