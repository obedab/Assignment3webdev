import React, { useState } from "react";

const ControlledForm = () => {
  const [value, setValue] = useState("");

  return (
    <div style={{  margin: "80px" }}>
      <form>
        <label>
          Enter Text:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{  padding:"30px", width:"75vh" }}
          />
        </label>
      </form>
      <p>Entered Value: {value}</p>
    </div>
  );
};

export default ControlledForm;
