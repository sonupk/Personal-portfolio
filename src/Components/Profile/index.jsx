import React from "react";
import backgroundImage from "../../assets/backgroundImage.webp";
import DetailInfo from "../DetailInfo";

const Profile = () => {
  return (
    <div className="shadow-main  md:rounded-sectionBorderRadius">
      <img
        src={backgroundImage}
        alt=""
        className="w-full  md:rounded-sectionBorderRadius"
      />

      <DetailInfo />
    </div>
  );
};

export default Profile;
