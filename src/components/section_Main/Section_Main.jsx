import React, { useContext } from "react";
import "./Section_Main.css";
import Section_Main_CoursesCard from "./Section_Main_CoursesCard/Section_Main_CoursesCard";
import { Planning, courses } from "../..";
import Section_Main_PlaningCard from "./Section_Main_PlaningCard/Section_Main_PlaningCard";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';
import { DashboardContext } from "../context/DashboardContext";
const Section_Main = () => {
  const {setShowNav, showNav }= useContext(DashboardContext)


  const handleOpenNav = ()=>{
    setShowNav(true)
  }
  return (
    <div className="section_main-c">
      <h3>
        {" "}
        Hello <p>Bruno</p>, welcome back!
      </h3>
          <div className="section_main-c-icon" onClick={handleOpenNav}>
          <MenuIcon className="icon"></MenuIcon>
          </div>
    
      <div className="container-courses">
        <div className="container-courses-search-title">
          <div className="contaner-courses-search-title-view">
            <h2>My courses</h2>
            <span>View +</span>
          </div>

          <div className="container-courses_search">
            <input
              type="text"
              className="container-search"
              name="search"
              id="search"
            />
            <label className="search-placeholder">Search User</label>
            <div className="search-placeholder-icon">
              <SearchIcon className="icon"></SearchIcon>
            </div>
          </div>
        </div>
        <div className="section_main-c-courses">
          {courses.map((value, index) => (
            <Section_Main_CoursesCard
              key={index}
              id={index}
              name={value.name}
              cantLessons={value.cantLessons}
              icon={value.icon}
              porcentage={value.porcentage}
              color={value.color}
            ></Section_Main_CoursesCard>
          ))}
        </div>
      </div>

      <div className="container-Planing">
        <div className="container-courses-search-title">
          <div className="contaner-courses-search-title-view">
            <h2>Planing</h2>
            <span>View +</span>
          </div>
        </div>
        <div className="section_main-c-courses">
          {Planning.map((value, index) => (
            <Section_Main_PlaningCard
              key={index}
              id={index}
              name={value.name}
              subName={value.subName}
              icon1={value.icon1}
              icon2={value.icon2}
              color={value.color}
            ></Section_Main_PlaningCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_Main;
