import React, { useState } from "react";
import "./Forms.css"; // Using the same CSS as BookForm

const ModuleForm = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [credits, setCredits] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!/^\d+$/.test(credits)) {
      validationErrors.credits = "Credits must be numeric.";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Module Registered Successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Module Registration</h2>

      <div className="form-group">
        <label className="form-label">Module Name:</label>
        <input
          type="text"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Module Code:</label>
        <input
          type="text"
          className="form-input"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Description:</label>
        <textarea
          className="form-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Credits:</label>
        <input
          type="text"
          className="form-input"
          value={credits}
          onChange={(e) => setCredits(e.target.value)}
          required
        />
        {errors.credits && <small className="error-text">{errors.credits}</small>}
      </div>

      <button type="submit" className="form-button">Register</button>
    </form>
  );
};

export default ModuleForm;
