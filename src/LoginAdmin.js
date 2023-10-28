import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginAdmin.css';
import AdminLogout from './AdminLogout';
import RegisterAdmin from './RegisterAdmin';
import NavbarA from './NavbarA';
       
export function LoginAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Fill in details');
      return;
    }
  
    try {
      const allAdminDetails = await getAllAdminDetails();

      if (allAdminDetails) {
       
        const admin = allAdminDetails.find(
          (admin) => admin.email === email && admin.password === password
        );

        if (admin) {
    
          setIsAdminAuthenticated(true);
          setError('');
          navigate('/NavbarA'); 
        } else {
         
          setError('Invalid email or password. Please try again.');
        }
      } else {
      
        setError('Admin details not found. Please register.');
      }
    } catch (error) {
     
      setError('An error occurred while logging in.');
    }
  };

  const getAllAdminDetails = async () => {
    try {
    
      const response = await fetch('http://localhost:44382/api/Admin/GetAllAdmins');
      if (response.ok) {
        const adminDetails = await response.json();
        return adminDetails;
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      throw error;
    }
  };

  const handleRegister = () => {

    window.location.href = '/RegisterAdmin'; 
  };

  return (
    <div className="login-container">
      <h2>Login Admin</h2>
      
      {isAdminAuthenticated ? (
      
        <NavbarA userRole="admin" />
      ) : (
        <div className="login-form">
          {error && <p className="error">{error}</p>}
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <span style={{ marginLeft: '10px' }}></span>
            <div className="button-group">
              <button type="button" onClick={handleLogin}>
                Login
              </button>
              <span style={{ marginLeft: '20px' }}></span> 
              <button type="button" onClick={handleRegister}>
                Register
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default LoginAdmin;


