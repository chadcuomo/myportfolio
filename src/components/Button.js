import React from 'react';

const Button = (props) => {
  return (
    <button className="main-button">{props.buttonText}</button>
  );
};

export default Button;