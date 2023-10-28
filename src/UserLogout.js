import React from 'react';
import { Link } from "react-router-dom";
import './logoutA.css';

function UserLogout() {
  const handleLogout = () => {
    
    window.location.href = '/Home'; 
  };

  return (
    <div  className="logout-container">
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserLogout;
