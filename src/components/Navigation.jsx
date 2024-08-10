import React from "react";

const Navigation = ({ activeItem, setActiveItem }) => {
  const items = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];

  return (
    <div className="flex flex-wrap text-custom-18 text-dark-gray gap-6 sm:gap-12 duration-1000 border-b-2 pb-4">
      {items.map((item) => (
        <p
          key={item}
          onClick={() => setActiveItem(item)}
          className={`cursor-pointer ${
            activeItem === item
              ? "underline decoration-blue decoration-4 underline-offset-20 text-black"
              : "hover:text-light-gray-text"
          }`}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default Navigation;
