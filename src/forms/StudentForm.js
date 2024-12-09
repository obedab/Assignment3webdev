import React, { useState } from "react";
import "./Forms.css";

const StudentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [studentId, setStudentId] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!/^[a-zA-Z0-9]+$/.test(studentId)) {
      validationErrors.studentId = "Student ID must be alphanumeric.";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Student Registered Successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Student Registration</h2>

      <div className="form-group">
        <label className="form-label">First Name:</label>
        <input
          type="text"
          className="form-input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Last Name:</label>
        <input
          type="text"
          className="form-input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Email:*</label>
        <input
          type="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label className="form-label">Student ID:*</label>
        <input
          type="text"
          className="form-input"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        {errors.studentId && <small className="error-text">{errors.studentId}</small>}
      </div>

      <div className="form-group">
        <label className="form-label">Date of Birth:*</label>
        <input
          type="date"
          className="form-input"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="form-button">Register </button>
    </form>
  );
};

export default StudentForm;
