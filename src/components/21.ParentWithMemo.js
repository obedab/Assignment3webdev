import React, { useState, memo } from "react";

// Memoized Component with Inline Styles
const MemoizedComponent = memo(({ message, count, onIncrement, onDecrement }) => {
  // console.log("MemoizedComponent Rendered");

  // Inline styles
  const containerStyle = {
    margin: "20px ",
    padding: "20px",
    width: "80%",
    maxWidth: "600px",
    background: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#007bff",
  };

  const headerStyle = {
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>{message}</h1>
      <h2 style={headerStyle}>Counter: {count}</h2>
      <button
        style={buttonStyle}
        onClick={onIncrement}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        Increment Counter
      </button>
      <button
        style={buttonStyle}
        onClick={onDecrement}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        Decrement Counter
      </button>
    </div>
  );
});

const ParentChildComponent = () => {
  const [message, setMessage] = useState("Hello from Memoized Component!");
  const [count, setCount] = useState(0);

  // Increment and Decrement functions
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div>
      <MemoizedComponent
        message={message}
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <button
        style={{
          padding: "10px 20px",
          margin: "10px",
          backgroundColor: "#2a9d8f",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
        onClick={() => setMessage("Updated Message!")}
      >
        Update Message
      </button>
    </div>
  );
};

export default ParentChildComponent;
