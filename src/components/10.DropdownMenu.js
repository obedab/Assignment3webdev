import React, { useState } from "react";

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option
  };

  return (
    <div style={{  margin: "70px" }}>
      <label htmlFor="dropdown" style={{ fontWeight: "bold", marginRight: "10px" }}>
        Choose an Option:
      </label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleChange}
        style={{ padding: "5px", borderRadius: "5px" }}
      >
        <option value="">-- Select your country--</option>
        <option value="Rwanda">Rwanda</option>
        <option value="Burundi">Burundi</option>
        <option value="Tanzania">Tanzania</option>
        <option value="Kenya">Kenya</option>
        <option value="Democaratic Republic of Congo">Democaratic Republic of Congo</option>
      </select>

      {selectedOption && (
        <p style={{ marginTop: "20px" }}>
          You selected: <strong>{selectedOption}</strong>
        </p>
      )}
    </div>
  );
};

export default DropdownMenu;
