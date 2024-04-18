import React from "react";
import "./Section_Main_CoursesCard.css";
import chroma from "chroma-js";

const Section_Main_CoursesCard = ({
  id,
  name,
  cantLessons,
  icon: ICON,
  porcentage,
  color,
}) => {
  // Convertir el color a uno más oscuro
  const darkColor = chroma(color).darken().css();

  const background = `radial-gradient(closest-side,${color} 79%, transparent 80% 100%), conic-gradient(${darkColor} ${porcentage}%, #fff 0%)`;

  const styleProgress = {
    width: "70px",
    height: "70px",

    borderRadius: "50%",
    background: background,

    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center",
  };

  return (
    <div
      className="section_main_coursesCard-c"
      style={{ background: `${color}` }}
    >
      <div className="section_main_coursesCard-c-name-progress">
        <div>
          <span>{name}</span>
          <p>{cantLessons} Lessons </p>
        </div>
        <div className="section_main_coursesCard-c-progress">
          <div
            style={styleProgress}
            role="widgets-progress-bar"
            aria-valuenow=""
            aria-valuemin=""
            aria-valuemax=""
          ></div>
          <span>{porcentage} %</span>
        </div>
      </div>

      <div className="section_main_coursesCard-c-icon">
        <ICON className="icon"></ICON>
      </div>
    </div>
  );
};

export default Section_Main_CoursesCard;
