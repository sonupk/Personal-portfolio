import React from "react";

import { FaChevronRight } from "react-icons/fa6";
import NextIcon from "../../assets/nextIcon.png";

const BlockWithNavigation = ({ Icon, Name }) => {
  return (
    <a href="tel:+1234567890">
      <div className="bg-backgroundWhite rounded-sectionBorderRadius px-[20px] py-[15px] flex justify-between items-center shadow-custom mx-[3%] md:mx-[0%]">
        <div className="flex gap-3 items-center">
          <img src={Icon} alt="" className="rounded-full w-[52px] h-[52px]" />
          <h2 className="text-primaryOrange text-[20px] font-medium">{Name}</h2>
        </div>
        {/* <img src={NextIcon} alt=""  /> */}
        <FaChevronRight size={25} className="text-primaryOrange" />
      </div>
    </a>
  );
};

export const MoreDataWithBlockNavigation = (BlockWithNavigation) => {
  return (props) => {
    //  this is the new component returning as a function by taking as a input(Component) // from here new compoent starts
    const { headingTwo, heading, ...propsData } = props;
    console.log(headingTwo, heading);
    return (
      // this above component return some jsx part so retuen statment
      <>
        <div className="bg-backgroundWhite rounded-sectionBorderRadius  shadow-custom mx-[3%] md:mx-[0%]">
          <div className="px-[20px]">
            <div className="py-[30px] border-b border-assh border-dashed">
              {heading && (
                <h1 className=" text-center text-primaryOrange text-[28px] font-medium ">
                  {heading}
                </h1>
              )}

              {headingTwo && (
                <h2 className="text-center text-[20px] text-dullBlack">
                  {headingTwo}
                </h2>
              )}
            </div>
          </div>

          <BlockWithNavigation {...props} />
        </div>
      </>
    );
  };
};

export default BlockWithNavigation;
