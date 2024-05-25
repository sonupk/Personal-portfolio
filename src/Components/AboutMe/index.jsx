import React from "react";

const AboutMe = ({ name, desc }) => {
  return (
    <div className="bg-backgroundWhite rounded-sectionBorderRadius px-[20px] py-[15px] shadow-custom mx-[3%] md:mx-[0%]">
      <h1 className="text-center text-primaryOrange text-[28px] font-bold mb-[8px]">
        {name}
      </h1>
      <p className="text-[20px] text-dullBlack text-center">{desc}</p>
    </div>
  );
};

export default AboutMe;
