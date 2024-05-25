import React from "react";

import DetailInfo from "../Components/DetailInfo";
import AboutMe from "../Components/AboutMe";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";

import { AboutMeData, ContactUsData } from "../Constants";
import BlockWithNavigation, {
  MoreDataWithBlockNavigation,
} from "../Common/BlockWithNavigation";

import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Link from "../assets/weblinkIcon.png";
import Profile from "../Components/Profile";

const Portfolio = () => {
  const HOCMoreDataWithBlockNavigation =
    MoreDataWithBlockNavigation(BlockWithNavigation);

  return (
    <div className="bg-background w-full h-auto flex items-center flex-col pb-[8%] pt-[0px]  md:pt-[15px] ">
      <div className="w-full max-w-[510px] flex flex-col gap-y-[15px]">
        {/* <div md:w-1/2 lg:w-[40%]
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="w-full bg-no-repeat  h-screen relative"
      >
        <div className="rectangle "></div>
      </div> */}
        <Profile />

        <AboutMe name={AboutMeData.name} desc={AboutMeData.desc} />

        <ContactUs contactUsData={ContactUsData} />

        <HOCMoreDataWithBlockNavigation
          Icon={LinkedIn}
          Name={"LinkedIn"}
          heading={"Find me Here"}
        />

        <BlockWithNavigation Icon={Instagram} Name={"Instagram"} />

        <HOCMoreDataWithBlockNavigation
          Icon={Link}
          Name={"Company Website"}
          heading={"Links"}
          headingTwo={"Find Us Here"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
