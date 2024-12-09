import React, { useState } from "react";

const HoverDiv = () => {
  const [bgColor, setBgColor] = useState("lightgray");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "600px",
        height: "400px",
        margin: "0 40px",
        textAlign: "center",
        alignContent:"center",
        lineHeight: "100px",
        borderRadius: "10px",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={() => setBgColor("lightblue")}
      onMouseLeave={() => setBgColor("lightgray")}
    >
      Hover Over Me!
    </div>
  );
};

export default HoverDiv;
