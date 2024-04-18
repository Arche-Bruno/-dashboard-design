import React from 'react'
import "./NavCard.css"
const NavCard = ({id,name,
    icon:ICON,setIsFocus,
    isFocus}) => {


      const handleFocus = (idCard)=>{
        setIsFocus(idCard)
      }
  return (
    <div className={`navCard_c ${id===isFocus ?"focus":""}` } onClick={()=>handleFocus(id)}>
      <div className="navCard_c-icon">
      <ICON className="icon"></ICON>
      </div>
 
        <span>{name}</span>
    </div>
  )
}

export default NavCard