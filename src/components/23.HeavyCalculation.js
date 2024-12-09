import React, { useState, useMemo } from "react";

const HeavyCalculation = React.memo(({ num }) => {
  console.log("HeavyCalculation rendered");
  const calculate = (n) => {
    console.log("Performing heavy calculation...");
    let result = 0;
    for (let i = 0; i < 1e7; i++) {
      result += i % n;
    }
    return result;
  };

  const result = useMemo(() => calculate(num), [num]);

  return (
    <p style={{ color: "#2a9d8f", fontSize: "20px" }}>Result: {result}</p>
  );
});

const App = () => {
  const [num, setNum] = useState(5);
  const [toggle, setToggle] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <button
        onClick={() => setNum(num + 1)}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Increase Number
      </button>
      <button
        onClick={() => setToggle(!toggle)}
        style={{
          backgroundColor: "#2a9d8f",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Toggle
      </button>
      <p style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px" }}>
        Toggle: {toggle.toString()}
      </p>
      <HeavyCalculation num={num} />
    </div>
  );
};

export default App;
