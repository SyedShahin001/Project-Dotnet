import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterUser from './RegisterUser';
import './LoginAdmin.css';

function LoginUser() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [showFillDetailsMessage, setShowFillDetailsMessage] = useState(false);

  const navigate = useNavigate(); 

  const handleLogin = async () => {
    if (!email || !password) {
      setShowFillDetailsMessage(true);
      return;
    }

    try {
      const allUserDetails = await getAllUserDetails();

      if (allUserDetails) {
      
        const user = allUserDetails.find(
          (user) => user.email === email && user.password === password
        );

        if (user) {
       
          setIsUserAuthenticated(true);
          setError('');
          navigate('/navbar'); 
        } else {
          setError('Invalid email or password.');
        }
      } else {
        setError('User details not found. Please register.');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
    }
  };
 const getAllUserDetails = async () => {
    try {
      const response = await fetch('https://localhost:44382/api/User/GetAllUsers');
      if (response.ok) {
        const userDetails = await response.json();
        return userDetails;
      } else {
        throw new Error('API request failed');
      }
    } catch (error) {
      throw error;
    }
  };

  const handleRegister = () => {
    window.location.href = '/RegisterUser'; 
  };
  
  return (
    <div className="login-container">
      <h2>Login User</h2>
      
      {isUserAuthenticated ? (
        <p>You are logged in as user.</p>
      ) : (
        <div className="login-form">
          {showFillDetailsMessage && <p className="error">Fill in details</p>}
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

export default LoginUser;