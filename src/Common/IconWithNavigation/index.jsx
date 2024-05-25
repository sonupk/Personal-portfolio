import React from "react";

const IconWithNavigation = ({ Icon }) => {
  return (
    <a href="tel:+1234567890">
      <button className="pointer bg-primaryOrange w-[52px] h-[52px] rounded-full flex justify-center items-center">
        <Icon size={30} className="text-white" />
      </button>
    </a>
  );
};

export default IconWithNavigation;
