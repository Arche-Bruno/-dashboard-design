import React from "react";
import "./Section_R_header.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import user from "../../../images/img-link.jpg"
const Section_R_header = () => {
  return (
    <div className="section-r-header-c">
      <div className="section-r-header-c-icon">
        <NotificationsIcon className="icon"></NotificationsIcon>
      </div>
      
      <div className="section-r-header-c-dataUser">
        <div className="section-r-header-c-dataUser-info-img">
          <div className="section-r-header-c-dataUser-img">
            <img src={user} alt="img-user" />
          </div>
          <div className="section-r-header-c-dataUser-info">
            <span>Bruno Angelo</span>
            <p>Plan pro</p>
          </div>
        </div>

        <div className="section-r-header-c-dataUser-info">
          <ArrowForwardIosIcon></ArrowForwardIosIcon>
        </div>
      </div>
    </div>
  );
};

export default Section_R_header;
