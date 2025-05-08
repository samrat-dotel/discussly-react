import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../images/discusslyLogo.png";
import { RiStarSLine } from "react-icons/ri";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";
import SearchBar from "../(general)/SearchBar";

const Navbar = () => {
  const [userReputation] = useState(100);
  const [userName] = useState("John Doe");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleDropDown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    alert("Logged Out Successfully!");
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="flex justify-between bg-[#0D374C] items-center sticky top-0 h-[70px] z-20 cursor-pointer shadow-md">
      <Link to="/">
        <img
          src={Logo}
          alt="Header-Logo"
          className="object-contain h-12 m-[20px] mr-8"
        />
      </Link>

      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <div className="flex pr-20 items-center ml-20">
        <div className="pr-6 flex items-center">
          <RiStarSLine className="h-6 w-6 text-white" />
          <p className="px-2 text-white font-bold">{userReputation}</p>
        </div>

        <div className="relative">
          <div
            className="flex items-center text-white cursor-pointer"
            onClick={toggleDropDown}
          >
            <p className="px-2 font-bold">{userName}</p>
            <BsPersonCircle className="h-6 w-6" />
          </div>

          {isDropdownOpen && (
            <div className="absolute text-black top-[60px] right-0 w-36 mt-2 bg-white shadow-lg rounded">
              <Link
                to="/profile"
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Profile
              </Link>
              <button
                className="flex items-center text-black w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
                <MdOutlineLogout className="ml-2 text-red-600 text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
