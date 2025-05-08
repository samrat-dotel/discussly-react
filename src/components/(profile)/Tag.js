import React from "react";

const Tag = ({ name }) => {
  const getTagColor = (tagName) => {
    switch (tagName.toLowerCase()) {
      case "php":
        return "bg-blue-100 text-blue-800";
      case "ldap":
        return "bg-green-100 text-green-800";
      case "php-8.2":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${getTagColor(
        name
      )} transition-transform duration-150 hover:scale-105 cursor-pointer`}
    >
      {name}
    </span>
  );
};

export default Tag;
