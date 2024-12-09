import React, { useState } from "react";
import './15.CheckBox.css'; 

const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      setSelectedOptions((prev) => prev.filter((option) => option !== value));
    }
  };

  return (
    <div className="checkbox-form-container">
      <div className="checkbox-form">
        <h2 className="form-title">Choose what you expertised :</h2>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              value="Html"
              onChange={handleChange}
              className="checkbox-input"
            />
            Html
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              value="CSS"
              onChange={handleChange}
              className="checkbox-input"
            />
            CSS
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              value="JavaScript"
              onChange={handleChange}
              className="checkbox-input"
            />
            JavaScript
          </label>
        </div>
        <h3 className="selected-options-title">Selected Options:</h3>
        <ul className="selected-options-list">
          {selectedOptions.length === 0 ? (
            <li>No options selected</li>
          ) : (
            selectedOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default CheckboxForm;
