import React from 'react';

import './button.styles.css';

const Button = ({ children, ...otherProps }) => (
  <button className='button' {...otherProps}>
    {children}
  </button>
);

export default Button;