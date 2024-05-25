import React from "react";
import IconWithNavigation from "../../Common/IconWithNavigation";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

import { FaMobileScreen } from "react-icons/fa6";

const DetailInfo = () => {
  return (
    <div className="px-[15px] pt-[10px] text-backgroundWhite">
      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[32px] font-medium">Sonu Dear</h1>
        <h3 className="  text-[14px]">STACKLAB.IN</h3>
        <h3 className=" font-bold">Business Development Executive</h3>
      </div>

      <div className="flex gap-[8px] my-[15px]">
        <IconWithNavigation Icon={FaMobileScreen} />
        <IconWithNavigation Icon={MdOutlineMailOutline} />
        <IconWithNavigation Icon={FaWhatsapp} />
        <IconWithNavigation Icon={CiLocationOn} />
      </div>
    </div>
  );
};

export default DetailInfo;
