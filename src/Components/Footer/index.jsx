import React from "react";

import { FaMobileScreen } from "react-icons/fa6";
import IconWithNavigation from "../../Common/IconWithNavigation";

const Footer = () => {
  return (
    <div className="flex fixed bottom-3 px-[15px] w-full justify-between">
      <div className="flex gap-3">
        <IconWithNavigation Icon={FaMobileScreen} />
        <IconWithNavigation Icon={FaMobileScreen} />
      </div>
      <IconWithNavigation Icon={FaMobileScreen} />
    </div>
  );
};

export default Footer;
