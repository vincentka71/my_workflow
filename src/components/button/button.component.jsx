import React from 'react';

import './button.styles.css';

const Button = ({ children, backgroundcolor }) => (
  <button className='button' style={{backgroundColor: backgroundcolor}}>
    {children}
  </button>
);

export default Button;