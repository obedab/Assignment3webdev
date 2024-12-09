import React, { useState } from "react";

const LogForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", inputValue);
    setInputValue(""); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} style={{  margin: "70px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder=" Type  your comment?"
        style={{ padding: "5px", marginRight: "10px", width:"400px", height:"30px" }}
      />
      <button class="btn" type="submit"
      >Submit
      </button>
    </form>
  );
};

export default LogForm;
