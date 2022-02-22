import React from "react";

import './footer.styles.css';

const Footer = ({text, backgroundcolor}) => (
    <div className="footer" style={{backgroundColor: backgroundcolor}} >
    <div className='footer-text'>
      {text}
    </div>
    <div className='copyright'>
      DTI/EEI 
     </div>  
  </div>

)

export default Footer;