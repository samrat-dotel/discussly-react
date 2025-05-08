import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="flex items-center bg-white rounded-full px-2 py-0.5 w-full max-w-md shadow">
      <BiSearch className="text-gray-500 w-5 h-5" />
      <input
        type="text"
        placeholder="Search"
        className="ml-2 bg-transparent focus:outline-none text-gray-700 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <BiSearch
        onClick={handleSearch}
        className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-600 cursor-pointer w-8 h-8"
      />
    </div>
  );
};

export default SearchBar;
