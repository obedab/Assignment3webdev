import React from 'react';
import "./3.ReusableButton.css"

const ReusableButton = ({ text, color, onClick }) => {
  return (
    <button  class="btn" onClick={onClick}
    style={{margin:'30px 70px'}}>
      {text}
    </button >
  );
};

export default ReusableButton;
