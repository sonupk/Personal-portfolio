import React from "react";

import { FaMobileScreen } from "react-icons/fa6";
import { CiLocationArrow1 } from "react-icons/ci";

const ContactUs = ({ contactUsData }) => {
  return (
    <div className="bg-backgroundWhite rounded-sectionBorderRadius px-[20px] py-[15px] shadow-custom mx-[3%] md:mx-[0%]">
      <div className="flex items-center gap-4 pb-[30px]">
        <button className="pointer bg-black w-[52px] h-[52px] rounded-full flex justify-center items-center">
          <FaMobileScreen size={30} className="text-backgroundWhite" />
        </button>

        <h3 className="text-primaryOrange text-[20px] font-medium">
          Contact Us
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        {contactUsData.map((contactUs) => (
          <div>
            <h2 className="text-primaryOrange text-[20px] font-medium">
              {contactUs.ContactKey}
            </h2>
            <p className="text-dullBlack font-[14px]">
              {contactUs?.ContactValue}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-primaryOrange w-fit flex items-center justify-center gap-2 py-[10px] px-[20px] rounded-buttonBorderRadius text-white mt-[10px] mb-[20px]">
        <CiLocationArrow1 />
        <h3>Direction</h3>
      </div>
    </div>
  );
};

export default ContactUs;
