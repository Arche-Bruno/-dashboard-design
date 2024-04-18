import React, { useContext, useState } from "react";
import "./Section_Nav.css";
import NavCard from "./navCard/NavCard";

import logo from "../../images/logo/newLogo.png";
import personPc from "../../images/others/pc2.png";

import { navData } from "../..";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import StartIcon from "@mui/icons-material/Start";
import { DashboardContext } from "../context/DashboardContext";
const Section_Nav = () => {


    const [isFocus , setIsFocus] = useState(0);

    const {setShowNav, showNav }= useContext(DashboardContext)

    const handleClsoeNav=()=>{
      setShowNav(false)
    }
  return (
    <div className="section_nav-c">
        <div className="section_nav-c-icon" onClick={handleClsoeNav}>
        <HighlightOffIcon className="icon"></HighlightOffIcon>
      </div>
      <div className="section_nav-c_logo">
        <div className="section_nav-c_logo-img">
          <img src={logo} alt="logo image" />
        </div>

        <div className="section_nav-c_-logo-name">
          <span>Cachuel</span>
          <p>eate</p>
        </div>
      </div>
    

      <div className="section_nav-c_nav-img-btn">
        <nav className="section_nav-c_nav">
          {navData.map((value, index) => (
            <NavCard
            setIsFocus={setIsFocus}
            isFocus={isFocus}
              key={index}
              id={index}
              name={value.name}
              icon={value.icon}
            ></NavCard>
          ))}
        </nav>
        <div className="section_nav-c_image">
          <img src={personPc} alt="person-image" />
        </div>
        <div className="section_nav-c_buttonPro">
          <h3>Upgrade Your Plan</h3>

          <div className="section_nav-c_buttonPro-icon">
            <span>
              Fo to <p>Pro</p>
            </span>
            <div className="section_nav-c_buttonPro-icon-i">
            <StartIcon className="icon"></StartIcon>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_Nav;
