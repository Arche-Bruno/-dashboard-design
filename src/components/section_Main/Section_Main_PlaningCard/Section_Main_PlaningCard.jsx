import React from "react";
import "./Section_Main_PlaningCard.css";
import chroma from "chroma-js";

const Section_Main_PlaningCard = ({
  id,
  name,
  subName,
  icon1: ICON1,
  icon2: ICON2,
  color,
}) => {
// Obtener el color oscuro
const darkColor = chroma(color).darken().css();

// Obtener el color claro
const lightColor = chroma(color).brighten().css();

  return (
    <div className="section_main_planingCard-cx">
      <div className="section_main_planingCard-c-icon1-info">
        <div
          style={{ background: `${darkColor}`, color:`${lightColor}` }}
          className="section_main_planingCard-c-icon1"
        >
          <ICON1 className="icon1"></ICON1>
        </div>
        <div className="section_main_planingCard-c-info">
          <span> {name} </span>
          <p>{subName} </p>
        </div>
      </div>

      <div className="section_main_planingCard-c-icon2">
        <ICON2 className="icon2"></ICON2>
      </div>
    </div>
  );
};

export default Section_Main_PlaningCard;
