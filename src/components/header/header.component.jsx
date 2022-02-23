
import React from "react";

import './header.styles.css';

const Header = ({title, subtitle, backgroundcolor}) => {
    console.log({backgroundcolor})
    return (
        <div className="header" style={{backgroundColor: backgroundcolor}} >
            <div className='title'>
               <h1>{title}</h1>
            </div>  
          <div className='subtitle'>
              <h2>  {subtitle} </h2>
         </div> 
        </div>
        )
}

export default Header
