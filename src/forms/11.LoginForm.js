import React, { useState } from "react";
import "./11.LoginForm.css";
 // Ensure this CSS file matches the styles in the image

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login Successful!\nUsername: ${username}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="title-cont">
          <h2 className="form-title">SIGN IN</h2>
        </div>
        
        <div className="form-group">
          <label htmlFor="username" className="form-icon">
            <i className="fas fa-user"></i>
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-icon">
            <i className="fas fa-lock"></i>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="/forgot-password" className="forgot-password">
            Forgot your password?
          </a>
        </div>
        <button type="submit" className="login-button">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
