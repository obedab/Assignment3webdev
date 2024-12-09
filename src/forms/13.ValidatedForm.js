import React, { useState } from "react";

const ValidatedForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = { email: "", password: "" };
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully!");
    }
  };

  return (
    <div style={{ rightpadding: "40px", maxWidth: "400px", margin: "100px" }}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <h2 style={{ textAlign: "center" ,color: "#2a9d8f", marginBottom: "20px" }}>Form Validation</h2>
        
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "14px",
                marginBottom: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "14px",
                marginBottom: "5px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </label>
          {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>}
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "#4a90e2",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
          }}
        >
          Validate
        </button>
      </form>
    </div>
  );
};

export default ValidatedForm;
