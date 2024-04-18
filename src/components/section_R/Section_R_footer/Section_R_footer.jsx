import React from 'react'
import "./Section_R_footer.css"
const Section_R_footer = () => {
  return (
    <div className='section-r-footer-c'>
     <div className='section-r-footer-c-title'>
           <div className='section-r-footer-c-space'>

           </div>
           <span>Tasks This Week</span>
     </div>
     <div className='section-r-footer-c-title-progress'>
        <div
        className='section-r-footer-progress'
        role="section-r-footer-progress"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
        >
         
        </div>
        <span>3/4</span>
     </div>
    </div> 
  )
}

export default Section_R_footer