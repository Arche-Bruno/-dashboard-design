import React from 'react'
import "./Section_R_main.css"
const Section_R_main = ({id,
  name,
  number,}) => {
  return (
    <div className='section_r_main-c'> 
    <div className='section-r_main-c-title'>
    <span >
         {name}
    </span>
    </div>
   
    <div className='section-r_main-c-number'>
      <div className='section-r_main-c-figure'>

      </div>
      <span>
      {number}
      </span>

    </div>
    
    </div>
  )
}

export default Section_R_main