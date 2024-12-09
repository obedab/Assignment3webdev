import React, { useState } from "react";
import "./Forms.css";

const DriverForm = () => {
  const [name, setName] = useState("");
  const [license, setLicense] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Driver Registered Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="form-driver">
      <h2 className="form-title">Driver Registration</h2>
      <div className="form-group">
        <label className="form-label">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          License Number:
          <input
            type="text"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            className="form-input"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Phone Number:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-input"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Vehicle Type:*
          <select  
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="form-input"
            required
          >
            <option value="">Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Truck">Truck</option>
            <option value="Motorcycle">Motorcycle</option>
          </select>
        </label>
      </div>
      <button type="submit" className="form-button">
        Register Driver
      </button>
    </form>
  );
};

export default DriverForm;
