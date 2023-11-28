import React from 'react';
import { Link } from "react-router-dom";
import './logoutA.css';

function AdminLogout() {
  const handleLogout = () => {

    window.location.href = '/Home'; 
    localStorage.clear();
  };

  return (
    <div className="logout-container">
      <h1>Logout</h1>
      <h2>Are you sure you want to log out?</h2>
      <button onClick={handleLogout}>Logout</button>

      
    </div>
  );
}

export default AdminLogout;


