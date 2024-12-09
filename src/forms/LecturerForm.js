import React, { useState } from "react";
import "./Forms.css";

const LecturerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      validationErrors.email = "Invalid email format.";
    }
    if (!phone.match(/^\d+$/)) {
      validationErrors.phone = "Phone number must be numeric.";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Lecturer Registered Successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Lecturer Registration</h2>

      <div className="form-group">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <small className="error-text">{errors.email}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject:</label>
        <input
          type="text"
          id="subject"
          className="form-input"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">Phone Number:</label>
        <input
          type="text"
          id="phone"
          className="form-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        {errors.phone && <small className="error-text">{errors.phone}</small>}
      </div>

      <button type="submit" className="form-button">Register </button>
    </form>
  );
};

export default LecturerForm;
