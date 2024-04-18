import React from "react";
import "./Section_R.css";
import Section_R_header from "./Section_R_header/Section_R_header";
import Section_R_main from "./Section_R_main/Section_R_main";
import Section_R_footer from "./Section_R_footer/Section_R_footer";
import { statistics } from "../..";

const Section_R = () => {
  return (
    <div className="Section_R-c">
      <Section_R_header></Section_R_header>

      <div className="section-c-section-main-footer">

      <h2>Statistics</h2>
        <div className="section-c-section-main">
       
          {statistics.map((value, index) => (
            <Section_R_main
              key={index}
              id={index}
              name={value.name}
              number={value.number}
            ></Section_R_main>
          ))}
        </div>

      </div>
      <div className="section-c-section-footer" >

      <h2>Weekly Work</h2>

      <Section_R_footer></Section_R_footer>
      </div>

   
    </div>
  );
};

export default Section_R;
