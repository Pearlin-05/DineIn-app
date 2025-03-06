import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function ProfileScreen() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    navigate("/register"); 
  };

  return (
    <div className="bg">
      <div className="profile-container">
        <div className="profile-card">
          <h1>Welcome, {user ? user.name : "Guest"}!</h1>
          {user ? (
            <>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <p>No user data found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
