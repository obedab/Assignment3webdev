import React, { useState } from "react";

const UnrelatedList = React.memo(({ items }) => {
  console.log("UnrelatedList rendered");
  return (
    <ul style={{ listStyle: "none", padding: "10px", backgroundColor: "#f9f9f9" }}>
      {items.map((item, index) => (
        <li key={index} style={{ padding: "5px", borderBottom: "1px solid #ccc" }}>
          {item}
        </li>
      ))}
    </ul>
  );
});

const Counter = () => {
  const [count, setCount] = useState(0);
  const items = ["Puple", "Green", "Orange"];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        Increment
      </button>
      
      <UnrelatedList items={items} />
    </div>
  );
};

export default Counter;
