
import React from "react";

import './header.styles.css';

const Header = ({title, subtitle, backgroundcolor}) => {
    console.log({backgroundcolor})
    return (
        <div className="header" style={{backgroundColor: backgroundcolor}} >
            <div className='title'>
               {title}
            </div>  
          <div className='subtitle'>
                {subtitle} 
         </div> 
        </div>
        )
}

export default Header
