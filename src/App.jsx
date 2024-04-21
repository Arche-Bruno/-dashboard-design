import { useContext, useState } from "react";

import "./App.css";
import Section_Nav from "./components/sectionNav/Section_Nav";
import Section_Main from "./components/section_Main/Section_Main";
import Section_R from "./components/section_R/Section_R";
import CloseIcon from '@mui/icons-material/Close';
import { DashboardContext } from "./components/context/DashboardContext";

function App() {

  const {setShowNav, showNav }= useContext(DashboardContext)
  return (
    <div className={`container-app ${showNav ? "hideScroll":""}`}>
      <div className={`showShadow ${showNav ? "show":""}`}>

      </div>
      
      <header className={`seccion_header ${showNav ? "show" : ""}`}>
          <Section_Nav></Section_Nav>
      </header>

      <main className="container-main-r">
        <div className="section_main">
          <Section_Main></Section_Main>
          
        </div>
        <div className="section_r">
          <Section_R></Section_R>
        </div>
      </main>
    </div>
  );
}

export default App;
