import React from "react";
import "./4.ProfileCard.css"; 

const ProfileCard = ({ name, age, email, imageUrl }) => {
  return (
    <div className="profile-card">
      <div className="profile-header"></div>
      
     
      <div className="profile-content">
        <img
          className="profile-image"
          src={"obed.jpg"} 
          alt="Profile"
        />
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <button className="contact-button">Contact Me</button>
      </div>
    </div>
  );
};

export default ProfileCard;
