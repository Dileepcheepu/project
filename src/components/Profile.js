import React, { useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  // Sample user data
  const initialUserData = {
    name: 'CH.DILEEP MANI KUMAR',
    email: 'cheepudileep@gmail.com',
    phone: '8886166184',
    address: 'kl university, vijayawada,vadeswaram',
    company: 'CRM System.'
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  // Handle input change for editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Toggle editing mode
  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  // Handle form submission for saving changes
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated user data:', userData);
    setIsEditing(false); // Turn off editing mode
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        {isEditing ? (
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                value={userData.company}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </form>
        ) : (
          <div className="profile-details">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Address:</strong> {userData.address}</p>
            <p><strong>Company:</strong> {userData.company}</p>
            <button onClick={toggleEditing} className="edit-button">
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
