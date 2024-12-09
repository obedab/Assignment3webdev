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

    
    if (!name.trim()) {
      validationErrors.name = "Name is required.";
    }

    
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      validationErrors.email = "Invalid email format.";
    }

    // Validate phone number (must be numeric)
    if (!phone.match(/^\d+$/)) {
      validationErrors.phone = "Phone number must be numeric.";
    }

    // Validate subject (ensure it's not empty)
    if (!subject.trim()) {
      validationErrors.subject = "Subject is required.";
    }

    setErrors(validationErrors);

    // If there are no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      alert("Lecturer Registered Successfully!");
      // Clear form fields after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setPhone("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Lecturer Registration</h2>

      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name: <span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        {errors.name && <small className="error-text">{errors.name}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email: <span className="required">*</span>
        </label>
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
        <label htmlFor="subject" className="form-label">
          Subject: <span className="required">*</span>
        </label>
        <input
          type="text"
          id="subject"
          className="form-input"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        {errors.subject && <small className="error-text">{errors.subject}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone Number: <span className="required">*</span>
        </label>
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

      <button type="submit" className="form-button">Register</button>
    </form>
  );
};

export default LecturerForm;
