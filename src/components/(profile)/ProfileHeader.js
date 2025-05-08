import React from "react";

const ProfileHeader = ({ name, title, email, profileImage }) => {
  return (
    <div className="bg-[#38B0CC] rounded-lg overflow-hidden shadow-md mb-6 transition-transform duration-300 hover:shadow-lg">
      <div className="p-6 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-[#38B0CC] border-4 border-gray-100 overflow-hidden mb-4 flex items-center justify-center relative">
          <img
            src={profileImage}
            alt={`${name}'s profile`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/150?text=Profile";
            }}
          />
        </div>

        <div className="text-center">
          <div className="text-gray-300 text-sm font-medium mb-1">{title}</div>
          <h2 className="text-yellow-300 text-xl font-bold mb-1">{name}</h2>
          <div className="text-gray-300 text-sm">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
