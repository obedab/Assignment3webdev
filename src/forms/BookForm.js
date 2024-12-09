import React, { useState } from "react";
import "./Form2.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [year, setYear] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{4}$/.test(year)) {
      setErrors({ year: "Published year must be a 4-digit number." });
      return;
    }
    alert("Book Registered Successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title">Book Registration</h2>
      <div className="form-group">
        <label className="form-label">
          Book Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-input"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          ISBN:
          <input
            type="text"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="form-input"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Published Year:
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="form-input"
            required
          />
        </label>
        {errors.year && <small className="error-text">{errors.year}</small>}
      </div>
      <button type="submit" className="form-button">
        Register 
      </button>
    </form>
  );
};

export default BookForm;
