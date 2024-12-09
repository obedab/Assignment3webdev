import React, { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: "50px 0 20px 70px", textAlign: "left" }}>
      <h2 style={{ margin: "20px 75px" }}>Come to count!</h2>
      <h1 style={{ margin: "20px 150px" }}>{count}</h1>
      <div>
        <button 
          onClick={() => setCount(count + 1)} 
          className="btn btn-increment"
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)} 
          className="btn btn-decrement"
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)} 
          className="btn btn-reset"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
