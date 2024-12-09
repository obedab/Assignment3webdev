import React, { useState } from "react";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => setIsOn((prevState) => !prevState);

  return (
    <button class="btn" onClick={handleClick} style={{ padding: "10px 20px", margin: "10px 70px" }}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default ToggleButton;
